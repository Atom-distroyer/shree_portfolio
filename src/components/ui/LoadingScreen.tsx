import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  '> Initializing system...',
  '> Loading modules: Python, Data Science, ML...',
  '> Connecting to knowledge base...',
  '> Rendering portfolio...',
  '> Ready.',
];

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const totalTime = 1800;
    const lineInterval = totalTime / bootLines.length;

    const lineTimer = setInterval(() => {
      setLineIndex((prev) => {
        if (prev >= bootLines.length - 1) {
          clearInterval(lineTimer);
          return prev;
        }
        return prev + 1;
      });
    }, lineInterval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, totalTime / 50);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'hsl(224, 71%, 4%)' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Animated ring */}
          <motion.div
            className="relative mb-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full border-2 border-blue-500/30 relative">
              <motion.div
                className="absolute inset-0 rounded-full border-t-2 border-blue-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-blue-400 text-lg font-bold">SN</span>
              </div>
            </div>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full blur-md"
              style={{ background: 'radial-gradient(circle, rgba(99,179,237,0.2) 0%, transparent 70%)' }}
            />
          </motion.div>

          {/* Boot text terminal */}
          <div className="font-mono text-xs text-green-400/80 space-y-1 mb-8 w-64">
            {bootLines.slice(0, lineIndex + 1).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className={i === lineIndex ? 'text-green-300' : 'text-green-500/50'}
              >
                {line}
                {i === lineIndex && i < bootLines.length - 1 && (
                  <span className="animate-blink ml-1">█</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-64 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, hsl(217,91%,60%), hsl(265,89%,65%))',
                boxShadow: '0 0 10px rgba(99,179,237,0.5)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          <div className="mt-2 font-mono text-xs text-blue-400/60">{progress}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
