
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bone,
  Brain,
  CheckCircle2,
  HeartPulse,
  PersonStanding,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Video,
  Waves,
  ClipboardCheck
} from "lucide-react";

import CTASection from "../../components/CTASection/CTASection";
import "./Services.css";

const services = [
  {
    number: "01",
    icon: Activity,
    title: "Orthopaedic Physiotherapy",
    category: "PAIN AND MOBILITY",
    description:
      "Support for joint pain, muscle stiffness, movement limitations, and recovery after orthopaedic injuries.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
    points: [
      "Joint and muscle mobility",
      "Strength and flexibility",
      "Functional movement",
    ],
  },
  {
    number: "02",
    icon: PersonStanding,
    title: "Sports Rehabilitation",
    category: "PERFORMANCE AND RECOVERY",
    description:
      "Structured rehabilitation to help active individuals work towards a safe and confident return to sport.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    points: [
      "Injury recovery support",
      "Strength and conditioning",
      "Return to activity planning",
    ],
  },
  {
    number: "03",
    icon: Bone,
    title: "Post Surgical Rehabilitation",
    category: "RECOVERY AND STRENGTH",
    description:
      "Guided exercises and movement support designed around your procedure, recovery stage, and clinician's advice.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85",
    points: [
      "Mobility restoration",
      "Progressive exercises",
      "Functional recovery goals",
    ],
  },
  {
    number: "04",
    icon: Brain,
    title: "Neurological Physiotherapy",
    category: "MOVEMENT AND COORDINATION",
    description:
      "Individualised movement support for people experiencing changes in balance, coordination, or mobility.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    points: [
      "Balance and coordination",
      "Movement practice",
      "Everyday activity support",
    ],
  },
  {
    number: "05",
    icon: Waves,
    title: "Chronic Pain Management",
    category: "COMFORT AND FUNCTION",
    description:
      "A guided approach combining movement education and appropriate exercises to help manage persistent pain.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    points: [
      "Movement education",
      "Activity pacing",
      "Personalised exercise guidance",
    ],
  },
  {
    number: "06",
    icon: HeartPulse,
    title: "Posture and Mobility Care",
    category: "DAILY MOVEMENT",
    description:
      "Practical guidance to improve movement habits, flexibility, body awareness, and everyday physical function.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    points: [
      "Posture awareness",
      "Flexibility and mobility",
      "Movement habit guidance",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Understand your needs",
    description:
      "Share your concerns, movement goals, and relevant health history.",
  },
  {
    number: "02",
    title: "Build your plan",
    description:
      "Work with a qualified professional to determine suitable next steps.",
  },
  {
    number: "03",
    title: "Move forward",
    description:
      "Follow your recommended programme and review your progress regularly.",
  },
];

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-container services-hero-grid">
          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="services-eyebrow">
              <span className="services-eyebrow-dot" />
              OUR PHYSIOTHERAPY SERVICES
            </span>

            <h1>
              Care that helps you
              <span> move forward.</span>
            </h1>

            <p>
              Explore personalised physiotherapy support designed around your
              movement, recovery goals, and everyday life.
            </p>

            <div className="services-hero-actions">
              <Link to="/contact" className="services-primary-button">
                Book a Consultation
                <ArrowUpRight size={18} />
              </Link>

              <a href="#service-list" className="services-secondary-link">
                Explore Services
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="services-hero-points">
              <span>
                <CheckCircle2 size={17} />
                Personalised guidance
              </span>
              <span>
                <CheckCircle2 size={17} />
                Goal focused care
              </span>
            </div>
          </motion.div>

          <motion.div
            className="services-hero-image"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1100&q=85"
              alt="Healthcare professional supporting patient wellbeing"
            />

            <div className="services-hero-image-shade" />

            <div className="services-hero-image-card">
              <span className="services-hero-icon">
                <HeartPulse size={23} />
              </span>
              <div>
                <strong>Your recovery, your goals</strong>
                <p>Guidance shaped around your needs</p>
              </div>
            </div>

            <div className="services-image-tag">
              <Sparkles size={16} />
              Care made personal
            </div>
          </motion.div>
        </div>
      </section>

      <section className="services-intro">
        <div className="services-container services-intro-grid">
          <div>
            <span className="services-eyebrow">HOW WE CAN HELP</span>
            <h2>
              The right support for
              <span> your movement goals.</span>
            </h2>
          </div>

          <p>
            Every person's needs are different. Explore our areas of
            physiotherapy support and speak with a qualified professional to
            understand which approach may be suitable for you.
          </p>
        </div>
      </section>

      <section className="services-list-section" id="service-list">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  className="service-card"
                  key={service.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.08,
                  }}
                >
                  <div className="service-card-image">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />

                    <span className="service-card-number">
                      {service.number}
                    </span>

                    <span className="service-card-icon">
                      <Icon size={22} />
                    </span>
                  </div>

                  <div className="service-card-content">
                    <span className="service-card-category">
                      {service.category}
                    </span>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <ul className="service-card-points">
                      {service.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={15} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="service-card-link"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      Enquire About This Service
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-online-section">
        <div className="services-container services-online-grid">
          <div className="services-online-visual">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
              alt="Online communication for remote physiotherapy guidance"
              loading="lazy"
            />

            <div className="services-online-overlay">
              <span>
                <Video size={21} />
              </span>
              <div>
                <strong>Guidance from home</strong>
                <p>Where remote care is appropriate</p>
              </div>
            </div>
          </div>

          <motion.div
            className="services-online-content"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <span className="services-eyebrow">ONLINE PHYSIOTHERAPY</span>

            <h2>
              Professional guidance,
              <span> wherever you are.</span>
            </h2>

            <p>
              Online consultations may help you access exercise guidance,
              movement education, and follow up support without travelling to
              a clinic, when your condition is suitable for remote care.
            </p>

            <div className="services-online-feature">
              <span>
                <Video size={19} />
              </span>
              <div>
                <strong>Convenient consultations</strong>
                <p>Discuss your concerns with a qualified professional.</p>
              </div>
            </div>

            <div className="services-online-feature">
              <span>
                <ClipboardCheck size={19} />
              </span>
              <div>
                <strong>Structured exercise guidance</strong>
                <p>Understand your recommended exercises and next steps.</p>
              </div>
            </div>

            <Link to="/contact" className="services-primary-button">
              Ask About Online Care
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="services-process-section">
        <div className="services-container">
          <div className="services-process-heading">
            <span className="services-eyebrow">A CLEARER WAY FORWARD</span>
            <h2>
              Your journey starts
              <span> with a conversation.</span>
            </h2>
            <p>
              A simple process helps you understand your options and take the
              next step with confidence.
            </p>
          </div>

          <div className="services-process-grid">
            {steps.map((step, index) => (
              <motion.article
                className="services-process-card"
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="services-process-number">
                  {step.number}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-note-section">
        <div className="services-container">
          <div className="services-note">
            <span>
              <ShieldCheck size={23} />
            </span>
            <div>
              <h3>Your care should be right for you</h3>
              <p>
                The services listed are general areas of support, not a
                diagnosis or a guarantee of results. A qualified professional
                can help determine an appropriate treatment plan. Seek urgent
                medical attention for serious or sudden symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

export default Services;
