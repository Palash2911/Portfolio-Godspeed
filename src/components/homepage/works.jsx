import {
  faBriefcase,
  faGraduationCap,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Card from "../common/card";
import Experience from "../../data/work.js";

import "./styles/works.css";

const getInitials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const WorkLogo = ({ logo, name }) => {
  if (logo) {
    return <img src={logo} alt={name} className="work-image" />;
  }
  return (
    <div className="work-image work-initials" aria-label={name}>
      {getInitials(name)}
    </div>
  );
};

const Works = () => {
  const workExp = Experience[0];
  const leadershipExp = Experience[1];
  const educationList = Experience[2];

  return (
    <div className="works-outer-container">
      <Card
        icon={faBriefcase}
        title="Work Experience"
        body={
          <div className="works-body">
            {workExp.map((work, index) => (
              <div className="work" key={index}>
                <WorkLogo logo={work.logo} name={work.companyName} />
                <div className="work-data">
                  <div className="work-title">{work.companyName}</div>
                  <div className="lower-work-container">
                    <div className="work-subtitle">{work.role}</div>
                    <div className="work-duration">{work.servingDate}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      />

      <br />
      <br />

      <Card
        icon={faGraduationCap}
        title="Education"
        body={
          <div className="works-body">
            {educationList.map((edu, index) => (
              <div className="work" key={index}>
                <div className="work-image work-initials" aria-label={edu.institution}>
                  {getInitials(edu.institution)}
                </div>
                <div className="work-data">
                  <div className="work-title">{edu.institution}</div>
                  <div className="lower-work-container">
                    <div className="work-subtitle">{edu.degree}</div>
                    <div className="work-duration">{edu.period}</div>
                  </div>
                  <div className="work-grade">{edu.grade}{edu.note ? ` · ${edu.note}` : ""}</div>
                </div>
              </div>
            ))}
          </div>
        }
      />

      <br />
      <br />

      <Card
        icon={faUsers}
        title="Leadership & Extracurriculars"
        body={
          <div className="works-body">
            {leadershipExp.map((work, index) => (
              <div className="work" key={index}>
                <WorkLogo logo={work.logo} name={work.companyName} />
                <div className="work-data">
                  <div className="work-title">{work.companyName}</div>
                  <div className="lower-work-container">
                    <div className="work-subtitle">{work.role}</div>
                    <div className="work-duration">{work.servingDate}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Works;
