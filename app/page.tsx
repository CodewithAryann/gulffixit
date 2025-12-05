export const metadata = {
  title: "Dubai Maintenance Services | AC Repair, Handyman, Electrical & Plumbing",
  description:
    "Fast and reliable maintenance services in Dubai including AC repair, plumbing, electrical, handyman work, and more. Available 24/7 anywhere in Dubai.",

  metadataBase: new URL("https://gulffixit.vercel.app"),
  alternates: {
    canonical: "/", 
  },

  openGraph: {
    title: "Dubai Maintenance Services | Fast & Reliable Handyman & AC Repair",
    description:
      "Professional maintenance and repair services anywhere in Dubai. AC, electrical, plumbing, painting, carpentry and more.",
    url: "https://gulffixit.vercel.app",
    siteName: "Gulf Fixit",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Maintenance Services - Gulf Fixit",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dubai Maintenance Services | Gulf Fixit",
    description:
      "Dubai's #1 choice for AC repair, electrical, plumbing, handyman & renovation services.",
    images: ["/images/og-banner.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ========================
// ✅ PAGE COMPONENT
// ========================
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/ServicesSlider";
import Chooseus from "../components/Chooseus";
import HowItWorks from "../components/howitworks";
import ContactForm from "../components/Contact";
import Banner from "../components/Banner";

// ⚠️ IMPORTANT: Must return a React component.
export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <About />
      <Services />
      <Chooseus />
      <HowItWorks />
      <ContactForm />
      <Banner />
    </main>
  );
}
