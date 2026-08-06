import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="w-20 h-20 rounded-3xl bg-brand-500/10 text-brand-500 flex items-center justify-center mx-auto">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>
        <h1 className="text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          404 — Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Looks like you've wandered off the trail. The page you are looking for doesn't exist or has moved.
        </p>
        <Link to="/">
          <Button variant="primary" icon={<Home className="w-4 h-4 mx-auto" />}>
            Back to Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
};
