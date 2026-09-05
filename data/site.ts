export const site = {
  name: "Aryan Gupta",
  headline: "Mathematics and Computer Science @ Carnegie Mellon University",
  status: "Open to software engineering internships",
  location: "Pittsburgh, PA",
  summary:
    "I love building things that solve problems I have and converting ideas into real projects!",
  aboutTitle: "Education, interests, and stuff I'm passionate about",
  interestsBlurb:
    "Hi! My interests are in building systems and projects that either solve problems I have or deepen my understanding of certain things I don't know much about. I think there's nothing not worth learning about, and I love exploring things I've never learned about before! I am most passionate about going deep in the technical side of projects and really understanding the underlying implementations.",
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
      "15-251 Great Ideas in Theoretical Computer Science",
      "18-213 Introduction to Computer Systems",
      "21-259 Calculus in Three Dimensions",
      "21-260 Differential Equations",
    ],
  },
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
    id: "allocator",
    title: "Dynamic Memory Allocator (C)",
    dates: "Jun 2026",
    bullets: [
      "Implemented a 64-bit dynamic memory allocator in C with explicit segregated free lists, block splitting, and coalescing to manage heap allocation and deallocation",
      "Developed heap consistency checks and used GDB to identify memory corruption, segmentation faults, and violations of allocator invariants",
    ],
  },
  {
    id: "shell",
    title: "Tiny Shell (C)",
    dates: "Jul 2026",
    bullets: [
      "Implemented a Unix shell in C supporting foreground and background job execution, job control, signal handling, and input/output redirection",
      "Developed process management using fork, execve, waitpid, and POSIX signals to correctly manage concurrent processes and prevent race conditions during job execution",
    ],
  },
  {
    id: "riseva",
    title: "Riseva (2nd Place in Carnegie Mellon Product Hackathon)",
    dates: "Feb 2026 — Mar 2026",
    bullets: [
      "Built an AI-powered learning platform using Python and React that generated personalized learning experiences and captured student interaction data for analysis",
      "Developed an analytics dashboard that transformed learning data into insights for tracking student mastery and identifying learning gaps",
    ],
    href: "https://github.com/a-gupta123/riseva",
  },
  {
    id: "option-pricer",
    title: "Monte Carlo Option Pricer (Python)",
    dates: "Nov 2025 — Dec 2025",
    bullets: [
      "Implemented Monte Carlo simulations to price European call options under geometric Brownian motion, including confidence interval estimation and statistical error analysis",
      "Applied antithetic variates for variance reduction and analyzed simulation convergence against analytical Black-Scholes prices",
    ],
    href: "https://github.com/a-gupta123/monte-carlo-option-pricer",
  },
  {
    id: "proxy",
    title: "Concurrent Web Proxy (C)",
    dates: "Jul 2026",
    bullets: [
      "Implemented a multithreaded HTTP proxy server in C using POSIX threads, socket programming, and synchronization to concurrently process client requests and forward traffic to origin servers",
      "Developed a thread-safe in-memory cache with LRU eviction and reference counting to reduce repeated-request latency while preventing race conditions during concurrent access",
    ],
  },
  {
    id: "backtester",
    title: "Moving Average Crossover Backtester (Python)",
    dates: "Dec 2025 — Jan 2026",
    bullets: [
      "Developed an event-driven Python backtesting engine for quantitative trading strategies on SPY with next-day execution to eliminate look-ahead bias",
      "Evaluated strategy performance across market periods using CAGR, Sharpe ratio, volatility, and maximum drawdown to analyze risk-adjusted returns",
    ],
    href: "https://github.com/a-gupta123/strategy-backtester",
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
