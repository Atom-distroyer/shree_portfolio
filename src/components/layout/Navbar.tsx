import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const navItems = [
  { name: 'Home',     href: '#home' },
  { name: 'About',   href: '#about' },
  { name: 'Skills',  href: '#skills' },
  { name: 'Journey', href: '#education' },
  { name: 'Projects',href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
      const reversed = [...sections].reverse();
      for (const section of reversed) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => activeSection === href.slice(1);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-panel border-b border-white/5'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <nav className="flex items-center justify-between h-18 py-4">

            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm"
                style={{
                  background: 'linear-gradient(135deg, hsl(217,91%,60%), hsl(265,89%,65%))',
                  boxShadow: '0 0 20px rgba(99,179,237,0.3)',
                }}
                animate={{ boxShadow: ['0 0 20px rgba(99,179,237,0.3)', '0 0 30px rgba(167,139,250,0.4)', '0 0 20px rgba(99,179,237,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SN
              </motion.div>
              <motion.span
                className="font-display font-semibold text-base hidden sm:block"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="gradient-text">Shreyash</span>
                <span className="text-foreground/70"> Nagare</span>
              </motion.span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-7">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={`relative text-sm font-medium transition-colors link-underline ${
                    isActive(item.href)
                      ? 'nav-active'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: 'linear-gradient(90deg, hsl(217,91%,60%), hsl(265,89%,65%))' }}
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Right: Theme Toggle + Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="relative w-14 h-7 rounded-full border border-white/10 overflow-hidden"
                  style={{ background: theme === 'dark' ? 'hsl(217,33%,14%)' : 'hsl(220,15%,92%)' }}
                  whileTap={{ scale: 0.95 }}
                  title="Toggle theme"
                >
                  <motion.div
                    className="absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      background: theme === 'dark'
                        ? 'linear-gradient(135deg, hsl(217,91%,60%), hsl(265,89%,65%))'
                        : 'linear-gradient(135deg, #f59e0b, #f97316)',
                    }}
                    animate={{ x: theme === 'dark' ? 2 : 30 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <motion.div
                      animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                      transition={{ duration: 0.4 }}
                    >
                      {theme === 'dark'
                        ? <Moon size={12} className="text-white" />
                        : <Sun size={12} className="text-white" />
                      }
                    </motion.div>
                  </motion.div>
                </motion.button>
              )}

              {/* Mobile menu button */}
              <motion.button
                className="md:hidden p-2 rounded-lg glass-panel"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div animate={{ rotate: mobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </motion.button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 top-16 z-40"
              style={{ background: 'rgba(9,11,21,0.97)', backdropFilter: 'blur(20px)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className={`text-3xl font-display font-semibold ${
                      isActive(item.href) ? 'gradient-text' : 'text-muted-foreground'
                    }`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: index * 0.07 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
