import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./styles/project.css";

const Project = (props) => {
  const { logo, title, description, linkText, link } = props;

  return (
    <React.Fragment>
      <div className="project">
        <a href={link} target="_blank" rel="noreferrer">
          <div className="project-container">
            <div className="project-title-link-container">
              <p className="project-title">{title}</p>
              <div className="project-link">
                <div className="project-link-icon">
                  <FontAwesomeIcon icon={faLink} />
                </div>

                <p className="project-link-text">{linkText}</p>
              </div>
            </div>
            <p className="project-description">{description}</p>
            <div className="project-logos">
              {logo.map((item, index) => (
                <img src={item} alt={`logo-${index}`} key={index} />
              ))}
            </div>
          </div>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Project;
