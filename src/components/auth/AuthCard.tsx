
import React from 'react';

interface AuthCardProps {
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

const AuthCard = ({ title, children, maxWidth = "max-w-md" }: AuthCardProps) => {
  return (
    <div className={`w-full ${maxWidth}`}>
      <div className="auth-card">
        <h1 className="auth-title text-center">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
