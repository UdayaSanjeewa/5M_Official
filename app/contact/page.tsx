'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import Navbar from '@/components/HomePageComponents/Navbar';
import Footer from '@/components/HomePageComponents/Footer';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'fiveminutessolutions@gmail.com',
    description: 'Send us an email anytime',
    link: 'mailto:fiveminutessolutions@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+94714686935',
    description: 'Mon-Fri from 9am to 6pm',
    link: 'tel:+94714686935',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: '434/B/3, Galahitiyawa, Ganemulla ,Kadawatha',
    description: 'Visit our office',
    link: '#',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Monday - Friday: 9:00 AM - 6:00 PM',
    description: 'Pacific Standard Time',
    link: '#',
  },
];

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  projectType: z.string().optional(),
  budget: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const projectTypes = [
  'Web Development',
  'Mobile App',
  'E-Commerce',
  'ERP System',
  'UI/UX Design',
  'Other',
];

const budgetRanges = [
  'Less than $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  'More than $100,000',
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    reset();
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
              We're here to answer your questions and start building something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 glass-effect h-full">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold">Send us a message</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        {...register('name')}
                        placeholder="John Doe"
                        className="glass-effect border-primary/20 focus:border-primary"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder="john@example.com"
                        className="glass-effect border-primary/20 focus:border-primary"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        {...register('phone')}
                        placeholder="+1 (555) 123-4567"
                        className="glass-effect border-primary/20 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        {...register('company')}
                        placeholder="Your Company"
                        className="glass-effect border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input
                      {...register('subject')}
                      placeholder="Project Inquiry"
                      className="glass-effect border-primary/20 focus:border-primary"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Type</label>
                      <select
                        {...register('projectType')}
                        className="w-full px-3 py-2 glass-effect border border-primary/20 rounded-md focus:border-primary bg-transparent"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <select
                        {...register('budget')}
                        className="w-full px-3 py-2 glass-effect border border-primary/20 rounded-md focus:border-primary bg-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      {...register('message')}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="glass-effect border-primary/20 focus:border-primary resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white group"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <Card className="p-6 glass-effect hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center glow-effect group-hover:scale-110 transition-transform flex-shrink-0">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-sm text-foreground/90 mb-1">{info.value}</p>
                            <p className="text-xs text-foreground/60">{info.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.a>
                  ))}
                </div>
              </div>

              <Card className="p-6 glass-effect">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="grid grid-cols-4 gap-4">
                  {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="aspect-square rounded-lg glass-effect flex flex-col items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <span className="text-2xl font-bold mb-1">{social[0]}</span>
                      <span className="text-xs">{social}</span>
                    </motion.a>
                  ))}
                </div>
              </Card>

              <Card className="p-8 glass-effect">
                <h3 className="text-xl font-bold mb-4">Office Location</h3>
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-primary" />
                </div>
                <p className="text-sm text-foreground/70 mt-4 text-center">
                  Visit us at our office or schedule a virtual meeting
                </p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="p-12 glass-effect max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">
                Not sure where to start? <span className="text-gradient">We can help!</span>
              </h3>
              <p className="text-lg text-foreground/70 mb-8">
                Schedule a free consultation to discuss your project requirements and explore the best solutions for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                  Schedule Consultation
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
