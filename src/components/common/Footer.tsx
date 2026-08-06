import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Heart, Github, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-500 to-brand-400 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-white">TripNest</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your intelligent frontend travel itinerary planner and destination discovery platform tailored for unforgettable Indian journeys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/search" className="hover:text-brand-400 transition-colors">Discover Destinations</Link></li>
              <li><Link to="/map" className="hover:text-brand-400 transition-colors">Interactive OpenStreetMap</Link></li>
              <li><Link to="/itinerary" className="hover:text-brand-400 transition-colors">Itinerary Planner</Link></li>
              <li><Link to="/bonus" className="hover:text-brand-400 transition-colors">Budget Calculator</Link></li>
            </ul>
          </div>

          {/* Tools & Features */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Smart Tools</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/bonus" className="hover:text-brand-400 transition-colors">Weather Packing Checklist</Link></li>
              <li><Link to="/bonus" className="hover:text-brand-400 transition-colors">Destination Comparison</Link></li>
              <li><Link to="/bonus" className="hover:text-brand-400 transition-colors">AI Trip Recommendations</Link></li>
              <li><a href="https://openweathermap.org/" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors">OpenWeatherMap Live Data</a></li>
            </ul>
          </div>

          {/* Tech Stack / Credits */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Tech Stack</h4>
            <p className="text-xs text-slate-400">
              Built with React 18, TypeScript, Tailwind CSS, Leaflet, Framer Motion & Zustand for TechRush Web Dev Track.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-600 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-brand-600 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} TripNest Inc. Client-Side Only Web App.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Travel Enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};
