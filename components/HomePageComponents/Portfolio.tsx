'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const categories = ['All', 'Web Apps', 'Mobile Apps', 'Design', 'Branding'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Apps',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A full-featured e-commerce platform with payment integration, inventory management, and analytics.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'Mobile Apps',
    image: 'https://images.pexels.com/photos/4164827/pexels-photo-4164827.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics.',
    tech: ['React Native', 'Firebase', 'Redux'],
    link: '#',
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete brand identity package including logo, color palette, and brand guidelines.',
    tech: ['Figma', 'Illustrator', 'Photoshop'],
    link: '#',
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'Web Apps',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern analytics dashboard with real-time data visualization and reporting.',
    tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 5,
    title: 'UI/UX Case Study',
    category: 'Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive UX research and UI design for a fintech application.',
    tech: ['Figma', 'Sketch', 'Principle'],
    link: '#',
  },
  {
    id: 6,
    title: 'Restaurant App',
    category: 'Mobile Apps',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Food ordering app with real-time order tracking and payment integration.',
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    link: '#',
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-0 left-0 animate-pulse-slow" />
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
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our latest projects and see how we turn ideas into reality
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={selectedCategory === category
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                : 'border-primary/50 hover:bg-primary/10'}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl glass-effect">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-bold mb-2 text-gradient">{project.title}</h3>
                      <p className="text-sm text-foreground/70 mb-4">{project.category}</p>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-primary" />
                        <span className="text-sm text-primary">View Details</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-foreground/60">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl glass-effect border-primary/20">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl text-gradient">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-foreground/70">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl"
                />

                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-foreground/70">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 glass-effect rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="flex-1 border-primary/50">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
