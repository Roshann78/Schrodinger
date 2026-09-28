export const BASE_DOMAIN = "roshansharma.tech";

export const resume = {
  header: {
    name: "Roshan Sharma",
    location: "Noida, Uttar Pradesh, India",
    email: "grd.roshan7@gmail.com",
    phone: "+91 6202944085",
    links: [
      { label: "GitHub", url: "https://github.com/Roshann78" },
      { label: "LinkedIn", url: "https://linkedin.com/in/roshan-sharma-719a81286" },
      { label: "Resume PDF", url: "/resume.pdf" }
    ]
  },
  education: [
    {
      degree: "B.Tech. in IT",
      institution: "Jaypee Institute of Information Technology",
      location: "Noida",
      score: "CGPA 8.3/10.0",
      period: "2023 - 2027"
    },
    {
      degree: "Class XII",
      institution: "Chinmaya Vidyalaya Bokaro",
      location: "Bokaro",
      score: "95%",
      period: "2022"
    }
  ],
  skills: [
    { category: "Languages", items: "C, C++, Go, Python, JavaScript, TypeScript, SQL" },
    { category: "Frontend", items: "Next.js, React.js, Tailwind CSS, Material UI, ShadCN" },
    { category: "Backend & APIs", items: "Node.js, Express.js, FastAPI, REST APIs, Prisma ORM" },
    { category: "Databases & Messaging", items: "PostgreSQL, MongoDB, TimescaleDB, Redis, ChromaDB, Redpanda (Kafka)" },
    { category: "Cloud, DevOps & Infrastructure", items: "Docker, gVisor, MinIO, CI/CD, Git, GitHub Actions" },
    { category: "Tools", items: "Postman" }
  ],
  experience: [
    {
      role: "Software Developer",
      company: "Mindfree Business Consulting (P) Ltd",
      location: "Noida, India",
      period: "Jun 2026 - Jul 2026",
      details: [
        "Architected and developed a multi-tenant B2B SaaS platform for CA firms, implementing role-based access control (RBAC) and secure tenant isolation using Clerk, Supabase, Prisma ORM, and PostgreSQL.",
        "Engineered a compliance automation engine for TDS, ITR, and Challan workflows, automating financial calculations, audit logging, and document generation through edge APIs and serverless pipelines."
      ]
    }
  ],
  projects: [
    {
      title: "TradeBench: Distributed Trading Infrastructure Benchmarking Platform",
      stack: "Go, Next.js, Redpanda (Kafka), TimescaleDB, Redis, MinIO, Docker, gVisor",
      github: "https://github.com/Roshann78/TODO", // TODO: Update repository URL
      details: [
        "Built a distributed trading infrastructure benchmarking platform for evaluating system performance under high-throughput workloads, sustaining 1,000+ requests/sec with nanosecond-precision latency measurement using HDR Histograms.",
        "Designed 7 independent Go microservices with zero synchronous inter-service calls, implementing event-driven communication, sandboxed code execution with gVisor, and a real-time Redis leaderboard with historical metrics stored in TimescaleDB."
      ]
    },
    {
      title: "LegalAssist AI (Legal Buddy)",
      stack: "Next.js, FastAPI, LangChain, ChromaDB, Groq, Llama 3.3",
      github: "https://github.com/Roshann78/TODO", // TODO: Update repository URL
      details: [
        "Built a RAG-powered legal and banking assistant using Llama 3.3 70B, supporting citation-backed responses across legal Q&A, banking guidance, document chat, and RAG vs. base LLM comparison.",
        "Created a searchable knowledge base from 29+ official legal documents with 11,600+ vectors, along with a PDF ingestion pipeline enabling on-the-fly document uploads and real-time querying."
      ]
    },
    {
      title: "Jaypee Maps (Jaypee Guide)",
      stack: "C++",
      github: "https://github.com/Roshann78/TODO", // TODO: Update repository URL
      details: [
        "Built a console-based campus navigation system in C++ to compute shortest routes across 6 mapped campus locations using BFS traversal and a min-heap-based Dijkstra's algorithm.",
        "Implemented custom Graph, Queue, and Priority Queue data structures from scratch without STL containers, with path reconstruction, distance tracking, and formatted route visualization."
      ]
    }
  ],
  achievements: [
    {
      text: "Qualified as an ICPC Regionalist at both the Amritapuri and Chennai regionals in the 2025-26 season.",
      link: "" // TODO: Add link if available
    },
    {
      text: "Earned the Expert title on Codeforces with a maximum rating of 1642.",
      link: "" // TODO: Add link if available
    },
    {
      text: "Achieved a 4-Star rating on CodeChef, peaking at 1901.",
      link: "" // TODO: Add link if available
    },
    {
      text: "Solved 800+ algorithmic problems across platforms including LeetCode, demonstrating strong proficiency in Data Structures and Algorithms.",
      link: "" // TODO: Add link if available
    },
    {
      text: "Secured Runner-up at K3PC, an ICPC-style competitive programming contest with 100+ teams.",
      link: "" // TODO: Add link if available
    },
    {
      text: "Won 3 internal college-level coding contests, consistently ranking among top performers in DSA-focused competitions.",
      link: "" // TODO: Add link if available
    }
  ],
  positions: [
    {
      role: "Technical Coordinator",
      organization: "Knuth Programming Hub",
      location: "Noida, India",
      period: "Jul 2025 - May 2026",
      details: [
        "Led the organization of a competitive programming contest with 400+ participants, overseeing problem setting, testing, and judging workflows.",
        "Mentored 150+ students in Data Structures and Algorithms (DSA) and competitive programming through regular problem-solving sessions, strengthening their contest readiness and algorithmic skills."
      ]
    }
  ],
  resources: [
    { label: "OOPs", url: `https://oops.${BASE_DOMAIN}` },
    { label: "DSA", url: `https://dsa.${BASE_DOMAIN}` },
    { label: "CN", url: `https://cn.${BASE_DOMAIN}` },
    { label: "DBMS", url: `https://dbms.${BASE_DOMAIN}` },
    { label: "Operating Systems", url: `https://os.${BASE_DOMAIN}` },
    { label: "System Design", url: `https://sysdesign.${BASE_DOMAIN}` }
  ]
};
