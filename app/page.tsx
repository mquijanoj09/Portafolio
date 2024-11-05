import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Technologies } from "@/components/technologies";

export default function Home() {
  return (
    <main className="bg-black flex flex-col md:gap-32 gap-14">
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}
