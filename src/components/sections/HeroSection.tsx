import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2, Database, Cpu } from 'lucide-react';

const typingWords = [
  'Aspiring Data Scientist',
  'Computer Engineering Student',
  'Python Developer',
  'Linux Enthusiast',
  'AI & ML Explorer',
];

const useTypingEffect = (words: string[], speed = 60, deleteSpeed = 35, pauseTime = 1800) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), deleteSpeed);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }

    setText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, deleteSpeed, pauseTime]);

  return text;
};

// Floating data-node visual
const DataNodeVisual = () => {
  const nodes = [
    { x: 50, y: 50, size: 18, delay: 0, icon: Code2 },
    { x: 80, y: 25, size: 14, delay: 0.5, icon: Database },
    { x: 20, y: 30, size: 16, delay: 1, icon: Cpu },
    { x: 75, y: 70, size: 12, delay: 1.5, icon: Code2 },
    { x: 25, y: 72, size: 15, delay: 2, icon: Database },
  ];

  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [1, 3], [2, 4],
  ];

  return (
    <div className="relative w-full h-full">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Connection lines */}
        {connections.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="url(#lineGrad)"
            strokeWidth="0.4"
            strokeOpacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.8 }}
          />
        ))}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <radialGradient id="nodeGrad">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </radialGradient>
        </defs>
        {/* Circles */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x} cy={node.y} r={node.size / 5}
            fill="url(#nodeGrad)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: node.delay + 0.5, type: 'spring' }}
            style={{ filter: 'drop-shadow(0 0 4px rgba(99,179,237,0.7))' }}
          />
        ))}
      </svg>
    </div>
  );
};

export const HeroSection = () => {
  const typedText = useTypingEffect(typingWords);
  const ref = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* ── Left: Text Content ── */}
          <div className="order-2 lg:order-1 space-y-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase">
                Heyy, I&apos;m
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-none">
                <motion.span
                  className="gradient-text block"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  whileHover={{ x: 8 }}
                >
                  Shreyash
                </motion.span>
                <motion.span
                  className="text-foreground/90 block"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  whileHover={{ x: 8 }}
                >
                  Nagare
                </motion.span>
              </h1>
            </motion.div>

            {/* Typing animation */}
            <motion.div
              className="h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-xl md:text-2xl font-display font-medium">
                <span className="gradient-text">{typedText}</span>
                <span className="animate-blink text-blue-400 ml-0.5">|</span>
              </span>
            </motion.div>

            {/* Intro */}
            <motion.p
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Computer Engineering student pursuing a passion for Data Science and AI.
              I love building with <span className="text-blue-400 font-mono">Python</span>, exploring
              Machine Learning, and using <span className="text-purple-400 font-mono">Linux</span> as my
              daily driver. Always learning, always building.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
            >
              <motion.button
                className="btn-primary relative z-10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">View Projects</span>
              </motion.button>
              <motion.button
                className="btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { href: 'https://github.com/shreyashnagare', Icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/shreyash-nagare', Icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:nrshreyash654@gmail.com', Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-2.5 rounded-xl glass-panel text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(90deg, hsl(217,33%,18%), transparent)' }} />
              <span className="text-xs font-mono text-muted-foreground">@shreyashnagare</span>
            </motion.div>
          </div>

          {/* ── Right: Visual ── */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-blue-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-purple-500/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Glow background */}
              <div
                className="absolute inset-8 rounded-full blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.15) 50%, transparent 80%)' }}
              />

              {/* Main glass container */}
              <motion.div
                className="absolute inset-8 rounded-full glass-panel overflow-hidden flex items-center justify-center"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                <DataNodeVisual />
                {/* Center badge */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-1">🧑‍💻</div>
                    <div className="font-mono text-xs gradient-text font-semibold">DATA SCIENCE</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating skill tags */}
              {[
                { label: 'Python', color: '#3b82f6', pos: '-top-4 left-1/2 -translate-x-1/2', delay: 0 },
                { label: 'ML / AI', color: '#8b5cf6', pos: 'top-1/3 -right-6', delay: 0.3 },
                { label: 'Linux', color: '#06b6d4', pos: 'bottom-8 -right-4', delay: 0.6 },
                { label: 'SQL', color: '#f59e0b', pos: '-bottom-4 left-1/4', delay: 0.9 },
                { label: 'IIT-M DS', color: '#10b981', pos: 'top-1/3 -left-8', delay: 1.2 },
              ].map(({ label, color, pos, delay }) => (
                <motion.div
                  key={label}
                  className={`absolute ${pos} px-3 py-1 rounded-full glass-panel text-xs font-mono font-semibold`}
                  style={{ color, borderColor: color + '33' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + delay, type: 'spring' }}
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono uppercase tracking-widest">scroll down</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
};