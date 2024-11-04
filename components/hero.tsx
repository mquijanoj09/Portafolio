"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function Hero() {
  return (
    <div className="min-h-screen relative bg-black flex items-center justify-center overflow-hidden">
      {/* Cool Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.8) 90%, rgba(0, 0, 0, 1) 100%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm tracking-wider text-background uppercase font-semibold"
          >
            BASED IN MEDELLIN
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-secondary"
          >
            <span>Innovative </span>
            <div className="whitespace-nowrap">
              <span className="text-primary">Web Solutions</span>
              <span> & </span>
            </div>
            <span>Quality </span>
            <span className="text-primary">Design</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center space-x-4 text-sm sm:text-base md:text-lg text-secondary/70 max-w-2xl mx-auto"
          >
            <Avatar className="w-16 h-16 border-2 border-primary">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/88918511?v=4"
                alt="Miguel Quijano"
              />
              <AvatarFallback>MQ</AvatarFallback>
            </Avatar>
            <p>
              {`Hi, I'm Miguel Quijano, a web developer crafting intuitive,
              visually stunning, and functional web apps.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild variant="shine" size="lg" className="group">
              <Link href="#work">
                See My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="linkHover2" className="text-primary">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
