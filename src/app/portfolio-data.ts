export type PortfolioSectionId = "about" | "skills" | "experience" | "certs-awards" | "contact";

export type PortfolioNavItem = {
  id: PortfolioSectionId;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type Certification = {
  name: string;
};

export type Education = {
  institution: string;
  degree: string;
  major: string;
  period: string;
};

export type PortfolioContact = {
  email: string;
  phone: string;
  linkedinUrl: string;
  linkedinLabel: string;
  location: string;
};

export type PortfolioContent = {
  name: string;
  headline: string;
  heroSummary: string;
  about: string;
  skills: SkillGroup[];
  experiences: ExperienceItem[];
  certifications: Certification[];
  education: Education;
  contact: PortfolioContact;
  navItems: PortfolioNavItem[];
};

export const portfolioContent: PortfolioContent = {
  name: "Jonathan Lopeti",
  headline: "Senior Full-Stack Engineer",
  heroSummary:
    "Full-stack developer with 7+ years delivering scalable, user-centric web applications across banking and public-sector domains.",
  about:
    "Over the past 7+ years, I have delivered scalable, user-centric software across banking and public-sector domains. I specialize in React and Spring Boot with a strong focus on clean architecture, simplicity, performance, and both user and developer experience. I value creating safe, empowered teams where people can voice ideas and concerns.",
  skills: [
    {
      title: "Frontend",
      items: [
        "React (JS/TS)",
        "Redux / Redux Toolkit",
        "RxJS",
        "Tailwind CSS",
        "Jest",
        "Cypress",
        "Playwright",
        "React Testing Library",
        "UI/UX Design",
      ],
    },
    {
      title: "Backend",
      items: ["Spring Boot (Java/Kotlin)", "GraphQL", "Kafka", "Swagger", "Apigee", "Oracle DB", "DB2"],
    },
    {
      title: "DevOps & Tools",
      items: [
        "Docker",
        "Jenkins",
        "OpenShift",
        "Nx mono-repo",
        "Dynatrace",
        "Splunk",
        "Graylog",
        "Micro-frontend architecture",
      ],
    },
    {
      title: "Practices",
      items: ["Agile (Scrum/Kanban)", "Leadership", "Mentorship", "Requirements Analysis", "Continuous Integration", "Test Automation"],
    },
  ],
  experiences: [
    {
      role: "Senior Developer",
      company: "New Zealand Police",
      period: "Nov 2023 - Feb 2026",
      bullets: [
        "Led note-taking and photo-sharing capabilities that streamlined case-building workflows for officers and photographers.",
        "Delivered features improving visibility of critical operational data, including bail status, task assignment, and officer location context.",
        "Migrated legacy frontends into an Nx-managed React (TypeScript) monorepo to improve maintainability and reduce duplication.",
        "Designed and introduced Playwright-based e2e automation architecture and CI pipeline stages for reliable regression coverage.",
        "Improved CI/CD simplicity and build performance via Docker multi-stage builds with stage-level caching.",
        "Upgraded React and Angular applications to patch vulnerabilities and align with newer framework standards.",
      ],
    },
    {
      role: "Developer",
      company: "BNZ",
      period: "Feb 2019 - Nov 2023",
      bullets: [
        "Delivered daily-used staff workflows including Visa card ordering, blocking, and unblocking across branch operations.",
        "Pioneered BNZ's first micro-frontend (AngularJS), then modernized it to React (TypeScript), setting patterns for future initiatives.",
        "Built frontend and microservice features end-to-end in a distributed microservices ecosystem.",
        "Automated ServiceNow standard-change creation pre-deployment, increasing release cadence from once every two days to multiple releases daily.",
        "Migrated Spring Boot APIs from Oracle JDK 8 to OpenJDK 11 to reduce technical debt and address vulnerabilities.",
        "Implemented Dynatrace monitoring/logging and maintained Cypress e2e coverage and onboarding documentation.",
      ],
    },
  ],
  certifications: [{ name: "Azure Fundamentals" }],
  education: {
    institution: "Auckland University of Technology",
    degree: "Bachelor of Computer and Information Sciences",
    major: "Software Development",
    period: "Feb 2015 - Aug 2018",
  },
  contact: {
    email: "jonathanlopeti@gmail.com",
    phone: "+61 401 237 175",
    linkedinUrl: "https://www.linkedin.com/in/tane-lopeti",
    linkedinLabel: "linkedin.com/in/tane-lopeti",
    location: "Melbourne, Australia",
  },
  navItems: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certs-awards", label: "Certs" },
    { id: "contact", label: "Contact" },
  ],
};
