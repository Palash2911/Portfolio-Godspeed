import React from "react";
import SkillItem from "./SkillItem";
import "./skills.css";

import angularImage from "../../assets/skillsImages/angularimg.png";
import cppImage from "../../assets/skillsImages/cppimg.png";
import dartImage from "../../assets/skillsImages/dartimg.png";
import expressImage from "../../assets/skillsImages/expressimg.png";
import flutterImage from "../../assets/skillsImages/flutter.png";
import githubImage from "../../assets/skillsImages/github.png";
import javaImage from "../../assets/skillsImages/javaimg.png";
import kotlinImage from "../../assets/skillsImages/kotlin.png";
import nodeImage from "../../assets/skillsImages/nodejs.jpg";
import postmanImage from "../../assets/skillsImages/postmanimg.png";
import pythonImage from "../../assets/skillsImages/pythonimg.png";
import reactImage from "../../assets/skillsImages/reactimg.jpg";
// import vscodeImage from "../../assets/skills/cssimg.jpg"
import androidImage from "../../assets/skillsImages/androidstudio.png";
// import vercelImage from "../../assets/skills/cssimg.jpg"
import figmaImage from "../../assets/skillsImages/figma.png";
// import canvaImage from "../../assets/skills/flutter.png"
import firebaseImage from "../../assets/skillsImages/firebaseimg.png";
import mongoImage from "../../assets/skillsImages/mongoimg.png";
import mysqlImage from "../../assets/skillsImages/mysql.png";

const SkillsSection = () => {
  const skills1 = [
    { name: "C++", image: cppImage },
    { name: "JAVA", image: javaImage },
    { name: "PYTHON", image: pythonImage },
    { name: "KOTLIN", image: kotlinImage },
    { name: "DART", image: dartImage },
  ];

  const skills2 = [
    { name: "NODE JS", image: nodeImage },
    { name: "EXPRESS JS", image: expressImage },
    { name: "REACT JS", image: reactImage },
    { name: "ANGULAR JS", image: angularImage },
    { name: "FLUTTER", image: flutterImage },
  ];

  const skills3 = [
    { name: "POSTMAN", image: postmanImage },
    { name: "GITHUB", image: githubImage },
    { name: "ANDROID STUDIO", image: androidImage },
    { name: "FIGMA", image: figmaImage },
  ];

  const skills4 = [
    { name: "MYSQL", image: mysqlImage },
    { name: "FIREBASE", image: firebaseImage },
    { name: "MONGO DB", image: mongoImage },
  ];

  return (
    <div className="skills-section : ">
      <h2>Technical Skills</h2>
      <div className="skill-set">
        <div className="skills">
          <div>
            <h3>Programming Languages : </h3>
          </div>
          <div className="skills-list">
            {skills1.map((skill, index) => (
              <SkillItem
                key={index}
                skillName={skill.name}
                skillImage={skill.image}
              />
            ))}
          </div>
        </div>
        <div className="skills">
          <div>
            <h3>Libraries/Frameworks</h3>
          </div>
          <div className="skills-list">
            {skills2.map((skill, index) => (
              <SkillItem
                key={index}
                skillName={skill.name}
                skillImage={skill.image}
              />
            ))}
          </div>
        </div>
        <div className="skills">
          <div>
            <h3>Tools/Platforms</h3>
          </div>
          <div className="skills-list">
            {skills3.map((skill, index) => (
              <SkillItem
                key={index}
                skillName={skill.name}
                skillImage={skill.image}
              />
            ))}
          </div>
        </div>
        <div className="skills">
          <div>
            <h3>Databases</h3>
          </div>
          <div className="skills-list">
            {skills4.map((skill, index) => (
              <SkillItem
                key={index}
                skillName={skill.name}
                skillImage={skill.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
