import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import Achievement from "../components/achievements/achieve";
import Achieve from "../data/achievements";
import SEO from "../data/seo";
import INFO from "../data/user";

import "./styles/articles.css";

const Articles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "achievements");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Achievements | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="articles" />
        <div className="content-wrapper">
          <div className="achieve-main-container">
            <div className="achieve-container">
              {Achieve.map((achieve, index) => (
                <div className="achieve-article" key={index}>
                  <Achievement description={achieve} />
                </div>
              ))}
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

export default Articles;
