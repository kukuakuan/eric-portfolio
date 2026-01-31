'use client';

import { motion } from 'framer-motion';
import { useInViewOnce } from '@/hooks/use-in-view-once';
import type { ComponentProps } from 'react';

interface TimelineProps {
  items: Array<{
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
    achievements?: readonly string[];
  }>;
}

/**
 * Timeline component for displaying experience chronologically
 * Features animated entrance and interactive hover effects
 */
export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
      
      {items.map((item, index) => (
        <TimelineItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}

interface TimelineItemProps {
  item: {
    company: string;
    role: string;
    period: string;
    description: string;
    achievements?: readonly string[];
  };
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const [ref, isInView] = useInViewOnce({ threshold: 0.3 });
  
  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-20 pb-12 last:pb-0"
    >
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg"
      />
      
      {/* Content */}
      <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-xl font-bold">{item.company}</h3>
          <span className="text-sm text-muted-foreground">{item.period}</span>
        </div>
        <p className="text-primary font-medium mb-3">{item.role}</p>
        <p className="text-muted-foreground mb-4">{item.description}</p>
        
        {item.achievements && item.achievements.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {item.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
