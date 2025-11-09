'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Search, Lightbulb, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build robust, scalable web applications with cutting-edge technologies and best practices.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Create stunning, user-centric designs that captivate your audience and elevate your brand.',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Develop native and cross-platform mobile apps that deliver exceptional user experiences.',
    gradient: 'from-teal-500 to-green-500',
  },
  {
    icon: Lightbulb,
    title: 'UI/UX Design',
    description: 'Design intuitive interfaces that combine aesthetics with functionality for optimal user engagement.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Branding',
    description: 'Craft memorable brand identities that resonate with your target audience and stand out.',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your online visibility and drive organic traffic with strategic SEO techniques.',
    gradient: 'from-cyan-600 to-blue-500',
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-0 right-0 animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="group relative h-full glass-effect hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />

                <div className="relative p-8 h-full flex flex-col">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 glow-effect`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>

                  <p className="text-foreground/70 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className={`h-1 mt-6 rounded-full bg-gradient-to-r ${service.gradient}`}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
