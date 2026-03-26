import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Modules from "@/components/landing/Modules";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import Programs from "@/components/landing/Programs";
import Testimonials from "@/components/landing/Testimonials";
import VideoSection from "@/components/landing/VideoSection";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <Problem />
        <Solution />
        <HowItWorks />
        <Programs />
        <Testimonials />
        <VideoSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
