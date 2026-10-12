import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Target,
  Eye,
  Users,
  ShieldCheck,
  Activity,
  ClipboardCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";
import "./About.css";

const values = [
  {
    icon: HeartPulse,
    title: "Patient First",
    description:
      "Every treatment plan begins with understanding your needs, goals, and daily challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and Care",
    description:
      "We believe in honest guidance, clear communication, and care that puts you first.",
  },
  {
    icon: Activity,
    title: "Evidence Based Care",
    description:
      "Our approach focuses on structured exercises and personalised recovery strategies.",
  },
  {
    icon: Users,
    title: "Your Partner in Recovery",
    description:
      "We support you throughout your journey, helping you build confidence and consistency.",
  },
];

const benefits = [
  "Personalised recovery plans",
  "Convenient online guidance",
  "Clear exercise instructions",
  "Progress focused approach",
];

function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <HeroSection
        eyebrow="GET TO KNOW US"
        title="Better movement."
        highlight="Better living."
        description="We believe that recovery is more than getting back on your feet. It is about regaining confidence, building strength, and returning to the activities that make life meaningful."
        primaryText="Start Your Journey"
        primaryLink="/contact"
        secondaryText="Explore Our Services"
        secondaryLink="/services"
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1100&q=85"
        imageAlt="Guided movement and physical wellness"
        imageLabel="Recovery with purpose"
        imageDescription="Small steps. Meaningful progress."
        showStats={false}
      />

      {/* Our Story */}
      <section className="about-story about-section">
        <div className="about-container about-story-grid">
          <motion.div
            className="about-story-visual"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=85"
              alt="Physiotherapy and guided physical recovery"
              loading="lazy"
            />

            <div className="about-story-label">
              <span>01</span>
              <div>
                <strong>Care with a purpose</strong>
                <p>Focused on your everyday life</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-story-content"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="OUR STORY"
              title="Every recovery journey"
              highlight="deserves personal care."
              description="Physical discomfort and movement challenges can affect the way we work, rest, and enjoy everyday life. We believe physiotherapy should feel understandable, supportive, and connected to each person's goals."
              align="left"
              className="about-story-heading"
              animate={false}
            />

            <p className="about-story-extra">
              Our approach brings together guided movement, practical
              education, and consistent support to help people work towards
              better mobility and everyday confidence.
            </p>

            <Link to="/services" className="about-inline-link">
              Discover our approach
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-purpose about-section">
        <div className="about-container">
          <SectionHeading
            eyebrow="OUR PURPOSE"
            title="Helping you move towards"
            highlight="a healthier everyday life."
            description="Our purpose guides how we support, educate, and encourage every person on their journey towards improved movement."
            align="center"
            animate={false}
          />

          <div className="about-purpose-grid">
            <motion.article
              className="about-purpose-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="about-purpose-icon">
                <Target size={25} />
              </div>

              <span className="about-card-label">OUR MISSION</span>
              <h3>Make recovery more accessible</h3>
              <p>
                To make physiotherapy guidance more approachable through
                personalised plans, useful education, and support that fits
                into everyday routines.
              </p>
            </motion.article>

            <motion.article
              className="about-purpose-card about-purpose-card-featured"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="about-purpose-icon">
                <Eye size={25} />
              </div>

              <span className="about-card-label">OUR VISION</span>
              <h3>A future with better movement</h3>
              <p>
                To help more people understand their bodies, build healthy
                movement habits, and take an active role in their wellbeing.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values about-section">
        <div className="about-container">
          <div className="about-values-heading">
            <SectionHeading
              eyebrow="WHAT GUIDES US"
              title="Care built on"
              highlight="the right values."
              align="left"
              animate={false}
            />

            <p>
              Good care starts with listening, understanding, and working
              together towards realistic goals.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  className="about-value-card"
                  key={value.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                >
                  <div className="about-value-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="about-approach about-section">
        <div className="about-container about-approach-grid">
          <motion.div
            className="about-approach-content"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeading
              eyebrow="YOUR JOURNEY MATTERS"
              title="A thoughtful approach"
              highlight="to every step."
              description="Progress looks different for everyone. We focus on understanding your starting point, identifying practical goals, and helping you build habits that support long term movement."
              align="left"
              className="about-approach-heading"
              animate={false}
            />

            <div className="about-benefits-list">
              {benefits.map((benefit) => (
                <div className="about-benefit-item" key={benefit}>
                  <CheckCircle2 size={18} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="about-primary-button">
              Talk to Our Team
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            className="about-approach-visual"
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85"
              alt="Guided stretching and mindful movement"
              loading="lazy"
            />

            <div className="about-approach-note">
              <ClipboardCheck size={23} />
              <div>
                <strong>Your goals come first</strong>
                <p>A plan shaped around your needs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Call to Action */}
      <CTASection />
    </main>
  );
}

export default About;