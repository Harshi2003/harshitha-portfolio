import boxOfficeImg from "../assets/images/projects/BoxOffice.png";
import autonomousSystemImg from "../assets/images/projects/AutonomousSystem.png";

export const profile = {
  name: "Sai Harshitha Peddi",
  nickname: "Harshi",
  tagline: "I build experiences at the intersection of software, AI, and robotics.",
  location: "San Jose, CA",
  email: "saiharshipeddi@gmail.com",
  linkedin: "https://www.linkedin.com/in/peddisaiharshitha/",
  github: "https://github.com/Harshi2003",
  calendly: "https://calendly.com/peddisaiharshitha/30min",
  resume: "/resume.pdf",
  bio: "I help teams go from ambitious ideas to high-impact products by blending product thinking, AI engineering, and collaborative execution. From production agentic systems to research-grade evaluation pipelines, I bring ideas to life with thoughtful design, clean engineering, and a collaborative mindset.",
  tags: ["Full Stack Engineer", "Agentic AI Engineer"],
  status: "Full-time @ a stealth AI startup",
  ctaHeading: "Let's build something amazing together!",
  ctaBody: "Always up for a good conversation about agentic AI, research, or your next collaboration.",
};

export const journey = [
  {
    icon: "leaf",
    accent: "teal",
    title: "Curiosity Spark",
    text: "I've always wanted to know how software could reason and adapt. That curiosity turned into a habit of building small experiments alongside every class I took.",
  },
  {
    icon: "cap",
    accent: "coral",
    title: "Learned & Built",
    text: "I dove into research, from speech emotion recognition to EEG signal processing, before starting my M.S. in Artificial Intelligence at San Jose State.",
  },
  {
    icon: "code",
    accent: "amber",
    title: "Engineered Impact",
    text: "I shipped production systems from Avantel to a stealth AI startup, building agentic workflows that real people rely on every day.",
  },
  {
    icon: "rocket",
    accent: "teal",
    title: "What's Next",
    text: "I'm still chasing the same question that started it all: how do we build AI systems reliable enough to actually trust?",
  },
];

export const featuredSkills = [
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "FastAPI",
  "LangChain",
  "LangGraph",
  "RAG",
  "MCP Integrations",
  "PostgreSQL",
  "pgvector",
  "Kubernetes",
  "Docker",
  "AWS",
  "Kafka",
  "Claude Code",
];

export const education = {
  degree: "M.S. Artificial Intelligence, Data Science Track",
  school: "San Jose State University",
  place: "San Jose, CA",
  time: "Aug 2024 – May 2026",
  points: [
    "Teaching Assistant for Data Mining and Reinforcement Learning; led 15+ workshops and mentored 50+ students in Python, ML debugging, evaluation, experimentation, and technical communication.",
    "Research work used Python and Java for agentic AI, security, evaluation, backend services, data processing, and reproducible experimentation.",
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "Shell", "Linux"],
  },
  {
    title: "Frontend",
    items: ["React", "Redux", "HTML5", "CSS3", "React Context"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "FastAPI", "REST APIs", "GraphQL", "WebSockets", "Microservices", "Async Processing"],
  },
  {
    title: "Data & streaming",
    items: ["PostgreSQL", "pgvector", "Neo4j", "Redis", "Cassandra", "Kafka", "Spark", "Airflow", "NoSQL"],
  },
  {
    title: "AI & agents",
    items: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "RAG",
      "Embeddings",
      "Vector Databases",
      "Prompt Engineering",
      "Tool Calling",
      "Structured Outputs",
      "Multi-Agent Workflows",
      "Guardrails",
      "Human-in-the-Loop",
      "Model Evaluation",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Testing & reliability",
    items: [
      "TDD",
      "Unit Testing",
      "Integration Testing",
      "Regression Testing",
      "Structured Logging",
      "Monitoring",
      "Performance Profiling",
      "Root Cause Analysis",
      "Failure Recovery",
    ],
  },
  {
    title: "AI-native development",
    items: ["Claude Code", "Cursor", "Codex", "GitHub Copilot", "Agent Trace Visualization", "Tool Call Visualization", "MCP Integrations"],
  },
];

export const research = [
  {
    role: "Research Assistant — ARES",
    org: "San Jose State University",
    focus: "Recommender Systems, Cost/Token Optimization",
    time: "May 2025 – Present",
    badgeIcon: "flask",
    accent: "coral",
    interactive: "compress",
    problem:
      "As interaction data scales, classic collaborative filtering methods incur growing computational and memory overhead, limiting their viability for real-time, resource-constrained recommendation settings.",
    approach:
      "We propose an exact similarity search framework built on quantization and bit-sliced vector compression, trading approximate neighborhood methods for a compressed but exact representation of the user-item utility matrix.",
    methodology: [
      "Encoded the utility matrix as compressed bit-vectors using quantization and Hamming distance for similarity computation.",
      "Benchmarked against Alternating Least Squares and LightGCN across four public datasets (Gowalla, Yelp2018, Amazon-book, Movielens1M) to validate generalizability.",
      "Designed a priority-queue-based nearest-neighbor cache to bound re-training cost to only the users and items affected by new interactions.",
    ],
    findings: [
      "Reduced Amazon-book training time from 833 minutes to 3 minutes, a 157x to 277x speedup over LightGCN.",
      "Cut test-time memory footprint from 421MB to 80MB by keeping compressed bit-vectors resident in CPU cache.",
      "Preserved Precision@20, Recall@20, and NDCG@20 within baseline range, showing the compression does not trade away recommendation quality.",
    ],
    points: [
      "Built ARES, a Collaborative Filtering recommender that uses quantization, bit-sliced vector compression, and Hamming distance for exact similarity search instead of approximate methods.",
      "Evaluated across four benchmark datasets (Gowalla, Yelp2018, Amazon-book, Movielens1M, up to 2.98M interactions) against Alternating Least Squares and LightGCN baselines.",
      "Cut Amazon-book training time from 833 minutes to 3 minutes, 157x to 277x faster than LightGCN, while keeping Precision@20, Recall@20, and NDCG@20 comparable.",
      "Reduced test-time memory footprint from 421MB to 80MB by operating on compressed bit-vectors that fit inside CPU cache, using a hybrid compression scheme that only compresses bit-vectors below a density threshold.",
      "Designed a priority-queue-based nearest-neighbor cache so re-training after new interactions only touches affected users/items instead of the full utility matrix.",
    ],
  },
  {
    role: "Research Assistant — Speech Emotion Recognition & Signal Processing",
    org: "Amrita Vishwa Vidyapeetham",
    focus: "AI & Deep Learning",
    time: "Feb 2023 – May 2024",
    badgeIcon: "flask",
    accent: "teal",
    problem:
      "Emotion recognition from speech is highly sensitive to speaker variability and noisy recording conditions, and translating that signal into robust, real-time features for embodied systems such as robots remains an open problem.",
    approach:
      "We combined large-scale EEG and audio signal preprocessing with CNN-BLSTM-Attention and CNN-Transformer architectures over Mel-spectrogram features, with an eye toward eventually applying the pipeline to robotics-facing emotion recognition.",
    methodology: [
      "Built preprocessing and feature engineering pipelines for large-scale, multichannel EEG and audio time-series data.",
      "Extracted Mel-spectrogram features from speech audio and applied AWGN data augmentation to reduce overfitting.",
      "Compared CNN-BLSTM-Attention against CNN-Transformer architectures for emotion classification.",
    ],
    findings: [
      "Reached 89.33% accuracy with CNN-Transformer and 85.67% with CNN-BLSTM-Attention, both outperforming baseline models.",
      "Found attention mechanisms captured spatial and temporal speech patterns more effectively than convolution alone.",
      "Delivered clean, structured EEG and audio signal pipelines intended as a foundation for future robotics-facing emotion recognition work.",
    ],
    points: [
      "Worked extensively with large-scale EEG and audio signal datasets, building robust preprocessing and feature engineering pipelines for high-dimensional, multichannel time-series data.",
      "Designed deep learning models (CNN-BLSTM-Attention, CNN-Transformer) for emotion classification using Mel-spectrogram features.",
      "Applied data augmentation (AWGN) to improve model generalization and reduce overfitting.",
      "Achieved 89.33% accuracy (CNN-Transformer) and 85.67% (CNN-BLSTM), outperforming baseline models.",
      "Leveraged attention mechanisms and convolutional layers to effectively capture spatial and temporal speech patterns.",
    ],
  },
  {
    role: "Research Assistant — Healthcare and AI",
    org: "Amrita Vishwa Vidyapeetham",
    focus: "Medical Imaging, Healthcare AI",
    time: "May 2021 – Oct 2022",
    badgeIcon: "flask",
    accent: "amber",
    problem:
      "Stroke lesion classification from medical imaging is critical for timely clinical decision-making, but hospitals often have limited labeled data, making it difficult to train reliable deep learning classifiers under real clinical constraints.",
    approach:
      "We proposed a conditional GAN-based augmentation strategy combined with unsupervised clustering to generate class-conditioned synthetic data, addressing the label scarcity problem directly rather than relying on manual annotation alone.",
    methodology: [
      "Applied unsupervised clustering to surface latent structure in unlabeled stroke lesion imaging data.",
      "Trained a conditional GAN to generate class-conditioned synthetic samples reflecting real lesion characteristics.",
      "Evaluated classification performance with and without GAN-augmented data under limited-label conditions.",
    ],
    findings: [
      "Improved stroke lesion classification performance under limited labeled data compared to training on real data alone.",
      "Showed that class-conditioned synthetic data can meaningfully supplement scarce clinical imaging datasets.",
      "Published as \"Enhancing Stroke Lesion Classification with Conditional GAN\" at IEEE SmartCom 2024.",
    ],
    points: [
      "Introduced a conditional GAN-based augmentation strategy combined with unsupervised clustering to improve stroke lesion classification performance under limited labeled data.",
      "Applied unsupervised clustering to identify latent structure in unlabeled medical imaging data before generating class-conditioned synthetic samples.",
      "Evaluated the approach against real-hospital constraints where labeled stroke imaging data is scarce and expensive to acquire.",
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Software Engineer",
    org: "Stealth AI Startup",
    place: "San Francisco, CA",
    time: "Mar 2026 – Present",
    color: "coral",
    featured: true,
    current: true,
    badgeIcon: "rocket",
    summary:
      "Building full-stack, agentic AI features for a fast-moving product team, from backend workflows to the interface people use every day.",
    previewTags: ["LangGraph", "RAG", "TypeScript", "Cross-Functional Collaboration"],
    situation:
      "Travelers needed a way to plan an entire trip (flights, logistics, itinerary) without manually piecing it together from a ticket or travel document.",
    myRole:
      "I designed and built an agentic AI system that scans a travel document and helps preplan the entire trip end to end.",
    builtPoints: [
      "An agentic AI system that scans a travel document like a ticket and extracts trip details automatically.",
      "A pre-trip planning assistant that helps travelers organize logistics and itinerary in one place.",
      "Full-stack features spanning backend workflows to the interface travelers use every day.",
      "Multi-agent workflows that retrieve context, call the right tools, and hand off to a human when needed.",
    ],
    challenges: [
      "Reliably extracting structured trip details (dates, routes, confirmation numbers) from scanned tickets that come in wildly different formats and layouts.",
      "Deciding when the agent should act on its own versus pause and confirm with the traveler, especially for time-sensitive changes.",
      "Keeping multi-step planning workflows fast even when several tool calls had to run per request.",
      "Handling partial or low-quality scans gracefully instead of failing the whole trip-planning flow.",
      "Shipping new agent capabilities quickly in a small team without breaking trip plans already in progress.",
    ],
    impactStats: [
      { value: "45+", label: "Daily active users" },
      { value: "8s → 5s", label: "Latency improvement" },
      { value: "40%", label: "Fewer user-reported issues" },
      { value: "30%", label: "Less manual lookup work" },
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "GraphQL",
      "LangGraph",
      "RAG",
      "Anthropic",
      "Claude Code",
      "Cursor",
      "Codex",
      "GitHub Copilot",
      "Redis",
      "Docker",
      "AWS",
      "Vercel",
      "Sentry",
      "Zod",
      "Temporal",
      "Cross-Functional Collaboration",
      "Ownership",
      "Technical Communication",
    ],
    points: [
      "Built and shipped production TypeScript, Node.js, React, PostgreSQL, REST API, GraphQL, and WebSocket features so 45+ daily active users could scan a travel document and get a fully preplanned trip without routine engineering support.",
      "Shipped production RAG and agentic workflows with LangGraph, retrieval, structured outputs, deterministic routing, tool calling, retries, fallbacks, and human escalation paths to extract trip details from scanned tickets and plan logistics and itinerary end to end.",
      "Reduced manual lookup work by 30% by converting recurring trip-planning questions into grounded retrieval, validated context, reusable agent tools, deterministic workflow steps, and backend actions travelers could complete independently.",
      "Reduced multi-agent response latency from 8 seconds to 5 seconds by profiling execution traces, parallelizing independent tool calls, batching APIs, reducing context overhead, and optimizing asynchronous backend execution.",
      "Contributed to 40% fewer user-reported issues by reproducing customer failures, tracing API and model behavior, adding input and output validation, retries, fallbacks, regression tests, and release verification before production rollout.",
      "Used Claude Code, Cursor, Codex, and GitHub Copilot for implementation, test authoring, refactoring, and debugging, then validated generated changes through TDD, code review, runtime traces, integration tests, and production behavior.",
    ],
  },
  {
    role: "AI Security Research Engineer",
    org: "San Jose State University",
    place: "San Jose, CA",
    time: "Mar 2025 – Mar 2026",
    color: "amber",
    featured: true,
    badgeText: "SJSU",
    summary:
      "Led research on an AI assistant that helps security teams investigate incidents faster, balancing model autonomy with careful human oversight.",
    previewTags: ["FastAPI", "Neo4j", "Security Research", "Technical Communication"],
    situation:
      "Security teams needed to investigate incidents faster without losing traceability over what an AI assistant was actually doing.",
    myRole:
      "I led research on an evidence-grounded agentic SOC assistant, balancing model autonomy with careful human oversight.",
    builtPoints: [
      "An evidence-grounded SOC assistant that investigates security incidents and cites its sources.",
      "Confidence thresholds and audit logging so every automated decision stays traceable.",
      "A repeatable evaluation pipeline for measuring detection quality and latency.",
      "A refactored, maintainable backend service out of an experimental research prototype.",
    ],
    challenges: [
      "Deciding when the model should act on its own versus defer to a human reviewer, especially for ambiguous or high-severity alerts.",
      "Keeping detections explainable enough for a security analyst to trust and verify, not just accurate on paper.",
      "Evaluating groundedness and detection quality without a fixed, labeled dataset to benchmark against.",
      "Correlating noisy, multi-source security telemetry in Neo4j without drowning analysts in false positives.",
      "Turning a research prototype into a maintainable, production-ready service without losing the traceability it was built for.",
    ],
    impactStats: [
      { value: "98%", label: "Detection & incident success" },
      { value: "17.7s", label: "Mean detection latency" },
      { value: "<10ms", label: "Deterministic processing" },
    ],
    techStack: [
      "FastAPI",
      "Neo4j",
      "Python",
      "Java",
      "Agentic AI",
      "RAG",
      "SIEM",
      "SOAR",
      "Threat Intelligence",
      "Anomaly Detection",
      "Incident Response",
      "Graph-Based Correlation",
      "Audit Logging",
      "Security Research",
      "Technical Communication",
      "Research Communication",
    ],
    points: [
      "Built an evidence-grounded agentic SOC assistant using FastAPI, Neo4j, retrieval, deterministic event correlation, structured verification, confidence thresholds, and human review to keep security decisions traceable and reviewable.",
      "Built Python and Java backend services achieving 98% detection and incident success with FastAPI, Neo4j, structured event correlation, retrieval, deterministic verification, automated tests, and human review across incomplete and noisy inputs.",
      "Designed controls for uncertainty, permissions, and agent failure modes using evidence IDs, source citations, confidence thresholds, access checks, deterministic rules, deferral, audit logging, and traceable decisions.",
      "Measured mean model detection latency of approximately 17.7 seconds through repeatable evaluation pipelines covering groundedness, evidence completeness, detection quality, missing data, and failure behavior.",
      "Maintained deterministic processing below 10 ms by profiling execution stages, refining event correlation and validation logic, and benchmarking changes against repeatable reliability scenarios.",
      "Refactored experimental agent workflows into maintainable backend services with explicit interfaces, structured logging, failure handling, automated tests, and documented execution stages.",
    ],
  },
  {
    role: "Software Engineer, Data and AI Platform",
    org: "Avantel Limited",
    place: "Hyderabad, India",
    time: "Apr 2022 – Sep 2024",
    color: "teal",
    badgeText: "AV",
    situation:
      "Manual document workflows were slow, inconsistent, and heavy on human intervention at a scale of 10,000+ documents a day.",
    myRole:
      "I built and optimized backend data workflows spanning ingestion, validation, transformation, and downstream integration.",
    builtPoints: [
      "Backend workflows that ingest, validate, and transform large volumes of documents daily.",
      "A redesigned batch execution pipeline for faster, more efficient processing.",
      "Automated recovery workflows that reduce manual intervention.",
      "Root-cause analysis tooling that traces failures back to their source.",
    ],
    challenges: [
      "Handling wildly inconsistent input quality across scanned and mobile-captured documents, where the same field could land in a different spot depending on the format.",
      "Keeping a high-throughput batch pipeline reliable without slowing down as document volume scaled up.",
      "Reducing manual intervention without silently letting bad or malformed data pass through validation.",
      "Diagnosing intermittent production failures across a multi-stage pipeline, where an issue in one stage often only surfaced as a symptom several stages later.",
    ],
    impactStats: [
      { value: "10,000+", label: "Documents/day processed" },
      { value: "200/min", label: "Peak throughput" },
      { value: "60%", label: "Less manual intervention" },
      { value: "40%", label: "Less admin effort" },
    ],
    techStack: [
      "Python",
      "Java",
      "Cross-Functional Collaboration",
      "Process Improvement",
      "Stakeholder Communication",
    ],
    points: [
      "Built Python and Java backend data workflows supporting 10,000+ documents with explicit interfaces, reusable processing logic, validation, transformation, exception handling, monitoring, and downstream system integration.",
      "Increased processing throughput to 200 documents per minute by profiling bottlenecks, redesigning batch execution, refining processing logic, and optimizing data movement across dependent services.",
      "Maintained 95% scanned and 90% mobile input accuracy through preprocessing refinement, schema validation, edge case handling, parameter tuning, regression coverage, and release checks across noisy real-world inputs.",
      "Reduced manual intervention by 60% and administrative effort by 40% through automated validation, recovery workflows, reusable processing rules, structured logging, documentation, and coordinated production releases.",
      "Resolved production defects through root cause analysis by tracing logs and intermediate records, reproducing failures, comparing expected versus actual behavior, and validating corrective changes before release.",
      "Supported the full SDLC from requirements through production support with design and code reviews, automated testing, release coordination, root cause analysis, stakeholder updates, and continuous process improvement.",
    ],
  },
];

const FALLBACK_GITHUB = "https://github.com/Harshi2003";

export const projects = [
  {
    title: "ARES Recommender System",
    subtitle: "833 min to 3 min, 157x to 277x faster than LightGCN",
    description:
      "Built an exact similarity recommendation system across four datasets with up to 2.98M interactions, using quantization, bit-sliced vector compression, Hamming distance, and adaptive bitmap compression to cut memory from 421MB to 80MB.",
    tags: ["Python", "pandas", "NumPy", "Quantization", "Bitmap Compression"],
    github: FALLBACK_GITHUB,
    placeholderIcon: "grid",
    placeholderAccent: "coral",
  },
  {
    title: "Atlas AI Code Intelligence Platform",
    subtitle: "Grounded, cited answers across any indexed repo",
    description:
      "A full-stack RAG application that indexes GitHub repositories and returns grounded answers with source references, built on FastAPI, PostgreSQL, pgvector, async indexing, retries, and rate limits.",
    tags: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docker", "GCP"],
    github: FALLBACK_GITHUB,
    placeholderIcon: "code",
    placeholderAccent: "teal",
    featured: true,
  },
  {
    title: "PDF Chatter",
    subtitle: "75% less time digging through long PDFs",
    description:
      "A document question-answering app that chunks and retrieves from long PDFs so people can ask questions instead of scrolling, built serverless on AWS Lambda with Redis caching for speed.",
    tags: ["React", "Node.js", "LangChain", "AWS Lambda", "Redis"],
    github: FALLBACK_GITHUB,
    placeholderIcon: "document",
    placeholderAccent: "amber",
  },
  {
    title: "Real-Time Travel Disruption Intelligence Platform",
    subtitle: "Streaming + batch in one pipeline",
    description:
      "Distributed event processing pipelines with Kafka, Airflow, and Spark Structured Streaming serving real-time travel disruption data, with Prometheus and Grafana keeping failures visible instead of silent.",
    tags: ["Kafka", "Airflow", "Spark", "Cassandra", "FastAPI"],
    github: FALLBACK_GITHUB,
    placeholderIcon: "signal",
    placeholderAccent: "coral",
  },
  {
    title: "AI Stock Intelligence Platform",
    subtitle: "Zero to one, solo",
    description:
      "An AI research product built end to end, with RAG chat, live market data, and document upload with citations, using a provider-agnostic design so local and hosted models swap in without touching app logic.",
    tags: ["React", "Vite", "FastAPI", "RAG", "Market APIs"],
    github: FALLBACK_GITHUB,
    placeholderIcon: "chart",
    placeholderAccent: "teal",
    featured: true,
  },
  {
    title: "AI Healthcare Chart Review and Coding Compliance Platform",
    subtitle: "Evidence-cited clinical decisions",
    description:
      "Structures messy EHR/EMR notes and lab PDFs into reviewable patient encounters, with confidence-based automation, human review, and HL7/FHIR-aligned ingestion so nothing high-stakes ships without a citation.",
    tags: ["TypeScript", "React", "PostgreSQL", "RAG", "HL7/FHIR"],
    github: FALLBACK_GITHUB,
    placeholderIcon: "healthcare",
    placeholderAccent: "amber",
  },
  {
    title: "Box Office Revenue and Movie Success Analysis",
    subtitle: "Revenue forecasting & hit/flop/classic classification",
    description:
      "Regression and classification pipelines using data cleaning, feature engineering, model comparison, and error analysis to identify what drives movie revenue and success.",
    tags: ["Python", "pandas", "scikit-learn", "Regression", "Classification"],
    github: FALLBACK_GITHUB,
    image: boxOfficeImg,
  },
  {
    title: "Student Social Responsibility Platform",
    subtitle: "140+ student initiatives, organized",
    description:
      "A Django and SQL web platform with a relational schema supporting 140+ student social responsibility initiatives and structured workflows for managing initiative data.",
    tags: ["Django", "Python", "SQL", "Relational Data Modeling"],
    github: FALLBACK_GITHUB,
    placeholderIcon: "community",
    placeholderAccent: "coral",
  },
  {
    title: "Telugu Handwritten OCR",
    subtitle: "97.3% recognition accuracy",
    description:
      "Combines CNN embeddings, cosine similarity, and YOLOv8n detection to recognize handwritten Telugu characters — my first project that turned into a peer-reviewed paper.",
    tags: ["Python", "YOLOv8n", "CNN Embeddings", "Optuna"],
    github: FALLBACK_GITHUB,
    placeholderIcon: "scan",
    placeholderAccent: "teal",
  },
  {
    title: "Digital Logic Netlist Simulator",
    subtitle: "Deterministic gate-level simulation",
    description:
      "A C++17 gate-level simulator with netlist parsing, hash-map based signal state, and deterministic propagation, verified with Python functional tests and Linux Make tooling.",
    tags: ["C++17", "Python", "Linux", "Make"],
    github: FALLBACK_GITHUB,
    placeholderIcon: "gate",
    placeholderAccent: "amber",
  },
  {
    title: "Autonomous Driving Reinforcement Learning",
    subtitle: "PPO in CARLA",
    description:
      "A reinforcement learning agent trained in the CARLA simulator with PPO and a VAE for latent-space observation compression, using parallel rollouts and reward shaping for lane following and collision avoidance.",
    tags: ["Python", "PyTorch", "PPO", "CARLA", "VAE"],
    github: "https://github.com/Harshi2003/End-to-End-Autonomous-Driving-using-Proximal-Policy-Optimization",
    image: autonomousSystemImg,
    featured: true,
  },
];

export const publications = [
  {
    title: "Enhancing Emotion Classification Through CNN Models for Speech Analysis",
    venue: "ICT4SD 2024 · Lecture Notes in Networks and Systems · Springer Nature",
    date: "April 2025",
    type: "Conference Paper",
    description:
      "Proposed a CNN-based speech emotion classification framework that improves robustness and accuracy by leveraging spectral feature representations and optimized convolutional architectures.",
    tags: ["Deep Learning", "CNN", "Speech Analysis", "Emotion Recognition"],
    link: "https://link.springer.com/",
  },
  {
    title:
      "Enhancing Stroke Lesion Classification with Conditional GAN: Leveraging Unsupervised Clustering and Class-Conditioned Synthetic Data",
    venue: "2024 IEEE Conference on Smart Computing and Communication (SmartCom) · IEEE Xplore",
    date: "February 2024",
    type: "Conference Paper",
    description:
      "Introduced a conditional GAN-based augmentation strategy combined with unsupervised clustering to improve stroke lesion classification performance under limited labeled data.",
    tags: ["GAN", "Medical Imaging", "Deep Learning", "Data Augmentation"],
    link: "https://ieeexplore.ieee.org/",
  },
  {
    title:
      "A Comparative Study of LSTM and Transformer Models for Deep Learning-Based Sentiment Analysis in Social Media Posts",
    venue: "IJARESM",
    date: "November 2024",
    type: "Journal Article",
    description:
      "Conducted a comparative evaluation of LSTM and Transformer architectures for sentiment analysis, highlighting trade-offs in performance, scalability, and contextual understanding.",
    tags: ["NLP", "LSTM", "Transformers", "Sentiment Analysis"],
    link: "https://www.ijaresm.com/",
  },
];
