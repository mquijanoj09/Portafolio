"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function Hero() {
  const downloadCv = () => {
    const pdfUrl = "/Miguel_Quijano_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Miguel_Quijano_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      id="home"
    >
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

      <section className="mx-auto px-4 sm:px-6 md:px-8 relative z-10">
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-secondary xs:text-5xl"
          >
            Innovative
            <br />
            <span className="text-primary">Web&nbsp;Solutions</span>
            <br />
            &&nbsp;Quality&nbsp;<span className="text-primary">Design</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center space-x-4 text-sm sm:text-base md:text-lg text-secondary/70 max-w-2xl mx-auto"
          >
            <Avatar className="w-16 h-16 border-2 border-primary">
              <AvatarImage
                src="/avatar.jpg"
                alt="Miguel Quijano"
                className="object-cover"
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
              <Link href="#projects">
                See My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="linkHover2"
              className="text-primary"
              onClick={downloadCv}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
