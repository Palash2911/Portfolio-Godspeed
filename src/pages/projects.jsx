import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import SkillsSection from "../components/Skills/SkillsSection"; 
import WorkArticles from "./WorkArticle";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo">
              <Logo width={46} />
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="skills-container">
            <SkillsSection />
          </div>

          {/* Projects Section */}
          <div className="projects-container">
            <div className="title projects-title">
              <h2>Things I’ve made trying to put my dent in the universe.</h2>
            </div>
            <div className="projects-list">
              <AllProjects />
            </div>
          </div>

          <div className="WorkArticleSec">
            <h2>Publications</h2>
            <div>
              <WorkArticles/>
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

export default Projects;
