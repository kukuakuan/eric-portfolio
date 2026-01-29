# Portfolio Updates Checklist - Senior Frontend Developer Focus
## Based on Updated CV (Eric - Quân CV)

---

## 🎯 CRITICAL UPDATES REQUIRED

### 1. **Title & Role Changes**
- ❌ **OLD**: "Middle Fullstack Developer (Strong FE)"
- ✅ **NEW**: "Senior Fullstack Developer (Strong FE)"
- Update in:
  - Hero section main title
  - Meta tags (SEO)
  - About section
  - All references to your current role

### 2. **New Leadership Role - AI2Bee Agent**
Add this as your PRIMARY featured project:

```typescript
{
  id: 'ai2bee-agent',
  title: 'AI2Bee Agent - Professional AI Assistant',
  role: 'Lead FE & Lead AI Team',
  status: 'Current Project',
  company: 'Sotatek - APAC',
  period: '04/2025 - Present',
  description: 'A professional AI agent that supports multiple datasources with advanced capabilities',
  highlights: [
    'Leading Frontend team development',
    'Leading AI team integration',
    'Multi-datasource support architecture',
    'Professional-grade agent capabilities'
  ],
  technologies: ['Next.js', 'Python', 'Node.js', 'AI/ML Integration'],
  teamSize: 'Multiple teams (FE + AI)',
  impact: 'Enterprise-level AI solution',
  featured: true, // Make this the hero project
}
```

### 3. **Experience Timeline Update**
**5GL Position dates changed:**
- ❌ **OLD**: 03/2023 - NOW
- ✅ **NEW**: 03/2023 - 04/2025

**Current focus at Sotatek:**
- Emphasize AI2Bee Agent leadership role
- Highlight dual leadership (FE + AI teams)

---

## 🎨 SENIOR FRONTEND DEVELOPER - VISUAL ENHANCEMENTS

### A. Advanced CSS & Tailwind Showcase

#### 1. **Hero Section - Professional Animations**

```tsx
// components/sections/Hero.tsx
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900" />
      
      {/* Animated mesh gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content with stagger animation */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            }
          }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center"
        >
          {/* Gradient text with animation */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Nguyễn Hồng Quân
            </span>
          </h1>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-full border border-purple-200/50 dark:border-purple-500/50 shadow-xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Senior Fullstack Developer (Strong FE)
            </p>
          </div>
        </motion.div>

        {/* Animated tech stack */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {['Next.js', 'TypeScript', 'Tailwind', 'React', 'Node.js', 'AI/ML'].map((tech, i) => (
            <motion.div
              key={tech}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100 dark:border-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
            >
              <span className="font-semibold text-slate-700 dark:text-slate-200">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
```

**Add to tailwind.config.js:**
```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
}
```

---

#### 2. **Project Cards - Senior-Level Design**

```tsx
// components/ProjectCard.tsx
import { motion } from 'framer-motion';
import { ExternalLink, Github, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: {
    title: string;
    role: string;
    description: string;
    image: string;
    technologies: string[];
    featured?: boolean;
    leadership?: string;
    impact?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <Card className="overflow-hidden border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
        {/* Featured badge with glow effect */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg"
            >
              <Award className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">FEATURED</span>
            </motion.div>
          </div>
        )}

        {/* Image with overlay effect */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Quick actions on hover */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <motion.button
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-xl backdrop-blur-sm hover:bg-purple-500 hover:text-white transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-xl backdrop-blur-sm hover:bg-purple-500 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        <CardContent className="p-6 space-y-4">
          {/* Title with gradient underline */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <motion.div
              className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Role badge */}
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border-purple-300 dark:border-purple-500/50">
              <span className="font-semibold text-purple-700 dark:text-purple-300">
                {project.role}
              </span>
            </Badge>
            {project.leadership && (
              <Badge variant="outline" className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-amber-300 dark:border-amber-500/50">
                <span className="font-semibold text-amber-700 dark:text-amber-300">
                  {project.leadership}
                </span>
              </Badge>
            )}
          </div>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack with stagger animation */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                }
              }
            }}
          >
            {project.technologies.map((tech, i) => (
              <motion.div
                key={tech}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="px-3 py-1 text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* Impact highlight */}
          {project.impact && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pt-4 border-t border-slate-200 dark:border-slate-700"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-purple-600 dark:text-purple-400">Impact:</span> {project.impact}
              </p>
            </motion.div>
          )}
        </CardContent>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 blur-xl" />
        </div>
      </Card>
    </motion.div>
  );
}
```

---

#### 3. **Experience Timeline - Advanced Design**

```tsx
// components/sections/ExperienceTimeline.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, Users, TrendingUp } from 'lucide-react';

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      company: "Sotatek - APAC",
      role: "Senior Fullstack Developer (Strong FE)",
      period: "04/2025 - Present",
      current: true,
      highlights: [
        "Lead FE and Lead AI team on AI2Bee Agent",
        "Lead FE developer (3 FE dev) on HappyHappy",
        "Lead developer (4 dev) on 3D Furniture",
      ],
      technologies: ["Next.js", "NestJS", "Python", "Vite", "FastAPI"],
      color: "purple"
    },
    {
      company: "5GL - Young IT Technology JSC",
      role: "Fullstack Developer",
      period: "03/2023 - 04/2025",
      highlights: [
        "Fullstack developer across multiple projects",
        "AI research for patrimony product",
      ],
      technologies: ["ReactJS", "VueJS", "NextJS", "NodeJS", "NestJS"],
      color: "blue"
    },
    // ... other experiences
  ];

  return (
    <section ref={containerRef} className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Building impactful solutions across diverse technologies
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Animated central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-700 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-purple-600 to-blue-600"
            />
          </div>

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${
                      exp.color === 'purple'
                        ? 'from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20'
                        : 'from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900/20'
                    } border-2 ${
                      exp.color === 'purple'
                        ? 'border-purple-200 dark:border-purple-500/30'
                        : 'border-blue-200 dark:border-blue-500/30'
                    } shadow-lg hover:shadow-2xl transition-all duration-300`}
                  >
                    {/* Current badge */}
                    {exp.current && (
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-green-100 dark:bg-green-900/30 rounded-full"
                      >
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold text-green-700 dark:text-green-300">
                          CURRENT POSITION
                        </span>
                      </motion.div>
                    )}

                    {/* Company & Role */}
                    <div className="flex items-start gap-3 mb-3">
                      <Building2 className={`w-6 h-6 mt-1 ${
                        exp.color === 'purple' ? 'text-purple-600' : 'text-blue-600'
                      }`} />
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                          {exp.company}
                        </h3>
                        <p className={`text-lg font-semibold ${
                          exp.color === 'purple'
                            ? 'text-purple-600 dark:text-purple-400'
                            : 'text-blue-600 dark:text-blue-400'
                        }`}>
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 mb-4 text-slate-600 dark:text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <TrendingUp className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            exp.color === 'purple' ? 'text-purple-500' : 'text-blue-500'
                          }`} />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 text-xs font-semibold bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline node */}
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 border-4 border-white dark:border-slate-900 shadow-lg z-10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-purple-400"
                  />
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

#### 4. **Skills Section - Interactive Showcase**

```tsx
// components/sections/Skills.tsx
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Palette, Server, Wrench, Brain } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      id: 'frontend',
      label: 'Frontend',
      icon: Palette,
      color: 'purple',
      skills: [
        { name: 'Next.js', level: 95, years: '2+' },
        { name: 'React.js', level: 90, years: '3+' },
        { name: 'TypeScript', level: 90, years: '2+' },
        { name: 'Tailwind CSS', level: 95, years: '2+' },
        { name: 'Vue.js', level: 85, years: '2+' },
        { name: 'Vite', level: 85, years: '1+' },
      ]
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: Server,
      color: 'blue',
      skills: [
        { name: 'NestJS', level: 85, years: '2+' },
        { name: 'Node.js', level: 85, years: '3+' },
        { name: 'Python', level: 80, years: '2+' },
        { name: 'FastAPI', level: 75, years: '1+' },
        { name: 'Django', level: 70, years: '1+' },
      ]
    },
    {
      id: 'languages',
      label: 'Languages',
      icon: Code2,
      color: 'green',
      skills: [
        { name: 'JavaScript (ES6+)', level: 95, years: '3+' },
        { name: 'TypeScript', level: 90, years: '2+' },
        { name: 'Python', level: 80, years: '2+' },
        { name: 'C/C++', level: 70, years: '3+' },
        { name: 'C#', level: 75, years: '1+' },
      ]
    },
    {
      id: 'tools',
      label: 'Tools & Platforms',
      icon: Wrench,
      color: 'orange',
      skills: [
        { name: 'Git', level: 90, years: '3+' },
        { name: 'Docker', level: 80, years: '2+' },
        { name: 'AWS', level: 75, years: '1+' },
        { name: 'Supabase', level: 85, years: '1+' },
        { name: 'WeWeb / No-Code', level: 80, years: '1+' },
      ]
    },
    {
      id: 'leadership',
      label: 'Leadership & AI',
      icon: Brain,
      color: 'pink',
      skills: [
        { name: 'Frontend Team Lead', level: 90, note: '3-4 devs' },
        { name: 'AI Team Lead', level: 85, note: 'AI2Bee Agent' },
        { name: 'Full Project Lead', level: 85, note: '4 developers' },
        { name: 'AI/ML Integration', level: 80, note: 'Multiple projects' },
        { name: 'Mentoring', level: 85, note: 'Teaching experience' },
      ]
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Senior-level proficiency across the modern web stack
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12 p-2 bg-slate-100 dark:bg-slate-800 rounded-2xl">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 rounded-xl"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                        {skill.years || skill.note}
                      </span>
                    </div>

                    {/* Animated progress bar */}
                    <div className="relative h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${
                          category.color === 'purple'
                            ? 'from-purple-600 to-blue-600'
                            : category.color === 'blue'
                            ? 'from-blue-600 to-cyan-600'
                            : category.color === 'green'
                            ? 'from-green-600 to-emerald-600'
                            : category.color === 'orange'
                            ? 'from-orange-600 to-amber-600'
                            : 'from-pink-600 to-purple-600'
                        } rounded-full relative`}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>

                    {/* Level indicator */}
                    <div className="flex items-center justify-end mt-2">
                      <span className="text-sm font-bold text-slate-600 dark:text-slate-400">
                        {skill.level ? `${skill.level}%` : 'Expert'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
```

---

#### 5. **Smooth Scroll & Page Transitions**

```tsx
// app/layout.tsx
import { AnimatePresence, motion } from 'framer-motion';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
```

```tsx
// components/ScrollProgress.tsx
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 origin-left z-50"
      style={{ scaleX }}
    />
  );
}
```

---

### B. Additional Professional Features

#### 1. **Glassmorphism Effects**

```css
/* Add to globals.css */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-dark {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

#### 2. **Cursor Effects (Optional)**

```tsx
// components/CustomCursor.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => setIsHovering(true));
      el.addEventListener('mouseleave', () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Follower cursor */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
    </>
  );
}
```

#### 3. **Magnetic Buttons**

```tsx
// components/ui/MagneticButton.tsx
'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      className={className}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
```

---

## 📊 CONTENT UPDATES - DATA FILE

```typescript
// lib/portfolio-data.ts

export const personalInfo = {
  name: "Nguyễn Hồng Quân",
  role: "Senior Fullstack Developer (Strong FE)", // UPDATED
  tagline: "Leading teams to build innovative AI-powered solutions", // NEW
  location: "Cau Giay, Ha Noi, Vietnam",
  email: "nguyenhongquan1921@gmail.com",
  phone: "+84-946-657-509",
  linkedin: "linkedin.com/in/nguyenhongquan1921",
  github: "", // Add if available
  availability: "Available for Senior FE / Tech Lead positions",
};

export const featuredProject = {
  id: 'ai2bee-agent',
  title: 'AI2Bee Agent',
  subtitle: 'Professional AI Assistant with Multi-Datasource Support',
  role: 'Lead FE & Lead AI Team',
  company: 'Sotatek - APAC',
  period: '04/2025 - Present',
  status: 'Active Development',
  description: 'Leading both frontend and AI teams in developing a professional-grade AI agent capable of supporting multiple datasources. The project showcases advanced AI integration with modern web technologies.',
  responsibilities: [
    'Leading Frontend development team',
    'Leading AI integration team',
    'Architecture design and technical decisions',
    'Code review and mentoring developers',
    'Coordinating between FE and AI teams',
  ],
  technologies: ['Next.js', 'TypeScript', 'Python', 'Node.js', 'AI/ML', 'Multi-Datasource Integration'],
  teamSize: 'Multiple teams',
  impact: 'Enterprise-level AI solution for professional use cases',
  featured: true,
  highlightColor: 'purple',
  images: ['/projects/ai2bee-1.png', '/projects/ai2bee-2.png'],
  demoLink: '',
  githubLink: '',
};

export const experiences = [
  {
    id: 'sotatek',
    company: 'Sotatek - APAC',
    role: 'Senior Fullstack Developer (Strong FE)', // UPDATED
    period: '04/2025 - Present',
    location: 'Remote',
    current: true,
    logo: '/companies/sotatek.png',
    description: 'Leading multiple high-impact projects as a Senior Frontend Developer with additional AI team leadership responsibilities.',
    achievements: [
      {
        title: 'AI2Bee Agent Leadership',
        description: 'Lead FE and Lead AI team on professional AI agent',
        impact: 'Coordinating cross-functional teams for enterprise AI solution',
        icon: 'brain',
      },
      {
        title: 'HappyHappy Platform',
        description: 'Lead FE developer managing 3 frontend developers',
        impact: 'Mobile-first gaming web app with high user engagement',
        icon: 'users',
      },
      {
        title: '3D Furniture Generator',
        description: 'Lead developer managing 4 developers',
        impact: 'AI-powered 3D floor layout and furniture placement system',
        icon: 'cube',
      },
    ],
    projects: [
      'AI2Bee Agent',
      'Synapticare',
      'VaticAI',
      'HappyHappy',
      '3D Furniture Generator',
    ],
    technologies: ['Next.js', 'NestJS', 'Python', 'Vite', 'FastAPI', 'AI/ML'],
    highlightColor: 'purple',
  },
  {
    id: '5gl',
    company: '5GL - Young IT Technology JSC',
    role: 'Fullstack Developer',
    period: '03/2023 - 04/2025', // UPDATED END DATE
    location: 'Remote (Belgium)',
    current: false,
    logo: '/companies/5gl.png',
    description: 'Fullstack development across multiple projects with focus on modern web technologies and AI integration.',
    achievements: [
      {
        title: 'Multi-Project Delivery',
        description: 'Successfully delivered SNDQ, Syndic, Struqta, and Nuvoni projects',
        impact: 'Consistent high-quality delivery across diverse tech stacks',
      },
      {
        title: 'AI Research & Development',
        description: 'Researched and created AI for contact management',
        impact: 'Enhanced patrimony product with intelligent features',
      },
    ],
    projects: ['SNDQ', 'Syndic', 'Struqta', 'Nuvoni', 'Patrimony AI'],
    technologies: ['ReactJS', 'VueJS', 'NextJS', 'NodeJS', 'NestJS', 'AI'],
    highlightColor: 'blue',
  },
  // ... other experiences remain the same
];

// Leadership & Team Management metrics
export const leadershipMetrics = {
  teamsLed: 3,
  totalDevsManaged: 11, // 3 + 4 + 4
  projectsAsLead: 3,
  techStacksLed: ['Frontend (Next.js, React)', 'AI/ML Integration', 'Fullstack'],
  yearsLeading: '2024 - Present',
};

// Enhanced skills with proficiency levels
export const skills = {
  frontend: {
    expert: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
    advanced: ['Vue.js', 'Vite', 'JavaScript (ES6+)'],
    proficiency: {
      'Next.js': { level: 95, years: '2+', projects: 8 },
      'React.js': { level: 90, years: '3+', projects: 12 },
      'TypeScript': { level: 90, years: '2+', projects: 10 },
      'Tailwind CSS': { level: 95, years: '2+', projects: 8 },
      'Vue.js': { level: 85, years: '2+', projects: 5 },
    },
  },
  backend: {
    expert: ['NestJS', 'Node.js'],
    advanced: ['Python', 'FastAPI', 'Django'],
    proficiency: {
      'NestJS': { level: 85, years: '2+', projects: 6 },
      'Node.js': { level: 85, years: '3+', projects: 10 },
      'Python': { level: 80, years: '2+', projects: 5 },
    },
  },
  leadership: [
    'Team Leadership (3-4 developers)',
    'Frontend Architecture',
    'AI/ML Integration',
    'Code Review & Mentoring',
    'Cross-functional Coordination',
    'Technical Decision Making',
  ],
  specializations: [
    'Senior Frontend Development',
    'AI-Powered Applications',
    'Team Leadership',
    'Modern Web Stack',
    'Performance Optimization',
    'Responsive Design',
  ],
};
```

---

## ✅ COMPLETE UPDATE CHECKLIST

### Critical Content Updates:
- [ ] Update role title to "Senior Fullstack Developer (Strong FE)"
- [ ] Add AI2Bee Agent as featured/hero project
- [ ] Update 5GL end date to 04/2025
- [ ] Emphasize dual leadership (FE + AI teams)
- [ ] Add leadership metrics section
- [ ] Update meta tags and SEO with new title

### Visual Enhancements:
- [ ] Implement animated gradient backgrounds
- [ ] Add glassmorphism effects
- [ ] Create magnetic button interactions
- [ ] Implement smooth scroll progress indicator
- [ ] Add stagger animations for lists
- [ ] Create hover glow effects on cards
- [ ] Implement timeline with animated line
- [ ] Add skill proficiency animations
- [ ] Create floating animation for hero image
- [ ] Add custom cursor (optional)

### Senior-Level Features:
- [ ] Interactive skills showcase with tabs
- [ ] Advanced project cards with overlay effects
- [ ] Professional experience timeline
- [ ] Leadership & team metrics section
- [ ] Testimonials section (if available)
- [ ] Case studies for major projects
- [ ] Performance metrics dashboard
- [ ] Blog section (optional)

### Technical Optimizations:
- [ ] Implement lazy loading for images
- [ ] Add skeleton loaders
- [ ] Optimize animations for 60fps
- [ ] Add page transition effects
- [ ] Implement scroll-triggered animations
- [ ] Add loading states for all interactions
- [ ] Optimize bundle size
- [ ] Add error boundaries

---

## 🎨 RECOMMENDED DESIGN SYSTEM

### Color Palette:
```javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#f5f3ff',
    500: '#8b5cf6',  // Purple
    600: '#7c3aed',
    700: '#6d28d9',
  },
  secondary: {
    500: '#3b82f6',  // Blue
    600: '#2563eb',
  },
  accent: {
    500: '#ec4899',  // Pink
  },
}
```

### Typography:
- **Headings**: Inter (font-weight: 700-800)
- **Body**: Inter (font-weight: 400-500)
- **Code**: JetBrains Mono

---

## 📈 EXPECTED OUTCOMES

After implementing these updates, your portfolio will:

1. **Clearly show Senior-level expertise**
   - Advanced animations and interactions
   - Professional design patterns
   - Leadership emphasis

2. **Demonstrate Tailwind CSS mastery**
   - Custom animations
   - Advanced utility usage
   - Responsive design patterns
   - Dark mode support

3. **Highlight your current achievements**
   - AI2Bee Agent leadership
   - Team management experience
   - Diverse project portfolio

4. **Create "wow" factor**
   - Smooth animations
   - Interactive elements
   - Professional polish
   - Modern design trends

---

## 🚀 IMPLEMENTATION PRIORITY

### Week 1 (Critical):
1. Update all content (role, dates, projects)
2. Add AI2Bee Agent section
3. Implement basic animations
4. Update hero section

### Week 2 (High Priority):
1. Advanced project cards
2. Experience timeline
3. Skills showcase
4. Responsive refinement

### Week 3 (Polish):
1. Micro-interactions
2. Performance optimization
3. SEO updates
4. Final testing

---

Would you like me to create specific component files for any of these features, or help you implement a particular section first?