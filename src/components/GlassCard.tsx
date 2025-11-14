import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tiltEnabled?: boolean;
  glowEffect?: boolean;
  gradient?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  tiltEnabled = true,
  glowEffect = false,
  gradient = false,
}) => {
  const cardContent = (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`
        glass rounded-2xl p-6 
        border border-white/20 
        shadow-glass
        backdrop-blur-xl
        ${glowEffect ? 'shadow-glow hover:shadow-glow-lg' : ''}
        ${gradient ? 'bg-gradient-to-br from-white/10 to-white/5' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );

  if (tiltEnabled) {
    return (
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        transitionSpeed={1000}
        scale={1}
        gyroscope={true}
        className="tilt-card"
      >
        {cardContent}
      </Tilt>
    );
  }

  return cardContent;
};

export default GlassCard;