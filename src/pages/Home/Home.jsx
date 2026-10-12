
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";

import "./Home.css";

const services = [
  {
    number: "01",
    title: "Back and Neck Pain",
    description:
      "Improve mobility and manage everyday discomfort with an individualised treatment approach.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=85",
    link: "/services",
  },
  {
    number: "02",
    title: "Sports Rehabilitation",
    description:
      "Work towards rebuilding strength, movement and confidence after a sports injury.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=700&q=85",
    link: "/services",
  },
  {
    number: "03",
    title: "Joint and Mobility Care",
    description:
      "Support better movement, flexibility and everyday function with guided exercises.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=85",
    link: "/services",
  },
  {
    number: "04",
    title: "Post Injury Recovery",
    description:
      "Follow a structured recovery plan tailored to your individual needs and goals.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=85",
    link: "/services",
  },
];

const process = [
  {
    number: "01",
    title: "Book a Visit",
    description:
      "Choose a convenient appointment and tell us what you need help with.",
  },
  {
    number: "02",
    title: "Understand Your Needs",
    description:
      "Discuss your symptoms, movement and personal recovery goals with your therapist.",
  },
  {
    number: "03",
    title: "Get Your Care Plan",
    description:
      "Work through a treatment and exercise plan designed around your needs.",
  },
];

const benefits = [
  {
    title: "Personalised Treatment",
    description:
      "Care plans shaped around your condition, lifestyle and movement goals.",
    icon: "care",
  },
  {
    title: "Guided Exercises",
    description:
      "Understand each movement and learn how to practise it safely.",
    icon: "guide",
  },
  {
    title: "Progress Focused",
    description:
      "Review your progress and adjust your plan as your needs change.",
    icon: "progress",
  },
];

const faqs = [
  {
    question: "What happens at my first physiotherapy appointment?",
    answer:
      "Your physiotherapist will discuss your concerns, review your movement and goals, and explain suitable next steps for your care.",
  },
  {
    question: "Do I need a referral to book an appointment?",
    answer:
      "Referral requirements depend on your location and circumstances. Contact the clinic to confirm what you need before your visit.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions depends on your condition, goals and progress. Your physiotherapist can discuss an appropriate plan after an assessment.",
  },
  {
    question: "What should I wear to my appointment?",
    answer:
      "Choose comfortable clothing that allows you to move easily and lets your physiotherapist assess the relevant area when needed.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.article
      className="home-service-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={service.link}
        className="home-service-image-link"
        aria-label={`Explore ${service.title}`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="home-service-image"
          loading="lazy"
        />
        <span className="home-service-number">{service.number}</span>
      </Link>

      <div className="home-service-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <Link to={service.link} className="home-text-link">
          Explore service
          <ArrowIcon />
        </Link>
      </div>
    </motion.article>
  );
}

function BenefitIcon({ type }) {
  if (type === "care") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      </svg>
    );
  }

  if (type === "guide") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 17l6-6 4 4 8-9" />
      <path d="M15 6h6v6" />
    </svg>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="home-page">
      {/* Hero */}
      <HeroSection />

      {/* Services */}
      <section className="home-services section-space" id="services">
        <div className="home-container">
          <SectionHeading
            eyebrow="HOW WE CAN HELP"
            title="Care that helps you"
            highlight="move forward."
            description="Explore treatment options focused on movement, strength and your everyday goals."
            align="center"
            className="home-section-intro"
          />

          <div className="home-services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.number}
                service={service}
                index={index}
              />
            ))}
          </div>

          <div className="home-centered-action">
            <Link to="/services" className="home-outline-button">
              View All Services
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* About and Approach */}
      <section className="home-about section-space" id="about">
        <div className="home-container home-about-grid">
          <motion.div
            className="home-about-visual"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
              alt="Healthcare professional discussing patient care"
              loading="lazy"
            />

            <div className="home-about-image-label">
              <span className="home-about-check">
                <CheckIcon />
              </span>
              <div>
                <strong>Your goals matter</strong>
                <span>Care built around your needs</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="home-about-content"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <SectionHeading
              eyebrow="OUR APPROACH"
              title="Your recovery deserves"
              highlight="a personal approach."
              description="Every person moves differently. Physiotherapy should reflect your individual needs, your daily routine and the goals that matter most to you."
              align="left"
              className="home-about-heading"
              animate={false}
            />

            <div className="home-about-points">
              {[
                "Individual assessment and goal setting",
                "Exercise guidance suited to your needs",
                "Clear explanations at every stage",
              ].map((item) => (
                <div className="home-about-point" key={item}>
                  <span>
                    <CheckIcon />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <Link to="/about" className="home-primary-button">
              Get to Know Us
              <ArrowIcon />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="home-process section-space"
        id="how-it-works"
      >
        <div className="home-container">
          <SectionHeading
            eyebrow="A CLEAR PATH FORWARD"
            title="Your care journey,"
            highlight="made simple."
            description="Know what to expect from your first appointment to your personalised care plan."
            align="center"
            className="home-section-intro"
          />

          <div className="home-process-grid">
            {process.map((step, index) => (
              <motion.article
                className="home-process-card"
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="home-process-number">{step.number}</div>
                <div className="home-process-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="home-benefits section-space" id="why-us">
        <div className="home-container">
          <SectionHeading
            eyebrow="WHY CHOOSE US"
            title="Care with purpose."
            highlight="Progress with confidence."
            description="A thoughtful approach to helping you understand your movement and take practical steps towards your goals."
            align="center"
            className="home-section-intro"
          />

          <div className="home-benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.article
                className="home-benefit-card"
                key={benefit.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="home-benefit-icon">
                  <BenefitIcon type={benefit.icon} />
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="home-faq section-space" id="faq">
        <div className="home-container home-faq-grid">
          <div className="home-faq-intro">
            <SectionHeading
              eyebrow="GOOD TO KNOW"
              title="Questions about"
              highlight="physiotherapy?"
              description="Here are answers to some common questions before your visit."
              align="left"
              className="home-faq-heading"
              animate={false}
            />

            <Link to="/contact" className="home-text-link">
              Ask us a question
              <ArrowIcon />
            </Link>
          </div>

          <div className="home-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`home-faq-item ${isOpen ? "is-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="home-faq-question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="home-faq-toggle">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="home-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call To Action */}
      <CTASection />
    </main>
  );
}
