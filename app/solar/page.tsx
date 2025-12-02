'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sun,
  Battery,
  Zap,
  Shield,
  TrendingDown,
  Clock,
  Gauge,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/HomePageComponents/Navbar';
import Footer from '@/components/HomePageComponents/Footer';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function SolarPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi, I would like to know more about solar systems', '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-green-500/10 to-blue-500/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }} />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full mb-6">
              <Sun className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-green-300">Clean Energy Solutions</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">Power Your Future with</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-green-400 to-green-500 bg-clip-text text-transparent">
                Solar Energy
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Affordable solar systems & long-lasting battery backup solutions for homes and businesses.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white group text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-green-500/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              About Our <span className="text-green-400">Solar Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide cutting-edge solar energy systems designed to reduce your electricity costs
              while ensuring uninterrupted power supply. Our solutions are eco-friendly, cost-effective,
              and backed by industry-leading warranties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sun,
                title: 'Solar Panel Installations',
                description: 'High-efficiency solar panels with maximum power output and 25-year warranty.',
                color: 'yellow'
              },
              {
                icon: Battery,
                title: 'Battery Backup Systems',
                description: 'Long-lasting lithium-ion batteries for reliable 24/7 power backup.',
                color: 'green'
              },
              {
                icon: Zap,
                title: 'Hybrid Solar Solutions',
                description: 'Smart hybrid systems combining solar power with grid electricity seamlessly.',
                color: 'blue'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${
                      item.color === 'yellow' ? 'from-yellow-500/20 to-yellow-600/20' :
                      item.color === 'green' ? 'from-green-500/20 to-green-600/20' :
                      'from-blue-500/20 to-blue-600/20'
                    } flex items-center justify-center mb-4`}>
                      <item.icon className={`w-8 h-8 ${
                        item.color === 'yellow' ? 'text-yellow-400' :
                        item.color === 'green' ? 'text-green-400' :
                        'text-blue-400'
                      }`} />
                    </div>
                    <CardTitle className="text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Why Choose <span className="text-green-400">Our Solar Systems?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: '24/7 Power Backup',
                description: 'Never worry about power cuts with our reliable battery systems'
              },
              {
                icon: TrendingDown,
                title: 'Low Electricity Bills',
                description: 'Save up to 90% on your monthly electricity costs'
              },
              {
                icon: Shield,
                title: '25-Year Panel Warranty',
                description: 'Industry-leading warranty on all solar panel installations'
              },
              {
                icon: Gauge,
                title: 'Smart Energy Monitoring',
                description: 'Track your energy production and consumption in real-time'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Choose Your <span className="text-green-400">Solar Package</span>
            </h2>
            <p className="text-xl text-gray-400">Tailored solutions for every need and budget</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Home Solar Package',
                price: 'Contact for Price',
                features: [
                  '3-5 kW Solar System',
                  '5-10 kWh Battery Backup',
                  'Net Metering Support',
                  'Mobile App Monitoring',
                  'Free Installation',
                  '5-Year Service Warranty'
                ],
                popular: false
              },
              {
                title: 'Small Business Package',
                price: 'Contact for Price',
                features: [
                  '10-20 kW Solar System',
                  '20-30 kWh Battery Backup',
                  'Grid-Tie System',
                  'Advanced Monitoring',
                  'Priority Support',
                  '10-Year Service Warranty'
                ],
                popular: true
              },
              {
                title: 'Industrial Package',
                price: 'Custom Quote',
                features: [
                  '50+ kW Solar System',
                  '100+ kWh Battery Bank',
                  'Three-Phase System',
                  'SCADA Integration',
                  '24/7 Technical Support',
                  '15-Year Service Warranty'
                ],
                popular: false
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`relative h-full ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500'
                    : 'bg-slate-800/50 border-slate-700'
                } hover:scale-105 transition-transform duration-300`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{pkg.title}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-green-400 mt-2">
                      {pkg.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full mt-6 ${
                        pkg.popular
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-slate-700 hover:bg-slate-600'
                      } text-white`}
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              How Solar + Battery <span className="text-green-400">System Works</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">Seamless integration for maximum efficiency</p>
          </motion.div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  icon: Sun,
                  title: 'Solar Panels Capture Sunlight',
                  description: 'High-efficiency panels convert sunlight into DC electricity'
                },
                {
                  step: '2',
                  icon: Zap,
                  title: 'Power Your Home/Business',
                  description: 'Inverter converts DC to AC power for immediate use'
                },
                {
                  step: '3',
                  icon: Battery,
                  title: 'Store Excess Energy',
                  description: 'Surplus power charges batteries for nighttime use'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="relative inline-block mb-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                        <item.icon className="w-12 h-12 text-green-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              What Our <span className="text-green-400">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Homeowner, Colombo',
                image: '/maleAvatar.png',
                rating: 5,
                comment: 'Switched to solar 6 months ago and my electricity bill dropped by 85%! The battery backup works flawlessly during power cuts. Highly recommended!'
              },
              {
                name: 'Amara Silva',
                role: 'Business Owner, Kandy',
                image: '/femaleAvatar.png',
                rating: 5,
                comment: 'Installed a 15kW system for my restaurant. The ROI is excellent and the system has been running smoothly. Great customer service too!'
              },
              {
                name: 'Nimal Perera',
                role: 'Factory Owner, Galle',
                image: '/maleAvatar.png',
                rating: 5,
                comment: 'The industrial package transformed our energy costs. Professional installation and the monitoring system gives us complete control. Worth every rupee!'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center overflow-hidden">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="text-gray-400">{testimonial.role}</CardDescription>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 italic">&quot;{testimonial.comment}&quot;</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Get Your <span className="text-green-400">Free Quote</span>
            </h2>
            <p className="text-xl text-gray-400">Let&apos;s discuss the perfect solar solution for you</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white mb-2 block font-medium">Name</label>
                      <Input
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-white mb-2 block font-medium">Phone</label>
                      <Input
                        type="tel"
                        placeholder="+94 XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white mb-2 block font-medium">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-white mb-2 block font-medium">Location</label>
                      <Input
                        placeholder="City, District"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white mb-2 block font-medium">Message</label>
                    <Textarea
                      placeholder="Tell us about your energy needs..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Submit Quote Request
                    </Button>
                    <Button
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <Phone className="w-6 h-6 text-green-400 mb-2" />
                      <p className="text-gray-400 text-sm">Call Us</p>
                      <p className="text-white font-semibold">+94 XX XXX XXXX</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Mail className="w-6 h-6 text-green-400 mb-2" />
                      <p className="text-gray-400 text-sm">Email Us</p>
                      <p className="text-white font-semibold">solar@5msolutions.lk</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <MapPin className="w-6 h-6 text-green-400 mb-2" />
                      <p className="text-gray-400 text-sm">Visit Us</p>
                      <p className="text-white font-semibold">Colombo, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      </div>
      <Footer />
    </>
  );
}
