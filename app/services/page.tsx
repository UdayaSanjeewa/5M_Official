'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Search, Lightbulb, TrendingUp, Database, Cloud, Shield, Zap, Globe, BarChart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/HomePageComponents/Navbar';
import Footer from '@/components/HomePageComponents/Footer';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build robust, scalable web applications with cutting-edge technologies and best practices.',
    features: [
      'Custom Web Applications',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Performance Optimization',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Create stunning, user-centric designs that captivate your audience and elevate your brand.',
    features: [
      'Responsive Design',
      'Brand Identity Design',
      'Interactive Prototyping',
      'Design System Development',
    ],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Develop native and cross-platform mobile apps that deliver exceptional user experiences.',
    features: [
      'iOS & Android Apps',
      'Cross-Platform Solutions',
      'App Store Optimization',
      'Mobile Backend Development',
    ],
    gradient: 'from-teal-500 to-green-500',
  },
  {
    icon: Database,
    title: 'E-Commerce Solutions',
    description: 'Build powerful online stores with seamless shopping experiences and secure payment integration.',
    features: [
      'Custom E-Commerce Platforms',
      'Payment Gateway Integration',
      'Inventory Management',
      'Analytics & Reporting',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Cloud,
    title: 'ERP Systems',
    description: 'Streamline your business operations with custom ERP solutions tailored to your needs.',
    features: [
      'Custom ERP Development',
      'Business Process Automation',
      'Integration with Existing Systems',
      'Real-Time Data Analytics',
    ],
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    icon: Lightbulb,
    title: 'UI/UX Design',
    description: 'Design intuitive interfaces that combine aesthetics with functionality for optimal user engagement.',
    features: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'Usability Optimization',
      'Accessibility Compliance',
    ],
    gradient: 'from-cyan-600 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Branding',
    description: 'Craft memorable brand identities that resonate with your target audience and stand out.',
    features: [
      'Logo Design',
      'Brand Strategy',
      'Marketing Collateral',
      'Brand Guidelines',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your online visibility and drive organic traffic with strategic SEO techniques.',
    features: [
      'Technical SEO Audit',
      'On-Page Optimization',
      'Content Strategy',
      'Performance Monitoring',
    ],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Web Security',
    description: 'Protect your digital assets with comprehensive security solutions and best practices.',
    features: [
      'Security Audits',
      'Penetration Testing',
      'SSL Implementation',
      'Data Encryption',
    ],
    gradient: 'from-teal-500 to-green-500',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Enhance your application speed and efficiency for better user experience and conversions.',
    features: [
      'Load Time Optimization',
      'Database Tuning',
      'CDN Integration',
      'Caching Strategies',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'CMS Development',
    description: 'Manage your content effortlessly with custom content management systems tailored to your workflow.',
    features: [
      'Headless CMS',
      'Custom CMS Solutions',
      'Content Migration',
      'Multi-Language Support',
    ],
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    icon: BarChart,
    title: 'Analytics & BI',
    description: 'Make data-driven decisions with powerful analytics and business intelligence solutions.',
    features: [
      'Custom Dashboards',
      'Data Visualization',
      'Predictive Analytics',
      'Report Automation',
    ],
    gradient: 'from-cyan-600 to-blue-500',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and challenges through in-depth consultation.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Our team develops a comprehensive strategy and project roadmap tailored to your needs.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'We create stunning designs that align with your brand and resonate with your audience.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'Our developers bring designs to life using cutting-edge technologies and best practices.',
  },
  {
    step: '05',
    title: 'Testing',
    description: 'Rigorous testing ensures quality, performance, and reliability across all devices.',
  },
  {
    step: '06',
    title: 'Launch',
    description: 'We deploy your solution and provide ongoing support to ensure continued success.',
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

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-0 right-0 animate-pulse-slow" />
          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-0 left-0 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to bring your digital vision to life. From concept to launch,
              we provide end-to-end services that drive results and exceed expectations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="group relative h-full glass-effect hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

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

                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-foreground/60">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold text-center mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-foreground/70 text-center max-w-2xl mx-auto mb-16">
              A proven methodology that ensures successful project delivery from start to finish
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="p-8 glass-effect hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="text-5xl font-bold text-gradient mb-4">{item.step}</div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
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
                Ready to Transform Your <span className="text-gradient">Digital Presence?</span>
              </h3>
              <p className="text-lg text-foreground/70 mb-8">
                Let's discuss your project and explore how our services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                  <a href="/contact">Get a Quote</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  <a href="/portfolio">View Our Work</a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
