import { faBriefcase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Card from "../common/card";

import "./styles/works.css";

import Experience from "../../data/work.js";

const Works = () => {
  return (
    <div className="works-outer-container">
      <Card
        icon={faBriefcase}
        title="Work Experience"
        body={
          <div className="works-body">
            {Experience[0].map((work, index) => (
              <div className="work" key={index}>
                <img src={work.logo} alt="ribin" className="work-image" />
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
        icon={faLaptopCode}
        title="Technical Experience"
        body={
          <div className="works-body">
            {Experience[1].map((work, index) => (
              <div className="work" key={index}>
                <img src={work.logo} alt="ribin" className="work-image" />
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
