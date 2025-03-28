
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import AuthLayout from '@/components/layouts/AuthLayout';
import AuthCard from '@/components/auth/AuthCard';
import UserTypeSelector, { UserType } from '@/components/auth/UserTypeSelector';
import StudentForm, { StudentFormData } from '@/components/auth/StudentForm';
import TeacherForm, { TeacherFormData } from '@/components/auth/TeacherForm';

const SignUp = () => {
  const [userType, setUserType] = useState<UserType>('student');
  const { toast } = useToast();
  
  // Student form state
  const [studentForm, setStudentForm] = useState<StudentFormData>({
    name: '',
    fatherName: '',
    school: '',
    class: '',
    mobileNumber: '',
    srNumber: '',
    password: '',
    confirmPassword: ''
  });
  
  // Teacher form state
  const [teacherForm, setTeacherForm] = useState<TeacherFormData>({
    name: '',
    ehrmsCode: '',
    school: '',
    mobileNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setStudentForm({
      ...studentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleTeacherChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTeacherForm({
      ...teacherForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userType === 'student') {
      // Basic student form validation
      if (Object.values(studentForm).some(val => !val.trim())) {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive",
        });
        return;
      }
      
      if (studentForm.password !== studentForm.confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match",
          variant: "destructive",
        });
        return;
      }
      
      // In a real app, you would handle student registration here
      console.log('Student registration', studentForm);
      toast({
        title: "Sign Up Successful",
        description: `Student account created for ${studentForm.name}`,
      });
    } else {
      // Basic teacher form validation
      if (Object.values(teacherForm).some(val => !val.trim())) {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive",
        });
        return;
      }
      
      if (teacherForm.password !== teacherForm.confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match",
          variant: "destructive",
        });
        return;
      }
      
      // In a real app, you would handle teacher registration here
      console.log('Teacher registration', teacherForm);
      toast({
        title: "Sign Up Successful",
        description: `Teacher account created for ${teacherForm.name}`,
      });
    }
  };

  return (
    <AuthLayout>
      <AuthCard title="Create Your Account" maxWidth="max-w-lg">
        <UserTypeSelector 
          userType={userType} 
          onUserTypeChange={setUserType} 
        />
        
        <form onSubmit={handleSignUp}>
          {userType === 'student' ? (
            <StudentForm formData={studentForm} onChange={handleStudentChange} />
          ) : (
            <TeacherForm formData={teacherForm} onChange={handleTeacherChange} />
          )}
          
          <div className="mt-6">
            <button type="submit" className="auth-btn-primary flex items-center justify-center gap-2">
              Sign Up <ArrowRight size={16} />
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-edu-primary font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </AuthCard>
    </AuthLayout>
  );
};

export default SignUp;
