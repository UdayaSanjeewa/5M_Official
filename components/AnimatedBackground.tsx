'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      char: string;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;

        const chars = ['0', '1', '{', '}', '<', '>', '/', '(', ')', '[', ']', ';', '=', '+', '-', '*', 'λ', 'π', '∑', '∫'];
        this.char = chars[Math.floor(Math.random() * chars.length)];
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvasWidth) this.x = 0;
        if (this.x < 0) this.x = canvasWidth;
        if (this.y > canvasHeight) this.y = 0;
        if (this.y < 0) this.y = canvasHeight;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        context.font = `${this.size * 8}px monospace`;
        context.fillText(this.char, this.x, this.y);
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    initParticles();

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      connectParticles();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: ['-20%', '20%', '-20%'],
            y: ['10%', '30%', '10%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '10%' }}
        />

        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: ['20%', '-20%', '20%'],
            y: ['-10%', '10%', '-10%'],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '10%', right: '10%' }}
        />

        <motion.div
          className="absolute w-64 h-64 bg-blue-400/15 rounded-full blur-3xl"
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: ['20%', '-20%', '20%'],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '50%', left: '50%' }}
        />

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/10 font-mono text-xs"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
              }}
              animate={{
                y: [
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                ],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {['npm install', 'git commit', 'const', 'function', 'async', 'await', 'import', 'export', '{ }', '[ ]', '=>', '===', '!=='][i % 13]}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
