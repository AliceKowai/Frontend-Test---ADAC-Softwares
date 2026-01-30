import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  fullWidth?: boolean;
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = "",
  fullWidth = false
}: FadeInProps) => {
  
  // Ajustei a distância para ser menor (24px), fica mais sutil
  const directionOffset = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
  };

  return (
    <div className={`${fullWidth ? 'w-full' : 'w-auto'} ${className}`}>
      <motion.div
        initial={{ 
          opacity: 0, 
          filter: 'blur(8px)', // O segredo da suavidade extra (começa desfocado)
          ...directionOffset[direction] 
        }}
        whileInView={{ 
          opacity: 1, 
          x: 0, 
          y: 0,
          filter: 'blur(0px)' // Foca suavemente
        }}
        viewport={{ once: true, margin: "-150px" }} // Só ativa quando o elemento já estiver bem visível
        transition={{ 
          duration: 1.0, // Aumentei para 1 segundo (movimento mais lento e elegante)
          delay: delay, 
          ease: [0.25, 0.25, 0, 1] // Curva "Ease Out Quart" (começa rápido, termina muito suave)
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};