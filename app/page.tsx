'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Footer from "@/components/HomePageComponents/Footer";
import Navbar from "@/components/HomePageComponents/Navbar";
import ScrollProgress from "@/components/HomePageComponents/ScrollProgress";
import Link from 'next/link';
import maleAvatar from "@/public/maleAvatar.png";

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Agile development with quick turnaround times',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '15+ experienced professionals at your service',
  },
  {
    icon: Star,
    title: 'Quality Assured',
    description: 'Rigorous testing and quality control processes',
  },
];

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

const services = [
  'Web Development',
  'Mobile Apps',
  'E-Commerce',
  'ERP Systems',
  'UI/UX Design',
  'Cloud Solutions',
];

const testimonials = [
  // {
  //   name: 'Sarah Johnson',
  //   company: 'TechCorp Inc.',
  //   image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  //   text: '5M Solutions transformed our digital presence completely. The team is professional, responsive, and delivered beyond our expectations.',
  //   rating: 5,
  // },
    {
    name: 'Asiri Ranasinghe',
    company: 'Mega Marks (PVT) LTD',
    image: maleAvatar.src,
    text: '5M Solutions transformed our digital presence completely. The team is professional, responsive, and delivered beyond our expectations.',
    rating: 5,
  },
  {
    name: 'Sampath',
    company: 'Ceylon Cinnamon Firewood (PVT) LTD',
    image: maleAvatar.src,
    text: 'Outstanding work on our e-commerce platform. Sales increased by 180% in the first quarter after launch.',
    rating: 5,
  },
  {
    name: 'Ruwan Gunathilaka',
    company: 'EGadgetsLK (PVT) LTD',
    image: maleAvatar.src,
    text: 'The HIPAA-compliant portal they built exceeded all our requirements. Highly recommend their services.',
    rating: 5,
  },
];

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: any[] = [];

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
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;

        const chars = ['0', '1', '{', '}', '<', '>', '/', '(', ')', '[', ']', ';', '=', '+', '-', '*'];
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
        context.fillStyle = `rgba(59, 130, 246, ${this.opacity * 0.2})`;
        context.font = `${this.size * 14}px monospace`;
        context.fillText(this.char, this.x, this.y);
      }
    }

    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
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
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.05 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.8;
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
    <main className="relative min-h-screen">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl opacity-10 animate-float" style={{ animationDuration: '20s' }} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500 rounded-full blur-3xl opacity-[0.015] animate-float" style={{ animationDuration: '15s' }} />

        <canvas id="hero-canvas" className="absolute inset-0 w-full h-full opacity-100"></canvas>
      </div>

      <ScrollProgress />
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[10%] left-[10%] text-blue-400 font-mono text-2xl font-bold opacity-40 animate-float" style={{ animationDuration: '12s' }}>
              npm install
            </div>
            <div className="absolute top-[20%] right-[15%] text-cyan-400 font-mono text-xl font-bold opacity-30 animate-float" style={{ animationDuration: '15s', animationDelay: '1s' }}>
              const
            </div>
            <div className="absolute top-[40%] left-[5%] text-blue-300 font-mono text-xl font-bold opacity-30 animate-float" style={{ animationDuration: '18s', animationDelay: '2s' }}>
              function
            </div>
            <div className="absolute top-[60%] right-[10%] text-cyan-300 font-mono text-2xl font-bold opacity-40 animate-float" style={{ animationDuration: '14s', animationDelay: '3s' }}>
              async
            </div>
            <div className="absolute top-[80%] left-[20%] text-blue-400 font-mono text-xl font-bold opacity-30 animate-float" style={{ animationDuration: '16s', animationDelay: '4s' }}>
              import
            </div>
            <div className="absolute top-[30%] right-[25%] text-purple-400 font-mono text-xl font-bold opacity-30 animate-float" style={{ animationDuration: '20s', animationDelay: '5s' }}>
              export
            </div>
            <div className="absolute top-[50%] left-[30%] text-cyan-400 font-mono text-2xl font-bold opacity-40 animate-float" style={{ animationDuration: '13s', animationDelay: '2s' }}>
              {'=>'}
            </div>
            <div className="absolute top-[70%] right-[30%] text-blue-300 font-mono text-xl font-bold opacity-30 animate-float" style={{ animationDuration: '17s', animationDelay: '3s' }}>
              {'{ }'}
            </div>
            <div className="absolute top-[25%] left-[40%] text-purple-300 font-mono text-xl font-bold opacity-30 animate-float" style={{ animationDuration: '19s', animationDelay: '1s' }}>
              git commit
            </div>
            <div className="absolute top-[55%] right-[40%] text-cyan-400 font-mono text-xl font-bold opacity-40 animate-float" style={{ animationDuration: '15s', animationDelay: '4s' }}>
              npm run
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight overflow-visible">
              <span className="block">Transform Your Business</span>
              <span className="block">with</span>
              <span className="block text-gradient leading-normal pb-2">Digital Excellence</span>
            </h1>

            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              We build powerful web applications, mobile apps, and enterprise solutions that drive growth
              and deliver measurable results for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white group">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
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
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
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

      <section className="py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">5M Solutions?</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We combine technical expertise with creative innovation to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 glass-effect hover:bg-white/10 transition-all duration-300 h-full text-center group cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 glow-effect mx-auto"
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-0 right-0 animate-pulse-slow" />
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
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 glass-effect hover:bg-white/10 transition-all duration-300 text-center group cursor-pointer">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold group-hover:text-gradient transition-all">
                    {service}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-0 left-0 animate-pulse-slow" />
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
              What Our Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 glass-effect hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-12 glass-effect max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Build Something <span className="text-gradient">Amazing?</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Let's discuss your project and explore how we can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  <Link href="/about">Learn More About Us</Link>
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
