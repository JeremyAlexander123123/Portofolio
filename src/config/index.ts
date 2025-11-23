import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Khuang Ming Jeremy Alexander - Database & IoT Specialist",
  author: "Khuang Ming Jeremy Alexander",
  description:
    "Computer Science student specializing in Database Architecture and Scalable Backend Systems. Focused on optimizing IoT data pipelines for high-performance data management.",
  lang: "en",
  siteLogo: "/Jeremy-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/jeremy-alexander-495087389/" },
    { text: "Github", href: "https://github.com/JeremyAlexander123123" },
    { text: "Instagram", href: "https://www.instagram.com/jeremy.alex_" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Khuang Ming Jeremy Alexander",
    specialty: "Database and Internet of Things Specialist",
    summary:
      "Database Architect specializing in optimizing data structures, implementing secure database solutions for IoT applications, and enabling efficient data management for analytics and insights from connected environments.",
    email: "jeremy.daunan@gmail.com",
  },
  experience: [
    {
      company: "BINUS University",
      position: "Student Mentor",
      startDate: "August 2024",
      endDate: "January 2025",
      summary: [
        "Guided first-year and second-year students through foundational Computer Science subjects, helping them strengthen their understanding of programming, algorithms, and problem-solving.",
        "Provided weekly mentoring sessions covering academic materials, practical exercises, and exam preparation, resulting in improved student performance and higher class engagement.",
        "Supported students in adapting to university life by giving academic advice, study strategies, and technical guidance in course-related projects."
      ],
    },
  ],
  projects: [
    {
      name: "CheckYuk-AI-ChatBot",
      summary: "An AI-powered health assistant providing personalized wellness guidance and support.",
      linkPreview: "https://github.com/JeremyAlexander123123/CheckYuk-AI-ChatBot",
      linkSource: "https://github.com/JeremyAlexander123123/CheckYuk-AI-ChatBot",
      image: "/chatbot.png",
    },
    {
      name: "Salary Analytics",
      summary: "A data analytics platform focused on exploring and visualizing employee salary data.",
      linkPreview: "https://www.canva.com/design/DAGqD4Hgsho/pHxl8unuDL38Sxdc6wA1Ng/edit",
      linkSource: "https://colab.research.google.com/drive/17BZf1HNWw_9gp180B3bQyDcfb24yPDN2?usp=sharing",
      image: "/Analytics.png",
    },
    {
      name: "Wingman AI",
      summary: "A chatbot AI offering personalized advice and responses for your romantic interactions.",
      linkPreview: "https://www.figma.com/design/f4giPuxoJZAsfU9BMBrbZ5/Wingman?node-id=0-1&p=f&t=VTkODC9TBC4FCJZR-0",
      linkSource: "https://github.com/JeremyAlexander123123/AI-AOL",
      image: "/Wingman.png",
    },
  ],
  about: {
    description: `
    Hi, I am Khuang Ming Jeremy Alexander, a 5th-semester Computer Science student at BINUS University with a passion for developing efficient database systems, backend services, and system architecture.
    I have a strong interest in designing, implementing, and optimizing database schemas and clean, modern backend logic. My experience from both university and personal projects has provided me with a practical understanding of development workflows, team collaboration, and version control.
    I am actively seeking an internship opportunity to contribute to real-world projects, particularly those focused on data management and backend systems. I am highly motivated, a fast learner, and eager to grow into a more proficient engineer.
`,
    image: "/Jeremy.jpg"
  },
};

// #5755ff
