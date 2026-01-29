"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export function Skills() {
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

  const SkillBar = ({
    name,
    level,
    highlight,
  }: {
    name: string;
    level: number;
    highlight?: boolean;
  }) => {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-xs text-muted-foreground">{level}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`h-full rounded-full ${
              highlight
                ? "bg-gradient-to-r from-blue-600 to-purple-600"
                : "bg-primary"
            }`}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Languages */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                  <CardDescription>Programming languages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.languages.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Frontend */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                  <CardDescription>Frontend technologies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.frontend.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      highlight={skill.highlight}
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Backend */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Backend</CardTitle>
                  <CardDescription>Backend technologies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.backend.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Tools */}
          <motion.div variants={itemVariants} className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tools & Platforms</CardTitle>
                <CardDescription>
                  Development tools and cloud platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <Badge
                      key={tool.name}
                      variant="secondary"
                      className="text-sm py-2 px-4"
                    >
                      {tool.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

