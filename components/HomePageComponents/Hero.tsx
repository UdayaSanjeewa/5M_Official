'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';

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
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground/80">Welcome to the Future of Digital Excellence</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">We Design.</span>
          <span className="block">We Develop.</span>
          <span className="block text-gradient">We Deliver.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
          Crafting Digital Experiences that Inspire. Transform your ideas into stunning websites and powerful software solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white group">
              Get a Quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              View Our Work
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '150+', label: 'Projects Completed' },
            { value: '50+', label: 'Happy Clients' },
            { value: '5+', label: 'Years Experience' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-2xl"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
}
