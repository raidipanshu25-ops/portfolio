import { Navbar } from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { SocialSidebar } from "@/components/SocialSidebar";
import { Spotlight } from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      <Spotlight />
      <SocialSidebar />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
