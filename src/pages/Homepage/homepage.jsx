import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import palashimg from "../../assets/images/palashimg.jpg";
import Resume from "../../assets/Palash_Resume.pdf";
import NavBar from "../../components/common/navBar";
import SEO from "../../data/seo";
import INFO from "../../data/user";

const HOLD_DURATIONS = [1600, 2000, 2000, 2000, 2000, 2000, 2000, 2600];

const RESUME_BTN_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;700&display=swap');

  .resume-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 9px 20px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    overflow: hidden;
    transition: color 0.4s ease;
    cursor: pointer;
  }
  .resume-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease-in-out;
  }
  .resume-btn:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  .resume-btn-light {
    color: rgba(0,0,0,0.55);
    border: 1.5px solid rgba(0,0,0,0.2);
  }
  .resume-btn-light::before { background: #111; }
  .resume-btn-light:hover   { color: #fff; }
  .resume-btn-dark {
    color: rgba(255,255,255,0.5);
    border: 1.5px solid rgba(255,255,255,0.15);
  }
  .resume-btn-dark::before  { background: rgba(255,255,255,0.1); }
  .resume-btn-dark:hover    { color: #fff; }
  .resume-btn span { position: relative; z-index: 2; }
  .resume-btn i {
    position: relative;
    z-index: 2;
    display: inline-block;
    width: 2px;
    height: 22px;
    background: #c8a800;
    border-radius: 2px;
    transition: width 0.28s ease 0.14s, height 0.28s ease;
  }
  .resume-btn:hover i { width: 20px; height: 2px; transition-delay: 0s; }
  .resume-btn i::before,
  .resume-btn i::after {
    content: '';
    position: absolute;
    right: 0;
    width: 50%;
    height: 2px;
    background: transparent;
    transform-origin: right;
    transition: background 0.25s ease, rotate 0.25s ease;
  }
  .resume-btn i::before { top: 0.5px; }
  .resume-btn i::after  { top: -0.5px; }
  .resume-btn:hover i::before { background: #c8a800; rotate: 45deg;  transition-delay: 0.28s; }
  .resume-btn:hover i::after  { background: #c8a800; rotate: -45deg; transition-delay: 0.28s; }

  @keyframes identity-in {
    0%   { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes identity-out {
    0%   { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-10px); }
  }
  .identity-enter { animation: identity-in  0.35s ease forwards; }
  .identity-exit  { animation: identity-out 0.3s  ease forwards; }
`;

const Homepage = () => {
  const currentSEO = SEO.find((item) => item.page === "home");

  // ── Theme — reads from DOM class, stays in sync with NavBar ────────────
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // ── Identity cycling ────────────────────────────────────────────────────
  const [identityIndex, setIdentityIndex] = useState(0);
  const [identityPhase, setIdentityPhase] = useState("enter");

  useEffect(() => {
    const hold = HOLD_DURATIONS[identityIndex] ?? 2000;

    const holdTimer = setTimeout(() => {
      setIdentityPhase("exit");

      const swapTimer = setTimeout(() => {
        setIdentityIndex((prev) => (prev + 1) % INFO.IDENTITIES.length);
        setIdentityPhase("enter");
      }, 320);

      return () => clearTimeout(swapTimer);
    }, hold);

    return () => clearTimeout(holdTimer);
  }, [identityIndex]);

  const current = INFO.IDENTITIES[identityIndex];

  const textPrimary = dark ? "#f0f0f0" : "#111111";
  const textSecondary = dark ? "#888888" : "#5a5a5a";
  const iconIdle = dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)";
  const iconHover = dark ? "#f0f0f0" : "#111111";
  const dividerColor = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const imgRing = dark ? "rgba(200,168,0,0.2)" : "rgba(200,168,0,0.25)";

  const identityColor = current.isQuestion
    ? dark
      ? "rgba(255,255,255,0.45)"
      : "rgba(0,0,0,0.38)"
    : "#c8a800";

  return (
    <React.Fragment>
      <style>{RESUME_BTN_CSS}</style>

      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <div className="content-wrapper">
          <NavBar active="home" />

          <main
            className="w-full flex flex-col"
            style={{ minHeight: "calc(100vh - 130px)" }}
          >
            <section className="flex-1 flex items-center justify-center px-6 sm:px-10">
              <div className="w-full max-w-5xl flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-16 py-16">
                {/* Left: text */}
                <div className="flex flex-col items-start w-full lg:w-[58%]">
                  {/* Name */}
                  <h1
                    className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-3"
                    style={{
                      color: textPrimary,
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    {INFO.main.name}
                  </h1>

                  {/* Cycling identity */}
                  <div className="h-8 mb-5 overflow-hidden flex items-center">
                    <span
                      key={identityIndex}
                      className={`text-base sm:text-lg font-medium ${
                        identityPhase === "enter"
                          ? "identity-enter"
                          : "identity-exit"
                      }`}
                      style={{
                        color: identityColor,
                        fontFamily: "'Syne', sans-serif",
                        fontStyle: current.isQuestion ? "italic" : "normal",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {current.text}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
                    style={{ color: textSecondary }}
                  >
                    <span
                      style={{
                        color: "#c8a800",
                        fontStyle: "italic",
                        fontWeight: 500,
                      }}
                    >
                      {INFO.homepage.heroDescription.intro}
                    </span>{" "}
                    {INFO.homepage.heroDescription.mid}{" "}
                    <strong
                      style={{
                        color: dark ? "#f5f0dc" : "#1a1a1a",
                        fontWeight: 700,
                      }}
                    >
                      {INFO.homepage.heroDescription.dayWord}
                    </strong>{" "}
                    {INFO.homepage.heroDescription.midJoin}{" "}
                    <strong
                      style={{
                        color: dark ? "#a1a1aa" : "#3f3f46",
                        fontWeight: 700,
                      }}
                    >
                      {INFO.homepage.heroDescription.nightWord}
                    </strong>{" "}
                    {INFO.homepage.heroDescription.end}
                  </p>

                  {/* Socials + Resume */}
                  <div className="flex flex-wrap items-center gap-4">
                    {[
                      {
                        icon: faGithub,
                        href: INFO.socials.github,
                        label: "GitHub",
                      },
                      {
                        icon: faLinkedin,
                        href: INFO.socials.linkedin,
                        label: "LinkedIn",
                      },
                      {
                        icon: faEnvelope,
                        href: `mailto:${INFO.main.email}`,
                        label: "Email",
                      },
                    ].map(({ icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="transition-transform duration-200 hover:scale-110"
                        style={{ color: iconIdle }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = iconHover)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = iconIdle)
                        }
                      >
                        <FontAwesomeIcon
                          icon={icon}
                          style={{ fontSize: "22px" }}
                        />
                      </a>
                    ))}

                    <span
                      className="hidden sm:block h-5 w-px"
                      style={{ backgroundColor: dividerColor }}
                    />

                    <a
                      href={Resume}
                      download="Palash_Resume"
                      className={`resume-btn ${dark ? "resume-btn-dark" : "resume-btn-light"}`}
                    >
                      <i></i>
                      <span>Download Resume</span>
                    </a>
                  </div>
                </div>

                {/* Right: photo */}
                <div className="shrink-0 flex items-center justify-center w-full lg:w-auto">
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-[18%] scale-110 blur-2xl"
                      style={{
                        backgroundColor: "#c8a800",
                        opacity: dark ? 0.12 : 0.1,
                      }}
                      aria-hidden="true"
                    />
                    <div
                      className="relative overflow-hidden rounded-[18%]"
                      style={{
                        width: "clamp(240px, 28vw, 320px)",
                        aspectRatio: "1 / 1",
                        transform: "rotate(3deg)",
                        boxShadow: `0 0 0 3px ${imgRing}, 0 20px 50px rgba(0,0,0,${dark ? "0.5" : "0.12"})`,
                      }}
                    >
                      <img
                        src={palashimg}
                        alt="Palash Rambhia"
                        className="w-full h-full object-cover block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="w-full max-w-5xl mx-auto px-6 sm:px-10">
              <div
                className="h-px w-full"
                style={{ backgroundColor: dividerColor }}
              />
            </div>

            {/* Drop <Works />, <Projects />, <Articles /> below here */}
            <div className="page-footer" />
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
