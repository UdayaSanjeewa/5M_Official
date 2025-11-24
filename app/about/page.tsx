'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Zap, Heart, TrendingUp, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/HomePageComponents/Navbar';
import Footer from '@/components/HomePageComponents/Footer';
import femaleAvatar from "@/public/femaleAvatar.png";
import maleAvatar from "@/public/maleAvatar.png";
import chathuraImg from "@/public/about/chathura.jpeg";
import udayaImg from "@/public/about/udaya.jpeg";
import niviniImg from "@/public/about/nivini.jpeg";
import samilaImg from "@/public/about/samila.png";

const timeline = [
  {
    year: '2022',
    title: 'Company Founded',
    description: 'Started with a vision to transform digital experiences and empower businesses through innovative technology solutions.',
  },
  {
    year: '2023',
    title: 'First Major Client',
    description: 'Delivered a groundbreaking e-commerce platform that revolutionized online retail for a Fortune 500 company.',
  },
  {
    year: '2023',
    title: 'Team Expansion',
    description: 'Grew to a team of 15+ talented professionals, each bringing unique expertise in design, development, and strategy.',
  },
/*   {
    year: '2022',
    title: 'Award Recognition',
    description: 'Received Best Digital Agency award and recognition for innovation in web application development.',
  }, */
  {
    year: '2024',
    title: 'Global Reach',
    description: 'Expanded services to international markets, serving clients across North America, Europe, and Asia.',
  },
/*   {
    year: '2024',
    title: 'Innovation Hub',
    description: 'Launched R&D division for emerging technologies including AI, blockchain, and progressive web applications.',
  }, */
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage in the digital age.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the leading force in digital transformation, shaping the future of technology and creating lasting impact for businesses worldwide.',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We pursue excellence in every project, delivering high-quality solutions that exceed expectations and set industry standards.',
    gradient: 'from-teal-500 to-green-500',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative approaches to solve complex problems and drive business transformation.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards, transparency, and accountability in all our business relationships and deliverables.',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Your success is our priority. We build lasting partnerships by understanding your needs and delivering tailored solutions.',
    gradient: 'from-cyan-600 to-blue-500',
  },
];

const team = [
  {
    name: 'Udaya Sanjeewa',
    role: 'CEO & Founder',
    image: udayaImg.src,
    bio: 'Leads the company with a clear vision for innovation and growth, ensuring every project delivers value, quality, and impact.',
  },
  {
    name: 'Nivini Bathila',
    role: 'Business Analysis',
    image: niviniImg.src,
    bio: 'Skilled in data-driven decision-making, ensures smooth project delivery by translating client needs into clear requirements',
  },
  {
    name: 'Chathura Madhawa',
    role: 'CTO',
    image: chathuraImg.src,
    bio: 'Leads the technical vision of the company with strong expertise in modern software engineering and innovative solution design.',
  },
  {
    name: 'Samila Lakshan',
    role: 'Head of Design',
    image: samilaImg.src,
    bio: 'Specializes in creating modern, user-friendly, and visually stunning interfaces that bring ideas to life with creativity and precision.',
  },
];

const stats = [
  { value: '150+', label: 'Projects Completed', icon: TrendingUp },
  { value: '50+', label: 'Happy Clients', icon: Users },
  { value: '5+', label: 'Years Experience', icon: Award },
  { value: '98%', label: 'Client Satisfaction', icon: Heart },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-20 right-20 animate-pulse-slow" />
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-20 left-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              About <span className="text-gradient">5M Solutions</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate creators, developers, and strategists dedicated to crafting
              digital experiences that inspire and deliver measurable results. Our mission is to transform
              businesses through innovative technology solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-2xl text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
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
            className="mb-24"
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              Our <span className="text-gradient">Journey</span>
            </h2>

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
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              Meet Our <span className="text-gradient">Team</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="glass-effect hover:bg-white/10 transition-all duration-300 overflow-hidden group">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-gradient transition-all">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm mb-3">{member.role}</p>
                      <p className="text-foreground/70 text-sm">{member.bio}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
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
                Let's collaborate to bring your vision to life.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-600 transition-all glow-effect"
              >
                Let's Talk About Your Project
              </motion.a>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
