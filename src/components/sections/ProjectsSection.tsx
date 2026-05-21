import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, BarChart2, Cpu, Users, Globe, Brain } from 'lucide-react';

const projects = [
  {
    title: 'Data Analysis Dashboard',
    description: 'An interactive dashboard built with Python and Matplotlib/Seaborn to visualize complex datasets. Features automated data cleaning, statistical summary, and trend detection to help derive actionable insights from raw CSV data.',
    icon: BarChart2,
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    category: 'Data Science',
    categoryColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    glowColor: 'rgba(139,92,246,0.1)',
    github: 'https://github.com/shreyashnagare',
    live: '#',
    featured: true,
  },
  {
    title: 'Machine Learning Predictor',
    description: 'A machine learning pipeline for classification and regression tasks using Scikit-learn. Includes data preprocessing, feature engineering, model training, hyperparameter tuning, and performance evaluation with cross-validation.',
    icon: Brain,
    tags: ['Python', 'Scikit-learn', 'NumPy', 'ML Pipeline'],
    category: 'Machine Learning',
    categoryColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    glowColor: 'rgba(59,130,246,0.1)',
    github: 'https://github.com/shreyashnagare',
    live: '#',
    featured: true,
  },
  {
    title: 'Python Automation Tool',
    description: 'A collection of Python automation scripts for file management, web scraping, data extraction, and scheduled task execution. Designed to eliminate repetitive manual workflows and boost productivity.',
    icon: Cpu,
    tags: ['Python', 'BeautifulSoup', 'Selenium', 'Cron'],
    category: 'Automation',
    categoryColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    glowColor: 'rgba(16,185,129,0.1)',
    github: 'https://github.com/shreyashnagare',
    live: '#',
    featured: true,
  },
  {
    title: 'Student Management System',
    description: 'A full-featured student record management system with CRUD operations, database integration, grade calculation, and role-based access for students, teachers, and administrators.',
    icon: Users,
    tags: ['Java', 'SQL', 'DBMS', 'OOP', 'JDBC'],
    category: 'Full Stack',
    categoryColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    glowColor: 'rgba(6,182,212,0.1)',
    github: 'https://github.com/shreyashnagare',
    live: '#',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio website — built with React, TypeScript, Framer Motion, and Tailwind CSS. Features a dark futuristic theme with glassmorphism, canvas particle animations, and smooth scroll-reveal animations.',
    icon: Globe,
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    category: 'Web Dev',
    categoryColor: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
    glowColor: 'rgba(236,72,153,0.1)',
    github: 'https://github.com/shreyashnagare',
    live: '#',
    featured: false,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-4 inline-flex">Projects</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A showcase of my work in data science, automation, and software development.
            More projects coming soon as I continue building!
          </p>
        </motion.div>

        {/* Featured Cards (3 columns) */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {featuredProjects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                className="relative flex flex-col p-6 rounded-2xl border border-border glass-card group overflow-hidden"
                style={{ '--glow': project.glowColor } as React.CSSProperties}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.14, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                {/* Top glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top, ${project.glowColor}, transparent 65%)` }}
                />

                {/* Badge + Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border font-mono ${project.categoryColor}`}>
                    {project.category}
                  </span>
                  <motion.div
                    className="p-2 rounded-xl bg-muted/50"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold mb-3 group-hover:gradient-text transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-chip">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank" rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 font-mono"
                    whileHover={{ x: 4 }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 font-mono"
                    whileHover={{ x: 4 }}
                    title="Coming soon"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">More Projects</span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* Other Projects (2 columns) */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                className="flex gap-5 p-5 rounded-2xl glass-card group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${project.glowColor}`, border: `1px solid ${project.glowColor}` }}
                >
                  <Icon className="w-6 h-6 text-foreground/70" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold">{project.title}</h3>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full border flex-shrink-0 ${project.categoryColor}`}>
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-chip">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 font-mono"
                      whileHover={{ x: 3 }}
                    >
                      <Github size={12} /> GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          <p className="text-muted-foreground text-sm mb-4 font-mono">
            More projects are being built — stay tuned!
          </p>
          <motion.a
            href="https://github.com/shreyashnagare"
            target="_blank" rel="noopener noreferrer"
            className="btn-secondary inline-flex"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={16} /> View all on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};