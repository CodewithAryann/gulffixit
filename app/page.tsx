import Hero from "../components/Hero"; // adjust path if different
import About from "../components/About"; // adjust path if different

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <About/>
    </main>
  );
}
