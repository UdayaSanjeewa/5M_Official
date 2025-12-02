// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ExternalLink, Github, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Card } from "@/components/ui/card";
// import Navbar from "@/components/HomePageComponents/Navbar";
// import Footer from "@/components/HomePageComponents/Footer";

// import megaMarksImage from "@/public/portfolio/images/mega marks.png";
// import ceylonCinnamonFirewoodImage from "@/public/portfolio/images/ceylon cinnamon firewood.png";
// import laabaiMarketingImage from "@/public/portfolio/images/laabai marketing.png";
// import eGadgetsLkImage from "@/public/portfolio/images/e gadgets lk.png";
// import grandHotelImage from "@/public/portfolio/images/grand hotel.png";
// import medicareCenterImage from "@/public/portfolio/images/medicare center.png";

// import megaMarksVideo from "@/public/portfolio/videos/mega_marks_video.mp4";
// import ceylonCinnamonFirewoodVideo from "@/public/portfolio/videos/ceylon_cinnamon_firewood_video.mp4";
// import laabaiMarketingVideo from "@/public/portfolio/videos/laabai_marketing_video.mp4";
// import eGadgetsLkVideo from "@/public/portfolio/videos/e_gadgets_lk_video.mp4";
// import grandHotelVideo from "@/public/portfolio/videos/grand_hotel_video.mp4";
// import medicareCenterVideo from "@/public/portfolio/videos/medicare_center_video.mp4";

// const categories = [
//   "All",
//   "Web Apps",
//   "Mobile Apps",
//   "E-Commerce",
//   "ERP Systems",
//   "Design",
// ];

// type Project = {
//   id: number;
//   title: string;
//   category: string;
//   image: string;
//   video?: string | null;
//   description: string;
//   longDescription: string;
//   tech: string[];
//   results: string[];
//   link: string;
// };

// const projects2 = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     category: "E-Commerce",
//     image:
//       "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
//     description:
//       "A full-featured e-commerce platform with payment integration, inventory management, and analytics.",
//     longDescription:
//       "Developed a comprehensive e-commerce solution for a major retail client, handling over 10,000 products and processing 5,000+ daily orders. The platform features real-time inventory tracking, multi-currency support, and advanced analytics dashboards.",
//     tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
//     results: [
//       "300% increase in online sales",
//       "50% reduction in cart abandonment",
//       "99.9% uptime",
//     ],
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Fitness Tracking App",
//     category: "Mobile Apps",
//     image:
//       "https://images.pexels.com/photos/4164827/pexels-photo-4164827.jpeg?auto=compress&cs=tinysrgb&w=800",
//     description:
//       "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
//     longDescription:
//       "Built a comprehensive fitness application that helps users track their workouts, monitor nutrition, and achieve their health goals. Features include AI-powered workout recommendations, social sharing, and integration with popular wearables.",
//     tech: ["React Native", "Firebase", "Redux", "TensorFlow"],
//     results: ["50,000+ downloads", "4.8 star rating", "70% user retention"],
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Brand Identity Design",
//     category: "Design",
//     image:
//       "https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=800",
//     description:
//       "Complete brand identity package including logo, color palette, and brand guidelines.",
//     longDescription:
//       "Created a comprehensive brand identity for a tech startup, including logo design, color system, typography, and brand guidelines. The modern, minimalist design reflects the company's innovative approach and resonates with their target audience.",
//     tech: ["Figma", "Illustrator", "Photoshop", "After Effects"],
//     results: [
//       "Brand recognition up 200%",
//       "Featured in design awards",
//       "Positive market feedback",
//     ],
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "SaaS Dashboard",
//     category: "Web Apps",
//     image:
//       "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
//     description:
//       "Modern analytics dashboard with real-time data visualization and reporting.",
//     longDescription:
//       "Developed a powerful SaaS dashboard that provides real-time insights into business metrics. Features include customizable widgets, advanced filtering, automated reports, and role-based access control.",
//     tech: ["React", "D3.js", "Node.js", "MongoDB", "WebSocket"],
//     results: [
//       "2000+ active users",
//       "40% faster decision-making",
//       "Enterprise clients secured",
//     ],
//     link: "#",
//   },
//   {
//     id: 5,
//     title: "UI/UX Case Study",
//     category: "Design",
//     image:
//       "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
//     description:
//       "Comprehensive UX research and UI design for a fintech application.",
//     longDescription:
//       "Conducted extensive UX research and created an intuitive UI design for a fintech application. The project involved user interviews, usability testing, and iterative design to create a seamless experience for managing finances.",
//     tech: ["Figma", "Sketch", "Principle", "UserTesting"],
//     results: [
//       "User satisfaction up 85%",
//       "Task completion time reduced 60%",
//       "Industry recognition",
//     ],
//     link: "#",
//   },
//   {
//     id: 6,
//     title: "Restaurant App",
//     category: "Mobile Apps",
//     image:
//       "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
//     description:
//       "Food ordering app with real-time order tracking and payment integration.",
//     longDescription:
//       "Created a seamless food ordering experience with features like real-time order tracking, multiple payment options, and loyalty rewards. The app serves multiple restaurant locations and handles thousands of orders daily.",
//     tech: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
//     results: [
//       "30,000+ orders monthly",
//       "25% increase in average order value",
//       "95% customer satisfaction",
//     ],
//     link: "#",
//   },
//   {
//     id: 7,
//     title: "Manufacturing ERP",
//     category: "ERP Systems",
//     image:
//       "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=800",
//     description:
//       "Enterprise resource planning system for manufacturing operations.",
//     longDescription:
//       "Developed a comprehensive ERP system that streamlines manufacturing operations, from inventory management to production planning and quality control. The system integrates with existing hardware and provides real-time insights.",
//     tech: ["Angular", "Java Spring", "Oracle DB", "Docker"],
//     results: [
//       "30% efficiency improvement",
//       "50% reduction in errors",
//       "ROI achieved in 8 months",
//     ],
//     link: "#",
//   },
//   {
//     id: 8,
//     title: "Healthcare Portal",
//     category: "Web Apps",
//     image:
//       "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
//     description:
//       "Patient portal with appointment scheduling and medical records.",
//     longDescription:
//       "Built a HIPAA-compliant patient portal that allows patients to schedule appointments, access medical records, and communicate with healthcare providers securely. Features include telemedicine integration and prescription management.",
//     tech: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
//     results: [
//       "10,000+ patients enrolled",
//       "60% reduction in phone calls",
//       "HIPAA certified",
//     ],
//     link: "#",
//   },
//   {
//     id: 9,
//     title: "Fashion E-Store",
//     category: "E-Commerce",
//     image:
//       "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800",
//     description: "Luxury fashion e-commerce with AR try-on features.",
//     longDescription:
//       "Created a premium online shopping experience for a luxury fashion brand, featuring AR try-on technology, personalized recommendations, and a sophisticated checkout process. The platform handles high-resolution product imagery and video.",
//     tech: ["Next.js", "Shopify", "Three.js", "AWS"],
//     results: [
//       "45% conversion rate increase",
//       "20% reduction in returns",
//       "Award-winning design",
//     ],
//     link: "#",
//   },
// ];

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Mega Marks (PVT) LTD",
//     category: "Web Application",
//     image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800",
//     video: megaMarksVideo,
//     description:
//       "A full-featured e-commerce platform with payment integration, inventory management, and analytics.",
//     longDescription:
//       "Developed a comprehensive e-commerce solution for a major retail client, handling over 10,000 products and processing 5,000+ daily orders. The platform features real-time inventory tracking, multi-currency support, and advanced analytics dashboards.",
//     tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
//     results: [
//       "300% increase in online sales",
//       "50% reduction in cart abandonment",
//       "99.9% uptime",
//     ],
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Ceylon Cinnamon Firewood (PVT) LTD",
//     category: "Web Application",
//     image: "https://images.pexels.com/photos/4386395/pexels-photo-4386395.jpeg?auto=compress&cs=tinysrgb&w=800",
//     video: ceylonCinnamonFirewoodVideo,
//     description:
//       "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
//     longDescription:
//       "Built a comprehensive fitness application that helps users track their workouts, monitor nutrition, and achieve their health goals. Features include AI-powered workout recommendations, social sharing, and integration with popular wearables.",
//     tech: ["React Native", "Firebase", "Redux", "TensorFlow"],
//     results: ["50,000+ downloads", "4.8 star rating", "70% user retention"],
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Laabai Marketing (PVT) LTD",
//     category: "E-Commerce Platform",
//     image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
//     video: laabaiMarketingVideo,
//     description:
//       "Complete brand identity package including logo, color palette, and brand guidelines.",
//     longDescription:
//       "Created a comprehensive brand identity for a tech startup, including logo design, color system, typography, and brand guidelines. The modern, minimalist design reflects the company's innovative approach and resonates with their target audience.",
//     tech: ["Figma", "Illustrator", "Photoshop", "After Effects"],
//     results: [
//       "Brand recognition up 200%",
//       "Featured in design awards",
//       "Positive market feedback",
//     ],
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "EGadgetsLK (PVT) LTD",
//     category: "E-Commerce Platform",
//     image: "https://images.pexels.com/photos/6214471/pexels-photo-6214471.jpeg?auto=compress&cs=tinysrgb&w=800",
//     video: eGadgetsLkVideo,
//     description:
//       "Modern analytics dashboard with real-time data visualization and reporting.",
//     longDescription:
//       "Developed a powerful SaaS dashboard that provides real-time insights into business metrics. Features include customizable widgets, advanced filtering, automated reports, and role-based access control.",
//     tech: ["React", "D3.js", "Node.js", "MongoDB", "WebSocket"],
//     results: [
//       "2000+ active users",
//       "40% faster decision-making",
//       "Enterprise clients secured",
//     ],
//     link: "#",
//   },
//   {
//     id: 5,
//     title: "Grand Hotel Hikkaduwa",
//     category: "Official Website and Booking System",
//     image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
//     video: grandHotelVideo,
//     description:
//       "Comprehensive UX research and UI design for a fintech application.",
//     longDescription:
//       "Conducted extensive UX research and created an intuitive UI design for a fintech application. The project involved user interviews, usability testing, and iterative design to create a seamless experience for managing finances.",
//     tech: ["Figma", "Sketch", "Principle", "UserTesting"],
//     results: [
//       "User satisfaction up 85%",
//       "Task completion time reduced 60%",
//       "Industry recognition",
//     ],
//     link: "#",
//   },
//   {
//     id: 6,
//     title: "Medicare Center",
//     category: "Web Application",
//     image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
//     video: medicareCenterVideo,
//     description:
//       "Food ordering app with real-time order tracking and payment integration.",
//     longDescription:
//       "Created a seamless food ordering experience with features like real-time order tracking, multiple payment options, and loyalty rewards. The app serves multiple restaurant locations and handles thousands of orders daily.",
//     tech: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
//     results: [
//       "30,000+ orders monthly",
//       "25% increase in average order value",
//       "95% customer satisfaction",
//     ],
//     link: "#",
//   },
// ];

// const caseStudies = [
//   {
//     client: "TechCorp Inc.",
//     industry: "Technology",
//     challenge:
//       "Needed to modernize their legacy system and improve user engagement",
//     solution: "Developed a cloud-based SaaS platform with modern UI/UX",
//     result: "250% increase in user engagement and 40% cost reduction",
//     image:
//       "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     client: "RetailMax",
//     industry: "Retail",
//     challenge:
//       "Struggling with outdated e-commerce platform and low conversion rates",
//     solution:
//       "Built a modern, mobile-first e-commerce platform with AI recommendations",
//     result: "180% increase in online sales and improved customer satisfaction",
//     image:
//       "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     client: "HealthPlus",
//     industry: "Healthcare",
//     challenge:
//       "Required a secure patient management system compliant with regulations",
//     solution: "Developed HIPAA-compliant portal with telemedicine capabilities",
//     result:
//       "70% improvement in patient satisfaction and operational efficiency",
//     image:
//       "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
// ];

// export default function PortfolioPage() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedProject, setSelectedProject] = useState<
//     (typeof projects)[0] | null
//   >(null);

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   return (
//     <main className="relative min-h-screen">
//       <Navbar />

//       <section className="relative pt-32 pb-20 overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-0 left-0 animate-pulse-slow" />
//           <div
//             className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-0 right-0 animate-pulse-slow"
//             style={{ animationDelay: "2s" }}
//           />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-20"
//           >
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
//               Our <span className="text-gradient">Portfolio</span>
//             </h1>
//             <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
//               Explore our latest projects and see how we turn ideas into
//               reality. Each project represents our commitment to excellence and
//               innovation in digital solutions.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex flex-wrap justify-center gap-4 mb-16"
//           >
//             {categories.map((category) => (
//               <Button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 className={
//                   selectedCategory === category
//                     ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
//                     : "border-primary/50 hover:bg-primary/10"
//                 }
//               >
//                 {category}
//               </Button>
//             ))}
//           </motion.div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedCategory}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
//             >
//               {filteredProjects.map((project, index) => (
//                 <motion.div
//                   key={project.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                   className="group cursor-pointer"
//                   onClick={() => setSelectedProject(project)}
//                 >
//                   <div className="relative overflow-hidden rounded-2xl glass-effect">
//                     <div className="aspect-video overflow-hidden">
//                       <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                     </div>

//                     <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                       <div className="p-6 w-full">
//                         <h3 className="text-xl font-bold mb-2 text-gradient">
//                           {project.title}
//                         </h3>
//                         <p className="text-sm text-foreground/70 mb-4">
//                           {project.category}
//                         </p>
//                         <div className="flex items-center gap-2">
//                           <ExternalLink className="w-5 h-5 text-primary" />
//                           <span className="text-sm text-primary">
//                             View Details
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="p-6">
//                       <h3 className="text-xl font-bold mb-2">
//                         {project.title}
//                       </h3>
//                       <p className="text-sm text-foreground/60">
//                         {project.category}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mb-24"
//           >
//             <h2 className="text-4xl font-bold text-center mb-6">
//               Case <span className="text-gradient">Studies</span>
//             </h2>
//             <p className="text-lg text-foreground/70 text-center max-w-2xl mx-auto mb-16">
//               Deep dives into our most impactful projects and the results we
//               achieved for our clients
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {caseStudies.map((study, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                 >
//                   <Card className="glass-effect hover:bg-white/10 transition-all duration-300 overflow-hidden h-full flex flex-col">
//                     <div className="aspect-video overflow-hidden">
//                       <img
//                         src={study.image}
//                         alt={study.client}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="p-6 flex flex-col flex-grow">
//                       <div className="text-sm text-primary mb-2">
//                         {study.industry}
//                       </div>
//                       <h3 className="text-2xl font-bold mb-4">
//                         {study.client}
//                       </h3>

//                       <div className="space-y-4 flex-grow">
//                         <div>
//                           <h4 className="font-semibold text-sm mb-1">
//                             Challenge
//                           </h4>
//                           <p className="text-sm text-foreground/70">
//                             {study.challenge}
//                           </p>
//                         </div>

//                         <div>
//                           <h4 className="font-semibold text-sm mb-1">
//                             Solution
//                           </h4>
//                           <p className="text-sm text-foreground/70">
//                             {study.solution}
//                           </p>
//                         </div>

//                         <div>
//                           <h4 className="font-semibold text-sm mb-1">Result</h4>
//                           <p className="text-sm text-gradient font-semibold">
//                             {study.result}
//                           </p>
//                         </div>
//                       </div>

//                       <Button variant="ghost" className="mt-6 w-full group">
//                         Read Full Case Study
//                         <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </Button>
//                     </div>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <Card className="p-12 glass-effect max-w-4xl mx-auto">
//               <h3 className="text-3xl font-bold mb-6">
//                 Ready to Create Your{" "}
//                 <span className="text-gradient">Success Story?</span>
//               </h3>
//               <p className="text-lg text-foreground/70 mb-8">
//                 Let's collaborate to bring your vision to life and achieve
//                 remarkable results together.
//               </p>
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
//               >
//                 <a href="/contact">Start Your Project</a>
//               </Button>
//             </Card>
//           </motion.div>
//         </div>
//       </section>

//       <Dialog
//         open={!!selectedProject}
//         onOpenChange={() => setSelectedProject(null)}
//       >
//         <DialogContent className="max-w-4xl glass-effect border-primary/20 max-h-[90vh] overflow-y-auto">
//           {selectedProject && (
//             // <>
//             //   <DialogHeader>
//             //     <DialogTitle className="text-3xl text-gradient">{selectedProject.title}</DialogTitle>
//             //     <DialogDescription className="text-foreground/70">
//             //       {selectedProject.category}
//             //     </DialogDescription>
//             //   </DialogHeader>

//             //   <div className="space-y-6">
//             //     <img
//             //       src={selectedProject.image}
//             //       alt={selectedProject.title}
//             //       className="w-full h-80 object-cover rounded-xl"
//             //     />

//             //     <div>
//             //       <h4 className="font-semibold text-lg mb-2">About This Project</h4>
//             //       <p className="text-foreground/70 leading-relaxed">{selectedProject.longDescription}</p>
//             //     </div>

//             //     <div>
//             //       <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
//             //       <div className="flex flex-wrap gap-2">
//             //         {selectedProject.tech.map((tech) => (
//             //           <span key={tech} className="px-4 py-2 glass-effect rounded-full text-sm">
//             //             {tech}
//             //           </span>
//             //         ))}
//             //       </div>
//             //     </div>

//             //     <div>
//             //       <h4 className="font-semibold text-lg mb-3">Key Results</h4>
//             //       <ul className="space-y-2">
//             //         {selectedProject.results.map((result, idx) => (
//             //           <li key={idx} className="flex items-start">
//             //             <span className="text-primary mr-2">✓</span>
//             //             <span className="text-foreground/70">{result}</span>
//             //           </li>
//             //         ))}
//             //       </ul>
//             //     </div>

//             //     <div className="flex gap-4 pt-4">
//             //       <Button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500">
//             //         <ExternalLink className="w-4 h-4 mr-2" />
//             //         Live Demo
//             //       </Button>
//             //       <Button variant="outline" className="flex-1 border-primary/50">
//             //         <Github className="w-4 h-4 mr-2" />
//             //         Source Code
//             //       </Button>
//             //     </div>
//             //   </div>
//             // </>

//             <>
//               <DialogHeader>
//                 <DialogTitle className="text-3xl text-gradient">
//                   {selectedProject.title}
//                 </DialogTitle>
//                 <DialogDescription className="text-foreground/70">
//                   {selectedProject.category}
//                 </DialogDescription>
//               </DialogHeader>

//               <div className="space-y-6">
//                 {/* Image or Video Section */}
//                 <div>
//                   {selectedProject.video ? (
//                     <video
//                       src={selectedProject.video}
//                       controls
//                       className="w-full h-80 object-cover rounded-xl"
//                       poster={selectedProject.image} // optional thumbnail
//                     />
//                   ) : (
//                     <img
//                       src={selectedProject.image}
//                       alt={selectedProject.title}
//                       className="w-full h-80 object-cover rounded-xl"
//                     />
//                   )}
//                 </div>

//                 {/* About Section */}
//                 <div>
//                   <h4 className="font-semibold text-lg mb-2">
//                     About This Project
//                   </h4>
//                   <p className="text-foreground/70 leading-relaxed">
//                     {selectedProject.longDescription}
//                   </p>
//                 </div>

//                 {/* Technologies Section */}
//                 <div>
//                   <h4 className="font-semibold text-lg mb-3">
//                     Technologies Used
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedProject.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-4 py-2 glass-effect rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Key Results */}
//                 <div>
//                   <h4 className="font-semibold text-lg mb-3">Key Results</h4>
//                   <ul className="space-y-2">
//                     {selectedProject.results.map((result, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <span className="text-primary mr-2">✓</span>
//                         <span className="text-foreground/70">{result}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-4 pt-4">
//                   <Button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500">
//                     <ExternalLink className="w-4 h-4 mr-2" />
//                     Live Demo
//                   </Button>

//                   <Button
//                     variant="outline"
//                     className="flex-1 border-primary/50"
//                   >
//                     <Github className="w-4 h-4 mr-2" />
//                     Source Code
//                   </Button>
//                 </div>
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>

//       <Footer />
//     </main>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/HomePageComponents/Navbar";
import Footer from "@/components/HomePageComponents/Footer";

// import megaMarksImage from "@/public/portfolio/images/mega marks.png";
// import ceylonCinnamonFirewoodImage from "@/public/portfolio/images/ceylon cinnamon firewood.png";
// import laabaiMarketingImage from "@/public/portfolio/images/laabai marketing.png";
// import eGadgetsLkImage from "@/public/portfolio/images/e gadgets lk.png";
// import grandHotelImage from "@/public/portfolio/images/grand hotel.png";
// import medicareCenterImage from "@/public/portfolio/images/medicare center.png";

// NOTE: video files are expected to be placed in the `public/portfolio/videos` folder
// e.g. public/portfolio/videos/mega_marks_video.mp4
// We reference them by public URLs (string paths) — importing mp4 from inside `public` can cause bundler errors.

const categories = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "E-Commerce",
  "ERP Systems",
  "Design",
];

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  video?: string | null; // public URL path to video file
  description: string;
  longDescription: string;
  tech: string[];
  results: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Mega Marks (PVT) LTD",
    category: "Web Application",
    image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800",
    video: "/portfolio/videos/mega_marks_video.mp4",
    description:
      "A full-featured e-commerce platform with payment integration, inventory management, and analytics.",
    longDescription:
      "Developed a comprehensive e-commerce solution for a major retail client, handling over 10,000 products and processing 5,000+ daily orders. The platform features real-time inventory tracking, multi-currency support, and advanced analytics dashboards.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
    results: [
      "300% increase in online sales",
      "50% reduction in cart abandonment",
      "99.9% uptime",
    ],
    link: "#",
  },
  {
    id: 2,
    title: "Ceylon Cinnamon Firewood (PVT) LTD",
    category: "Web Application",
    image: "https://images.pexels.com/photos/4386395/pexels-photo-4386395.jpeg?auto=compress&cs=tinysrgb&w=800",
    video: "/portfolio/videos/ceylon_cinnamon_firewood_video.mp4",
    description:
      "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
    longDescription:
      "Built a comprehensive fitness application that helps users track their workouts, monitor nutrition, and achieve their health goals. Features include AI-powered workout recommendations, social sharing, and integration with popular wearables.",
    tech: ["React Native", "Firebase", "Redux", "TensorFlow"],
    results: ["50,000+ downloads", "4.8 star rating", "70% user retention"],
    link: "#",
  },
  {
    id: 3,
    title: "Laabai Marketing (PVT) LTD",
    category: "E-Commerce Platform",
    image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
    video: "/portfolio/videos/laabai_marketing_video.mp4",
    description:
      "Complete brand identity package including logo, color palette, and brand guidelines.",
    longDescription:
      "Created a comprehensive brand identity for a tech startup, including logo design, color system, typography, and brand guidelines. The modern, minimalist design reflects the company's innovative approach and resonates with their target audience.",
    tech: ["Figma", "Illustrator", "Photoshop", "After Effects"],
    results: [
      "Brand recognition up 200%",
      "Featured in design awards",
      "Positive market feedback",
    ],
    link: "#",
  },
  {
    id: 4,
    title: "EGadgetsLK (PVT) LTD",
    category: "E-Commerce Platform",
    image: "https://images.pexels.com/photos/6214471/pexels-photo-6214471.jpeg?auto=compress&cs=tinysrgb&w=800",
    video: "/portfolio/videos/e_gadgets_lk_video.mp4",
    description:
      "Modern analytics dashboard with real-time data visualization and reporting.",
    longDescription:
      "Developed a powerful SaaS dashboard that provides real-time insights into business metrics. Features include customizable widgets, advanced filtering, automated reports, and role-based access control.",
    tech: ["React", "D3.js", "Node.js", "MongoDB", "WebSocket"],
    results: [
      "2000+ active users",
      "40% faster decision-making",
      "Enterprise clients secured",
    ],
    link: "#",
  },
  {
    id: 5,
    title: "Grand Hotel Hikkaduwa",
    category: "Official Website and Booking System",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    video: "/portfolio/videos/grand_hotel_video.mp4",
    description:
      "Comprehensive UX research and UI design for a fintech application.",
    longDescription:
      "Conducted extensive UX research and created an intuitive UI design for a fintech application. The project involved user interviews, usability testing, and iterative design to create a seamless experience for managing finances.",
    tech: ["Figma", "Sketch", "Principle", "UserTesting"],
    results: [
      "User satisfaction up 85%",
      "Task completion time reduced 60%",
      "Industry recognition",
    ],
    link: "#",
  },
  {
    id: 6,
    title: "Medicare Center",
    category: "Web Application",
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
    video: "/portfolio/videos/medicare_center_video.mp4",
    description:
      "Food ordering app with real-time order tracking and payment integration.",
    longDescription:
      "Created a seamless food ordering experience with features like real-time order tracking, multiple payment options, and loyalty rewards. The app serves multiple restaurant locations and handles thousands of orders daily.",
    tech: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
    results: [
      "30,000+ orders monthly",
      "25% increase in average order value",
      "95% customer satisfaction",
    ],
    link: "#",
  },
];

const caseStudies = [
  {
    client: "TechCorp Inc.",
    industry: "Technology",
    challenge:
      "Needed to modernize their legacy system and improve user engagement",
    solution: "Developed a cloud-based SaaS platform with modern UI/UX",
    result: "250% increase in user engagement and 40% cost reduction",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    client: "RetailMax",
    industry: "Retail",
    challenge:
      "Struggling with outdated e-commerce platform and low conversion rates",
    solution:
      "Built a modern, mobile-first e-commerce platform with AI recommendations",
    result: "180% increase in online sales and improved customer satisfaction",
    image:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    client: "HealthPlus",
    industry: "Healthcare",
    challenge:
      "Required a secure patient management system compliant with regulations",
    solution: "Developed HIPAA-compliant portal with telemedicine capabilities",
    result:
      "70% improvement in patient satisfaction and operational efficiency",
    image:
      "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // pause/reset video when modal closes or project changes
  useEffect(() => {
    if (!selectedProject && videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch (e) {
        // ignore if not available
      }
    }
  }, [selectedProject]);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-0 left-0 animate-pulse-slow" />
          <div
            className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-0 right-0 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Explore our latest projects and see how we turn ideas into
              reality. Each project represents our commitment to excellence and
              innovation in digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "border-primary/50 hover:bg-primary/10"
                }
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
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
                        <h3 className="text-xl font-bold mb-2 text-gradient">
                          {project.title}
                        </h3>
                        <p className="text-sm text-foreground/70 mb-4">
                          {project.category}
                        </p>
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

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold text-center mb-6">
              Case <span className="text-gradient">Studies</span>
            </h2>
            <p className="text-lg text-foreground/70 text-center max-w-2xl mx-auto mb-16">
              Deep dives into our most impactful projects and the results we
              achieved for our clients
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="glass-effect hover:bg-white/10 transition-all duration-300 overflow-hidden h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img src={study.image} alt={study.client} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-sm text-primary mb-2">{study.industry}</div>
                      <h3 className="text-2xl font-bold mb-4">{study.client}</h3>

                      <div className="space-y-4 flex-grow">
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Challenge</h4>
                          <p className="text-sm text-foreground/70">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm mb-1">Solution</h4>
                          <p className="text-sm text-foreground/70">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm mb-1">Result</h4>
                          <p className="text-sm text-gradient font-semibold">{study.result}</p>
                        </div>
                      </div>

                      <Button variant="ghost" className="mt-6 w-full group">
                        Read Full Case Study
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="p-12 glass-effect max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">
                Ready to Create Your <span className="text-gradient">Success Story?</span>
              </h3>
              <p className="text-lg text-foreground/70 mb-8">Let's collaborate to bring your vision to life and achieve remarkable results together.</p>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                <a href="/contact">Start Your Project</a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl glass-effect border-primary/20 max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl text-gradient">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-foreground/70">{selectedProject.category}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6 p-4">
                {/* Image or Video Section */}
                <div>
                  {selectedProject.video ? (
                    <video
                      ref={videoRef}
                      src={selectedProject.video}
                      controls
                      autoPlay
                      className="w-full h-80 object-cover rounded-xl"
                      poster={selectedProject.image}
                    />
                  ) : (
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-80 object-cover rounded-xl" />
                  )}
                </div>

                {/* About Section */}
                <div>
                  <h4 className="font-semibold text-lg mb-2">About This Project</h4>
                  <p className="text-foreground/70 leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                {/* Technologies Section */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="px-4 py-2 glass-effect rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Key Results */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, idx) => (
                      <li key={idx} className="flex items-start"><span className="text-primary mr-2">✓</span><span className="text-foreground/70">{result}</span></li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
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

      <Footer />
    </main>
  );
}

// Awaiting full generation in follow-up updates.
