import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../components/common/logo";

const NAV_LINKS = [
  { label: "Start", to: "/", key: "home" },
  { label: "Studies", to: "/studies", key: "studies" },
  { label: "Work", to: "/about", key: "about" },
  { label: "Arsenal", to: "/skills", key: "skills" },
  { label: "Lab", to: "/projects", key: "projects" },
  { label: "Let's Talk", to: "/contact", key: "contact" },
];

const NavBar = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Directly controlled colors — no Tailwind dark: prefix needed
  const pillBg = dark ? "#18181b" : "#ffffff";
  const pillShadow = "0 2px 12px rgba(0,0,0,0.08)";
  const activeText = dark ? "#18181b" : "#ffffff";
  const activeBg = dark ? "#ffffff" : "#18181b";
  const inactiveText = dark ? "#a1a1aa" : "#71717a";
  const inactiveHoverBg = dark ? "#27272a" : "#f4f4f5";
  const inactiveHoverText = dark ? "#ffffff" : "#18181b";

  const pillStyle = {
    background: pillBg,
    boxShadow: pillShadow,
    borderRadius: "999px",
    transition: "background 0.25s",
  };

  return (
    <>
      <style>{`
        .theme-toggle {
          position: relative;
          width: 40px;
          height: 22px;
          flex-shrink: 0;
        }
        .theme-toggle input {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }
        .toggle-track {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: #e4e4e7;
          border: none;
          transition: background 0.25s;
          cursor: pointer;
        }
        .theme-toggle input:checked + .toggle-track {
          background: #3f3f46;
        }
        .toggle-thumb {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          transition: transform 0.25s cubic-bezier(.4,0,.2,1);
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          line-height: 1;
          box-shadow: 0 1px 3px rgba(0,0,0,0.15);
        }
        .theme-toggle input:checked + .toggle-track .toggle-thumb {
          transform: translateX(18px);
        }
        .nav-link {
          display: block;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s, color 0.2s;
        }
        .nav-link:hover {
          background: var(--nav-hover-bg);
          color: var(--nav-hover-text);
        }
      `}</style>

      <header className="sticky top-3 z-50 flex justify-center px-4 pointer-events-none">
        <div
          className="pointer-events-auto w-full max-w-4xl flex items-center justify-between gap-3"
          style={{
            "--nav-hover-bg": inactiveHoverBg,
            "--nav-hover-text": inactiveHoverText,
          }}
        >
          <div style={{ ...pillStyle, padding: "8px 12px", flexShrink: 0 }}>
            <Logo width={32} link={false} />
          </div>

          {/* Nav pill */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <ul
              style={{ ...pillStyle, padding: "8px 12px" }}
              className="flex items-center gap-0.5 list-none m-0"
            >
              {NAV_LINKS.map(({ label, to, key }) => {
                const isActive = active === key;
                return (
                  <li key={key} className="m-0 p-0">
                    <Link
                      to={to}
                      className="nav-link"
                      style={{
                        background: isActive ? activeBg : "transparent",
                        color: isActive ? activeText : inactiveText,
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className="hidden md:flex"
            style={{ padding: "8px 12px", alignItems: "center" }}
          >
            <label className="theme-toggle" aria-label="Toggle dark mode">
              <input
                type="checkbox"
                checked={dark}
                onChange={() => setDark((d) => !d)}
              />
              <div className="toggle-track">
                <div className="toggle-thumb">{dark ? "🌙" : "☀"}</div>
              </div>
            </label>
          </div>

          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            style={{ ...pillStyle, padding: "8px 12px" }}
            className="md:hidden flex flex-col justify-center items-center gap-1 w-12 h-10"
          >
            <span
              style={{ background: dark ? "#d4d4d8" : "#52525b" }}
              className={`block h-[1.5px] w-4 rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[5.5px]" : ""}`}
            />
            <span
              style={{ background: dark ? "#d4d4d8" : "#52525b" }}
              className={`block h-[1.5px] w-4 rounded-full transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              style={{ background: dark ? "#d4d4d8" : "#52525b" }}
              className={`block h-[1.5px] w-4 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      {/* Mobile dropdown */}
      <div
        className={`md:hidden fixed top-18 left-0 right-0 z-40 px-4 transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <nav
          style={{
            background: pillBg,
            boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
            borderRadius: "16px",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {NAV_LINKS.map(({ label, to, key }) => {
            const isActive = active === key;
            return (
              <Link
                key={key}
                to={to}
                style={{
                  background: isActive ? activeBg : "transparent",
                  color: isActive ? activeText : inactiveText,
                  padding: "10px 16px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                {label}
              </Link>
            );
          })}

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: dark ? "#27272a" : "#f4f4f5",
              margin: "4px 0",
            }}
          />

          {/* Theme toggle row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 16px",
              borderRadius: "12px",
            }}
          >
            <span
              style={{ fontSize: "14px", fontWeight: 600, color: inactiveText }}
            >
              {dark ? "⚔️ Vader" : "✨ Jedi"}
            </span>
            <label className="theme-toggle" aria-label="Toggle dark mode">
              <input
                type="checkbox"
                checked={dark}
                onChange={() => setDark((d) => !d)}
              />
              <div className="toggle-track">
                <div className="toggle-thumb">{dark ? "🌙" : "☀"}</div>
              </div>
            </label>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
