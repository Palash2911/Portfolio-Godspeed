import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Works from "../../components/Experience-Component/Works";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar-Component";

import SEO from "../../data/seo";
import INFO from "../../data/user";

import "./Experience.css";

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-container">
            <div className="homepage-works">
              <Works />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;
