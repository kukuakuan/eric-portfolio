"use client";


import { motion } from "framer-motion";
import { Download, ArrowDown, Code2, Database, Globe } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedText } from "@/components/ui/animated-text";
import { useParallax } from "@/hooks/use-parallax";
import { personalInfo } from "@/lib/data";

const techIcons = [
  { icon: Code2, name: "Frontend" },
  { icon: Database, name: "Backend" },
  { icon: Globe, name: "Fullstack" },
];

export function Hero() {
  const [parallaxRef, y] = useParallax(100);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };



  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          ref={parallaxRef}
          style={{ y }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hi, my name is
          </motion.p>

          {/* Name with gradient and animated text */}
          <motion.div variants={itemVariants}>
            <AnimatedText
              text={personalInfo.name}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text"
            />
          </motion.div>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground"
          >
            {personalInfo.role}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.objective}
          </motion.p>

          {/* Tech Icons */}
          {/* <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-8"
          >
            {techIcons.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="p-4 rounded-full bg-background border shadow-sm hover:shadow-md transition-shadow">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div> */}

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton
              size="lg"
              onClick={scrollToProjects}
              className="w-full sm:w-auto text-base px-8 py-6 cursor-pointer"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base px-8 py-6"
              asChild
            >
              <a href="/eric.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </MagneticButton>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

