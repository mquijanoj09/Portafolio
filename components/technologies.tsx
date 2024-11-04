"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  {
    name: "TypeScript",
    description: "JavaScript but better",
    icon: "/typescript-logo.svg",
    color: "3178C6",
  },
  {
    name: "React",
    description: "JavaScript Library",
    icon: "/react-logo.svg",
    color: "61DAFB",
  },
  {
    name: "NextJS",
    description: "React framework",
    icon: "/nextjs-logo.svg",
    color: "ffffff",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    icon: "/tailwind-logo.svg",
    color: "0EA5E9",
  },
  {
    name: "Git",
    description: "Version control",
    icon: "/git-logo.svg",
    color: "F1502F",
  },
  {
    name: "Supabase",
    description: "Backend tool",
    icon: "/supabase-logo.svg",
    color: "3ECF8E",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Technologies() {
  return (
    <section className="relative container mx-auto px-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4 mb-16"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
          Current technologies
        </h2>
        <p className="text-secondary/70 text-xs sm:text-sm md:text-base max-w-3xl">
          {`I'm proficient in a range of modern technologies that empower me to
            build highly functional solutions. These are some of my main
            technologies.`}
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {technologies.map((tech) => (
          <motion.div key={tech.name} variants={item} className="h-full">
            <Card className="bg-secondary/5 backdrop-blur-sm hover:bg-secondary/10 transition-colors border-primary/10 h-full flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex items-start gap-4 h-full">
                  <div
                    className="relative w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `#${tech.color}30` }}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-secondary mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-secondary/70 text-xs sm:text-sm md:text-base">
                      {tech.description}
                    </p>
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
