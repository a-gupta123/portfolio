"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useInView,
  type MotionProps,
  type UseInViewOptions,
  type Variants,
} from "motion/react"

type MarginType = UseInViewOptions["margin"]

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode
  className?: string
  variant?: {
    hidden: { y: number }
    visible: { y: number }
  }
  duration?: number
  delay?: number
  offset?: number
  direction?: "up" | "down" | "left" | "right"
  inView?: boolean
  inViewMargin?: MarginType
  blur?: string
}

const getFilter = (v: Variants[string]) =>
  typeof v === "function" ? undefined : v.filter

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.18,
  delay = 0,
  offset = 8,
  direction = "down",
  inView = false,
  inViewMargin = "0px 0px 28% 0px",
  blur = "4px",
  ...props
}: BlurFadeProps) {
  const ref = useRef(null)
  const [hasScrolled, setHasScrolled] = useState(false)
  const inViewResult = useInView(ref, {
    once: false,
    amount: 0.12,
    margin: inViewMargin,
  })

  useEffect(() => {
    const onScroll = () => {
      if ((window.scrollY || document.documentElement.scrollTop) > 40) {
        setHasScrolled(true)
      }
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Stay put on first paint so above-the-fold cards don't flicker.
  // After the user scrolls, fade in on the way down and out on the way up.
  const isInView = !inView || !hasScrolled || inViewResult
  const defaultVariants: Variants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]:
        direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: `blur(0px)`,
    },
  }
  const combinedVariants = variant ?? defaultVariants

  const hiddenFilter = getFilter(combinedVariants.hidden)
  const visibleFilter = getFilter(combinedVariants.visible)

  const shouldTransitionFilter =
    hiddenFilter != null &&
    visibleFilter != null &&
    hiddenFilter !== visibleFilter

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: hasScrolled ? delay : 0,
        duration: hasScrolled ? duration : 0,
        ease: "easeOut",
        ...(shouldTransitionFilter ? { filter: { duration: hasScrolled ? duration : 0 } } : {}),
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
