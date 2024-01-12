import React from "react";
import { Helmet } from "react-helmet";

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Resume from "../../assets/Palash_Resume.pdf";
import NavBar from "../../components/common/navBar";

import palashimg from "../../assets/images/palashimg.jpg";
import SEO from "../../data/seo";
import INFO from "../../data/user";

import "./homepage.css";

const Homepage = () => {
  const currentSEO = SEO.find((item) => item.page === "home");

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <div className="page-content">
        <div className="content-wrapper">
          <NavBar active="home" />
          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  <h3>{INFO.homepage.title}</h3>
                </div>

                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description}
                </div>

                <div className="homepage-resume-social">
                  <div className="homepage-socials">
                    <a
                      href={INFO.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="homepage-social-icon"
                      />
                    </a>
                    <a
                      href={INFO.socials.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="homepage-social-icon"
                      />
                    </a>
                    <a
                      href={INFO.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="homepage-social-icon"
                      />
                    </a>
                    <a
                      href={`mailto:${INFO.main.email}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faMailBulk}
                        className="homepage-social-icon"
                      />
                    </a>
                    <a
                      href={INFO.socials.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsappSquare}
                        className="homepage-social-icon"
                      />
                    </a>
                  </div>
                  <div className="download-button-container">
                    <a
                      href={Resume}
                      download="Palash_Resume"
                      className="resume-btn"
                      rel="noreferrer"
                    >
                      <i></i>
                      <span>Download Resume</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="homepage-first-area-right-side">
                <div className="homepage-image-container">
                  <div className="homepage-image-wrapper">
                    <img
                      src={palashimg}
                      alt="about"
                      className="homepage-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="page-footer"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
