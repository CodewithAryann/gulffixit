// components/WhatsAppButton.tsx
import { FaWhatsapp } from "react-icons/fa"; // npm install react-icons
import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = "+971545999795"; // replace with your number in international format
  const preText = encodeURIComponent(
    "Hello! I want to know more about Gulf Fixit services."
  );

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${preText}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
}
