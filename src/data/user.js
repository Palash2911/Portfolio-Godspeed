import firebaseImage from "../assets/skillsImages/firebaseimg.png";
import githubImage from "../assets/skillsImages/github.png";
import nodeImage from "../assets/skillsImages/nodejs.jpg";
import pythonImage from "../assets/skillsImages/pythonimg.png";
import reactImage from "../assets/skillsImages/reactimg.jpg";

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
    heroDescription: {
      intro:
        "Write code the way good directors make films: every layer has a reason, nothing is there by accident, and the thing better hold up on the big screen.",
      mid: "Spending my",
      dayWord: "days",
      midJoin: "teaching 600+ students at Monash and my",
      nightWord: "nights",
      end: "building systems that actually scale. Obsessed with getting the details right.",
    },
    description:
      "I build and scale production systems — from real-time chat infrastructure serving 10k+ concurrent users to cloud-native ML pipelines on Kubernetes. Currently a Teaching Associate at Monash University mentoring 600+ students across UI/UX, C++, and Web Development, while staying deep in system design and cloud-native engineering.",
  },

  about: {
    title:
      "I'm Palash Rambhia. I live in Melbourne, and I build things that scale.",
    description:
      "Software engineer with hands-on production experience across mobile, web, and cloud — including a Microsoft subsidiary (Nuance Communications) and a Google-partnered initiative (Smollan Group). I've led Flutter development across 10+ production releases, rebuilt full mobile apps from scratch, and contributed to graph-based routing algorithms in C++. I care about clean architecture, well-designed APIs, and the kind of mentorship that actually moves people forward. Currently pursuing my Master's in IT at Monash University (WAM 81) while teaching and building.",
  },

  achievements: {
    title: "Milestones, recognitions, and things worth mentioning.",
    description:
      "A collection of academic honours, competition results, certifications, and professional milestones — from an IEEE publication and an IELTS Band 8 to a Google Hackathon AIR 4 and a Microsoft Azure Hackathon top-4 finish.",
  },

  projects: [
    {
      title: "CloudLens",
      description:
        "Cloud-native object detection system for waste management teams to automate marine plastic classification at scale. Built a FastAPI inference service with YOLO, offloading CPU-bound inference to avoid blocking the async event loop. Containerised with a multi-stage Docker build, deployed on a 3-node Kubernetes cluster provisioned via Terraform on GCP, and load-tested with Locust.\n\nStack: GCP · FastAPI · YOLO · Docker · Kubernetes · Terraform · Locust",
      logo: [pythonImage, githubImage],
      linkText: "View on GitHub",
      // TODO: Add repository link when public
      link: "https://github.com/Palash2911",
    },
    {
      title: "Rentara",
      description:
        "Full-stack rental management platform built for local agencies and landlords to handle properties, tenants, lease agreements, and ownership workflows in one place. GraphQL API layer via GraphQL Yoga, PostgreSQL with Prisma ORM, Redis caching for query performance, and Docker for containerised deployment.\n\nStack: Node.js · React · GraphQL · PostgreSQL · Redis · Docker",
      logo: [nodeImage, reactImage, githubImage],
      linkText: "View on GitHub",
      // TODO: Add repository link when public
      link: "https://github.com/Palash2911",
    },
    {
      title: "EduFlow CMS",
      description:
        "Production content management system built for coaching institutes in India to manage student batches, attendance, schedules, resources, and admin workflows. Features real-time Firebase sync, an AI chatbot for student support, and n8n-based automation pipelines for notifications and administrative tasks.\n\nStack: React · Firebase · Tailwind CSS · N8N · AI Automation",
      logo: [reactImage, firebaseImage, githubImage],
      linkText: "View on GitHub",
      // TODO: Add repository link when public
      link: "https://github.com/Palash2911",
    },
  ],

  IDENTITIES: [
    { text: "Who am I?", isQuestion: true },
    { text: "Software Engineer", isQuestion: false },
    { text: "Flutter Tech Lead", isQuestion: false },
    { text: "Cloud Architect", isQuestion: false },
    { text: "University Educator", isQuestion: false },
    { text: "Full-Stack Builder", isQuestion: false },
    { text: "Masters Student", isQuestion: false },
    { text: "Turn's Out... I am all of them.", isQuestion: true },
  ],
};

export default INFO;
