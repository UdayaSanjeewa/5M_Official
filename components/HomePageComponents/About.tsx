'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const timeline = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'Started with a vision to transform digital experiences',
  },
  {
    year: '2020',
    title: 'First Major Client',
    description: 'Delivered a groundbreaking e-commerce platform',
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew to a team of 15+ talented professionals',
  },
  {
    year: '2022',
    title: 'Award Recognition',
    description: 'Received Best Digital Agency award',
  },
  {
    year: '2023',
    title: 'Global Reach',
    description: 'Expanded services to international markets',
  },
  {
    year: '2024',
    title: 'Innovation Hub',
    description: 'Launched R&D division for emerging technologies',
  },
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses with innovative digital solutions that drive growth and success.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the leading force in digital transformation, shaping the future of technology.',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Award,
    title: 'Our Values',
    description: 'Excellence, innovation, integrity, and client satisfaction guide everything we do.',
    gradient: 'from-teal-500 to-green-500',
  },
  {
    icon: Users,
    title: 'Our Team',
    description: 'A diverse group of passionate experts dedicated to delivering exceptional results.',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-20 right-20 animate-pulse-slow" />
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
            About <span className="text-gradient">5M Solutions</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We are a team of passionate creators, developers, and strategists dedicated to crafting
            digital experiences that inspire and deliver measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 glass-effect hover:bg-white/10 transition-all duration-300 h-full group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 glow-effect`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {value.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-gradient">Journey</span>
          </h3>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="p-6 glass-effect hover:bg-white/10 transition-all duration-300 inline-block">
                      <div className="text-2xl font-bold text-gradient mb-2">{item.year}</div>
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </Card>
                  </div>

                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-background glow-effect z-10"
                    />
                  </div>

                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="p-12 glass-effect max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Digital Journey?</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-8">
              Join the growing list of satisfied clients who have transformed their businesses with our solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-600 transition-all glow-effect"
            >
              Let's Talk About Your Project
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
