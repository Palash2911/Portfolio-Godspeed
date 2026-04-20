import React from "react";
import SkillItem from "./SkillItem";
import "./skills.css";

import angularImage from "../../assets/skillsImages/angularimg.png";
import cppImage from "../../assets/skillsImages/cppimg.png";
import expressImage from "../../assets/skillsImages/expressimg.png";
import firebaseImage from "../../assets/skillsImages/firebaseimg.png";
import flutterImage from "../../assets/skillsImages/flutter.png";
import githubImage from "../../assets/skillsImages/github.png";
import javaImage from "../../assets/skillsImages/javaimg.png";
import mongoImage from "../../assets/skillsImages/mongoimg.png";
import mysqlImage from "../../assets/skillsImages/mysql.png";
import nodeImage from "../../assets/skillsImages/nodejs.jpg";
import postmanImage from "../../assets/skillsImages/postmanimg.png";
import pythonImage from "../../assets/skillsImages/pythonimg.png";
import reactImage from "../../assets/skillsImages/reactimg.jpg";

const SkillsSection = () => {
  const languagesCS = [
    { name: "C / C++", image: cppImage },
    { name: "Python", image: pythonImage },
    { name: "Java", image: javaImage },
    { name: "JavaScript", image: null },
    { name: "TypeScript", image: null },
    { name: "Kotlin", image: null },
  ];

  const frontendMobile = [
    { name: "React.js", image: reactImage },
    { name: "Next.js", image: null },
    { name: "Angular", image: angularImage },
    { name: "Vue.js", image: null },
    { name: "React Native", image: reactImage },
    { name: "Flutter", image: flutterImage },
    { name: "Tailwind CSS", image: null },
  ];

  const backend = [
    { name: "Node.js", image: nodeImage },
    { name: "Express.js", image: expressImage },
    { name: "FastAPI", image: null },
    { name: "REST APIs", image: null },
    { name: "GraphQL", image: null },
    { name: "Microservices", image: null },
  ];

  const cloudDevOps = [
    { name: "AWS", image: null },
    { name: "GCP", image: null },
    { name: "Docker", image: null },
    { name: "Kubernetes", image: null },
    { name: "Terraform", image: null },
    { name: "CI / CD", image: null },
  ];

  const databasesTools = [
    { name: "MySQL", image: mysqlImage },
    { name: "PostgreSQL", image: null },
    { name: "MongoDB", image: mongoImage },
    { name: "Firebase", image: firebaseImage },
    { name: "Redis", image: null },
    { name: "Git", image: githubImage },
    { name: "Postman", image: postmanImage },
  ];

  const categories = [
    { label: "Languages & CS", skills: languagesCS },
    { label: "Frontend & Mobile", skills: frontendMobile },
    { label: "Backend", skills: backend },
    { label: "Cloud & DevOps", skills: cloudDevOps },
    { label: "Databases & Tools", skills: databasesTools },
  ];

  return (
    <div className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skill-set">
        {categories.map((cat, ci) => (
          <div className="skills" key={ci}>
            <h3>{cat.label}</h3>
            <div className="skills-list">
              {cat.skills.map((skill, si) => (
                <SkillItem
                  key={si}
                  skillName={skill.name}
                  skillImage={skill.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
