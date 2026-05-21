import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Database, Cpu, HeartHandshake } from 'lucide-react';

const highlights = [
  {
    icon: '🐍',
    label: 'Python Developer',
    desc: 'Building scripts, automations & data pipelines',
    color: 'from-blue-500/10 to-transparent',
    border: 'hover:border-blue-500/40',
  },
  {
    icon: '📊',
    label: 'Data Scientist',
    desc: 'IIT Madras BS in Data Science (Pursuing)',
    color: 'from-purple-500/10 to-transparent',
    border: 'hover:border-purple-500/40',
  },
  {
    icon: '🐧',
    label: 'Linux Enthusiast',
    desc: 'Daily driver: Linux — freedom over comfort',
    color: 'from-cyan-500/10 to-transparent',
    border: 'hover:border-cyan-500/40',
  },
  {
    icon: '🎓',
    label: 'CE Student',
    desc: 'Bachelor of Computer Engineering (Pursuing)',
    color: 'from-emerald-500/10 to-transparent',
    border: 'hover:border-emerald-500/40',
  },
];

const interests = [
  { emoji: '🤖', label: 'Machine Learning & AI' },
  { emoji: '📈', label: 'Data Analysis' },
  { emoji: '🐧', label: 'Linux & Open Source' },
  { emoji: '🌐', label: 'Software Development' },
  { emoji: '🗄️', label: 'Databases & SQL' },
  { emoji: '☁️', label: 'Modern Technologies' },
];

const whatIDo = [
  {
    Icon: Terminal,
    title: 'Python & Scripting',
    desc: 'Writing clean, efficient Python code for automation, data processing, and building useful tools.',
  },
  {
    Icon: Database,
    title: 'Data Science & Analytics',
    desc: 'Exploring datasets, building ML models, and turning raw data into actionable insights.',
  },
  {
    Icon: Cpu,
    title: 'Software Engineering',
    desc: 'Applying Computer Engineering fundamentals to develop robust and scalable software solutions.',
  },
  {
    Icon: HeartHandshake,
    title: 'Continuous Learning',
    desc: 'Committed to lifelong learning — currently deepening expertise through IIT Madras BS in Data Science.',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-4 inline-flex">
            <span>About Me</span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Hey, I&apos;m{' '}
            <span className="gradient-text">Shreyash!</span>
          </h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            I&apos;m a passionate{' '}
            <span className="text-blue-400 font-semibold">Computer Engineering student</span>{' '}
            on a mission to become a{' '}
            <span className="text-purple-400 font-semibold">Data Scientist</span>. I thrive
            at the intersection of code, data, and mathematics — constantly learning and building
            things that solve real problems. I use Linux daily and believe in the power of open-source
            technology and the philosophy of continuous self-improvement.
          </motion.p>
        </motion.div>

        {/* Highlight Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className={`relative flex flex-col gap-2 p-5 rounded-2xl border border-border bg-gradient-to-br ${item.color} ${item.border} transition-all cursor-default group overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04),_transparent_70%)]" />
              <span className="text-3xl">{item.icon}</span>
              <span className="text-base font-semibold font-display">{item.label}</span>
              <span className="text-sm text-muted-foreground">{item.desc}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px mb-14"
          style={{ transformOrigin: 'left', background: 'linear-gradient(90deg, transparent, rgba(99,179,237,0.3), rgba(167,139,250,0.3), transparent)' }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
        />

        {/* What I Do */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-8">
            What I <span className="gradient-text">Do</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {whatIDo.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="flex gap-4 p-5 rounded-2xl glass-card group"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ x: 6 }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, hsl(217,91%,60%,0.2), hsl(265,89%,65%,0.2))' }}
                >
                  <Icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">{title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            🌱 Interests & Passions
          </p>
          <div className="flex flex-wrap gap-3">
            {interests.map((item, i) => (
              <motion.span
                key={item.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-blue-500/40 hover:text-foreground transition-all cursor-default glass-panel"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.75 + i * 0.08 }}
                whileHover={{ scale: 1.07, y: -2 }}
              >
                <span>{item.emoji}</span>
                {item.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
