
import React from 'react';
import Header from '@/components/Header';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 edu-pattern">
      <Header />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[calc(100vh-72px)]">
        <div className="relative w-full flex justify-center">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 md:left-10 w-20 h-20 bg-edu-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -right-10 md:right-10 w-32 h-32 bg-edu-secondary/10 rounded-full blur-3xl" />
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
