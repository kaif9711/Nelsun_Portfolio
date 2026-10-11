import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Products from "@/components/Products";
import Vision from "@/components/Vision";
import WhyNelsun from "@/components/WhyNelsun";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Capabilities />
        <Products />
        <WhyNelsun />
        <Journey />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
