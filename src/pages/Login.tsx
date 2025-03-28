
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import Header from '@/components/Header';

type UserType = 'student' | 'teacher';

const Login = () => {
  const [userType, setUserType] = useState<UserType>('student');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!mobileNumber.trim() || !password.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Perform login logic here
    toast({
      title: "Login Attempted",
      description: `${userType} login with mobile: ${mobileNumber}`,
    });
    
    // In a real app, you would handle authentication here
    console.log('Login attempted', { userType, mobileNumber, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzODJiZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDEwdjEwSDM2em0tMTYgMGgxMHYxMEgyMHptOC0xNmgxMHYxMEgyOHoiLz48L2c+PC9nPjwvc3ZnPg==')]">
      <Header />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[calc(100vh-72px)]">
        <div className="w-full max-w-md">
          <div className="auth-card">
            <h1 className="auth-title text-center">Login to Your Account</h1>
            
            {/* User Type Tabs */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <button 
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${userType === 'student' ? 'tab-active' : 'tab-inactive'}`}
                onClick={() => setUserType('student')}
              >
                Student
              </button>
              <button 
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${userType === 'teacher' ? 'tab-active' : 'tab-inactive'}`}
                onClick={() => setUserType('teacher')}
              >
                Teacher
              </button>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    id="mobileNumber"
                    type="tel"
                    className="auth-input"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    pattern="[0-9]*"
                    inputMode="numeric"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="auth-input pr-10"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Link to="/forgot-password" className="text-sm text-edu-primary hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                
                <button type="submit" className="auth-btn-primary flex items-center justify-center gap-2">
                  Login <ArrowRight size={16} />
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-edu-primary font-medium hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
