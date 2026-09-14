(() => {
  if (window.__splineParallax) {
    return;
  }
  window.__splineParallax = true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const parse = (value, fallbackUnit) =>
    (value || "")
      .split(",")
      .map((part) => {
        const token = part.trim();
        const match = token.match(/^(-?[\d.]+)([a-z%]*)$/i);
        if (!match) {
          return { n: Number(token) || 0, u: fallbackUnit };
        }
        return { n: Number(match[1]), u: match[2] || fallbackUnit };
      });

  const mixUnit = (frames, progress) => {
    if (frames.length === 0) {
      return "0px";
    }
    if (frames.length === 1) {
      return `${frames[0].n}${frames[0].u}`;
    }
    const span = 1 / (frames.length - 1);
    const index = Math.min(frames.length - 2, Math.floor(progress / span));
    const local = (progress - index * span) / span;
    const from = frames[index];
    const to = frames[index + 1] || from;
    return `${from.n + (to.n - from.n) * local}${from.u}`;
  };

  const mixNumber = (values, progress) => {
    if (values.length === 0) {
      return 0;
    }
    if (values.length === 1) {
      return values[0];
    }
    const span = 1 / (values.length - 1);
    const index = Math.min(values.length - 2, Math.floor(progress / span));
    const local = (progress - index * span) / span;
    return values[index] + ((values[index + 1] ?? values[index]) - values[index]) * local;
  };

  const readProgress = () => {
    const hero = document.querySelector("#top") || document.querySelector("[data-spline-space]");
    if (hero) {
      const rect = hero.getBoundingClientRect();
      const height = hero.offsetHeight || 1;
      return Math.min(1, Math.max(0, -rect.top / height));
    }

    const scrolling = document.scrollingElement || document.documentElement;
    const top = scrolling.scrollTop || window.scrollY || document.body.scrollTop || 0;
    const max =
      Math.max(scrolling.scrollHeight, document.documentElement.scrollHeight, document.body.scrollHeight) -
      window.innerHeight;
    return max > 0 ? Math.min(1, Math.max(0, top / max)) : 0;
  };

  const apply = (progress) => {
    document.querySelectorAll("[data-spline-body], [data-star-layer]").forEach((node) => {
      const x = parse(node.getAttribute("data-x"), "vw");
      const y = parse(node.getAttribute("data-y"), "px");
      const rotateAttr = node.getAttribute("data-rotate");
      const scaleAttr = node.getAttribute("data-scale");
      let yValue = mixUnit(y, progress);

      if (node.hasAttribute("data-clip-hero")) {
        const hero = node.closest("section");
        if (hero) {
          const maxY = Math.max(0, hero.clientHeight - node.offsetTop - node.offsetHeight * 0.55);
          yValue = `${Math.min(mixNumber(y.map((frame) => frame.n), progress), maxY)}px`;
        }
      }

      const rotateValue = rotateAttr
        ? mixNumber(parse(rotateAttr, "").map((frame) => frame.n), progress)
        : 0;
      const scaleValue = scaleAttr
        ? mixNumber(parse(scaleAttr, "").map((frame) => frame.n), progress)
        : 1;
      node.style.transform = `translate3d(${mixUnit(x, progress)}, ${yValue}, 0) rotate(${rotateValue}deg) scale(${scaleValue})`;
    });
  };

  let target = 0;
  let current = 0;
  let started = false;

  const step = () => {
    current += (target - current) * 0.1;
    try {
      apply(current);
    } catch (error) {
      console.warn("spline-parallax", error);
    }
  };

  const onScroll = () => {
    target = readProgress();
  };

  const hideWatermarks = () => {
    document.querySelectorAll("spline-viewer").forEach((viewer) => {
      const root = viewer.shadowRoot;
      if (!root) {
        return;
      }
      root.querySelectorAll("a").forEach((node) => {
        node.style.setProperty("display", "none", "important");
      });
    });
  };

  const start = () => {
    if (started) {
      return;
    }
    started = true;
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    document.body.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    step();
    hideWatermarks();

    const loop = () => {
      step();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    let attempts = 0;
    const retry = window.setInterval(() => {
      hideWatermarks();
      attempts += 1;
      if (attempts > 24) {
        window.clearInterval(retry);
      }
    }, 500);

    window.setTimeout(() => {
      const planet = document.querySelector("[data-spline-body]");
      if (planet && !planet.style.transform) {
        window.setInterval(() => {
          onScroll();
          step();
        }, 32);
      }
    }, 250);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
  window.addEventListener("load", start, { once: true });
})();
