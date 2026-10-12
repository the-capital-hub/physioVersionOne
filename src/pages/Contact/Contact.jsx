
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Video,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";
import "./Contact.css";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "Add your phone number",
    description: "Speak with our team about your enquiry.",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "Add your email address",
    description: "Send us your questions and requests.",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Add your clinic address",
    description: "Find the right place to connect with us.",
  },
];

const faqs = [
  {
    question: "How do I book a consultation?",
    answer:
      "Complete the enquiry form with your contact details and preferred consultation type. The team can follow up to confirm your appointment once the contact system is connected.",
  },
  {
    question: "Can I enquire about online physiotherapy?",
    answer:
      "Yes. Select Online Consultation in the form. A qualified professional can help determine whether remote physiotherapy is suitable for your needs.",
  },
  {
    question: "What should I share in my enquiry?",
    answer:
      "Share your main concern, your preferred way to be contacted, and a suitable time. Avoid sending sensitive medical information through an unsecured form.",
  },
  {
    question: "Will submitting this form confirm my appointment?",
    answer:
      "No. An enquiry is not a confirmed appointment. Your booking is confirmed only after the team contacts you and agrees on a time.",
  },
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  consultation: "Online Consultation",
  preferredTime: "",
  message: "",
  consent: false,
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend demonstration only.
    // Connect a backend or form service to receive enquiries.
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmitted(false);
  };

  return (
    <main className="contact-page">
      <HeroSection
        eyebrow="WE ARE HERE TO HELP"
        title="Let us take the"
        highlight="next step together."
        description="Have a question about physiotherapy or need help choosing a service? Get in touch and tell us how we can help."
        primaryText="Send an Enquiry"
        primaryLink="#contact-form"
        secondaryText="Explore Services"
        secondaryLink="/services"
        image="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1100&q=85"
        imageAlt="Healthcare professional providing patient support"
        imageLabel="Start with a conversation"
        imageDescription="Tell us what support you are looking for."
        showStats={false}
      />

      <section className="contact-details-section">
        <div className="contact-container">
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="We would love to"
            highlight="hear from you."
            description="Choose the contact option that works best for you. Replace the sample details below with your verified business information."
            align="center"
            animate={true}
            className="contact-shared-heading"
          />

          <div className="contact-details-grid">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="contact-detail-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <span className="contact-detail-icon">
                    <Icon size={23} />
                  </span>
                  <h3>{item.title}</h3>
                  <strong>{item.value}</strong>
                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-form-section" id="contact-form">
        <div className="contact-container contact-form-grid">
          <motion.div
            className="contact-form-intro"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="YOUR ENQUIRY"
              title="Tell us a little"
              highlight="about your needs."
              description="Complete the form and share how you would prefer to connect. Our team can use these details to understand your enquiry."
              align="left"
              animate={false}
              className="contact-shared-heading"
            />

            <div className="contact-form-benefit">
              <span><CheckCircle2 size={19} /></span>
              <div>
                <strong>Personalised guidance</strong>
                <p>Share your goals and ask about suitable services.</p>
              </div>
            </div>

            <div className="contact-form-benefit">
              <span><Video size={19} /></span>
              <div>
                <strong>Online or in person</strong>
                <p>Choose the consultation type you prefer.</p>
              </div>
            </div>

            <div className="contact-form-benefit">
              <span><Clock3 size={19} /></span>
              <div>
                <strong>Preferred contact time</strong>
                <p>Let us know when it is convenient to reach you.</p>
              </div>
            </div>

            <div className="contact-form-side-note">
              <ShieldCheck size={20} />
              <p>
                Please do not include passwords, payment details, or sensitive
                medical records in this form.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
          >
            <div className="contact-form-heading">
              <span className="contact-form-heading-icon">
                <Send size={20} />
              </span>
              <div>
                <h3>Send us an enquiry</h3>
                <p>Fields marked with * are required.</p>
              </div>
            </div>

            {submitted ? (
              <div className="contact-success" role="status">
                <span><CheckCircle2 size={30} /></span>
                <h3>Form completed successfully</h3>
                <p>
                  This is a frontend demonstration. Your enquiry has not been
                  sent to the clinic yet. Connect the form to a backend or form
                  service to receive real submissions.
                </p>
                <button
                  type="button"
                  className="contact-primary-button"
                  onClick={handleReset}
                >
                  Back to Form
                  <ArrowRight size={17} />
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-input-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      minLength={2}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-input-row">
                  <div className="contact-field">
                    <label htmlFor="contact-phone">Phone Number *</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      minLength={7}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-consultation">
                      Consultation Type *
                    </label>
                    <select
                      id="contact-consultation"
                      name="consultation"
                      value={formData.consultation}
                      onChange={handleChange}
                      required
                    >
                      <option>Online Consultation</option>
                      <option>In Person Consultation</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-time">Preferred Contact Time</label>
                  <select
                    id="contact-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  >
                    <option value="">Select a preferred time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Anytime">Anytime</option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">How Can We Help?</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us briefly about your enquiry"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={1000}
                  />
                  <span className="contact-character-count">
                    {formData.message.length}/1000 characters
                  </span>
                </div>

                <label className="contact-consent">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    I agree to be contacted about this enquiry using the
                    details provided. *
                  </span>
                </label>

                <button type="submit" className="contact-submit-button">
                  Submit Enquiry
                  <Send size={17} />
                </button>

                <p className="contact-form-disclaimer">
                  Submitting this form does not confirm an appointment.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <section className="contact-faq-section">
        <div className="contact-container contact-faq-grid">
          <div className="contact-faq-intro">
            <SectionHeading
              eyebrow="NEED SOME HELP?"
              title="A few things"
              highlight="you may want to know."
              description="Here are some answers to common questions about getting in touch and arranging a consultation."
              align="left"
              animate={true}
              className="contact-shared-heading"
            />

            <Link to="/services" className="contact-inline-link">
              Browse our services
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="contact-faq-list">
            {faqs.map((faq, index) => (
              <details className="contact-faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="contact-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

export default Contact;
