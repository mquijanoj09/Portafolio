"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import { projects } from "@/data/projects";

export function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative container mx-auto px-4 sm:px-6 md:px-8 z-10 py-10"
      id="contact"
    >
      <div className="py-20 md:px-12 px-4 border rounded-md border-primary/20 relative overflow-hidden">
        {/* Hero Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.2) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.8) 90%, rgba(0, 0, 0, 1) 100%)`,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8 mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
            Like what you see?
            <br />
            Reach out{" "}
            <Link
              href="mailto:mquijanoj@hotmail.com"
              className="text-primary hover:underline underline-offset-4"
            >
              via email
            </Link>{" "}
            to collaborate!
          </h2>
          <Button size="lg">Schedule call</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 z-10 relative"
        >
          <div className="flex flex-col-reverse md:flex-row md:justify-between gap-8">
            <div>
              <h3 className="font-semibold text-secondary md:text-lg md:mb-4 mb-2">
                Miguel Quijano
              </h3>
              <p className="text-secondary/70 md:text-base text-sm">
                © {currentYear} | All rights reserved.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 md:gap-16">
              <nav className="space-y-4">
                <h3 className="font-semibold text-secondary text-sm md:text-base">
                  Navigate
                </h3>
                <ul className="md:space-y-2 space-y-1">
                  {["Home", "Technologies", "Projects", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={`#${item.toLowerCase()}`}
                          className="text-secondary/70 hover:text-primary transition-colors md:text-base text-xs"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>

              <nav className="space-y-4">
                <h3 className="font-semibold text-secondary text-sm md:text-base">
                  Socials
                </h3>
                <ul className="md:space-y-2 space-y-1">
                  <li>
                    <Link
                      href="https://github.com/mquijanoj09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/70 hover:text-primary transition-colors inline-flex items-center gap-2 md:text-base text-xs"
                    >
                      <Github className="w-4 h-4" />
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://linkedin.com/in/mquijanoj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/70 hover:text-primary transition-colors inline-flex items-center gap-2 md:text-base text-xs"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://instagram.com/mquijanoj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/70 hover:text-primary transition-colors inline-flex items-center gap-2 md:text-base text-xs"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav className="space-y-4">
                <h3 className="font-semibold text-secondary text-sm md:text-base">
                  Projects
                </h3>
                <ul className="md:space-y-2 space-y-1">
                  {projects.map((project) => (
                    <li key={project.title}>
                      <Link
                        href={project.link}
                        className="text-secondary/70 hover:text-primary transition-colors md:text-base text-xs"
                      >
                        {project.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
