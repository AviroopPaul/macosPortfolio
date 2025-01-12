export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  logo: string;
  bulletPoints: { text: string; highlights: string[] }[];
}

export const experiences: Experience[] = [
  {
    role: "Software Development Engineer 1",
    company: "Think41",
    period: "July 2023 - Present",
    description:
      "Built the engineering foundation as a core team member, spearheading Conversational AI, coding automation workflows, and automated PRD generation, achieving a 90% reduction in project start-up time through AI-powered workflows.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGsC2cDNe68Pw/company-logo_200_200/company-logo_200_200/0/1718175225079/think41_logo?e=2147483647&v=beta&t=bqhY8WjuoC4u_z_fLllhB40W4nBXiRKMCfWaeX8UQNc",
    bulletPoints: [
      {
        text: "Built the engineering foundation as a core team member, spearheading Conversational AI, coding automation workflows, and automated PRD generation, achieving a 90% reduction in project start-up time through AI-powered workflows.",
        highlights: ["Conversational AI", "90% reduction"],
      },
      {
        text: "Engineered scalable backends using Django, FastAPI, Rust, and Java Spring Boot (JPA, JDBC, Maven), integrated with React.js and Next.js. Utilized PostgreSQL, MongoDB, and OAuth for secure and efficient systems.",
        highlights: [
          "Django",
          "FastAPI",
          "Rust",
          "Java Spring Boot",
          "React.js",
          "Next.js",
          "PostgreSQL",
          "MongoDB",
          "OAuth",
        ],
      },
      {
        text: "Developed high-performance solutions, including Rust-enabled WebSocket Servers, WASM Compilation, and scalable APIs. Conducted bootcamps and knowledge transfers to enhance interns' expertise in REST APIs, GIT, and development best practices.",
        highlights: [
          "Rust-enabled WebSocket Servers",
          "WASM Compilation",
          "REST APIs",
          "GIT",
        ],
      },
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Nokia Networks",
    period: "Aug 2023 - June 2024",
    description:
      "Built Django APIs to automate the cloning and updating of database objects, ensuring data integrity and efficiency. Integrated the API with a React.js component, reducing the no. of clicks for cloning and automating the whole process for 2x efficiency.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wrM2-YuHU_VCgYOuWmgeS_ncXHN3l4Ad3g&s",
    bulletPoints: [
      {
        text: "Built Django APIs to automate the cloning and updating of database objects, ensuring data integrity and efficiency. Integrated the API with a React.js component, reducing the no. of clicks for cloning and automating the whole process for 2x efficiency.",
        highlights: ["Django APIs", "React.js", "2x efficiency"],
      },
      {
        text: "Improved the product's back-end by modifying Django's admin console to implement dynamic user permissions; streamlined operations to a single click, ensuring 99.9% server up-time during the transition process.",
        highlights: ["Django's admin console", "99.9% server up-time"],
      },
      {
        text: "Designed and implemented algorithms to fetch and parse data from PostgreSQL and MongoDB, apply Excel formulae for calculations, and export results to Excel sheets using XLSXWriter, enhancing customer data analysis capabilities and reducing manual processing time by 50%.",
        highlights: ["PostgreSQL", "MongoDB", "XLSXWriter", "50%"],
      },
      {
        text: "Developed an Excel parser using ExcelJS in Node.js, adding support for conditional formatting and images. Improved functionality by removing redundant worksheets, enhancing performance and user experience.",
        highlights: ["ExcelJS", "Node.js"],
      },
      {
        text: "Deployed production code from GitLab to the production server using Docker and Kubernetes in MobaXterm, handling Docker image build, tag, and push, as well as pod deployment, deletion, server maintenance, and memory optimization.",
        highlights: ["GitLab", "Docker", "Kubernetes", "MobaXterm"],
      },
    ],
  },
];
