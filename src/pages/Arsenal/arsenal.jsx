import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Footer from "../../components/common/footer";
import NavBar from "../../components/common/navBar";
import { projects, skillGroups } from "../../data/arsenal";
import SEO from "../../data/seo";
import INFO from "../../data/user";

const CDN = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/";

const HOVER_CSS_BASE = `
  .skill-chip {
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    cursor: default;
  }

  .project-card {
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
  }
  .project-card:hover {
    transform: translateY(-4px);
  }
  .project-card-bar {
    transition: opacity 0.25s ease, height 0.25s ease;
  }
  .project-card:hover .project-card-bar {
    opacity: 1;
    height: 4px;
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

  .tag-meta {
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }
`;

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
  const tagBg = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)";
  const tagText = dark ? "#71717a" : "#888888";

  const blueAccent = dark ? "#3b82f6" : "#2563eb";
  const blueBg = dark ? "rgba(59,130,246,0.08)" : "rgba(37,99,235,0.06)";
  const blueBorder = dark ? "rgba(59,130,246,0.2)" : "rgba(37,99,235,0.15)";
  const blueText = dark ? "#93c5fd" : "#1d4ed8";
  const blueHoverBg = dark ? "rgba(59,130,246,0.14)" : "rgba(37,99,235,0.1)";
  const blueHoverBorder = dark ? "rgba(59,130,246,0.4)" : "rgba(37,99,235,0.3)";

  return (
    <React.Fragment>
      <style>{`
        ${HOVER_CSS_BASE}

        .skill-chip:hover {
          transform: translateY(-2px);
          border-color: ${borderHover} !important;
          box-shadow: ${dark ? "0 6px 20px rgba(0,0,0,0.4)" : "0 6px 20px rgba(37,99,235,0.1)"} !important;
        }

        .project-card:hover {
          background: ${cardHoverBg} !important;
          border-color: ${borderHover} !important;
          box-shadow: ${cardHoverShadow} !important;
        }

        .project-card:hover .tag-meta {
          background: ${blueBg} !important;
          border-color: ${blueBorder} !important;
          color: ${blueText} !important;
        }
      `}</style>

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
                {/* <p
                  className="text-3xl font-semibold tracking-[0.18em] uppercase mb-3"
                  style={{ color: textTertiary }}
                >
                  Arsenal
                </p> */}
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
                  className="text-sm sm:text-base text-center leading-relaxed max-w-xl"
                  style={{ color: textSecondary }}
                >
                  <em style={{ color: "#c8a800", fontStyle: "italic" }}>
                    Every great character has a toolkit they've spent years
                    perfecting.
                  </em>{" "}
                  Here's the inventory: what's loaded, what's battle-tested, and
                  what gets shipped.
                </p>
              </div>

              {/* ── Tech Stack Label ─────────────────────────────────────── */}
              <p
                className="text-2xl font-semibold tracking-[0.12em] uppercase mb-5"
                style={{ color: textSecondary }}
              >
                Tech Stack
              </p>

              {/* ── Skill Groups ─────────────────────────────────────────── */}
              <div className="flex flex-col gap-9 mb-8">
                {skillGroups.map((group, gi) => (
                  <div key={group.label}>
                    {/* Numbered group header with rule + count */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-xs font-bold tracking-wide shrink-0"
                        style={{ color: blueText }}
                      >
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                      <p
                        className="text-xs font-bold tracking-[0.14em] uppercase shrink-0"
                        style={{ color: textPrimary }}
                      >
                        {group.label}
                      </p>
                      <div
                        className="flex-1 h-px"
                        style={{ background: dividerColor }}
                      />
                      <span
                        className="text-xs font-medium shrink-0"
                        style={{ color: textTertiary }}
                      >
                        {group.skills.length}
                      </span>
                    </div>

                    {/* Skill cards */}
                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill) => {
                        const chipColor =
                          skill.name === "Next.js"
                            ? dark
                              ? "#e4e4e7"
                              : "#111111"
                            : skill.color;
                        return (
                          <div
                            key={skill.name}
                            className="skill-chip flex items-center gap-2.5 rounded-xl px-3 py-2"
                            style={{
                              background: cardBg,
                              border: `1px solid ${borderColor}`,
                            }}
                          >
                            {/* Logo badge — colored square if logo exists, else a dot */}
                            {skill.logo ? (
                              <span
                                className="flex items-center justify-center rounded-lg shrink-0"
                                style={{
                                  width: 26,
                                  height: 26,
                                  background: chipColor,
                                }}
                              >
                                <img
                                  src={`${CDN}${skill.logo}`}
                                  style={{
                                    width: 15,
                                    height: 15,
                                    filter:
                                      "brightness(0) saturate(100%) invert(1)",
                                  }}
                                  alt=""
                                />
                              </span>
                            ) : (
                              <span
                                className="rounded-full shrink-0"
                                style={{
                                  width: 8,
                                  height: 8,
                                  background: chipColor,
                                }}
                              />
                            )}
                            <span
                              className="text-sm font-medium whitespace-nowrap"
                              style={{ color: textPrimary }}
                            >
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Section Divider ──────────────────────────────────────── */}
              <div
                className="h-px w-full mb-8"
                style={{ background: dividerColor }}
              />

              {/* ── Product Builds Label ─────────────────────────────────── */}
              <p
                className="text-2xl font-semibold tracking-[0.12em] uppercase mb-8"
                style={{ color: textSecondary }}
              >
                Product Builds
              </p>

              {/* ── Project Cards ────────────────────────────────────────── */}
              <div className="flex flex-col gap-5">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="project-card relative rounded-2xl overflow-hidden"
                    style={{
                      background: cardBg,
                      border: `1px solid ${borderColor}`,
                    }}
                  >
                    {/* Blue top accent bar */}
                    <div
                      className="project-card-bar h-0.75 w-full"
                      style={{ background: blueAccent, opacity: 0.65 }}
                    />

                    <div className="p-6 sm:p-7">
                      {/* Top row — title/tagline left, stack chips right */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <h2
                            className="text-xl font-bold text-left"
                            style={{
                              color: textPrimary,
                              fontFamily: "'Syne', sans-serif",
                            }}
                          >
                            {project.title}
                          </h2>
                          <p
                            className="text-sm mt-1 text-left"
                            style={{ color: textSecondary }}
                          >
                            {project.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Stack chips row */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="tag-meta text-[11px] px-3 py-1 rounded-full"
                            style={{
                              background: tagBg,
                              color: tagText,
                              border: `0.5px solid ${borderColor}`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Divider */}
                      <div
                        className="h-px w-full mb-5"
                        style={{ background: dividerColor }}
                      />

                      {/* Bullet points */}
                      <ul className="flex flex-col gap-2.5">
                        {project.points.map((pt, i) => (
                          <li key={i} className="flex gap-3 items-start">
                            <span
                              className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full"
                              style={{ background: blueAccent, opacity: 0.6 }}
                            />
                            <p
                              className="text-sm leading-relaxed text-left"
                              style={{ color: textSecondary }}
                            >
                              {pt}
                            </p>
                          </li>
                        ))}
                      </ul>

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
                          <span
                            className="project-link-arrow"
                            style={{ marginLeft: "4px" }}
                          >
                            →
                          </span>
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
