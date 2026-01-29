'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import type { ComponentProps } from 'react';

interface MagneticButtonProps extends ComponentProps<typeof Button> {
  children: React.ReactNode;
  strength?: number;
}

/**
 * Magnetic button that follows cursor on hover
 * Creates a premium, interactive feel
 */
export function MagneticButton({ 
  children, 
  strength = 0.3,
  className,
  ...props 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const { width, height, left, top } = rect;
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x * strength, y: position.y * strength }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Button ref={ref} className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}

