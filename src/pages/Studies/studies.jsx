import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Footer from "../../components/common/footer";
import NavBar from "../../components/common/navBar";
import SEO from "../../data/seo";
import education from "../../data/studies";
import INFO from "../../data/user";

const HOVER_CSS = `
  .edu-card {
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .edu-card:hover {
    transform: translateY(-4px);
  }
  .edu-card-bar {
    transition: opacity 0.25s ease, height 0.25s ease;
  }
  .edu-card:hover .edu-card-bar {
    opacity: 1;
    height: 4px;
  }

  .ach-item {
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
    cursor: default;
  }
  .ach-item:hover {
    transform: translateX(5px);
  }
  .ach-item .ach-dot {
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  .ach-item:hover .ach-dot {
    transform: scale(1.5);
    opacity: 1;
  }
  .ach-item .ach-text {
    transition: color 0.2s ease;
  }
`;

const Studies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "studies");

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

  const goldBg = dark ? "rgba(200,168,0,0.1)" : "rgba(200,168,0,0.07)";
  const goldBorder = "rgba(200,168,0,0.2)";

  return (
    <React.Fragment>
      <style>{`
        ${HOVER_CSS}

        .edu-card:hover {
          background: ${cardHoverBg} !important;
          border-color: ${borderHover} !important;
          box-shadow: ${cardHoverShadow} !important;
        }

        .ach-item:hover {
          background: ${blueHoverBg} !important;
          border-color: ${blueHoverBorder} !important;
        }

        .ach-item:hover .ach-text {
          color: ${textPrimary} !important;
        }

        .tag-meta {
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .edu-card:hover .tag-meta {
          background: ${blueBg} !important;
          border-color: ${blueBorder} !important;
          color: ${blueText} !important;
        }
      `}</style>

      <Helmet>
        <title>{`Studies | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description ?? ""} />
        <meta
          name="keywords"
          content={currentSEO?.keywords?.join(", ") ?? ""}
        />
      </Helmet>

      <div className="page-content">
        <div className="content-wrapper">
          <NavBar active="studies" />

          <main className="w-full flex justify-center px-6 sm:px-10 pt-16 pb-24">
            <div className="w-full max-w-4xl">
              <div className="flex flex-col items-center">
                <h1
                  className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
                  style={{
                    color: textPrimary,
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  The Academic Reel
                </h1>
                <p
                  className="text-sm sm:text-base text-center leading-relaxed mb-10"
                  style={{ color: textSecondary }}
                >
                  <em style={{ color: "#c8a800", fontStyle: "italic" }}>
                    Every great story has an origin.
                  </em>{" "}
                  Here's the part where the protagonist studies hard, publishes
                  things, wins a few battles, and somehow ends up teaching the
                  next class while still sitting in one.
                </p>
              </div>
              {/* ── Education Label ──────────────────────────────────────── */}
              <p
                className="text-[21px] font-semibold tracking-[0.12em] uppercase mb-5"
                style={{ color: textTertiary }}
              >
                Education
              </p>

              {/* ── Education Cards ──────────────────────────────────────── */}
              <div className="flex flex-col gap-5 mb-16">
                {education.educations.map((edu, i) => (
                  <div
                    key={i}
                    className="edu-card relative rounded-2xl overflow-hidden"
                    style={{
                      background: cardBg,
                      border: `1px solid ${borderColor}`,
                    }}
                  >
                    {/* Blue top bar — thickens on hover via CSS */}
                    <div
                      className="edu-card-bar h-0.75 w-full"
                      style={{ background: blueAccent, opacity: 0.65 }}
                    />

                    <div className="p-6 sm:p-7">
                      {/* Top row */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <p
                            className="text-[11px] font-semibold tracking-wide uppercase mb-1.5 text-left"
                            style={{ color: blueText }}
                          >
                            {edu.degree}
                          </p>
                          <h2
                            className="text-xl font-bold text-left"
                            style={{
                              color: textPrimary,
                              fontFamily: "'Syne', sans-serif",
                            }}
                          >
                            {edu.institution}
                          </h2>
                        </div>

                        {/* Grade badge */}
                        <span
                          className="self-start text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                          style={{
                            background: goldBg,
                            color: "#c8a800",
                            border: `1px solid ${goldBorder}`,
                          }}
                        >
                          {edu.grade}
                        </span>
                      </div>

                      {/* Meta tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {[edu.period, edu.location].map((tag) => (
                          <span
                            key={tag}
                            className="tag-meta text-[11px] px-3 py-1 rounded-full"
                            style={{
                              background: tagBg,
                              color: tagText,
                              border: `0.5px solid ${borderColor}`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                        {edu.note ? (
                          <span
                            className="tag-meta text-[11px] px-3 py-1 rounded-full"
                            style={{
                              background: tagBg,
                              color: tagText,
                              border: `0.5px solid ${borderColor}`,
                            }}
                          >
                            {edu.note}
                          </span>
                        ) : null}
                      </div>

                      {/* Divider */}
                      <div
                        className="h-px w-full mb-5"
                        style={{ background: dividerColor }}
                      />

                      {/* Description */}
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: textSecondary }}
                      >
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Section Divider ──────────────────────────────────────── */}
              <div
                className="h-px w-full mb-16"
                style={{ background: dividerColor }}
              />

              {/* ── Achievements Label ───────────────────────────────────── */}
              <p
                className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-8"
                style={{ color: textTertiary }}
              >
                Achievements
              </p>

              {/* ── Achievement Groups ───────────────────────────────────── */}
              <div className="flex flex-col gap-12">
                {education.achievements.map((group, gi) => (
                  <div key={gi}>
                    {/* Institution label */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="h-4 w-0.75 rounded-full"
                        style={{ background: blueAccent }}
                      />
                      <p
                        className="text-xs font-semibold tracking-wide uppercase"
                        style={{ color: blueText }}
                      >
                        {group.institution}
                      </p>
                      <div
                        className="flex-1 h-px"
                        style={{ background: dividerColor }}
                      />
                    </div>

                    {/* Items */}
                    <div className="flex flex-col gap-2.5">
                      {group.items.map((item, ii) => (
                        <div
                          key={ii}
                          className="ach-item flex gap-3.5 items-start rounded-xl px-4 py-3.5"
                          style={{
                            background: blueBg,
                            border: `0.5px solid ${blueBorder}`,
                          }}
                        >
                          <div
                            className="ach-dot mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full"
                            style={{ background: blueAccent, opacity: 0.6 }}
                          />
                          <p
                            className="ach-text text-sm leading-relaxed text-left"
                            style={{ color: textSecondary }}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
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

export default Studies;
