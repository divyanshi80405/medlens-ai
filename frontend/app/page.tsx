import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Hero />

      <FeatureCards />

      <TechStack/>

      <Footer/>

    </main>
  );
}