const PROFILE = {
  name: "Mohmmed Mohsin",
  role: "Full-Stack .NET Developer",
  subrole: "Senior Software Engineer · 10.6+ Years",
  location: "Hyderabad, India",
  email: "Mohmmed_mohsin@ymail.com",
  phone: "+91 9849235730",
  cvFile: "assets/MohmmedM_CV.pdf"
};

const STATS = [
  { value: 10.6, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "", label: "Companies" },
  { value: 22, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "", label: "Major Projects Delivered" }
];

const SUMMARY_POINTS = [
  "Senior Software Engineer with 10.6+ years of successful career by commendable performance in C#.Net, ASP.NET Core, EF Core, REST Web API, React JS, Nest JS, Angular 19, Node JS, SQL Server, JavaScript, jQuery, Apache NIFI.",
  "Designed and developed N-tier web and windows applications using ASP.NET Core and Angular as front end, securing them using JWT tokens.",
  "Hands-on with MVC core concepts like Dependency Injection, Middleware, and Session management techniques.",
  "Strong in GOF design patterns — implemented Singleton, Mediator, Adapter, Factory, and Repository patterns.",
  "Skilled in developing systems built on SQL Server using Tables, Triggers, Views, Functions and Stored Procedures, including requirement analysis and design.",
  "Experienced across all phases of the System Development Life Cycle (SDLC) using Waterfall and Agile SCRUM methodologies, capable of managing projects end to end."
];

const COMPETENCIES = [
  "Software Development Lifecycle",
  "Application Support & Maintenance",
  "Agile / Waterfall Methodology",
  "Relational Database Design",
  "Unit Testing & Bug Fixes"
];

const SKILL_GROUPS = [
  {
    label: "Technologies",
    items: ["C#.Net", "ASP.Net Core", "ASP.Net MVC", "EF Core", "ADO.Net", "Web API", "React JS", "Nest JS", "Angular 19", "Node JS", "Prisma", "Mongo DB", "JavaScript", "HTML", "CSS", "AJAX", "jQuery", "GIT", "Microsoft Azure", "Apache NIFI"]
  },
  { label: "Extras", items: ["Web Services", "Windows Services", "LINQ", "Design Patterns"] },
  { label: "RDBMS", items: ["SQL Server"] },
  { label: "IDE", items: ["Visual Studio", "VS Code"] },
  { label: "Others", items: ["UML (Microsoft Visio)", "MS Office"] }
];

const EXPERIENCE = [
  {
    company: "Virtusa Consulting Private Limited",
    location: "Hyderabad",
    role: "IT Consultant",
    period: "July 2025 — Till Date",
    project: "QDF",
    team: 15,
    tools: ["C#.Net", "React JS", "Nest JS", "Node JS", "Prisma", "Apache NIFI", "ASP.NET Core Web API", "SQL Server 2014"],
    description: "An e-commerce platform enabling seamless shopping for airline passengers and airline staff — browsing products, managing carts, and completing purchases with role-based payment options, integrated with inventory, pricing, flight schedules, and delivery notification systems.",
    responsibilities: [
      "Project requirement analysis",
      "Designing and developing the React UI for the QDF application",
      "Following Agile methodology"
    ]
  },
  {
    company: "EPIQ Systems India Private Limited",
    location: "Hyderabad",
    role: "Senior Software Engineer",
    period: "April 2022 — July 2025",
    project: "ASAP Notification Process",
    team: 15,
    tools: ["C#.Net", "React JS", "Nest JS", "Node JS", "Prisma", "Mongo DB", "ASP.NET Core Web API", "SQL Server 2014", "Azure Storage", "Azure Key Vault", "Azure Functions", "Azure SQL Database"],
    description: "Daily monitoring system for a loan portfolio to identify borrowers who have filed bankruptcy — validating and importing subscriber records, scrubbing for matches, and generating reports linked directly to case summary pages.",
    responsibilities: [
      "Project requirement analysis",
      "Designing and developing the React UI for the ASAP application",
      "Following Agile methodology",
      "Production support after completion of each sprint",
      "Participated in transition sessions with the OPS team"
    ]
  },
  {
    company: "Aspire Systems India Private Limited",
    location: "Hyderabad",
    role: "Module Lead",
    period: "Nov 2018 — April 2022",
    project: "IDT (Individual Decision Tool)",
    team: 25,
    tools: ["C#.NET", "ASP.Net Core", "Microservices", "REST Web API", "Angular 10", "JavaScript", "SQL Server 2014", "CQRS", "jQuery"],
    description: "A fast, convenient quoting tool for new prospects — interactive quoting with multiple stored proposals, instant online quotes, cost analysis with contribution, and electronic onboarding paperwork.",
    responsibilities: [
      "Requirement analysis and code design/development",
      "Integrated the complete application and deployed to the QA server",
      "Team management, resolving application issues",
      "Involved in client meetings and release coordination",
      "Analyzed new improvements and their impact for the team"
    ]
  },
  {
    company: "Evoke Technologies",
    location: "Hyderabad",
    role: "Developer",
    period: "July 2017 — Nov 2018",
    project: "Tote Verification & KIT Sheet",
    team: 10,
    tools: ["C#.NET", "ASP.Net Core", "Microservices", "REST Web API", "SQL Server", "JavaScript", "jQuery"],
    description: "Tote Verification validated scanned tote details for match/mismatch outcomes. KIT Sheet calculated Cost Per Unit (CPU) for Ford vehicle-coating materials across Administration and Ford-KIT Sheet modules, tracking inventory and generating usage reports.",
    responsibilities: [
      "Requirement analysis and task allocation across the team",
      "Involved in all SDLC phases: analysis, coding, testing, implementation",
      "Daily offshore status calls and client specification gathering",
      "Handled major enhancements from new business requirements"
    ]
  },
  {
    company: "Volk Soft Technologies",
    location: "Hyderabad",
    role: "Developer",
    period: "July 2015 — April 2017",
    project: "PEERLEND",
    team: null,
    tools: ["C#.NET", "ASP.Net MVC", "SQL Server 2008", "JavaScript", "jQuery"],
    description: "A peer-to-peer lending platform matching individuals who want to lend with those who want to borrow for small-ticket personal loans, without a traditional financial intermediary.",
    responsibilities: [
      "Designed and developed code using the latest frameworks",
      "Translated design documents into working code",
      "Wrote stored procedures and handled database design",
      "Implemented SQL Reporting Services 2008 reports",
      "Prepared test cases, performed unit testing and bug fixing"
    ]
  }
];

const EDUCATION = [
  { degree: "M.Tech, Computer Science & Engineering", school: "Vaagdevi College of Engineering, Warangal", period: "2012 — 2014", score: "76.01%" },
  { degree: "B.Tech, Information Technology", school: "Vaagdevi College of Engineering, Warangal", period: "2008 — 2012", score: "69.94%" },
  { degree: "Intermediate, MPC", school: "Maharshi Junior College, Warangal", period: "2006 — 2008", score: "89.7%" },
  { degree: "SSC", school: "Little Flower High School, Warangal", period: "2006", score: "80%" }
];
