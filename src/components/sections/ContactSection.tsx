import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactDetails = [
    {
      Icon: Mail,
      label: 'Email',
      value: 'nrshreyash654@gmail.com',
      href: 'mailto:nrshreyash654@gmail.com',
      color: 'rgba(59,130,246,0.2)',
      iconColor: 'text-blue-400',
    },
    {
      Icon: Phone,
      label: 'Phone',
      value: '+91 85520 70097',
      href: 'tel:+918552070097',
      color: 'rgba(139,92,246,0.2)',
      iconColor: 'text-purple-400',
    },
    {
      Icon: MapPin,
      label: 'Location',
      value: 'Maharashtra, India',
      href: undefined,
      color: 'rgba(16,185,129,0.2)',
      iconColor: 'text-emerald-400',
    },
  ];

  const socials = [
    { Icon: Github,   href: 'https://github.com/shreyashnagare',        label: 'GitHub' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/shreyash-nagare',   label: 'LinkedIn' },
    { Icon: Mail,     href: 'mailto:nrshreyash654@gmail.com',            label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-4 inline-flex">Contact</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Have a project, opportunity, or just want to talk tech and data science? I&apos;m always happy to chat!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl">

          {/* Left — Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. I try to respond within 24 hours.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactDetails.map(({ Icon, label, value, href, color, iconColor }, i) => {
                const Wrapper = href ? motion.a : motion.div;
                return (
                  <Wrapper
                    key={label}
                    {...(href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-4 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 6 }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: color, border: `1px solid ${color}` }}
                    >
                      <Icon className={`w-5 h-5 ${iconColor}`} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-mono mb-0.5">{label}</div>
                      <div className="font-medium group-hover:text-foreground transition-colors">{value}</div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Find me on
              </h4>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="w-11 h-11 rounded-xl glass-panel flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ border: '1px solid rgba(99,179,237,0.1)' }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Status indicator */}
            <motion.div
              className="p-4 rounded-2xl glass-panel"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-mono text-green-400">Currently open to opportunities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-display font-bold mb-6">Send a Message</h3>

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="text-xl font-display font-bold gradient-text mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground text-sm">Thanks for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 font-mono">Your Name *</label>
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange}
                        className="form-input" placeholder="Shreyash Nagare" required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 font-mono">Your Email *</label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        className="form-input" placeholder="hello@example.com" required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 font-mono">Subject</label>
                    <input
                      type="text" id="subject" name="subject"
                      value={formData.subject} onChange={handleChange}
                      className="form-input" placeholder="Collaboration / Opportunity / Just saying hi!"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 font-mono">Message *</label>
                    <textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleChange}
                      rows={5} className="form-input resize-none"
                      placeholder="Tell me about your idea, project, or opportunity..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary w-full justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Send Message</span>
                        <Send size={16} className="relative z-10" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
