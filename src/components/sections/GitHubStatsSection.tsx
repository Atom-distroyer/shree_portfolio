import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, FileCode2, GitCommit, Cpu, Activity, BookOpen, Terminal, Database } from 'lucide-react';

const analyticsStats = [
  { icon: Code2,     label: 'Python Scripts',    value: '50+',  color: 'text-blue-400',    bg: 'rgba(59,130,246,0.1)' },
  { icon: FileCode2, label: 'Lines of Code',     value: '10K+', color: 'text-purple-400',  bg: 'rgba(139,92,246,0.1)' },
  { icon: GitCommit, label: 'Git Commits',       value: '100+', color: 'text-cyan-400',    bg: 'rgba(6,182,212,0.1)' },
  { icon: Database,  label: 'Datasets Explored', value: '20+',  color: 'text-amber-400',   bg: 'rgba(245,158,11,0.1)' },
  { icon: Cpu,       label: 'Models Trained',    value: '10+',  color: 'text-emerald-400', bg: 'rgba(16,185,129,0.1)' },
  { icon: BookOpen,  label: 'Courses Done',      value: '15+',  color: 'text-pink-400',    bg: 'rgba(236,72,153,0.1)' },
];

const languageStats = [
  { name: 'Python',     percent: 55, color: '#3b82f6' },
  { name: 'Java',       percent: 18, color: '#8b5cf6' },
  { name: 'JavaScript', percent: 12, color: '#f59e0b' },
  { name: 'C',          percent: 8,  color: '#10b981' },
  { name: 'HTML/CSS',   percent: 7,  color: '#f43f5e' },
];

const achievements = [
  { icon: '🏆', label: 'IIT-M Enrolled', sub: 'BS Data Science' },
  { icon: '🔥', label: 'Daily Learner',  sub: '365-day streak' },
  { icon: '🐍', label: 'Pythonista',     sub: '50+ scripts' },
  { icon: '🗄️', label: 'DB Explorer',   sub: 'SQL & MongoDB' },
  { icon: '🐧', label: 'Linux Power',    sub: 'Daily OS user' },
  { icon: '📊', label: 'Data Explorer',  sub: '20+ datasets' },
  { icon: '🌱', label: 'CE Student',     sub: 'Pursuing B.E.' },
];

export const GitHubStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="github-stats" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-4 inline-flex">
            <Activity size={12} />
            <span>Analytics</span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4">
            Developer <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A snapshot of my coding activity, learning progress, and developer milestones.
          </p>
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          className="mb-8 p-6 rounded-2xl border border-border glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-5 text-center">
            🏆 Achievements &amp; Milestones
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                className="flex flex-col items-center gap-1 p-3 rounded-xl border border-border glass-panel cursor-default min-w-[80px] hover:border-blue-500/30 transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.15 + i * 0.07 }}
                whileHover={{ y: -4, scale: 1.06 }}
              >
                <span className="text-2xl">{a.icon}</span>
                <span className="text-xs font-semibold text-foreground">{a.label}</span>
                <span className="text-[10px] text-muted-foreground text-center leading-tight">{a.sub}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats + Language bars */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">

          {/* Developer Stats */}
          <motion.div
            className="p-6 rounded-2xl border border-border glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Terminal className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">
                📊 Developer Stats
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {analyticsStats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    className="flex flex-col gap-1 p-3 rounded-xl bg-background/40 border border-border/50 hover:border-border transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    whileHover={{ scale: 1.04 }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-1" style={{ background: s.bg }}>
                      <Icon className={`w-4 h-4 ${s.color}`} />
                    </div>
                    <span className={`text-xl font-bold font-display ${s.color}`}>{s.value}</span>
                    <span className="text-[11px] text-muted-foreground leading-tight font-mono">{s.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Language breakdown */}
          <motion.div
            className="p-6 rounded-2xl border border-border glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
          >
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              💻 Languages Used
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
              {languageStats.map((l) => (
                <span key={l.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                  {l.name}
                </span>
              ))}
            </div>
            {/* Stacked bar */}
            <div className="flex h-4 rounded-full overflow-hidden mb-5">
              {languageStats.map((l) => (
                <motion.div
                  key={l.name}
                  className="h-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${l.percent}%` } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{ background: l.color, originX: 0 }}
                  title={`${l.name} ${l.percent}%`}
                />
              ))}
            </div>
            {/* Individual bars */}
            <div className="space-y-3">
              {languageStats.map((l, i) => (
                <motion.div
                  key={l.name}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.07 }}
                >
                  <span className="w-20 text-xs text-muted-foreground text-right shrink-0 font-mono">{l.name}</span>
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: l.color, boxShadow: `0 0 6px ${l.color}60` }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${l.percent}%` } : {}}
                      transition={{ duration: 0.7, delay: 0.55 + i * 0.07, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-8 shrink-0 font-mono">{l.percent}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA callout */}
        <motion.div
          className="p-6 rounded-2xl glass-card flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,rgba(59,130,246,0.2),rgba(139,92,246,0.2))', border: '1px solid rgba(99,179,237,0.3)' }}
            >
              🚀
            </div>
            <div>
              <div className="font-display font-bold mb-1">On a mission to become a Data Scientist</div>
              <div className="text-sm text-muted-foreground font-mono">CE degree + IIT Madras DS programme — dual-track learner</div>
            </div>
          </div>
          <motion.a
            href="https://github.com/shreyashnagare"
            target="_blank" rel="noopener noreferrer"
            className="btn-secondary whitespace-nowrap flex-shrink-0"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
