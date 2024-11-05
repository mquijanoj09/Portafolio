"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

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
    <section
      className="relative container mx-auto px-4 sm:px-6 md:px-8 z-10 py-10"
      id="projects"
    >
      <div className="flex justify-between items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary"
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
            <Card className="bg-secondary/5 backdrop-blur-sm border-primary/20 overflow-hidden group">
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
                    <div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-secondary">
                        {project.title}
                      </h3>
                      <h4 className="text-xs lg:text-sm text-secondary/70">
                        {project.description}
                      </h4>
                    </div>
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
                        className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary"
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
