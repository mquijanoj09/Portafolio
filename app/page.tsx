import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Technologies } from "@/components/technologies";

export default function Home() {
  return (
    <main className="bg-black flex flex-col md:gap-40 gap-24">
      <Hero />
      <Technologies />
      <Projects />
      <div className="h-screen"></div>
    </main>
  );
}
