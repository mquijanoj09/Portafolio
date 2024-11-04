"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "No Register Brand",
    image: "/hero.jpg",
    technologies: ["TypeScript", "React", "NextJS", "Hygraph", "TailwindCSS"],
    link: "https://www.noregister.com/",
  },
  {
    title: "Soporte S.A.",
    image: "/hero.jpg",
    technologies: ["TypeScript", "React", "NextJS", "TailwindCSS"],
    link: "https://www.soporte.com.co/",
  },
  {
    title: "SABA",
    image: "/hero.jpg",
    technologies: ["TypeScript", "React", "NextJS", "Supabase", "shadcn/ui"],
    link: "https://saba-dun.vercel.app/",
  },
  {
    title: "UPBuen Viaje",
    image: "/hero.jpg",
    technologies: ["TypeScript", "React", "NextJS", "Firebase", "TailwindCSS"],
    link: "https://upbuen-viaje.vercel.app/",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <section className="relative container mx-auto px-4 z-10">
      <div className="flex justify-between items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary"
        >
          My portfolio
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button asChild variant="shine" size="lg" className="group">
            <Link
              href="https://github.com/mquijanoj09"
              className="flex items-center gap-2"
              target="_blank"
            >
              All Projects
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <Card className="bg-secondary/5 backdrop-blur-sm border-primary/10 overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-secondary">
                      {project.title}
                    </h3>
                    <Link href={project.link}>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-primary hover:text-primary hover:bg-primary/20"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View project</span>
                      </Button>
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
