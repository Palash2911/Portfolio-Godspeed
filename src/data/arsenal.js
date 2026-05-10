export const skillGroups = [
  {
    label: "Languages & Fundamentals",
    skills: [
      { name: "C/C++", color: "#00599C" },
      { name: "Python", color: "#3776AB", logo: "python.svg" },
      { name: "TypeScript", color: "#3178C6", logo: "typescript.svg" },
      { name: "Java", color: "#ED8B00" },
      { name: "Kotlin", color: "#7F52FF", logo: "kotlin.svg" },
      { name: "DSA", color: "#6366f1" },
      { name: "OOP", color: "#8b5cf6" },
    ],
  },
  {
    label: "Backend & APIs",
    skills: [
      { name: "Node.js", color: "#339933", logo: "nodedotjs.svg" },
      { name: "Express.js", color: "#888888" },
      { name: "FastAPI", color: "#009688", logo: "fastapi.svg" },
      { name: "REST APIs", color: "#FF6B35" },
      { name: "Microservices", color: "#6366f1" },
      { name: "GraphQL", color: "#E10098", logo: "graphql.svg" },
    ],
  },
  {
    label: "Frontend & Mobile",
    skills: [
      { name: "React.js", color: "#61DAFB", logo: "react.svg" },
      { name: "Next.js", color: null, logo: "nextdotjs.svg" },
      { name: "React Native", color: "#61DAFB", logo: "react.svg" },
      { name: "Flutter", color: "#54C5F8", logo: "flutter.svg" },
      { name: "Jetpack Compose", color: "#4285F4" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS", color: "#FF9900", logo: "amazonaws.svg" },
      { name: "GCP", color: "#4285F4", logo: "googlecloud.svg" },
      { name: "Docker", color: "#2496ED", logo: "docker.svg" },
      { name: "Kubernetes", color: "#326CE5", logo: "kubernetes.svg" },
      { name: "CI/CD", color: "#6366f1" },
      { name: "Ansible", color: "#EE0000", logo: "ansible.svg" },
    ],
  },
  {
    label: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", color: "#336791", logo: "postgresql.svg" },
      { name: "MySQL", color: "#4479A1", logo: "mysql.svg" },
      { name: "MongoDB", color: "#47A248", logo: "mongodb.svg" },
      { name: "Firebase", color: "#FFCA28", logo: "firebase.svg" },
      { name: "Redis", color: "#DC382D", logo: "redis.svg" },
      { name: "Prisma", color: "#2D3748", logo: "prisma.svg" },
      { name: "Git", color: "#F05032", logo: "git.svg" },
      { name: "Postman", color: "#FF6C37", logo: "postman.svg" },
    ],
  },
];

export const projects = [
  {
    title: "CloudLens",
    tagline: "Cloud-native plastic classification on Kubernetes",
    stack: ["GCP", "FastAPI", "YOLO", "Docker", "Kubernetes", "Ansible", "Locust"],
    points: [
      "Built a cloud-native object detection system for waste management teams to automate plastic classification using FastAPI and YOLO.",
      "Containerised with a multi-stage Docker build, deployed on a 3-node Kubernetes cluster provisioned via Terraform on GCP.",
      "Load-tested with Locust to validate throughput under high concurrent request volume.",
    ],
    link: "https://github.com/Palash2911",
  },
  {
    title: "EduFlow CMS",
    tagline: "Production CMS for coaching institutes in India",
    stack: ["React", "Firebase", "Tailwind CSS", "N8N", "AI Automation"],
    points: [
      "Built for coaching institutes to manage student batches, attendance, schedules, resources, and admin workflows end to end.",
      "Real-time Firebase sync, AI chatbot for student support, and n8n-based automation pipelines for notifications and admin tasks.",
    ],
    link: "https://github.com/Palash2911",
  },
  {
    title: "Rentara",
    tagline: "Full-stack rental management for agencies and landlords",
    stack: ["Node.js", "React", "GraphQL", "PostgreSQL", "Redis", "Docker"],
    points: [
      "Full-stack rental management platform for local agencies and landlords to handle properties, tenants, lease agreements, and ownership workflows.",
      "GraphQL API via GraphQL Yoga, PostgreSQL with Prisma ORM, Redis caching, and Docker deployment.",
    ],
    link: "https://github.com/Palash2911",
  },
];
