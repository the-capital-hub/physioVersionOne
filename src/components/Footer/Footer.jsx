
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  FiArrowUpRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowUp,
} from "react-icons/fi";
import "./Footer.css";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Conditions We Treat", path: "/conditions" },
  { label: "Our Team", path: "/team" },
  { label: "Patient Resources", path: "/resources" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

const services = [
  "Pain Management",
  "Sports Rehabilitation",
  "Post Surgery Recovery",
  "Posture Correction",
];

const onlineLinks = [
  { label: "Online Physiotherapy", path: "/online-physiotherapy" },
  { label: "Book Appointment", path: "/appointment" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="footer-top-content">
          <span className="footer-eyebrow">
            YOUR WELLNESS MATTERS
          </span>

          <h2>Ready to move better?</h2>

          <p>
            Take the first step towards a healthier and more active life.
            Our team is here to support your movement and recovery goals.
          </p>
        </div>

        <Link to="/appointment" className="footer-top-button">
          Book Your Appointment
          <FiArrowUpRight size={19} />
        </Link>
      </div>

      <div className="footer-divider" />

      <div className="footer-main container">
        <div className="footer-brand-column">
          <Link
            to="/"
            className="footer-brand"
            aria-label="Rehabics home"
          >
            <span className="footer-brand-icon">
              <svg
                width="28"
                height="28"
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
            </span>

            <span className="footer-brand-copy">
              <strong>Rehabics</strong>
              <small>MOVE BETTER. LIVE BETTER.</small>
            </span>
          </Link>

          <p className="footer-description">
            Personalised physiotherapy focused on movement, mobility
            and helping you work towards your everyday activity goals.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="footer-social-link"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="footer-social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>

          <ul>
            {quickLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>

          <ul>
            {services.map((service) => (
              <li key={service}>
                <Link to="/services">{service}</Link>
              </li>
            ))}
          </ul>

          <div className="footer-online-links">
            {onlineLinks.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Information</h3>

          <a
            className="footer-contact-item"
            href="tel:+910000000000"
          >
            <span className="footer-contact-icon">
              <FiPhone />
            </span>

            <span>
              <small>Call our team</small>
              <strong>Update clinic phone</strong>
            </span>
          </a>

          <a
            className="footer-contact-item"
            href="mailto:hello@rehabics.com"
          >
            <span className="footer-contact-icon">
              <FiMail />
            </span>

            <span>
              <small>Send an email</small>
              <strong>hello@rehabics.com</strong>
            </span>
          </a>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <FiMapPin />
            </span>

            <span>
              <small>Find our clinic</small>
              <strong>Update clinic address</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Rehabics. All rights reserved.</p>

          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>

          <a
            className="footer-back-top"
            href="#root"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Back to Top <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
