"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image"; // add this import
import companyLogo from "@/public/5mLogo.png";

const footerLinks = {
  Company: ["About Us", "Our Team", "Careers", "Blog"],
  Services: ["Web Design", "Development", "Mobile Apps", "SEO"],
  Resources: ["Case Studies", "Documentation", "Support", "Privacy Policy"],
};

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Dribbble", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              {/* <Sparkles className="w-8 h-8 text-primary glow-effect" /> */}
              <Image
                src={companyLogo}
                alt="5M Solutions Logo"
                width={50} // adjust size as needed
                height={50} // adjust size as needed
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-gradient">
                5M Solutions
              </span>
            </motion.div>
            <p className="text-foreground/70 mb-6 max-w-sm">
              Crafting Digital Experiences that Inspire. We transform ideas into
              stunning websites and powerful software solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <Mail className="w-4 h-4 text-primary" />
                <span>fiveminutessolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                <span>+94714686935</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kadawatha, SL</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-foreground/60 text-sm">
            © 2022 5M Solutions (PVT) LTD. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-foreground/60 hover:text-primary transition-colors text-sm"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
