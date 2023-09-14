import React from "react";
import SkillItem from "./SkillItem";
import "./skills.css"

import cppImage from "../../assets/skills/cppimg.png"
import javaImage from "../../assets/skills/javaimg.png"
import pythonImage from "../../assets/skills/pythonimg.png"
import kotlinImage from "../../assets/skills/kotlin.png"
import dartImage from "../../assets/skills/dartimg.png"
import nodeImage from "../../assets/skills/nodejs.jpg"
import expressImage from "../../assets/skills/expressimg.png"
import reactImage from "../../assets/skills/reactimg.jpg"
import angularImage from "../../assets/skills/angularimg.png"
import flutterImage from "../../assets/skills/flutter.png"
import postmanImage from "../../assets/skills/postmanimg.png"
import githubImage from "../../assets/skills/github.png"
// import vscodeImage from "../../assets/skills/cssimg.jpg"
import androidImage from "../../assets/skills/androidstudio.png"
// import vercelImage from "../../assets/skills/cssimg.jpg"
import figmaImage from "../../assets/skills/figma.png"
// import canvaImage from "../../assets/skills/flutter.png"
import mysqlImage from "../../assets/skills/mysql.png"
import firebaseImage from "../../assets/skills/firebaseimg.png"
import mongoImage from "../../assets/skills/mongoimg.png"

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
            <h1>Technical Skills</h1>
            <div className="skill-set">
                <div className="skills">
                    <div>
                        <h3>Programming Languages : </h3>
                    </div>
                    <div  className="skills-list">
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
