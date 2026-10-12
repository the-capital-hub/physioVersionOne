
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  Bone,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  HeartPulse,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Waves,
  X,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";

import "./Conditions.css";

const conditions = [
  {
    id: 1,
    category: "Pain and Joints",
    title: "Back Pain",
    description:
      "Personalized support for back discomfort, movement limitations and everyday activities.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    icon: Activity,
    tags: ["Lower back", "Mobility", "Posture"],
    detail:
      "A physiotherapy assessment can help identify movement limitations and guide an appropriate care plan.",
  },
  {
    id: 2,
    category: "Pain and Joints",
    title: "Neck and Shoulder Pain",
    description:
      "Care focused on neck stiffness, shoulder discomfort and comfortable everyday movement.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=85",
    icon: HeartPulse,
    tags: ["Neck stiffness", "Shoulder", "Movement"],
    detail:
      "Your physiotherapist can assess mobility, strength and movement patterns to recommend suitable exercises.",
  },
  {
    id: 3,
    category: "Pain and Joints",
    title: "Knee Pain",
    description:
      "Support for knee discomfort, reduced mobility and difficulty with walking or stairs.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85",
    icon: Bone,
    tags: ["Knee mobility", "Strength", "Walking"],
    detail:
      "A tailored programme may include strengthening, mobility work and gradual activity progression.",
  },
  {
    id: 4,
    category: "Injury and Recovery",
    title: "Sports Injuries",
    description:
      "Structured rehabilitation to help restore movement, strength and confidence after an injury.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85",
    icon: Activity,
    tags: ["Muscle injuries", "Strength", "Return to sport"],
    detail:
      "Recovery depends on the injury and its severity. Your care plan should progress according to your assessment.",
  },
  {
    id: 5,
    category: "Injury and Recovery",
    title: "Post Surgery Recovery",
    description:
      "Guided rehabilitation to support mobility and functional recovery after surgery.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
    icon: ShieldCheck,
    tags: ["Rehabilitation", "Mobility", "Strength"],
    detail:
      "Rehabilitation follows your surgeon's precautions and your physiotherapist's assessment of readiness.",
  },
  {
    id: 6,
    category: "Movement and Mobility",
    title: "Arthritis and Joint Stiffness",
    description:
      "Movement guidance and exercises tailored to your comfort, ability and daily routine.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    icon: Waves,
    tags: ["Joint mobility", "Flexibility", "Daily movement"],
    detail:
      "Appropriate exercise and activity guidance may help maintain mobility and support everyday function.",
  },
  {
    id: 7,
    category: "Movement and Mobility",
    title: "Balance and Mobility",
    description:
      "Support for balance, walking confidence and movement during everyday activities.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=85",
    icon: Target,
    tags: ["Balance", "Walking", "Coordination"],
    detail:
      "Your programme can be adapted to your balance, strength, environment and individual goals.",
  },
  {
    id: 8,
    category: "Neurological Care",
    title: "Neurological Rehabilitation",
    description:
      "Individualized movement support for people living with neurological conditions.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
    icon: HeartPulse,
    tags: ["Movement", "Coordination", "Function"],
    detail:
      "Rehabilitation goals are set according to the person's condition, abilities and wider clinical care plan.",
  },
];

const categories = [
  "All Conditions",
  "Pain and Joints",
  "Injury and Recovery",
  "Movement and Mobility",
  "Neurological Care",
];

const faqs = [
  {
    question: "How do I know which treatment I need?",
    answer:
      "Start with an assessment by a qualified healthcare professional. They can review your symptoms, movement and history before recommending an appropriate plan.",
  },
  {
    question: "Do I need a doctor's referral?",
    answer:
      "Referral requirements vary by location, provider and condition. Contact the clinic to confirm what is needed before booking.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "This depends on your condition, goals and progress. Your physiotherapist can discuss a suitable plan after assessing you.",
  },
  {
    question: "Can I receive physiotherapy online?",
    answer:
      "Some conditions can be assessed or supported remotely. Suitability depends on your symptoms, safety and clinical needs.",
  },
];

function Conditions() {
  const [activeCategory, setActiveCategory] = useState("All Conditions");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const filteredConditions = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return conditions.filter((condition) => {
      const matchesCategory =
        activeCategory === "All Conditions" ||
        condition.category === activeCategory;

      const searchableText = [
        condition.title,
        condition.description,
        condition.category,
        ...condition.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(search);
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="conditions-page">
      <HeroSection
        eyebrow="PERSONALISED PHYSIOTHERAPY"
        title="Care for Your"
        highlight="Everyday Movement"
        description="Explore the conditions we support and discover how personalised physiotherapy can help you work towards better movement, strength and confidence."
        primaryText="Book an Appointment"
        primaryLink="/appointment"
        secondaryText="Explore Our Services"
        secondaryLink="/services"
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90"
        imageAlt="Physiotherapy professional supporting patient care"
        imageLabel="Your movement matters"
        imageDescription="Personalised guidance built around your goals"
        showStats={false}
        showImage={true}
      />

      <section className="conditions-intro section-shell">
        <div className="conditions-intro-grid">
          <div>
            <span className="conditions-eyebrow">
              <Sparkles size={15} />
              CARE THAT STARTS WITH YOU
            </span>

            <h2>
              Understand your condition.
              <span> Find your next step.</span>
            </h2>
          </div>

          <p>
            Every person experiences pain and movement challenges differently.
            Our approach begins with understanding your needs, assessing your
            movement and discussing goals that matter to you.
          </p>
        </div>

        <div className="conditions-benefits">
          <div className="conditions-benefit">
            <span className="conditions-benefit-icon">
              <Stethoscope size={21} />
            </span>
            <div>
              <h3>Individual Assessment</h3>
              <p>Understand your needs and movement goals.</p>
            </div>
          </div>

          <div className="conditions-benefit">
            <span className="conditions-benefit-icon">
              <Target size={21} />
            </span>
            <div>
              <h3>Personalised Plan</h3>
              <p>Care adapted to your individual progress.</p>
            </div>
          </div>

          <div className="conditions-benefit">
            <span className="conditions-benefit-icon">
              <Activity size={21} />
            </span>
            <div>
              <h3>Guided Progress</h3>
              <p>Build movement confidence step by step.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="conditions-library section-shell" id="condition-list">
        <SectionHeading
          eyebrow="EXPLORE CONDITIONS"
          title="What Can We Help You With?"
          highlight="?"
          description="Browse common concerns and explore the type of physiotherapy support that may be appropriate for you."
          align="center"
          size="default"
        />

        <div className="conditions-toolbar">
          <div className="conditions-search">
            <Search size={19} aria-hidden="true" />
            <input
              type="search"
              aria-label="Search conditions"
              placeholder="Search pain, joints, mobility..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            {searchTerm && (
              <button
                className="conditions-clear-search"
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchTerm("")}
              >
                <X size={17} />
              </button>
            )}
          </div>

          <span className="conditions-count">
            {filteredConditions.length}{" "}
            {filteredConditions.length === 1 ? "condition" : "conditions"}
          </span>
        </div>

        <div className="conditions-filters" aria-label="Condition categories">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`conditions-filter ${
                activeCategory === category ? "is-active" : ""
              }`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredConditions.length > 0 ? (
          <div className="conditions-grid">
            {filteredConditions.map((condition, index) => {
              const Icon = condition.icon;

              return (
                <motion.article
                  key={condition.id}
                  className="condition-card"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
                  whileHover={{ y: -5 }}
                >
                  <button
                    className="condition-card-image-button"
                    type="button"
                    onClick={() => setSelectedCondition(condition)}
                    aria-label={`Explore ${condition.title}`}
                  >
                    <img
                      className="condition-card-image"
                      src={condition.image}
                      alt={`${condition.title} physiotherapy support`}
                      loading="lazy"
                    />
                    <span className="condition-image-icon">
                      <Icon size={21} />
                    </span>
                  </button>

                  <div className="condition-card-content">
                    <span className="condition-category">
                      {condition.category}
                    </span>

                    <h3>{condition.title}</h3>
                    <p>{condition.description}</p>

                    <div className="condition-tags">
                      {condition.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="condition-explore"
                      onClick={() => setSelectedCondition(condition)}
                    >
                      Explore Condition
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <div className="conditions-empty">
            <Search size={30} />
            <h3>No matching conditions found</h3>
            <p>Try another search term or select a different category.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Conditions");
              }}
            >
              View All Conditions
            </button>
          </div>
        )}
      </section>

      <section className="conditions-process section-shell">
        <div className="conditions-process-heading">
          <SectionHeading
            eyebrow="YOUR CARE JOURNEY"
            title="A Clear Path Towards"
            highlight="Better Movement"
            description="Your care journey is shaped around your assessment, personal goals and progress."
            align="left"
          />
        </div>

        <div className="conditions-process-grid">
          <motion.div
            className="conditions-process-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="conditions-step-number">01</span>
            <div className="conditions-step-icon">
              <Stethoscope size={23} />
            </div>
            <h3>Understand</h3>
            <p>
              Discuss your symptoms, health history and everyday movement
              challenges with your physiotherapist.
            </p>
          </motion.div>

          <motion.div
            className="conditions-process-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="conditions-step-number">02</span>
            <div className="conditions-step-icon">
              <Target size={23} />
            </div>
            <h3>Plan</h3>
            <p>
              Agree on realistic goals and an individual plan suited to your
              assessment and abilities.
            </p>
          </motion.div>

          <motion.div
            className="conditions-process-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="conditions-step-number">03</span>
            <div className="conditions-step-icon">
              <Activity size={23} />
            </div>
            <h3>Progress</h3>
            <p>
              Review your response to care and adjust your plan as your
              movement and confidence develop.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="conditions-symptoms section-shell">
        <div className="conditions-symptoms-panel">
          <div className="conditions-symptoms-copy">
            <span className="conditions-eyebrow">
              <HeartPulse size={15} />
              LISTEN TO YOUR BODY
            </span>

            <h2>
              Small changes can be
              <span> worth paying attention to.</span>
            </h2>

            <p>
              If pain, stiffness or movement difficulties affect your daily
              activities, consider seeking advice from a qualified healthcare
              professional.
            </p>

            <Link to="/appointment" className="conditions-primary-button">
              Discuss Your Needs
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="conditions-symptoms-list">
            {[
              "Persistent or recurring discomfort",
              "Difficulty with everyday movement",
              "Reduced strength or flexibility",
              "Balance or coordination concerns",
              "Recovery after an injury or surgery",
            ].map((symptom) => (
              <div className="conditions-symptom-item" key={symptom}>
                <CheckCircle2 size={19} />
                <span>{symptom}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="conditions-medical-note">
          Seek urgent medical attention for sudden severe symptoms, new
          significant weakness, major injury or other emergency warning signs.
          This page is educational and does not replace medical assessment.
        </p>
      </section>

      <section className="conditions-faq section-shell">
        <div className="conditions-faq-heading">
          <SectionHeading
            eyebrow="COMMON QUESTIONS"
            title="Things You May"
            highlight="Want to Know"
            description="Helpful answers before you take your next step."
            align="left"
          />
        </div>

        <div className="conditions-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                className={`conditions-faq-item ${isOpen ? "is-open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="conditions-faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className="conditions-faq-chevron"
                  />
                </button>

                {isOpen && (
                  <div className="conditions-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        eyebrow="YOUR NEXT STEP"
        title="Let’s Work Towards Better Movement"
        description="Talk with our team about your concerns and find out whether physiotherapy may be suitable for your needs."
        buttonText="Book an Appointment"
        buttonLink="/appointment"
        secondaryText="Contact Our Team"
        secondaryLink="/contact"
      />

      {selectedCondition && (
        <div
          className="condition-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCondition(null);
            }
          }}
        >
          <motion.div
            className="condition-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="condition-modal-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22 }}
          >
            <button
              type="button"
              className="condition-modal-close"
              aria-label="Close condition details"
              onClick={() => setSelectedCondition(null)}
            >
              <X size={21} />
            </button>

            <img
              src={selectedCondition.image}
              alt=""
              className="condition-modal-image"
            />

            <div className="condition-modal-body">
              <span className="condition-category">
                {selectedCondition.category}
              </span>

              <h2 id="condition-modal-title">
                {selectedCondition.title}
              </h2>

              <p>{selectedCondition.detail}</p>

              <div className="condition-modal-tags">
                {selectedCondition.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <Link
                to="/appointment"
                className="conditions-primary-button"
              >
                Book an Appointment
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}

export default Conditions;
