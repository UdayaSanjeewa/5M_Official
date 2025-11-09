import About from "@/components/HomePageComponents/About";
import Contact from "@/components/HomePageComponents/Contact";
import Footer from "@/components/HomePageComponents/Footer";
import Hero from "@/components/HomePageComponents/Hero";
import Navbar from "@/components/HomePageComponents/Navbar";
import Portfolio from "@/components/HomePageComponents/Portfolio";
import ScrollProgress from "@/components/HomePageComponents/ScrollProgress";
import Services from "@/components/HomePageComponents/Services";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
