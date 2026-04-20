import githubImage from "../assets/skillsImages/github.png";
import nodeImage from "../assets/skillsImages/nodejs.jpg";
import pythonImage from "../assets/skillsImages/pythonimg.png";
import reactImage from "../assets/skillsImages/reactimg.jpg";
import firebaseImage from "../assets/skillsImages/firebaseimg.png";

const INFO = {
  main: {
    title: "Palash Rambhia",
    name: "Palash Rambhia",
    email: "palashrambhia2@gmail.com",
    logo: "../logo.png",
  },

  socials: {
    github: "https://github.com/Palash2911",
    linkedin: "https://www.linkedin.com/in/palashrambhia/",
    gmail: "palashrambhia2@gmail.com",
  },

  homepage: {
    title: "Software Engineer · Cloud · Full-Stack · Mobile",
    description:
      "I build and scale production systems — from real-time chat infrastructure handling 10k+ concurrent users to cloud-native ML pipelines. Currently a Teaching Associate at Monash University mentoring 600+ students, while staying deep in cloud-native development and system design.",
  },

  about: {
    title: "I'm Palash Rambhia. I live in Melbourne, and I build things that scale.",
    description:
      "Software engineer with production experience across mobile, web, and cloud — including work with a Microsoft subsidiary (Nuance) and a Google-partnered initiative (Smollan Group). I care deeply about system design, clean APIs, and mentorship. Currently pursuing my Master's at Monash University while teaching 600+ students.",
  },

  achievements: {
    title: "Milestones, recognitions, and things worth mentioning.",
    description:
      "A collection of academic honours, competition results, certifications, and professional milestones.",
  },

  projects: [
    {
      title: "CloudLens",
      description:
        "Cloud-native object detection system for waste management teams to automate plastic classification. Built with FastAPI and YOLO, containerised with Docker, deployed on Kubernetes with Terraform-managed infrastructure and Locust load testing. Stack: GCP · FastAPI · YOLO · Docker · Kubernetes · Terraform · Locust",
      logo: [pythonImage, githubImage],
      linkText: "View on GitHub",
      // TODO: Add live demo link when deployed
      link: "https://github.com/Palash2911",
    },

    {
      title: "Rentara",
      description:
        "Full-stack rental management platform for local agencies and landlords to manage properties, tenants, and ownership workflows. Uses GraphQL APIs, PostgreSQL via Prisma ORM, Redis caching, and Docker deployment. Stack: Node.js · React · GraphQL · PostgreSQL · Redis · Docker",
      logo: [nodeImage, reactImage, githubImage],
      linkText: "View on GitHub",
      // TODO: Add repository link when public
      link: "https://github.com/Palash2911",
    },

    {
      title: "EduFlow CMS",
      description:
        "Production CMS for coaching institutes in India to manage students, schedules, and admin workflows. Features real-time Firebase sync, an AI chatbot, and n8n-based automation pipelines. Stack: React · Firebase · Tailwind CSS · N8N · AI Automation",
      logo: [reactImage, firebaseImage, githubImage],
      linkText: "View on GitHub",
      // TODO: Add repository link when public
      link: "https://github.com/Palash2911",
    },
  ],
};

export default INFO;
