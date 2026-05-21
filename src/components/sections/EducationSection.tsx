import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const journeyItems = [
  {
    id: 1,
    type: 'education',
    icon: '🎓',
    title: 'IIT Madras — BS in Data Science & Applications',
    subtitle: 'Indian Institute of Technology, Madras',
    period: '2023 – Present',
    status: 'Pursuing',
    statusColor: 'text-purple-400',
    statusBg: 'rgba(139,92,246,0.1)',
    statusBorder: 'rgba(139,92,246,0.3)',
    description: 'Rigorous online degree programme covering Statistics, Machine Learning, Python Programming, Databases, and Data-driven problem solving at one of India\'s premier technical institutions.',
    tags: ['Statistics', 'ML', 'Python', 'DBMS', 'Data Viz'],
  },
  {
    id: 2,
    type: 'education',
    icon: '💻',
    title: 'Bachelor of Engineering — Computer Engineering',
    subtitle: 'Maharashtra, India',
    period: '2022 – Present',
    status: 'Pursuing',
    statusColor: 'text-blue-400',
    statusBg: 'rgba(59,130,246,0.1)',
    statusBorder: 'rgba(59,130,246,0.3)',
    description: 'Comprehensive undergraduate program covering Data Structures, Algorithms, Operating Systems, Computer Networks, DBMS, OOP, and Software Engineering fundamentals.',
    tags: ['DSA', 'OOP', 'OS', 'Networks', 'C', 'Java'],
  },
  {
    id: 3,
    type: 'milestone',
    icon: '📚',
    title: 'Higher Secondary Certificate (HSC)',
    subtitle: 'Maharashtra State Board',
    period: '2020 – 2022',
    status: '80%',
    statusColor: 'text-emerald-400',
    statusBg: 'rgba(16,185,129,0.1)',
    statusBorder: 'rgba(16,185,129,0.3)',
    description: 'Completed 12th grade with Physics, Chemistry, Mathematics, and Computer Science. Built a strong foundation in analytical thinking and problem-solving.',
    tags: ['Physics', 'Chemistry', 'Maths', 'Computer Science'],
  },
  {
    id: 4,
    type: 'milestone',
    icon: '🏫',
    title: 'Secondary School Certificate (SSC)',
    subtitle: 'CBSE Board',
    period: '2019 – 2020',
    status: '87%',
    statusColor: 'text-amber-400',
    statusBg: 'rgba(245,158,11,0.1)',
    statusBorder: 'rgba(245,158,11,0.3)',
    description: 'Completed 10th grade with CBSE Board, achieving 87% — demonstrating strong academic performance and laying the groundwork for a career in engineering and technology.',
    tags: ['Science', 'Mathematics', 'English', 'Social Studies'],
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-4 inline-flex">
            <GraduationCap size={12} />
            <span>My Journey</span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4">
            Education &{' '}
            <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            My academic journey and the milestones that shaped my passion for technology and data science.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl">
          {/* Vertical neon line */}
          <motion.div
            className="absolute left-6 md:left-8 top-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, hsl(217,91%,60%), hsl(265,89%,65%), transparent)',
              boxShadow: '0 0 8px rgba(99,179,237,0.4)',
            }}
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          />

          <div className="space-y-10">
            {journeyItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative pl-16 md:pl-24"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-3.5 md:left-5 top-5 w-6 h-6 rounded-full flex items-center justify-center text-base"
                  style={{
                    background: 'linear-gradient(135deg, hsl(217,91%,60%), hsl(265,89%,65%))',
                    boxShadow: '0 0 16px rgba(99,179,237,0.5)',
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, type: 'spring' }}
                >
                  {item.icon}
                </motion.div>

                {/* Card */}
                <motion.div
                  className="glass-card rounded-2xl p-6 md:p-8"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Title row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">{item.subtitle}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold font-mono ${item.statusColor}`}
                        style={{ background: item.statusBg, border: `1px solid ${item.statusBorder}` }}
                      >
                        {item.status}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">{item.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="skill-chip">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement callout */}
        <motion.div
          className="mt-16 flex items-start gap-4 p-6 rounded-2xl glass-card max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1 }}
        >
          <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(249,115,22,0.2))', border: '1px solid rgba(245,158,11,0.3)' }}
          >
            <Award size={18} className="text-amber-400" />
          </div>
          <div>
            <div className="font-display font-semibold mb-1">Dual-Track Learner</div>
            <div className="text-sm text-muted-foreground">
              Simultaneously pursuing a traditional Computer Engineering degree alongside the prestigious IIT Madras Online BS in Data Science programme — demonstrating exceptional dedication to becoming a well-rounded Data Scientist and Software Engineer.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
