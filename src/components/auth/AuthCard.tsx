
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface AuthCardProps {
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

const AuthCard = ({ title, children, maxWidth = "max-w-md" }: AuthCardProps) => {
  return (
    <div className={`w-full ${maxWidth}`}>
      <Card className="border-0 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-edu-primary to-edu-secondary h-2" />
        <CardContent className="p-6 md:p-8">
          <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">{title}</h1>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCard;
