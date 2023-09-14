import React from "react";

const SkillItem = ({ skillName, skillImage }) => {
  return (
    <div className="skill-item">
      <img src={skillImage} alt={skillName} />
      <p>{skillName}</p>
    </div>
  );
};

export default SkillItem;
