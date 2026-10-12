import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "910000000000";
  const message =
    "Hello PhysioCare, I would like to know more about your physiotherapy services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      className="whatsapp-floating-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PhysioCare on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-brand-icon" />

      <span className="whatsapp-button-label">
        Chat with us
      </span>
    </a>
  );
}