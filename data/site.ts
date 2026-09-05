export const site = {
  name: "Aryan Gupta",
  initials: "AG",
  headline: "Math + CS student at Carnegie Mellon",
  status: "Open to software engineering internships",
  location: "Pittsburgh, PA",
  photo: "/portrait.png",
  photoAlt: "Portrait of Aryan Gupta",
  summary:
    "I build reliable software across artificial intelligence, systems, and quantitative computing — turning hard technical problems into measurable, efficient systems.",
  about: [
    "I’m an undergraduate at Carnegie Mellon University pursuing a B.S. in Mathematical Sciences with an Additional Major in Computer Science. My work sits at the intersection of mathematical modeling, software engineering, and applied AI.",
    "I like projects with real technical depth: OCR and vision-language pipelines, memory allocators, concurrent networking, and quantitative research tools. I’m especially interested in quantitative finance, high-performance computing, and systems that have to be both correct and fast.",
  ],
  education: {
    school: "Carnegie Mellon University",
    degree: "B.S. Mathematical Sciences",
    extra: "Additional Major in Computer Science",
    dates: "2025 — 2029",
    graduation: "Expected May 2029",
    gpa: 3.9,
    location: "Pittsburgh, PA",
    prior: {
      school: "Princeton University",
      detail: "Dual enrollment in mathematics",
      course: "MAT 214 · Numbers, Equations, and Proofs",
    },
    highSchool: {
      school: "South Brunswick High School",
      dates: "2021 — 2025",
      honors: [
        "National Merit Scholarship Winner",
        "Math Excellence Award",
      ],
    },
    coursework: [
      "21-270 Introduction to Mathematical Finance",
      "21-241 Matrices and Linear Transformations",
      "21-128 Mathematical Concepts and Proofs",
      "15-150 Principles of Functional Programming",
      "15-122 Principles of Imperative Computation",
    ],
  },
  interests: [
    "Quantitative finance",
    "Systems programming",
    "Artificial intelligence",
    "Mathematical modeling",
    "High-performance computing",
    "Data analysis",
  ],
  email: "aryangup@andrew.cmu.edu",
  phone: "" as string,
  github: "https://github.com/a-gupta123",
  linkedin: "https://www.linkedin.com/in/aryangupta111/",
  seo: {
    title: "Aryan Gupta | Math + CS @ Carnegie Mellon",
    description:
      "Personal portfolio of Aryan Gupta, a Carnegie Mellon University student studying Mathematical Sciences with an Additional Major in Computer Science. Software engineering, AI, systems, and quantitative computing.",
    url: "https://a-gupta123.github.io/portfolio/",
  },
} as const;

export const experience = [
  {
    id: "mphasis",
    company: "Mphasis AI",
    role: "Software Engineering Intern",
    location: "New York, NY",
    dates: "May 2026 — August 2026",
    featured: true,
    technologies: ["Python", "Qwen", "Tesseract", "PaddleOCR", "Pandas", "Jupyter"],
    bullets: [
      "Built an end-to-end document-boundary detection pipeline combining Qwen vision-language models with Tesseract and PaddleOCR for large, multi-page PDFs.",
      "Compared Qwen-only, Qwen + Tesseract, and Qwen + PaddleOCR pipelines to balance accuracy, recall, and processing speed.",
      "Designed an OCR flagging path that routes only low-confidence pages to PaddleOCR.",
      "Automated evaluation against labeled ground truth using accuracy, precision, recall, F1, and false-positive/false-negative analysis.",
      "Optimized PDF rendering, OCR extraction, batch processing, and inference across hundreds of pages, with reproducible Jupyter pipelines and Excel reports.",
    ],
  },
  {
    id: "rowan",
    company: "Rowan University",
    role: "Research Intern — Physics and Astronomy",
    location: "Glassboro, NJ",
    dates: "December 2023 — December 2024",
    featured: false,
    technologies: ["Data Analysis", "Electrochemical Materials", "Experimental Research"],
    bullets: [
      "Analyzed electrochemical datasets to quantify variability, evaluate signal stability, and identify trends across repeated trials.",
      "Contributed to research on LaF₃ microsensors, WO₃ electrochromic films, and LiFePO₄ thin-film materials.",
      "Synthesized findings from more than 20 publications and wrote a standard operating procedure for future researchers.",
    ],
  },
] as const;

export const projects = [
  {
    id: "document-boundary",
    title: "Intelligent Document Boundary Detection",
    category: "AI",
    result: "~0.85 F1",
    description:
      "Evaluated Qwen, Tesseract, and PaddleOCR pipelines for splitting multi-page PDF batches into logical documents, with automated precision, recall, and runtime reports.",
    technologies: ["Python", "Qwen", "Tesseract", "PaddleOCR", "Pandas"],
    href: "https://github.com/a-gupta123",
    featured: true,
  },
  {
    id: "equilayer",
    title: "EquiLayer",
    category: "Web",
    result: "Corporate actions engine",
    description:
      "A TypeScript trading operations layer that models corporate actions, settlement dates, and position updates so portfolio value stays consistent through splits, dividends, and trade lifecycle events.",
    technologies: ["TypeScript", "React", "Next.js"],
    href: "https://github.com/a-gupta123/equilayer",
    featured: true,
  },
  {
    id: "allocator",
    title: "Dynamic Memory Allocator",
    category: "Systems",
    result: "Segregated free lists",
    description:
      "Custom C allocator with size-class lists, block splitting, coalescing, and utilization/throughput tradeoffs under realistic allocation traces.",
    technologies: ["C", "Linux", "GDB"],
    href: "https://github.com/a-gupta123",
    featured: true,
  },
  {
    id: "proxy",
    title: "Concurrent Web Proxy & Cache",
    category: "Systems",
    result: "Thread-safe LRU",
    description:
      "Multithreaded HTTP proxy with POSIX threads, mutexes, reference counting, and LRU eviction for concurrent clients.",
    technologies: ["C", "Pthreads", "HTTP"],
    href: "https://github.com/a-gupta123",
    featured: false,
  },
  {
    id: "option-pricer",
    title: "Monte Carlo Option Pricer",
    category: "Quant",
    result: "vs Black–Scholes",
    description:
      "European call pricer under geometric Brownian motion with antithetic variance reduction, confidence intervals, and Black–Scholes validation.",
    technologies: ["Python", "NumPy", "SciPy"],
    href: "https://github.com/a-gupta123/monte-carlo-option-pricer",
    featured: false,
  },
  {
    id: "backtester",
    title: "Moving Average Backtester",
    category: "Quant",
    result: "vs buy-and-hold",
    description:
      "SPY moving-average crossover backtest with lagged execution, transaction costs, CAGR, Sharpe, drawdowns, and a buy-and-hold baseline.",
    technologies: ["Python", "Pandas", "yfinance"],
    href: "https://github.com/a-gupta123/strategy-backtester",
    featured: false,
  },
] as const;

export const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "Java", "SQL", "SML", "Assembly", "TypeScript", "JavaScript"],
  },
  {
    title: "Systems",
    skills: ["Linux", "Memory Management", "Concurrency", "Networking", "Processes", "Signals", "Debugging"],
  },
  {
    title: "AI & Data",
    skills: ["Qwen", "OCR", "PaddleOCR", "Tesseract", "Pandas", "NumPy", "Jupyter"],
  },
  {
    title: "Web & Tools",
    skills: ["React", "Next.js", "Tailwind CSS", "Git", "GitHub", "GDB", "VS Code"],
  },
] as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;
