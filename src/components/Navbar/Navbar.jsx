import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },

  { name: "Online Physio", path: "/online-physiotherapy" },
  { name: "About Us", path: "/about" },
  { name: "Our Team", path: "/team" },
  { name: "Resources", path: "/resources" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="m18 6-12 12" />
          <path d="m6 6 12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link
          to="/"
          className="brand"
          aria-label="Rehabics home"
          onClick={closeMenu}
        >
          <span className="brand-icon">
            <ActivityIcon />
          </span>

          <span className="brand-copy">
            <strong>Rehabics</strong>
            <small>MOVE BETTER. LIVE BETTER.</small>
          </span>
        </Link>

        <div className="desktop-nav">
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <Link
            to="/appointment"
            className="nav-cta"
            onClick={closeMenu}
          >
            Book Appointment
            <ArrowIcon />
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            {link.name}
            <ArrowIcon />
          </NavLink>
        ))}

        <Link
          to="/appointment"
          className="mobile-nav-cta"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        >
          Book Appointment
          <ArrowIcon />
        </Link>
      </div>
    </header>
  );
}