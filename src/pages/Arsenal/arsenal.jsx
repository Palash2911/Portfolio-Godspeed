import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Footer from "../../components/common/footer";
import NavBar from "../../components/common/navBar";
import SEO from "../../data/seo";
import INFO from "../../data/user";
import { skillGroups, projects } from "../../data/arsenal";

const CDN = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/";

const Arsenal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "arsenal");

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

  const textPrimary = dark ? "#f0f0f0" : "#111111";
  const textSecondary = dark ? "#a1a1aa" : "#52525b";
  const textTertiary = dark ? "#52525b" : "#a1a1aa";
  const borderColor = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const borderHover = dark ? "rgba(59,130,246,0.35)" : "rgba(37,99,235,0.25)";
  const cardBg = dark ? "#18181b" : "#ffffff";
  const cardHoverBg = dark ? "#1c1c20" : "#f8faff";
  const cardHoverShadow = dark
    ? "0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.15)"
    : "0 12px 40px rgba(37,99,235,0.08), 0 0 0 1px rgba(37,99,235,0.1)";
  const dividerColor = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const blueAccent = dark ? "#3b82f6" : "#2563eb";
  const blueBg = dark ? "rgba(59,130,246,0.08)" : "rgba(37,99,235,0.06)";
  const blueBorder = dark ? "rgba(59,130,246,0.2)" : "rgba(37,99,235,0.15)";
  const blueText = dark ? "#93c5fd" : "#1d4ed8";
  const blueHoverBg = dark ? "rgba(59,130,246,0.14)" : "rgba(37,99,235,0.1)";
  const blueHoverBorder = dark ? "rgba(59,130,246,0.4)" : "rgba(37,99,235,0.3)";
  const goldBg = dark ? "rgba(200,168,0,0.1)" : "rgba(200,168,0,0.07)";
  const goldBorder = "rgba(200,168,0,0.2)";

  const HOVER_CSS = `
    .skill-chip {
      transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
      cursor: default;
    }
    .skill-chip:hover {
      background: ${blueHoverBg} !important;
      border-color: ${blueHoverBorder} !important;
      color: ${blueText} !important;
    }
    .skill-chip:hover img {
      filter: brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(500%) hue-rotate(190deg);
    }
    .project-card {
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
    }
    .project-card:hover {
      transform: translateY(-4px);
      background: ${cardHoverBg} !important;
      border-color: ${borderHover} !important;
      box-shadow: ${cardHoverShadow} !important;
    }
    .project-card-bar {
      transition: opacity 0.25s ease;
    }
    .project-card:hover .project-card-bar {
      opacity: 1;
    }
    .project-link {
      transition: color 0.2s ease;
      text-decoration: none;
    }
    .project-link-arrow {
      display: inline-block;
      transition: transform 0.2s ease;
    }
    .project-card:hover .project-link-arrow {
      transform: translateX(3px);
    }
  `;

  return (
    <React.Fragment>
      <style>{HOVER_CSS}</style>

      <Helmet>
        <title>{`Arsenal | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description ?? ""} />
        <meta
          name="keywords"
          content={currentSEO?.keywords?.join(", ") ?? ""}
        />
      </Helmet>

      <div className="page-content">
        <div className="content-wrapper">
          <NavBar active="arsenal" />

          <main className="w-full flex justify-center px-6 sm:px-10 pt-16 pb-24">
            <div className="w-full max-w-4xl">

              {/* ── Page Header ──────────────────────────────────────────── */}
              <div className="flex flex-col items-center mb-14">
                <p
                  className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{ color: blueAccent }}
                >
                  Arsenal
                </p>
                <h1
                  className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
                  style={{
                    color: textPrimary,
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  Loaded and Ready
                </h1>
                <p
                  className="text-sm sm:text-base text-center leading-relaxed max-w-lg"
                  style={{ color: textSecondary }}
                >
                  <em style={{ color: "#c8a800", fontStyle: "italic" }}>
                    Every great character has a toolkit they've spent years
                    perfecting.
                  </em>{" "}
                  Here's the inventory — what's loaded, what's battle-tested,
                  and what gets shipped.
                </p>
              </div>

              {/* ── Tech Stack Label ─────────────────────────────────────── */}
              <p
                className="text-[11px] font-semibold tracking-widest uppercase mb-8"
                style={{ color: textTertiary }}
              >
                Tech Stack
              </p>

              {/* ── Skill Groups ─────────────────────────────────────────── */}
              <div className="flex flex-col gap-10">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p
                      className="text-[11px] font-semibold tracking-wide uppercase mb-3"
                      style={{ color: textTertiary }}
                    >
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => {
                        const chipColor =
                          skill.name === "Next.js"
                            ? dark ? "#e4e4e7" : "#111111"
                            : skill.color;
                        return (
                          <span
                            key={skill.name}
                            className="skill-chip"
                            style={{
                              borderRadius: "999px",
                              background: `${chipColor}12`,
                              border: `0.5px solid ${chipColor}40`,
                              color: chipColor,
                              padding: "3px 10px",
                              fontSize: "12px",
                              fontWeight: 500,
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            {skill.logo && (
                              <img
                                src={`${CDN}${skill.logo}`}
                                style={{ width: 14, height: 14 }}
                                alt=""
                              />
                            )}
                            {skill.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Section Divider ──────────────────────────────────────── */}
              <div
                className="h-px w-full my-16"
                style={{ background: dividerColor }}
              />

              {/* ── Product Builds Label ─────────────────────────────────── */}
              <p
                className="text-[11px] font-semibold tracking-widest uppercase mb-8"
                style={{ color: textTertiary }}
              >
                Product Builds
              </p>

              {/* ── Project Cards ────────────────────────────────────────── */}
              <div className="flex flex-col gap-5">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="project-card rounded-2xl overflow-hidden"
                    style={{
                      background: cardBg,
                      border: `1px solid ${borderColor}`,
                    }}
                  >
                    {/* Blue top accent bar */}
                    <div
                      className="project-card-bar w-full"
                      style={{
                        height: "3px",
                        background: blueAccent,
                        opacity: 0.65,
                      }}
                    />

                    <div className="p-6 sm:p-7">
                      {/* Top row */}
                      <div className="flex justify-between items-start gap-4 flex-wrap">
                        <div>
                          <h2
                            className="text-xl font-bold"
                            style={{
                              color: textPrimary,
                              fontFamily: "'Syne', sans-serif",
                            }}
                          >
                            {project.title}
                          </h2>
                          <p
                            className="text-sm mt-1"
                            style={{ color: textSecondary }}
                          >
                            {project.tagline}
                          </p>
                        </div>

                        {/* Stack chips */}
                        <div className="flex flex-wrap gap-1.5 justify-end">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              style={{
                                borderRadius: "999px",
                                background: goldBg,
                                border: `0.5px solid ${goldBorder}`,
                                color: "#c8a800",
                                fontSize: "10px",
                                fontWeight: 500,
                                padding: "2px 8px",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Divider */}
                      <div
                        className="h-px w-full my-5"
                        style={{ background: dividerColor }}
                      />

                      {/* Bullet points */}
                      <div className="flex flex-col gap-2.5">
                        {project.points.map((pt, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{
                                background: blueAccent,
                                opacity: 0.6,
                                marginTop: "6px",
                              }}
                            />
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: textSecondary }}
                            >
                              {pt}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Bottom row */}
                      <div className="flex justify-end mt-5">
                        <a
                          className="project-link text-xs font-medium"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: blueText }}
                        >
                          View on GitHub{" "}
                          <span className="project-link-arrow" style={{ marginLeft: "4px" }}>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </main>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Arsenal;
