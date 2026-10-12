
import { motion } from "framer-motion";
import "./SectionHeading.css";

export default function SectionHeading({
  eyebrow = "",
  title = "",
  highlight = "",
  description = "",
  align = "center",
  size = "default",
  variant = "default",
  className = "",
  animate = true,
}) {
  const HeadingTag = size === "large" ? "h1" : "h2";

  return (
    <motion.header
      className={[
        "section-heading-component",
        `sh-align-${align}`,
        `sh-size-${size}`,
        `sh-variant-${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      initial={animate ? { opacity: 0, y: 16 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {eyebrow && (
        <div className="sh-eyebrow-row">
          <span className="sh-eyebrow-decoration" />
          <span className="sh-eyebrow">{eyebrow}</span>
        </div>
      )}

      <HeadingTag className="sh-title">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="sh-highlight">{highlight}</span>
          </>
        )}
      </HeadingTag>

      {variant !== "minimal" && (
        <div className="sh-accent" aria-hidden="true">
          <span />
          <span />
        </div>
      )}

      {description && (
        <p className="sh-description">{description}</p>
      )}
    </motion.header>
  );
}
