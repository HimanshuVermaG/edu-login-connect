
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '@/assets/Logo';
import { Button } from '@/components/ui/button';
import { BookOpen, HelpCircle } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const isAuthPage = location.pathname.includes('login') || 
                    location.pathname.includes('signup') || 
                    location.pathname.includes('forgot-password');

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm py-3 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        
        <div className="flex items-center gap-3">
          {isAuthPage ? (
            <>
              <Button variant="ghost" size="sm" className="text-slate-700 gap-1.5">
                <HelpCircle size={18} />
                <span className="hidden sm:inline">Help</span>
              </Button>
              <Button variant="outline" size="sm" className="text-edu-primary border-edu-primary gap-1.5">
                <BookOpen size={18} />
                <span className="hidden sm:inline">Resources</span>
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm">Dashboard</Button>
              <Button variant="outline" size="sm">Profile</Button>
              <Button variant="default" size="sm" className="bg-edu-primary hover:bg-edu-primary-dark">Logout</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
