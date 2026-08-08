import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Compass, Search, Menu, X, MapPin, Calendar, Sparkles, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { useFilterStore } from '../../store/useFilterStore';

const navLinks = [
  { path: '/', label: 'Home', icon: Compass },
  { path: '/search', label: 'Discover', icon: SlidersHorizontal },
  { path: '/map', label: 'Interactive Map', icon: MapPin },
  { path: '/itinerary', label: 'Itinerary Planner', icon: Calendar },
  { path: '/bonus', label: 'Travel Toolkit', icon: Sparkles },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navSearchText, setNavSearchText] = useState('');
  const navigate = useNavigate();
  const setSearchQuery = useFilterStore((s) => s.setSearchQuery);

  const handleNavSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearchText.trim()) {
      setSearchQuery(navSearchText.trim());
      navigate(`/search?q=${encodeURIComponent(navSearchText.trim())}`);
      setNavSearchText('');
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white shadow-md shadow-brand-500/30 group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <span className="font-display font-extrabold text-2xl tracking-tight bg-gradient-to-r from-brand-600 via-brand-500 to-accent-coral bg-clip-text text-transparent">
                Voyago
              </span>
              <span className="block text-[10px] uppercase tracking-widest font-semibold text-slate-400 -mt-1">
                Your travel companion
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover-gradient-effect neon-glass-hover ${
                      isActive
                        ? 'nav-desktop-active'
                        : 'text-slate-700 dark:text-slate-200'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Search bar & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={handleNavSearchSubmit} className="relative">
              <input
                type="text"
                value={navSearchText}
                onChange={(e) => setNavSearchText(e.target.value)}
                placeholder="Search destinations..."
                className="w-48 xl:w-60 pl-9 pr-4 py-2 text-xs rounded-full bg-[#F8FAFC] dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 placeholder-[#64748B] dark:placeholder-slate-400 border border-[rgba(100,116,139,0.15)] dark:border-transparent focus:border-brand-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all shadow-[0_2px_8px_rgba(15,23,42,0.04)] dark:shadow-inner"
              />
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] dark:text-slate-400" />
            </form>

            <ThemeToggle />
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-darkBg-primary/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="p-4 space-y-3">
              <form onSubmit={handleNavSearchSubmit} className="relative">
                <input
                  type="text"
                  value={navSearchText}
                  onChange={(e) => setNavSearchText(e.target.value)}
                  placeholder="Search destinations (e.g. Goa, Manali)..."
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-[#F8FAFC] dark:bg-slate-800 text-slate-900 dark:text-white placeholder-[#64748B] dark:placeholder-slate-400 border border-[rgba(100,116,139,0.15)] dark:border-transparent shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
                />
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B] dark:text-slate-400" />
              </form>

              <div className="space-y-1 pt-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === '/'}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                          isActive
                            ? 'nav-mobile-active font-semibold'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`
                      }
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.label}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
