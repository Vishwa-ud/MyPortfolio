import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    movie,
    hotel,
    portfolio,
    java,
    python,
    c,
    php,
    kotlin,
    sliit,
    amcc,
    github,
    linkedin,
    insta,
    msql,
    mysql,
    anstudio,
    vscode,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "island",
      title: "My Island",
      isRoute: true,
    },
  ];

  const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Aplication Developer",
      icon: mobile,
    },
    {
      title: "Full-Stack Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Msoft SQL Server",
      icon: msql,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "VS Code",
      icon: vscode,
    },
    {
      name: "Android Studio",
      icon: anstudio,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "kotlin",
      icon: kotlin,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "threejs",
      icon: threejs,
    },
  ];

  const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
  {
    imgPath: "/images/logos/company-logo-12.png",
  },
  {
    imgPath: "/images/logos/company-logo-13.png",
  },
];

  
  const experiences = [
    {
      title: "Undergraduate",
      company_name: "Sri Lanka Institute of Information Technology(SLIIT)",
      icon: sliit,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - 2025",
      points: [
        "Bsc (Hons.) Information Technology Specializing In Software Engineering (2021 - 2025).",
      ],
    },
    {
      title: "Student",
      company_name: "R/ Ananda Maithreya Central College",
      icon: amcc,
      iconBg: "#E6DEDD",
      date: "Dec 2019",
      points: [
        "Advanced Levels With Technology Stream (2019)",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
const expCards = [
  {
    review: "Worked as a remote Intern Full Stack Developer at Datadyne Technologies LLC, a US-based startup. Collaborated closely with the engineering team to support the development and enhancement of a cross-platform desktop application . Contributed to improving product stability, refining user experience, and assisting with core technical processes to support the application's release and scalability.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo2.png",
    title: "Intern Full Stack Developer",
    date: "April 2024 - October 2024",
    responsibilities: [
      "Contributed to development of cross-platform desktop app using ElectronJs for Automotive Shop performance monitor.",
      "Fix ongoing issues and implemented new features based on Client feedback.",
      "Research and development Licensing and distribution of desktop application.",
      "Integrate payment gateways.",
    ],
  },
  {
    review: "This research project was carried out for LOLC Technologies to explore and build intelligent automation solutions for IT support. The work focused on analyzing research gaps and designing core components such as intelligent AI agents, conversational form-filling automation, integrated knowledge-base access, and avatar-driven interfaces. The project also involved studying suitable microservice architectures to support scalability and modularity. Throughout the development process, we followed Agile software engineering practices to iteratively design, implement, and evaluate the system based on real client requirements.",
    imgPath: "/images/exp2.svg",
    logoPath: "/images/logo3.png",
    title: "Research Project",
    date: "October 2024 - October 2025",
    responsibilities: [
      "Developed a Generative AI-based Coustomer and Employee IT Support Chatbot.",
      "Collaborated with the team to implement features based on Client Requirements.",
      "Designed and implemented an automated form-filling system using Rasa to collect user data through conversational flows.",
      "Trained custom Rasa NLU models with example data for accurate intent recognition and entity extraction.",
      "Built a form-loop mechanism with interruption and fallback handling to manage complex support conversations.",
      "Implemented automated ticket classification using Sentence Transformers (ALL-MiniLM-L6) with metadata-based similarity matching.",
      "Integrated LLM-powered suggestion generation using Ollama (Phi-3) to propose subjects and descriptions for user issues.",
      "Developed a hybrid priority-detection engine combining keyword scoring and semantic analysis with business-rule adjustments.",
      "Implemented automated ticket submission workflow and JSON output generation for API integration with client systems.",
    ],
  },
];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Full Stack ASP.NET Core MVC Financial App",
      description:
        "Developed a full-stack financial web app using ASP.NET Core MVC (.NET 9) following MVC architecture, with Entity Framework Core and SQL Server. Built responsive UI with HTML, CSS, JavaScript, and Bootstrap. Managed packages with NuGet and source control with Git.",
      tags: [
        {
          name: "ASP.NET Core",
          color: "blue-text-gradient",
        },
        {
          name: "Entity Framework",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
      ],
      image: "/images/repo/repo1.png", // Update with actual image
      source_code_link: "https://github.com/Vishwa-ud/ASP.NET-Core-MVC-Web-App.git",
      date: "June 2025",
    },
    {
      name: "LearningAssistant ChatBot",
      description:
        "Developed a smart chatbot in Jupyter Notebook using LLaMA via Ollama, RAG, and vectorDB to answer CTSE lecture questions. Integrated LlamaParse for PDF ingestion, SentenceTransformers for semantic search, and applied prompt engineering for accurate LLM responses.",
      tags: [
        {
          name: "Ollama",
          color: "blue-text-gradient",
        },
        {
          name: "RAG",
          color: "green-text-gradient",
        },
        {
          name: "VectorDB",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: "/images/repo/repo2.png", // Update with actual image
      source_code_link: "https://github.com/Vishwa-ud/LearningAssistant-ChatBot.git",
      date: "May 2025 - Apr 2025",
    },
    {
      name: "Educational Platform for Online Learning",
      description:
        "Built a containerized e-learning platform using MERN, and Python Flask microservices orchestrated with Docker. Deployed on Google Cloud Platform (GCP) using Kubernetes for scalable orchestration. Applied DevOps best practices with CI/CD pipelines for automated builds and deployments.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
        {
          name: "Kubernetes",
          color: "blue-text-gradient",
        },
        {
          name: "GCP",
          color: "green-text-gradient",
        },
      ],
      image: "/images/repo/repo3.png", // Update with actual image
      source_code_link: "https://github.com/Vishwa-ud/",
      date: "Mar 2025 - May 2025",
    },
    {
      name: "Next.js Secure Authentication Platform",
      description:
        "Developed a secure Next.js application with OAuth authentication using TypeScript, SASS styling, and PostgreSQL database. Implemented scalable authentication flows and responsive design patterns for optimal user experience.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
        {
          name: "OAuth",
          color: "blue-text-gradient",
        },
      ],
      image: "/images/repo/repo4.png", // Update with actual image
      source_code_link: "https://github.com/Vishwa-ud/",
      date: "Apr 2025",
    },
    {
      name: "Hunger Buster React Native Mobile App",
      description:
        "Created a React Native app addressing UN SDG 2 (Zero Hunger) to connect food donors with distribution networks. Implemented cross-platform functionality with intuitive UX for users.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Mobile Development",
          color: "green-text-gradient",
        },
        {
          name: "Cross-Platform",
          color: "pink-text-gradient",
        },
      ],
      image: "/images/repo/repo5.png", // Update with actual image
      source_code_link: "https://github.com/Vishwa-ud/",
      date: "Jul 2024 - Oct 2024",
    },
    {
      name: "Smart Healthcare System for Urban Hospitals",
      description:
        "Designed a healthcare management system for urban hospitals using MERN stack and OOP principles. Implemented features for patient records, appointment scheduling, and resource allocation.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
      ],
      image: "/images/repo/repo6.png", // Update with actual image
      source_code_link: "https://github.com/Vishwa-ud/",
      date: "Jul 2024 - Oct 2024",
    },
    {
      name: "Automated Code Analyser CodeWizard",
      description:
        "Developed a code analysis tool using MERN stack with Python microservices in Docker containers. Created algorithms for code quality assessment with an intuitive Tailwind CSS dashboard.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
      ],
      image: "/images/repo/repo7.png", // Update with actual image
      source_code_link: "https://github.com/Vishwa-ud/",
      date: "Jul 2024 - Oct 2024",
    },
    {
      name: "NASA API Powered Space App",
      description:
        "Developed an interactive web application utilizing NASA's public APIs with ReactJS and Tailwind CSS. Implemented secure authentication with JWT and comprehensive testing using Vitest and Jest.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NASA API",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JWT",
          color: "blue-text-gradient",
        },
      ],
      image: "/images/repo/repo8.png", // Update with actual image
      source_code_link: "https://github.com/Vishwa-ud/",
      date: "Apr 2024 - May 2024",
    },
    {
      name: "University Timetable Management System",
      description:
        "Engineered a backend system for university scheduling using Node.js, Express, and MongoDB. Implemented JWT authentication and comprehensive testing with Jest and unittest frameworks.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "JWT",
          color: "blue-text-gradient",
        },
      ],
      image: "/images/repo/repo9.png", // Update with actual image
      source_code_link: "https://github.com/Vishwa-ud/",
      date: "Mar 2024 - Apr 2024",
    },
    {
      name: "3D Web Developer Portfolio",
      description:
        "Crafted an immersive portfolio website using Three.js, React, and Tailwind CSS with Vite. Implemented interactive 3D models and animations to showcase projects with optimized performance.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Vishwa-ud/",
      date: "Dec 2023 - Jan 2024",
    },
    {
      name: "Movie Theatre Management System",
      description:
        "Built a comprehensive cinema management solution using MERN stack for ticket booking and show management. Created interfaces for both administrators and customers with real-time seat selection.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "MERN Stack",
          color: "pink-text-gradient",
        },
        {
          name: "Redux",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/Vishwa-ud/Movie-theatre-management-system",
      date: "Jul 2023 - Oct 2023",
    },
    {
      name: "Hotel Management System",
      description:
        "Experience the ultimate in hotel management with our web application. Utilizing MVC architecture and CRUD operations, users can effortlessly search for hotels and rooms, while enabling powerful management capabilities.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Microsoft SQL Server",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Apache Tomcat",
          color: "pink-text-gradient",
        },
      ],
      image: hotel,
      source_code_link: "https://github.com/Vishwa-ud/project01",
    },
  ];
  const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Vishwa-ud/',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://lk.linkedin.com/in/vishwa-kuruppu-7271892a2',
    },
    {
      name: 'Instagram',
      iconUrl: insta,
      link: 'https://www.instagram.com/vish__0111/',
  }
];
  
  export { services, technologies, experiences, testimonials, projects, socialLinks, words, logoIconsList, expCards };