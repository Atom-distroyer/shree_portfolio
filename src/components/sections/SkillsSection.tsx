import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    emoji: '📊',
    title: 'Data Science',
    gradient: 'from-purple-500/10 via-violet-500/5 to-transparent',
    border: 'hover:border-purple-500/40',
    glowColor: 'rgba(139,92,246,0.2)',
    skills: ['IIT Madras BS in Data Science', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Statistics'],
    bars: [
      { name: 'Statistics & Math',   pct: 75, color: '#8b5cf6' },
      { name: 'Data Analysis',       pct: 70, color: '#a78bfa' },
      { name: 'ML Fundamentals',     pct: 60, color: '#7c3aed' },
    ],
  },
  {
    emoji: '👨‍💻',
    title: 'Programming Languages',
    gradient: 'from-blue-500/10 via-sky-500/5 to-transparent',
    border: 'hover:border-blue-500/40',
    glowColor: 'rgba(59,130,246,0.2)',
    skills: ['Python', 'C', 'Java', 'JavaScript', 'HTML', 'CSS'],
    bars: [
      { name: 'Python',      pct: 80, color: '#3b82f6' },
      { name: 'JavaScript',  pct: 60, color: '#60a5fa' },
      { name: 'Java',        pct: 55, color: '#2563eb' },
      { name: 'C',           pct: 65, color: '#1d4ed8' },
    ],
  },
  {
    emoji: '🗄️',
    title: 'Database & Storage',
    gradient: 'from-amber-500/10 via-yellow-500/5 to-transparent',
    border: 'hover:border-amber-500/40',
    glowColor: 'rgba(245,158,11,0.2)',
    skills: ['SQL', 'DBMS', 'MongoDB', 'PL/SQL'],
    bars: [
      { name: 'SQL / DBMS', pct: 72, color: '#f59e0b' },
      { name: 'MongoDB',    pct: 55, color: '#fbbf24' },
      { name: 'PL/SQL',     pct: 50, color: '#d97706' },
    ],
  },
  {
    emoji: '🖥️',
    title: 'Operating Systems',
    gradient: 'from-emerald-500/10 via-green-500/5 to-transparent',
    border: 'hover:border-emerald-500/40',
    glowColor: 'rgba(16,185,129,0.2)',
    skills: ['Linux (daily driver)', 'Windows', 'Bash Scripting', 'CLI Tools'],
    bars: [
      { name: 'Linux',   pct: 80, color: '#10b981' },
      { name: 'Windows', pct: 70, color: '#34d399' },
      { name: 'Bash',    pct: 65, color: '#059669' },
    ],
  },
  {
    emoji: '🧰',
    title: 'Tools & Technologies',
    gradient: 'from-rose-500/10 via-red-500/5 to-transparent',
    border: 'hover:border-rose-500/40',
    glowColor: 'rgba(244,63,94,0.2)',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Vim'],
    bars: [
      { name: 'Git / GitHub', pct: 70, color: '#f43f5e' },
      { name: 'VS Code',      pct: 85, color: '#fb7185' },
      { name: 'Jupyter',      pct: 68, color: '#e11d48' },
    ],
  },
];

const SkillBar = ({ name, pct, color, delay, isInView }: { name: string; pct: number; color: string; delay: number; isInView: boolean }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-xs text-muted-foreground font-mono">
      <span>{name}</span>
      <span>{pct}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-muted/50 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}60` }}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 0.9, delay, ease: 'easeOut' }}
      />
    </div>
  </div>
);

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-4 inline-flex">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4">
            Skills &{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Technologies I work with, currently learning, and deeply passionate about.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`relative p-6 rounded-2xl border border-border bg-gradient-to-br ${category.gradient} ${category.border} transition-all duration-300 group overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {/* Inner glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top, ${category.glowColor}, transparent 70%)` }}
              />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <motion.span className="text-2xl select-none" whileHover={{ scale: 1.2, rotate: 8 }}>
                  {category.emoji}
                </motion.span>
                <h3 className="text-lg font-display font-semibold">{category.title}</h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2 mb-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-chip"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 + skillIndex * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Skill bars */}
              <div className="space-y-2.5">
                {category.bars.map((bar, bi) => (
                  <SkillBar
                    key={bar.name}
                    {...bar}
                    delay={0.4 + index * 0.1 + bi * 0.1}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* IIT Madras callout */}
        <motion.div
          className="mt-12 p-6 rounded-2xl glass-card flex flex-col md:flex-row items-start md:items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))', border: '1px solid rgba(139,92,246,0.3)' }}
          >
            🎓
          </div>
          <div>
            <div className="font-display font-semibold text-lg mb-1">
              IIT Madras &mdash; BS in Data Science & Applications
            </div>
            <div className="text-muted-foreground text-sm">
              Currently pursuing a rigorous undergraduate program in Data Science through IIT Madras Online Degree programme — covering Statistics, Machine Learning, Databases, and Programming at scale.
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="section-badge" style={{ background: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.3)', color: 'hsl(265,89%,65%)' }}>
              Pursuing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
