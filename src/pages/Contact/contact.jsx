import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Footer from "../../components/common/footer";
import NavBar from "../../components/common/navBar";
import SEO from "../../data/seo";
import INFO from "../../data/user";

const CDN = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/";

// Get your free access key at https://web3forms.com — no signup required.
const WEB3FORMS_ACCESS_KEY = "dd29c258-c0c6-4155-9c16-c0023755ac28";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    handle: "@Palash2911",
    href: INFO.socials.github,
    icon: "github.svg",
  },
  {
    label: "LinkedIn",
    handle: "palashrambhia",
    href: INFO.socials.linkedin,
    icon: "linkedin.svg",
  },
  {
    label: "Email",
    handle: INFO.main.email,
    href: `mailto:${INFO.main.email}`,
    icon: "gmail.svg",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "contact");

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
  const cardBg = dark ? "#18181b" : "#ffffff";
  const dividerColor = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const inputBg = dark ? "#27272a" : "#f4f4f5";
  const blueAccent = dark ? "#3b82f6" : "#2563eb";
  const blueBg = dark ? "rgba(59,130,246,0.08)" : "rgba(37,99,235,0.06)";
  const blueBorder = dark ? "rgba(59,130,246,0.2)" : "rgba(37,99,235,0.15)";
  const blueText = dark ? "#93c5fd" : "#1d4ed8";
  const blueHoverBg = dark ? "rgba(59,130,246,0.14)" : "rgba(37,99,235,0.1)";
  const blueHoverBorder = dark ? "rgba(59,130,246,0.4)" : "rgba(37,99,235,0.3)";

  const HOVER_CSS = `
    .contact-input {
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
      outline: none;
    }
    .contact-input:focus {
      border-color: ${blueAccent} !important;
      box-shadow: 0 0 0 3px ${blueBg} !important;
    }
    .contact-input::placeholder {
      color: ${textTertiary};
      opacity: 1;
    }
    .social-link {
      transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
      text-decoration: none;
    }
    .social-link:hover {
      transform: translateX(4px);
      background: ${blueHoverBg} !important;
      border-color: ${blueHoverBorder} !important;
    }
    .social-link:hover .social-link-label {
      color: ${blueText} !important;
    }
    .social-link img {
      transition: filter 0.2s ease;
    }
    .social-link:hover img {
      filter: brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(500%) hue-rotate(190deg);
    }
    .submit-btn {
      transition: box-shadow 0.2s ease, transform 0.2s ease, opacity 0.2s ease;
      cursor: pointer;
    }
    .submit-btn:hover:not(:disabled) {
      box-shadow: 0 8px 28px ${blueAccent}55;
      transform: translateY(-1px);
    }
    .submit-btn:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
    .spinner {
      width: 14px;
      height: 14px;
      border: 2px solid rgba(255,255,255,0.35);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
      flex-shrink: 0;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${formData.name} via portfolio`,
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({ name: "", email: "", contact: "", message: "" });
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setSending(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const inputStyle = {
    background: inputBg,
    border: `1px solid ${borderColor}`,
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "14px",
    color: textPrimary,
    width: "100%",
    fontFamily: "inherit",
  };

  const labelStyle = {
    color: textTertiary,
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    display: "block",
    marginBottom: "6px",
  };

  return (
    <React.Fragment>
      <style>{HOVER_CSS}</style>

      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description ?? ""} />
        <meta
          name="keywords"
          content={currentSEO?.keywords?.join(", ") ?? ""}
        />
      </Helmet>

      <div className="page-content">
        <div className="content-wrapper">
          <NavBar active="contact" />

          <main className="w-full flex justify-center px-6 sm:px-10 pt-16 pb-24">
            <div className="w-full max-w-4xl">
              {/* ── Page Header ──────────────────────────────────────────── */}
              <div className="flex flex-col items-center mb-14">
                {/* <p
                  className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{ color: blueAccent }}
                >
                  Contact
                </p> */}
                <h1
                  className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
                  style={{
                    color: textPrimary,
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  The Director's Call
                </h1>
                <p
                  className="text-sm sm:text-base text-center leading-relaxed max-w-lg"
                  style={{ color: textSecondary }}
                >
                  <em style={{ color: "#c8a800", fontStyle: "italic" }}>
                    Every great collaboration starts with a conversation.
                  </em>{" "}
                  Whether it's a role, a project, or just a good idea worth
                  discussing the inbox is open.
                </p>
              </div>

              {/* ── Two-column layout ────────────────────────────────────── */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5 items-start">
                {/* ── Form Card ─────────────────────────────────────────── */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderColor}`,
                  }}
                >
                  <div
                    style={{
                      height: "3px",
                      background: blueAccent,
                      opacity: 0.65,
                    }}
                  />

                  <div className="p-6 sm:p-7">
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                    >
                      {/* Name + Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" style={labelStyle}>
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className="contact-input"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" style={labelStyle}>
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className="contact-input"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* Contact */}
                      <div>
                        <label htmlFor="contact" style={labelStyle}>
                          Contact
                        </label>
                        <input
                          type="text"
                          id="contact"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          required
                          placeholder="Phone or alternate contact"
                          className="contact-input"
                          style={inputStyle}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" style={labelStyle}>
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="What's on your mind?"
                          className="contact-input"
                          style={{ ...inputStyle, resize: "vertical" }}
                        />
                      </div>

                      {/* Inline feedback */}
                      {submitStatus && (
                        <div
                          style={{
                            padding: "10px 14px",
                            borderRadius: "10px",
                            fontSize: "13px",
                            fontWeight: 500,
                            background:
                              submitStatus === "success"
                                ? "rgba(34,197,94,0.08)"
                                : "rgba(239,68,68,0.08)",
                            border: `1px solid ${
                              submitStatus === "success"
                                ? "rgba(34,197,94,0.25)"
                                : "rgba(239,68,68,0.25)"
                            }`,
                            color:
                              submitStatus === "success"
                                ? "#16a34a"
                                : "#dc2626",
                          }}
                        >
                          {submitStatus === "success"
                            ? "Message sent. I'll get back to you soon."
                            : "Something went wrong. Try emailing me directly."}
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={sending}
                        className="submit-btn"
                        style={{
                          background: blueAccent,
                          color: "#ffffff",
                          border: "none",
                          borderRadius: "10px",
                          padding: "12px 24px",
                          fontSize: "14px",
                          fontWeight: 600,
                          fontFamily: "'Syne', sans-serif",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          width: "100%",
                        }}
                      >
                        {sending ? (
                          <>
                            <span className="spinner" />
                            Sending...
                          </>
                        ) : (
                          "Send Message →"
                        )}
                      </button>
                    </form>
                  </div>
                </div>

                {/* ── Info Card ─────────────────────────────────────────── */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderColor}`,
                  }}
                >
                  <div
                    style={{
                      height: "3px",
                      background: blueAccent,
                      opacity: 0.65,
                    }}
                  />

                  <div className="p-6 sm:p-7 flex flex-col gap-6">
                    {/* Availability block */}
                    <div>
                      <p
                        className="text-[11px] font-semibold tracking-widest uppercase mb-3"
                        style={{ color: textTertiary }}
                      >
                        Get in Touch
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: textSecondary }}
                      >
                        Open to full-time roles, consulting engagements, and
                        research collaborations. Based in Melbourne, Australia.
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: "#22c55e",
                            display: "inline-block",
                            flexShrink: 0,
                            boxShadow: "0 0 0 2px rgba(34,197,94,0.2)",
                          }}
                        />
                        <p className="text-xs" style={{ color: textSecondary }}>
                          Typically responds within 24h
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      className="h-px w-full"
                      style={{ background: dividerColor }}
                    />

                    {/* Social links */}
                    <div className="flex flex-col gap-2.5">
                      <p
                        className="text-[11px] font-semibold tracking-widest uppercase mb-1"
                        style={{ color: textTertiary }}
                      >
                        Find me on
                      </p>
                      {SOCIAL_LINKS.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link flex items-center gap-3 px-4 py-3 rounded-xl"
                          style={{
                            background: blueBg,
                            border: `0.5px solid ${blueBorder}`,
                          }}
                        >
                          <img
                            src={`${CDN}${link.icon}`}
                            style={{ width: 15, height: 15, flexShrink: 0 }}
                            alt={link.label}
                          />
                          <div className="flex-1 min-w-0">
                            <p
                              className="social-link-label text-sm font-semibold"
                              style={{ color: textPrimary }}
                            >
                              {link.label}
                            </p>
                            <p
                              className="text-[11px] truncate"
                              style={{ color: textSecondary }}
                            >
                              {link.handle}
                            </p>
                          </div>
                          <span
                            style={{
                              color: textTertiary,
                              fontSize: "12px",
                              flexShrink: 0,
                            }}
                          >
                            ↗
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
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

export default Contact;
