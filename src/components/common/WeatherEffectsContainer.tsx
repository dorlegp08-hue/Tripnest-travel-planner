import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useFilterStore } from '../../store/useFilterStore';

interface Snowflake {
  id: number;
  left: number;
  size: number;
  variant: 1 | 2 | 3;
  duration: number;
  delay: number;
  opacity: number;
  driftX: number;
  spinDeg: number;
}

const SnowflakeSVG: React.FC<{ variant: 1 | 2 | 3; size: number }> = ({ variant, size }) => {
  if (variant === 1) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
        <path d="M12 6l-2-2M12 6l2-2M12 18l-2 2M12 18l2 2M6 12l-2-2M6 12l-2 2M18 12l2-2M18 12l2 2" />
      </svg>
    );
  }
  if (variant === 2) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.3" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 2.5v19M2.5 12h19M5.27 5.27l13.46 13.46M5.27 18.73L18.73 5.27" />
      <path d="M12 5l-2.5-2.5M12 5l2.5-2.5M12 19l-2.5 2.5M12 19l2.5 2.5" />
      <path d="M5 12l-2.5-2.5M5 12l-2.5 2.5M19 12l2.5-2.5M19 12l2.5 2.5" />
    </svg>
  );
};

export const WeatherEffectsContainer: React.FC = () => {
  const location = useLocation();
  const isDiscoverPage = location.pathname === '/search';
  const selectedWeather = useFilterStore((s) => s.selectedWeather);

  // Active weather selection string ("sunny" | "rainy" | "snowy" | null)
  const activeWeather = selectedWeather.length > 0 ? selectedWeather[0] : null;

  const [activeAnimation, setActiveAnimation] = useState<'sunny' | 'rainy' | 'snowy' | null>(null);
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Completely disable and clean up if not on Discover page or if no weather is selected
    if (!isDiscoverPage || !activeWeather) {
      setActiveAnimation(null);
      setSnowflakes([]);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    if (activeWeather === 'sunny') {
      setActiveAnimation('sunny');
      timer = setTimeout(() => {
        setActiveAnimation(null);
      }, 850);
    } else if (activeWeather === 'rainy') {
      setActiveAnimation('rainy');
      timer = setTimeout(() => {
        setActiveAnimation(null);
      }, 1000);
    } else if (activeWeather === 'snowy') {
      const flakes: Snowflake[] = Array.from({ length: 18 }).map((_, idx) => ({
        id: idx,
        left: Math.random() * 92 + 3,
        size: Math.floor(20 + Math.random() * 15),
        variant: (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3,
        duration: 0.8 + Math.random() * 0.4,
        delay: Math.random() * 0.2,
        opacity: 0.4 + Math.random() * 0.45,
        driftX: (Math.random() - 0.5) * 60,
        spinDeg: Math.random() > 0.5 ? 180 : -180,
      }));
      setSnowflakes(flakes);
      setActiveAnimation('snowy');
      timer = setTimeout(() => {
        setActiveAnimation(null);
      }, 1000);
    } else {
      setActiveAnimation(null);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isDiscoverPage, activeWeather]);

  if (!isDiscoverPage) return null;

  return (
    <>
      {/* Sunny Weather Interaction: Soft warm sunlight bloom from top-right */}
      <AnimatePresence>
        {activeAnimation === 'sunny' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
          >
            <div
              className="absolute -top-20 -right-20 w-[550px] h-[550px] rounded-full"
              style={{
                background: 'radial-gradient(circle at 70% 30%, rgba(255, 252, 235, 0.28) 0%, rgba(254, 240, 138, 0.18) 35%, rgba(253, 224, 71, 0.06) 65%, transparent 80%)',
                filter: 'blur(40px)',
              }}
            />
            <div
              className="absolute top-0 right-0 w-full h-[60vh]"
              style={{
                background: 'radial-gradient(ellipse at 85% 15%, rgba(255, 248, 220, 0.12) 0%, rgba(253, 230, 138, 0.05) 50%, transparent 80%)',
                filter: 'blur(30px)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rainy Weather Interaction: Thin, semi-transparent rain streaks overlay (1s) */}
      <AnimatePresence>
        {activeAnimation === 'rainy' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 pointer-events-none overflow-hidden bg-slate-900/5 backdrop-blur-[0.5px]"
          >
            {Array.from({ length: 30 }).map((_, idx) => (
              <div
                key={idx}
                className="raindrop"
                style={{
                  left: `${(idx * 3.3) + (Math.random() * 2)}%`,
                  animationDuration: `${0.6 + Math.random() * 0.4}s`,
                  animationDelay: `${Math.random() * 0.15}s`,
                  opacity: 0.3 + Math.random() * 0.3,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Snowy Weather Interaction: Gentle floating vector snowflakes overlay (1s) */}
      <AnimatePresence>
        {activeAnimation === 'snowy' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 pointer-events-none overflow-hidden bg-slate-900/5 backdrop-blur-[0.5px]"
          >
            {snowflakes.map((flake) => (
              <div
                key={flake.id}
                className="snowflake-item"
                style={{
                  left: `${flake.left}%`,
                  animationDuration: `${flake.duration}s`,
                  animationDelay: `${flake.delay}s`,
                  ['--flake-opacity' as any]: flake.opacity,
                  ['--drift-x' as any]: `${flake.driftX}px`,
                  ['--spin-deg' as any]: `${flake.spinDeg}deg`,
                }}
              >
                <SnowflakeSVG variant={flake.variant} size={flake.size} />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
