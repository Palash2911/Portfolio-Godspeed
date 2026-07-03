import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Footer from "../../components/common/footer";
import NavBar from "../../components/common/navBar";
import SEO from "../../data/seo";
import INFO from "../../data/user";
import work from "../../data/work";

const HOVER_CSS = `
  .work-card {
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
  }
  .work-card:hover {
    transform: translateY(-4px);
  }
  .work-card-bar {
    transition: opacity 0.25s ease, height 0.25s ease;
  }
  .work-card:hover .work-card-bar {
    opacity: 1;
    height: 4px;
  }

  .lead-item {
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
    cursor: default;
  }
  .lead-item:hover {
    transform: translateX(5px);
  }
  .lead-item .lead-dot {
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  .lead-item:hover .lead-dot {
    transform: scale(1.5);
    opacity: 1;
  }
  .lead-item .lead-text {
    transition: color 0.2s ease;
  }

  .tag-meta {
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }
`;

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

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
        ${HOVER_CSS}

        .work-card:hover {
          background: ${cardHoverBg} !important;
          border-color: ${borderHover} !important;
          box-shadow: ${cardHoverShadow} !important;
        }

        .lead-item:hover {
          background: ${blueHoverBg} !important;
          border-color: ${blueHoverBorder} !important;
        }

        .lead-item:hover .lead-text {
          color: ${textPrimary} !important;
        }

        .work-card:hover .tag-meta {
          background: ${blueBg} !important;
          border-color: ${blueBorder} !important;
          color: ${blueText} !important;
        }
      `}</style>

      <Helmet>
        <title>{`Work | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description ?? ""} />
        <meta
          name="keywords"
          content={currentSEO?.keywords?.join(", ") ?? ""}
        />
      </Helmet>

      <div className="page-content">
        <div className="content-wrapper">
          <NavBar active="about" />

          <main className="w-full flex justify-center px-6 sm:px-10 pt-16 pb-24">
            <div className="w-full max-w-4xl">
              {/* ── Page Header ──────────────────────────────────────────── */}
              <div className="flex flex-col items-center mb-14">
                {/* <p
                  className="text-3xl font-semibold tracking-[0.18em] uppercase mb-3"
                  style={{ color: textTertiary }}
                >
                  Work
                </p> */}
                <h1
                  className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
                  style={{
                    color: textPrimary,
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  The Director's Cut
                </h1>
                <p
                  className="text-sm sm:text-base text-center leading-relaxed max-w-xl"
                  style={{ color: textSecondary }}
                >
                  <em style={{ color: "#c8a800", fontStyle: "italic" }}>
                    Every production needs people who can actually execute.
                  </em>{" "}
                  Not just pitch the idea in a meeting and disappear, but ship
                  it, own it, and make it better than the brief asked for.
                </p>
              </div>

              {/* ── Professional Experience Label ────────────────────────── */}
              <p
                className="text-2xl font-semibold tracking-[0.12em] uppercase mb-5"
                style={{ color: textSecondary }}
              >
                Professional Experience
              </p>

              {/* ── Professional Experience Cards ────────────────────────── */}
              <div className="flex flex-col gap-5 mb-8">
                {work.professional.map((job, i) => (
                  <div
                    key={i}
                    className="work-card relative rounded-2xl overflow-hidden"
                    style={{
                      background: cardBg,
                      border: `1px solid ${borderColor}`,
                    }}
                  >
                    {/* Blue top accent bar */}
                    <div
                      className="work-card-bar h-0.75 w-full"
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
                            {job.role}
                          </p>
                          <h2
                            className="text-xl font-bold text-left"
                            style={{
                              color: textPrimary,
                              fontFamily: "'Syne', sans-serif",
                            }}
                          >
                            {job.company}
                          </h2>
                        </div>

                        {/* Period badge */}
                        <span
                          className="self-start text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                          style={{
                            background: blueBg,
                            color: blueText,
                            border: `1px solid ${blueBorder}`,
                          }}
                        >
                          {job.period}
                        </span>
                      </div>

                      {/* Meta tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {[job.location, job.type].map((tag) => (
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
                      </div>

                      {/* Divider */}
                      <div
                        className="h-px w-full mb-5"
                        style={{ background: dividerColor }}
                      />

                      {/* Bullet points */}
                      <ul className="flex flex-col gap-2.5">
                        {job.points.map((pt, pi) => (
                          <li key={pi} className="flex gap-3 items-start">
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
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Section Divider ──────────────────────────────────────── */}
              <div
                className="h-px w-full mb-8"
                style={{ background: dividerColor }}
              />

              {/* ── Leadership Experience Label ──────────────────────────── */}
              <p
                className="text-2xl font-semibold tracking-[0.12em] uppercase mb-8"
                style={{ color: textSecondary }}
              >
                Leadership Experience
              </p>

              {/* ── Leadership Cards ─────────────────────────────────────── */}
              <div className="flex flex-col gap-4">
                {work.leadership.map((item, i) => (
                  <div
                    key={i}
                    className="lead-item rounded-xl px-5 py-4"
                    style={{
                      background: blueBg,
                      border: `0.5px solid ${blueBorder}`,
                    }}
                  >
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-3">
                      <div>
                        <p
                          className="text-sm font-semibold text-left"
                          style={{
                            color: textPrimary,
                            fontFamily: "'Syne', sans-serif",
                          }}
                        >
                          {item.role}
                        </p>
                        <p
                          className="text-[12px] mt-0.5 text-left"
                          style={{ color: blueText }}
                        >
                          {item.org}
                        </p>
                      </div>
                      <span
                        className="self-start text-[11px] font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap"
                        style={{
                          background: tagBg,
                          color: tagText,
                          border: `0.5px solid ${borderColor}`,
                        }}
                      >
                        {item.period}
                      </span>
                    </div>

                    {/* Bullet points */}
                    <div className="flex flex-col gap-2">
                      {item.points.map((pt, pi) => (
                        <div key={pi} className="flex gap-3 items-start">
                          <div
                            className="lead-dot mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full"
                            style={{ background: blueAccent, opacity: 0.6 }}
                          />
                          <p
                            className="lead-text text-sm leading-relaxed text-left"
                            style={{ color: textSecondary }}
                          >
                            {pt}
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

export default About;
