import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WeatherEffectsContainer: React.FC = () => {
  const [activeCornerEffect, setActiveCornerEffect] = useState<'sunny' | 'snowy' | null>(null);
  const [showRainOverlay, setShowRainOverlay] = useState(false);

  useEffect(() => {
    let rainTimeout: ReturnType<typeof setTimeout>;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const weatherText = target.innerText?.toLowerCase() || target.getAttribute('data-weather')?.toLowerCase() || '';

      if (weatherText.includes('sunny')) {
        setActiveCornerEffect('sunny');
      } else if (weatherText.includes('snowy') || weatherText.includes('snow')) {
        setActiveCornerEffect('snowy');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const weatherText = target.innerText?.toLowerCase() || target.getAttribute('data-weather')?.toLowerCase() || '';
      if (weatherText.includes('sunny') || weatherText.includes('snowy') || weatherText.includes('snow')) {
        setActiveCornerEffect(null);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const weatherText = target.innerText?.toLowerCase() || target.getAttribute('data-weather')?.toLowerCase() || '';

      if (weatherText.includes('rainy') || weatherText.includes('rain')) {
        setShowRainOverlay(true);
        clearTimeout(rainTimeout);
        rainTimeout = setTimeout(() => {
          setShowRainOverlay(false);
        }, 500); // 0.5 seconds rain overlay
      } else if (weatherText.includes('snowy') || weatherText.includes('snow')) {
        setActiveCornerEffect('snowy');
      } else if (weatherText.includes('sunny')) {
        setActiveCornerEffect('sunny');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('click', handleClick);
      clearTimeout(rainTimeout);
    };
  }, []);

  return (
    <>
      {/* Top-Right Weather Element Pop-in Container */}
      <div className="fixed top-24 right-8 z-50 pointer-events-none">
        <AnimatePresence>
          {activeCornerEffect === 'sunny' && (
            <motion.div
              key="sun"
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 45 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="flex items-center justify-center relative"
            >
              {/* Outer Glowing Rays */}
              <div className="absolute w-28 h-28 rounded-full bg-amber-400/30 blur-xl animate-pulse" />
              
              {/* Sun Core with Rays SVG */}
              <div className="relative w-20 h-20 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-full shadow-lg shadow-amber-500/50 flex items-center justify-center border-2 border-yellow-200">
                <svg className="w-16 h-16 text-amber-100 animate-sun-rays" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" fill="currentColor" className="text-yellow-300" />
                  <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>
          )}

          {activeCornerEffect === 'snowy' && (
            <motion.div
              key="snowman"
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-sky-200/80 shadow-2xl"
            >
              {/* Cute Snowman SVG Illustration */}
              <svg className="w-16 h-20" viewBox="0 0 100 120">
                {/* Snowman Body Bottom */}
                <circle cx="50" cy="85" r="28" fill="#F0F9FF" stroke="#38BDF8" strokeWidth="3" />
                {/* Snowman Body Middle */}
                <circle cx="50" cy="50" r="20" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="3" />
                {/* Snowman Head */}
                <circle cx="50" cy="24" r="14" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="3" />
                {/* Eyes */}
                <circle cx="45" cy="22" r="2" fill="#0F172A" />
                <circle cx="55" cy="22" r="2" fill="#0F172A" />
                {/* Carrot Nose */}
                <polygon points="50,24 62,26 50,28" fill="#F97316" />
                {/* Buttons */}
                <circle cx="50" cy="45" r="2" fill="#0F172A" />
                <circle cx="50" cy="53" r="2" fill="#0F172A" />
                <circle cx="50" cy="61" r="2" fill="#0F172A" />
                {/* Scarf */}
                <path d="M38,34 Q50,40 62,34" stroke="#F43F5E" strokeWidth="4" fill="none" strokeLinecap="round" />
                {/* Top Hat */}
                <rect x="38" y="8" width="24" height="4" rx="2" fill="#0F172A" />
                <rect x="42" y="1" width="16" height="8" rx="1" fill="#0F172A" />
              </svg>
              <span className="text-[10px] font-bold text-sky-600 dark:text-sky-300 mt-1">Snowy Magic</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full-Screen Rain Overlay (0.5s duration) */}
      <AnimatePresence>
        {showRainOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 pointer-events-none overflow-hidden bg-slate-900/10 backdrop-blur-[1px]"
          >
            {Array.from({ length: 40 }).map((_, idx) => (
              <div
                key={idx}
                className="raindrop"
                style={{
                  left: `${(idx * 2.5) + (Math.random() * 2)}%`,
                  animationDuration: `${0.3 + Math.random() * 0.2}s`,
                  animationDelay: `${Math.random() * 0.2}s`
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
