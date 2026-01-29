"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo, quickFacts, skills } from "@/lib/data";
import { MapPin, GraduationCap, Briefcase, Globe } from "lucide-react";

const iconMap = {
  "📍": MapPin,
  "🎓": GraduationCap,
  "💼": Briefcase,
  "🌐": Globe,
};

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, skills, and interests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Description */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Who I Am</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {personalInfo.objective}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in building modern, scalable web applications
                    with a strong focus on frontend excellence. My experience
                    spans across various industries, from healthcare and AI to
                    gaming platforms and enterprise solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Quick Facts */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {quickFacts.map((fact, index) => {
                      const Icon = iconMap[fact.icon as keyof typeof iconMap] || MapPin;
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-start p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                              {fact.label}
                            </span>
                          </div>
                          <p className="text-sm font-semibold">{fact.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Skills Preview */}
          <motion.div variants={itemVariants} className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Core Skills</CardTitle>
                <CardDescription>
                  Technologies I work with on a daily basis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Languages */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                      Languages
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="text-sm py-1.5 px-3"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Frontend */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                      Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant={skill.highlight ? "default" : "secondary"}
                          className="text-sm py-1.5 px-3"
                        >
                          {skill.name}
                          {skill.highlight && " ⭐"}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="text-sm py-1.5 px-3"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

