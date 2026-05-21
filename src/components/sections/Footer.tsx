import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const links = [
  { name: 'Home',    href: '#home' },
  { name: 'About',  href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { name: 'Email',    href: 'mailto:nrshreyash654@gmail.com',           icon: Mail },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/shreyash-nagare',   icon: Linkedin },
  { name: 'GitHub',   href: 'https://github.com/shreyashnagare',          icon: Github },
  { name: 'Phone',    href: 'tel:+918552070097',                          icon: Phone },
];

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative py-16 md:py-24 border-t border-white/5">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(217,91%,60%), hsl(265,89%,65%), transparent)' }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-12">

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest mb-6 text-muted-foreground">
              Quick Links
            </h3>
            <div className="space-y-3">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.a
                    href={link.href}
                    className="block text-2xl md:text-3xl font-display font-semibold text-foreground/80 hover:gradient-text transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest mb-6 text-muted-foreground">
              Connect
            </h3>
            <div className="space-y-3">
              {socials.map(({ name, href, icon: Icon }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <motion.a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-xl md:text-2xl font-display font-semibold text-muted-foreground hover:text-foreground group transition-colors"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-1.5 rounded-lg"
                      style={{ background: 'hsl(217,33%,14%)' }}
                      whileHover={{
                        background: 'linear-gradient(135deg, hsl(217,91%,60%), hsl(265,89%,65%))',
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={16} className="group-hover:text-white transition-colors" />
                    </motion.div>
                    {name}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Time & Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest mb-3 text-muted-foreground">
                Local Time (IST)
              </h3>
              <motion.div
                className="text-2xl md:text-3xl font-display font-semibold gradient-text"
                key={currentTime}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {currentTime}
              </motion.div>
            </div>
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest mb-3 text-muted-foreground">
                Location
              </h3>
              <div className="text-base font-medium text-foreground/80">
                Maharashtra, India 🇮🇳
              </div>
            </div>
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest mb-3 text-muted-foreground">
                Status
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-mono">Open to opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact bar */}
        <motion.div
          className="border-t border-white/5 pt-8 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <motion.a href="tel:+918552070097" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono" whileHover={{ x: 5 }}>
              +91 85520 70097
            </motion.a>
            <motion.a href="mailto:nrshreyash654@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono" whileHover={{ x: 5 }}>
              nrshreyash654@gmail.com
            </motion.a>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="mt-12 border-t border-white/5 pt-10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <blockquote>
            <motion.p
              className="text-xl md:text-2xl font-display font-medium italic text-muted-foreground leading-relaxed max-w-2xl"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
            >
              &ldquo;Data is the new oil, but refined data is the new gold.&rdquo;
            </motion.p>
            <footer className="mt-3 text-sm text-muted-foreground/50 font-mono">
              — Clive Humby
            </footer>
          </blockquote>
        </motion.div>

        {/* Big name */}
        <motion.div
          className="mt-4 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.h2
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold gradient-text leading-none"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            SHREYASH
          </motion.h2>
        </motion.div>

        {/* Bottom links */}
        <motion.div
          className="mt-8 flex flex-wrap gap-6 items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="flex gap-6">
            <motion.a
              href="https://linkedin.com/in/shreyash-nagare"
              target="_blank" rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/shreyashnagare"
              target="_blank" rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
            >
              GitHub
            </motion.a>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 Shreyash Nagare. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
