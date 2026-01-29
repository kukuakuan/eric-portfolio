'use client';

import Tilt from 'react-parallax-tilt';
import type { ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  scale?: number;
}

/**
 * 3D tilt card component for premium interactive effects
 * Responds to mouse movement with smooth 3D transformations
 */
export function TiltCard({
  children,
  className = '',
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  scale = 1.02,
}: TiltCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      perspective={1000}
      scale={scale}
      transitionSpeed={2000}
      gyroscope={true}
      className={className}
    >
      {children}
    </Tilt>
  );
}
