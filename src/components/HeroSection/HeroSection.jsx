
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./HeroSection.css";
import image1 from '../../assets/home/image1.jpeg'
const defaultStats = [
  {
    icon: "movement",
    value: "Personalised",
    label: "Care for your needs",
  },
  {
    icon: "people",
    value: "One to one",
    label: "Recovery support",
  },
  {
    icon: "heart",
    value: "Better movement",
    label: "For a healthier you",
  },
];

function FeatureIcon({ type }) {
  if (type === "people") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 19v-2a6 6 0 0 1 12 0v2" />
        <path d="M16 5a3 3 0 0 1 0 6" />
        <path d="M18 14a5 5 0 0 1 3 4v1" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.3 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="15" cy="4" r="2" />
      <path d="m12 8-3 4 4 2 2 5" />
      <path d="m12 8 4 2 3 1" />
      <path d="m9 12-4 1-2 4" />
      <path d="m13 14-4 4-1 3" />
      <path d="m16 10-2 5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
      <path d="m19 15 1 2.5 2 1-2 1-1 2.5-1-2.5-2-1 2-1 1-2.5Z" />
    </svg>
  );
}

export default function HeroSection({
  eyebrow = "PERSONALISED PHYSIOTHERAPY",
  title = "Feel better.",
  highlight = "Move with confidence.",
  description =
    "Thoughtful physiotherapy care to help you build strength, improve mobility and return to the activities that matter to you.",
  primaryText = "Book an Appointment",
  primaryLink = "/contact",
  secondaryText = "Explore Our Services",
  secondaryLink = "/services",
  image =
    image1,
  imageAlt = "Healthcare professional providing patient care",
  imageLabel = "Care designed around you",
  imageDescription = "A more personal approach to recovery",
  stats = defaultStats,
  showStats = true,
  showImage = true,
  reverse = false,
  compact = false,
}) {
  return (
    <section
      className={[
        "hero-section",
        reverse ? "hero-reverse" : "",
        compact ? "hero-compact" : "",
        showImage ? "" : "hero-no-image",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="hero-container">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              highlight={highlight}
              description={description}
              align="left"
              size="large"
              className="hero-heading"
              animate={false}
            />

            <div className="hero-actions">
              {primaryText && primaryLink && (
                <Link
                  to={primaryLink}
                  className="hero-button hero-button-primary"
                >
                  {primaryText}
                  <ArrowIcon />
                </Link>
              )}

              {secondaryText && secondaryLink && (
                <Link
                  to={secondaryLink}
                  className="hero-button hero-button-secondary"
                >
                  {secondaryText}
                </Link>
              )}
            </div>

            {showStats && stats.length > 0 && (
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div className="hero-stat" key={`${stat.value}-${index}`}>
                    <span className="hero-stat-icon">
                      <FeatureIcon type={stat.icon} />
                    </span>

                    <span className="hero-stat-copy">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {showImage && (
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.12 }}
            >
              <div className="hero-orb" aria-hidden="true" />
              <div className="hero-dot-pattern" aria-hidden="true" />

              <div className="hero-image-frame">
                <img
                  src={image}
                  alt={imageAlt}
                  className="hero-image"
                  fetchPriority="high"
                />

                <div className="hero-image-shade" />

                <div className="hero-image-caption">
                  <span className="hero-caption-icon">
                    <FeatureIcon type="heart" />
                  </span>

                  <span className="hero-caption-copy">
                    <strong>{imageLabel}</strong>
                    <span>{imageDescription}</span>
                  </span>
                </div>
              </div>

              <div className="hero-floating-card hero-card-top">
                <span className="hero-floating-icon">
                  <SparkleIcon />
                </span>
                <span>
                  <strong>Care that feels personal</strong>
                  <small>Focused on your goals</small>
                </span>
              </div>

              <div className="hero-image-note">
                <span />
                Movement. Strength. Wellbeing.
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
