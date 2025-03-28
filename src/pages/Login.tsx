
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, KeyRound } from "lucide-react";
import AuthLayout from '@/components/layouts/AuthLayout';
import AuthCard from '@/components/auth/AuthCard';
import UserTypeSelector, { UserType } from '@/components/auth/UserTypeSelector';
import FormInput from '@/components/auth/FormInput';
import PasswordInput from '@/components/auth/PasswordInput';
import { Button } from '@/components/ui/button';
import { studentApi, teacherApi } from '@/services/api';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
  const [userType, setUserType] = useState<UserType>('student');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (!mobileNumber.trim() || !password.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      // Prepare login data
      const credentials = {
        mobile: mobileNumber,
        password: password
      };
      
      if (userType === 'student') {
        // Login as student
        const response = await studentApi.loginStudent(credentials);
        
        if (response.success) {
          toast({
            title: "Login Successful",
            description: `Welcome back, ${response.student.name}!`,
          });
          
          // Update auth context
          login({
            id: response.student._id,
            name: response.student.name,
            userType: 'student'
          });
          
          navigate('/dashboard');
        }
      } else {
        // Login as teacher
        const response = await teacherApi.loginTeacher(credentials);
        
        if (response.success) {
          toast({
            title: "Login Successful",
            description: `Welcome back, ${response.teacher.name}!`,
          });
          
          // Update auth context
          login({
            id: response.teacher._id,
            name: response.teacher.name,
            userType: 'teacher'
          });
          
          navigate('/dashboard');
        }
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast({
        title: "Login Failed",
        description: error.response?.data?.message || "Invalid credentials",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthCard title="Login to Your Account">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-edu-light rounded-full flex items-center justify-center">
            <KeyRound className="text-edu-primary w-8 h-8" />
          </div>
        </div>
        
        <UserTypeSelector 
          userType={userType} 
          onUserTypeChange={setUserType} 
        />
        
        <form onSubmit={handleLogin} className="space-y-5">
          <FormInput
            id="mobileNumber"
            name="mobileNumber"
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            label="Mobile Number"
            pattern="[0-9]*"
            inputMode="numeric"
          />
          
          <PasswordInput
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            label="Password"
          />
          
          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-edu-primary hover:underline">
              Forgot Password?
            </Link>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-edu-primary hover:bg-edu-primary-dark flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"} {!isLoading && <ArrowRight size={16} />}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-edu-primary font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </AuthCard>
    </AuthLayout>
  );
};

export default Login;
