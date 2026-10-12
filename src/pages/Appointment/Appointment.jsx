
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Video,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CTASection from "../../components/CTASection/CTASection";

import "./Appointment.css";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  consultationType: "Online Consultation",
  service: "",
  date: "",
  time: "",
  reason: "",
  consent: false,
};

const serviceOptions = [
  "Orthopaedic Physiotherapy",
  "Sports Rehabilitation",
  "Post Surgical Rehabilitation",
  "Neurological Physiotherapy",
  "Chronic Pain Management",
  "Posture and Mobility Care",
  "General Consultation",
];

const timeOptions = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

function getLocalDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function Appointment() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "consultationType" ? { time: "" } : {}),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demo only. Connect a booking API to save real requests.
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialForm);
    setIsSubmitted(false);
  };

  return (
    <main className="appointment-page">
      {/* Reusable page hero */}
      <HeroSection
        eyebrow="YOUR NEXT STEP STARTS HERE"
        title="Make time for"
        highlight="your wellbeing."
        description="Request a physiotherapy consultation that fits your needs. Choose your preferred service, date, and time to get started."
        primaryText="Book an Appointment"
        primaryLink="#appointment-form"
        secondaryText="Explore Our Services"
        secondaryLink="/services"
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1100&q=85"
        imageAlt="Physical wellness and guided movement"
        imageLabel="Your recovery journey"
        imageDescription="Begin with a consultation request"
        showStats={false}
      />

      {/* Appointment booking area */}
      <section className="appointment-booking-section">
        <div className="appointment-container appointment-booking-grid">
          {/* Information sidebar */}
          <motion.aside
            className="appointment-sidebar"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="BOOK A CONSULTATION"
              title="A simple way to"
              highlight="get started."
              description="Tell us what you need and when you would prefer to connect. The team can confirm your appointment after checking availability."
              align="left"
              size="default"
              animate={false}
              className="appointment-section-heading"
            />

            <div className="appointment-info-card">
              <span className="appointment-info-icon">
                <Video size={21} />
              </span>

              <div>
                <h3>Online consultation</h3>
                <p>
                  Request a remote consultation if it is appropriate for your
                  needs.
                </p>
              </div>
            </div>

            <div className="appointment-info-card">
              <span className="appointment-info-icon">
                <MapPin size={21} />
              </span>

              <div>
                <h3>In person consultation</h3>
                <p>
                  Request a visit at the clinic, subject to location and
                  availability.
                </p>
              </div>
            </div>

            <div className="appointment-info-card">
              <span className="appointment-info-icon">
                <Clock3 size={21} />
              </span>

              <div>
                <h3>Preferred time</h3>
                <p>
                  Select a suitable time. Your selection is a request, not a
                  confirmed booking.
                </p>
              </div>
            </div>

            <div className="appointment-security-note">
              <ShieldCheck size={21} />
              <p>
                Do not include passwords, payment details, or detailed medical
                records in this form.
              </p>
            </div>
          </motion.aside>

          {/* Appointment form and success screen */}
          <motion.div
            className="appointment-form-card"
            id="appointment-form"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitted ? (
              <div className="appointment-success" role="status">
                <span className="appointment-success-icon">
                  <CheckCircle2 size={34} />
                </span>

                <span className="appointment-success-label">
                  REQUEST DETAILS COMPLETED
                </span>

                <h2>
                  Your next step <span>starts here.</span>
                </h2>

                <p>
                  Your details have been completed in this demo. They have not
                  been sent to or saved in a clinic booking system. The clinic
                  must confirm actual availability.
                </p>

                <div className="appointment-summary">
                  <div>
                    <span>Patient</span>
                    <strong>{formData.fullName}</strong>
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>{formData.email}</strong>
                  </div>

                  <div>
                    <span>Phone</span>
                    <strong>{formData.phone}</strong>
                  </div>

                  <div>
                    <span>Consultation</span>
                    <strong>{formData.consultationType}</strong>
                  </div>

                  <div>
                    <span>Service</span>
                    <strong>{formData.service}</strong>
                  </div>

                  <div>
                    <span>Preferred date</span>
                    <strong>{formData.date}</strong>
                  </div>

                  <div>
                    <span>Preferred time</span>
                    <strong>{formData.time}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  className="appointment-submit-button"
                  onClick={handleReset}
                >
                  Make Another Request
                  <ArrowRight size={18} />
                </button>

                <Link to="/" className="appointment-home-link">
                  Return to home
                </Link>
              </div>
            ) : (
              <>
                <div className="appointment-form-heading">
                  <div>
                    <span className="appointment-form-step">
                      APPOINTMENT REQUEST
                    </span>

                    <h2>Tell us your preferences</h2>

                    <p>
                      Complete the details below to prepare your request.
                    </p>
                  </div>

                  <span className="appointment-form-heading-icon">
                    <HeartPulse size={24} />
                  </span>
                </div>

                <form
                  className="appointment-form"
                  onSubmit={handleSubmit}
                >
                  {/* Section one */}
                  <div className="appointment-form-section-title">
                    <span>01</span>
                    <h3>Your details</h3>
                  </div>

                  <div className="appointment-input-grid">
                    <div className="appointment-field">
                      <label htmlFor="appointment-name">
                        Full name *
                      </label>

                      <input
                        id="appointment-name"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        minLength={2}
                        required
                      />
                    </div>

                    <div className="appointment-field">
                      <label htmlFor="appointment-email">
                        Email address *
                      </label>

                      <input
                        id="appointment-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="appointment-field appointment-field-full">
                      <label htmlFor="appointment-phone">
                        Phone number *
                      </label>

                      <input
                        id="appointment-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Enter your contact number"
                        value={formData.phone}
                        onChange={handleChange}
                        minLength={7}
                        required
                      />
                    </div>
                  </div>

                  <div className="appointment-form-divider" />

                  {/* Section two */}
                  <div className="appointment-form-section-title">
                    <span>02</span>
                    <h3>Consultation preferences</h3>
                  </div>

                  <div className="appointment-field">
                    <label htmlFor="appointment-type">
                      Consultation type *
                    </label>

                    <select
                      id="appointment-type"
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleChange}
                      required
                    >
                      <option value="Online Consultation">
                        Online Consultation
                      </option>

                      <option value="In Person Consultation">
                        In Person Consultation
                      </option>
                    </select>
                  </div>

                  <div className="appointment-field">
                    <label htmlFor="appointment-service">
                      Select a service *
                    </label>

                    <select
                      id="appointment-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a service</option>

                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="appointment-input-grid">
                    <div className="appointment-field">
                      <label htmlFor="appointment-date">
                        Preferred date *
                      </label>

                      <input
                        id="appointment-date"
                        name="date"
                        type="date"
                        min={getLocalDate()}
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="appointment-field">
                      <label htmlFor="appointment-time">
                        Preferred time *
                      </label>

                      <select
                        id="appointment-time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose a time</option>

                        {timeOptions.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <p className="appointment-availability-note">
                    <Clock3 size={15} />
                    Times are preferences only. Actual availability must be
                    confirmed by the clinic.
                  </p>

                  <div className="appointment-form-divider" />

                  {/* Section three */}
                  <div className="appointment-form-section-title">
                    <span>03</span>
                    <h3>Anything else we should know?</h3>
                  </div>

                  <div className="appointment-field">
                    <label htmlFor="appointment-reason">
                      Reason for consultation
                    </label>

                    <textarea
                      id="appointment-reason"
                      name="reason"
                      rows={4}
                      maxLength={700}
                      placeholder="Briefly describe what you need help with"
                      value={formData.reason}
                      onChange={handleChange}
                    />

                    <span className="appointment-character-count">
                      {formData.reason.length}/700 characters
                    </span>
                  </div>

                  <label className="appointment-consent">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                    />

                    <span>
                      I agree to be contacted about this appointment request
                      using the details provided. *
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="appointment-submit-button"
                  >
                    Submit Appointment Request
                    <ArrowRight size={18} />
                  </button>

                  <p className="appointment-form-disclaimer">
                    Submitting this demo form does not send your information
                    or confirm an appointment.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Reusable call to action */}
      <CTASection
        eyebrow="YOUR RECOVERY JOURNEY"
        title="Ready to take the next step?"
        description="Explore our physiotherapy services and find the care that fits your recovery goals."
        buttonText="Explore Our Services"
        buttonLink="/services"
        secondaryText="Back to Home"
        secondaryLink="/"
      />
    </main>
  );
}
