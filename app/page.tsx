import Hero from "../components/Hero"; 
import About from "../components/About"; 
import Services from "../components/ServicesSlider";
import Chooseus from "../components/Chooseus";
import HowItWorks from "../components/howitworks";
import ContactForm from "../components/Contact";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <About/>
      <Services/>
      <Chooseus/>
      <HowItWorks/>
      <ContactForm/>
      <Banner/>
    </main>
  );
}
