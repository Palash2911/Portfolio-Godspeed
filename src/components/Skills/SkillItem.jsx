import React from "react";

const SkillItem = ({ skillName, skillImage }) => {
  return (
    <div className="skill-item">
      {skillImage ? (
        <img src={skillImage} alt={skillName} />
      ) : (
        <div className="skill-icon-placeholder" aria-hidden="true" />
      )}
      <p className="skill-name">{skillName}</p>
    </div>
  );
};

export default SkillItem;
