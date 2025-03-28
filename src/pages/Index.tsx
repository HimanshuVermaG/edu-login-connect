
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 edu-pattern">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              Modern Learning Platform for <span className="text-edu-primary">Students</span> and <span className="text-edu-primary">Teachers</span>
            </h1>
            <p className="text-lg text-slate-600">
              Connect, learn, and grow with our comprehensive education platform designed to enhance the learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-edu-primary hover:bg-edu-primary-dark">
                <Link to="/signup" className="flex items-center gap-2">
                  Get Started <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/login">Login to Your Account</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="https://placehold.co/600x400/e0e7ff/4f46e5?text=EduConnect&font=playfair" 
              alt="Educational Platform" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="edu-card p-6">
              <div className="w-12 h-12 bg-edu-light rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-edu-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-slate-600">Engage with interactive content designed to enhance understanding and retention.</p>
            </div>
            
            <div className="edu-card p-6">
              <div className="w-12 h-12 bg-edu-light rounded-lg flex items-center justify-center mb-4">
                <Users className="text-edu-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teacher-Student Connect</h3>
              <p className="text-slate-600">Direct communication channels between students and teachers for better guidance.</p>
            </div>
            
            <div className="edu-card p-6">
              <div className="w-12 h-12 bg-edu-light rounded-lg flex items-center justify-center mb-4">
                <Award className="text-edu-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Achievement Tracking</h3>
              <p className="text-slate-600">Monitor progress and celebrate achievements with our comprehensive tracking system.</p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-edu rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">Join thousands of students and teachers already using our platform.</p>
          <Button asChild size="lg" className="bg-white text-edu-primary hover:bg-slate-100">
            <Link to="/signup">Create Your Account Today</Link>
          </Button>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 EduConnect. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-edu-accent">Terms</a>
              <a href="#" className="hover:text-edu-accent">Privacy</a>
              <a href="#" className="hover:text-edu-accent">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
