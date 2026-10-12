
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
      "Build comfort and confidence with care focused on movement, posture, and the activities that matter to you.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    alt: "Guided movement session in a physiotherapy setting",
  },
  {
    number: "02",
    title: "Sports Rehabilitation",
    description:
      "Work towards restoring strength, balance, and movement after a sports related injury.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85",
    alt: "Athlete training to improve strength and movement",
  },
  {
    number: "03",
    title: "Joint and Mobility Care",
    description:
      "Improve flexibility and everyday function with suitable mobility exercises and guided support.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
    alt: "Physiotherapist guiding an exercise session",
  },
  {
    number: "04",
    title: "Post Injury Recovery",
    description:
      "Follow a considered care plan that supports gradual progress after an injury or procedure.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
    alt: "Healthcare professional supporting a patient",
  },
];

const conditions = [
  {
    title: "Back discomfort",
    description:
      "Support for daily movement, sitting tolerance, flexibility, and strength.",
    icon: "back",
  },
  {
    title: "Neck and shoulder tension",
    description:
      "Movement guidance and exercise options for posture and comfortable mobility.",
    icon: "neck",
  },
  {
    title: "Knee and joint concerns",
    description:
      "Care focused on mobility, stability, and everyday activities such as walking.",
    icon: "joint",
  },
  {
    title: "Sports injuries",
    description:
      "A gradual return to training through appropriate movement and strength work.",
    icon: "sport",
  },
  {
    title: "Recovery after surgery",
    description:
      "Rehabilitation guided by your needs and any instructions from your care team.",
    icon: "recovery",
  },
  {
    title: "Balance and flexibility",
    description:
      "Exercises that help you practise control, coordination, and range of movement.",
    icon: "balance",
  },
];

const journey = [
  {
    number: "01",
    title: "Start a conversation",
    description:
      "Tell us what has changed, what feels difficult, and what you would like to do more comfortably.",
  },
  {
    number: "02",
    title: "Understand your movement",
    description:
      "Your physiotherapist discusses your history, goals, and movement needs to plan suitable next steps.",
  },
  {
    number: "03",
    title: "Build your care plan",
    description:
      "Explore treatment options and exercises that fit your condition, routine, and goals.",
  },
  {
    number: "04",
    title: "Review your progress",
    description:
      "Discuss what is improving and adjust your plan as your needs and abilities change.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Care shaped around you",
    description:
      "Your daily routine, concerns, preferences, and goals help guide the care plan.",
  },
  {
    number: "02",
    title: "Understand each step",
    description:
      "Clear explanations help you understand why an exercise or treatment approach is being suggested.",
  },
  {
    number: "03",
    title: "Practical movement guidance",
    description:
      "Learn how to practise suitable movements and build them into your routine where appropriate.",
  },
  {
    number: "04",
    title: "Progress reviewed together",
    description:
      "Your plan can be reviewed over time so care continues to reflect your response and needs.",
  },
];

const tips = [
  {
    category: "DAILY MOVEMENT",
    title: "Give your body regular movement breaks",
    description:
      "If you sit for long periods, change position and take comfortable movement breaks throughout the day.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=85",
    alt: "Person practising a gentle movement routine",
  },
  {
    category: "POSTURE",
    title: "Find a comfortable working position",
    description:
      "Adjust your screen, chair, and working position to support comfort. Change positions rather than trying to stay perfectly still.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85",
    alt: "Comfortable desk setup",
  },
  {
    category: "RECOVERY",
    title: "Build activity gradually",
    description:
      "Follow the advice given for your condition and increase activity at a pace that feels appropriate for your recovery.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=85",
    alt: "Person doing a controlled exercise",
  },
];

const faqs = [
  {
    question: "What happens at my first physiotherapy appointment?",
    answer:
      "Your physiotherapist will discuss your concerns, relevant history, movement, and goals. They can then explain suitable options and agree on next steps with you.",
  },
  {
    question: "Do I need a referral to book an appointment?",
    answer:
      "Requirements can vary depending on your location and circumstances. Contact the clinic before your visit if you are unsure whether a referral is needed.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "This depends on your condition, goals, and how you respond to care. Your physiotherapist can discuss a suitable plan after learning more about your needs.",
  },
  {
    question: "What should I wear to my appointment?",
    answer:
      "Choose comfortable clothing that allows you to move easily. Your physiotherapist will explain if anything specific is helpful for assessing the area involved.",
  },
  {
    question: "Can I continue my usual activities during recovery?",
    answer:
      "That depends on your symptoms and condition. Ask your physiotherapist which activities are suitable and whether any movements should be adjusted for now.",
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

function ConditionIcon({ type }) {
  const paths = {
    back: (
      <>
        <path d="M12 3v18" />
        <path d="M8 6c2 1 6 1 8 0M8 10c2 1 6 1 8 0M8 14c2 1 6 1 8 0M8 18c2 1 6 1 8 0" />
      </>
    ),
    neck: (
      <>
        <path d="M9 4c0 4 1 5 3 6s3 2 3 5v5" />
        <path d="M9 4h6M8 20h8" />
      </>
    ),
    joint: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M8 7l8 10M16 7L8 17" />
      </>
    ),
    sport: (
      <>
        <path d="M5 19 19 5M7 5l12 12M4 9l5-5M15 20l5-5" />
      </>
    ),
    recovery: (
      <>
        <path d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2 4.5 4.5 0 0 1 8 2c0 6.5-8 11-8 11Z" />
        <path d="M9 12h6" />
      </>
    ),
    balance: (
      <>
        <path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7ZM17 7l-3 6h6l-3-6Z" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="home-line-icon"
    >
      {paths[type] || paths.joint}
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
      whileHover={{ y: -5 }}
    >
      <Link
        to="/services"
        className="home-service-image-link"
        aria-label={`Explore ${service.title}`}
      >
        <img
          src={service.image}
          alt={service.alt}
          className="home-service-image"
          loading="lazy"
        />
        <span className="home-service-number">{service.number}</span>
      </Link>

      <div className="home-service-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link to="/services" className="home-text-link">
          Explore service <ArrowIcon />
        </Link>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="home-page">
      <HeroSection />

      <section className="home-trust-strip" aria-label="Our care approach">
        <div className="home-container home-trust-grid">
          {[
            ["01", "Individual attention"],
            ["02", "Clear care plans"],
            ["03", "Guided movement"],
            ["04", "Progress reviews"],
          ].map(([number, label]) => (
            <div className="home-trust-item" key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="home-conditions section-space" id="conditions">
        <div className="home-container">
          <SectionHeading
            eyebrow="SUPPORT FOR EVERYDAY MOVEMENT"
            title="What can we help you"
            highlight="work through?"
            description="Pain, stiffness, or an injury can make familiar activities feel harder. Physiotherapy can help you understand your movement needs and explore suitable ways forward."
            align="center"
            size="default"
            animate={true}
          />

          <div className="home-conditions-grid">
            {conditions.map((condition, index) => (
              <motion.article
                className="home-condition-card"
                key={condition.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <span className="home-condition-icon">
                  <ConditionIcon type={condition.icon} />
                </span>
                <h3>{condition.title}</h3>
                <p>{condition.description}</p>
                <Link to="/services" className="home-text-link">
                  Explore care <ArrowIcon />
                </Link>
              </motion.article>
            ))}
          </div>

          <p className="home-disclaimer">
            The right approach depends on an individual assessment. If symptoms
            are severe, sudden, or getting worse, seek appropriate medical advice.
          </p>
        </div>
      </section>

      <section className="home-services section-space" id="services">
        <div className="home-container">
          <SectionHeading
            eyebrow="HOW WE CAN HELP"
            title="Care that helps you"
            highlight="move forward."
            description="Explore treatment options focused on movement, strength, flexibility, and the everyday goals that matter to you."
            align="center"
            size="default"
            animate={true}
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
              View All Services <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

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
              description="Every person moves differently. We take time to understand your concerns, daily routine, and the activities you want to return to, then help you explore practical next steps."
              align="left"
              size="default"
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
              Get to Know Us <ArrowIcon />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="home-process section-space" id="how-it-works">
        <div className="home-container">
          <SectionHeading
            eyebrow="A CLEAR PATH FORWARD"
            title="Your care journey,"
            highlight="made simple."
            description="Know what to expect, ask questions at every stage, and work with your physiotherapist on care that reflects your needs."
            align="center"
            size="default"
            animate={true}
          />

          <div className="home-process-grid">
            {journey.map((step, index) => (
              <motion.article
                className="home-process-card"
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="home-process-number">{step.number}</div>
                <div className="home-process-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="home-journey-note">
            <span className="home-note-mark">
              <CheckIcon />
            </span>
            <p>
              <strong>Your plan should make sense to you.</strong> We encourage
              questions and shared decisions throughout your care.
            </p>
          </div>
        </div>
      </section>

      <section className="home-benefits section-space" id="why-us">
        <div className="home-container">
          <SectionHeading
            eyebrow="WHY CHOOSE REHABICS"
            title="Care with purpose."
            highlight="Progress with confidence."
            description="A thoughtful physiotherapy experience should help you understand your movement and take practical steps towards meaningful goals."
            align="center"
            size="default"
            animate={true}
          />

          <div className="home-benefits-grid">
            {reasons.map((reason, index) => (
              <motion.article
                className="home-benefit-card"
                key={reason.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className="home-benefit-number">{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-tips section-space" id="movement-tips">
        <div className="home-container">
          <SectionHeading
            eyebrow="SMALL STEPS, EVERYDAY"
            title="Ideas for moving"
            highlight="with more confidence."
            description="Simple reminders can help you pay attention to movement and comfort during everyday routines. Choose advice that suits your needs."
            align="center"
            size="default"
            animate={true}
          />

          <div className="home-tips-grid">
            {tips.map((tip, index) => (
              <motion.article
                className="home-tip-card"
                key={tip.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="home-tip-image">
                  <img src={tip.image} alt={tip.alt} loading="lazy" />
                </div>
                <div className="home-tip-copy">
                  <span className="home-tip-category">{tip.category}</span>
                  <h3>{tip.title}</h3>
                  <p>{tip.description}</p>
                  <Link to="/services" className="home-text-link">
                    Explore physiotherapy <ArrowIcon />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="home-disclaimer">
            These tips are general information, not a personal treatment plan.
            Stop an activity that causes concerning symptoms and seek
            professional advice when needed.
          </p>
        </div>
      </section>

      <section className="home-faq section-space" id="faq">
        <div className="home-container home-faq-grid">
          <div className="home-faq-intro">
            <SectionHeading
              eyebrow="GOOD TO KNOW"
              title="Questions about"
              highlight="physiotherapy?"
              description="Here are answers to common questions before your visit. If you need help with your situation, our team can guide you to the next step."
              align="left"
              size="default"
              animate={false}
            />
            <Link to="/contact" className="home-text-link">
              Ask us a question <ArrowIcon />
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
                    <span className="home-faq-toggle" aria-hidden="true">
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

      <CTASection />
    </main>
  );
}
