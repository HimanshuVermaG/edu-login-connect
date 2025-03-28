
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

type UserType = 'student' | 'teacher';

// Mock data for schools and classes
const SCHOOLS = [
  "Delhi Public School",
  "St. Mary's High School",
  "Kendriya Vidyalaya",
  "DAV Public School",
  "Army Public School"
];

const CLASSES = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"];

const SignUp = () => {
  const [userType, setUserType] = useState<UserType>('student');
  const { toast } = useToast();
  
  // Student form state
  const [studentForm, setStudentForm] = useState({
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
  const [teacherForm, setTeacherForm] = useState({
    name: '',
    ehrmsCode: '',
    school: '',
    mobileNumber: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-lg">
        <div className="auth-card">
          <h1 className="auth-title text-center">Create Your Account</h1>
          
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
          
          <form onSubmit={handleSignUp}>
            {userType === 'student' ? (
              // Student Registration Form
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Student Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="auth-input"
                      placeholder="Enter student name"
                      value={studentForm.name}
                      onChange={handleStudentChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700 mb-1">
                      Father's Name
                    </label>
                    <input
                      id="fatherName"
                      name="fatherName"
                      type="text"
                      className="auth-input"
                      placeholder="Enter father's name"
                      value={studentForm.fatherName}
                      onChange={handleStudentChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                      School
                    </label>
                    <select
                      id="school"
                      name="school"
                      className="auth-select"
                      value={studentForm.school}
                      onChange={handleStudentChange}
                    >
                      <option value="">Select School</option>
                      {SCHOOLS.map((school, index) => (
                        <option key={index} value={school}>{school}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">
                      Class
                    </label>
                    <select
                      id="class"
                      name="class"
                      className="auth-select"
                      value={studentForm.class}
                      onChange={handleStudentChange}
                    >
                      <option value="">Select Class</option>
                      {CLASSES.map((cls, index) => (
                        <option key={index} value={cls}>{cls}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number
                    </label>
                    <input
                      id="mobileNumber"
                      name="mobileNumber"
                      type="tel"
                      className="auth-input"
                      placeholder="Enter mobile number"
                      value={studentForm.mobileNumber}
                      onChange={handleStudentChange}
                      pattern="[0-9]*"
                      inputMode="numeric"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="srNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      S/R Number
                    </label>
                    <input
                      id="srNumber"
                      name="srNumber"
                      type="text"
                      className="auth-input"
                      placeholder="Enter S/R number"
                      value={studentForm.srNumber}
                      onChange={handleStudentChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="auth-input pr-10"
                      placeholder="Create password"
                      value={studentForm.password}
                      onChange={handleStudentChange}
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
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      className="auth-input pr-10"
                      placeholder="Confirm password"
                      value={studentForm.confirmPassword}
                      onChange={handleStudentChange}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Teacher Registration Form
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="teacherName" className="block text-sm font-medium text-gray-700 mb-1">
                      Teacher Name
                    </label>
                    <input
                      id="teacherName"
                      name="name"
                      type="text"
                      className="auth-input"
                      placeholder="Enter teacher name"
                      value={teacherForm.name}
                      onChange={handleTeacherChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="ehrmsCode" className="block text-sm font-medium text-gray-700 mb-1">
                      EHRMS Code
                    </label>
                    <input
                      id="ehrmsCode"
                      name="ehrmsCode"
                      type="text"
                      className="auth-input"
                      placeholder="Enter EHRMS code"
                      value={teacherForm.ehrmsCode}
                      onChange={handleTeacherChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="teacherSchool" className="block text-sm font-medium text-gray-700 mb-1">
                      School
                    </label>
                    <select
                      id="teacherSchool"
                      name="school"
                      className="auth-select"
                      value={teacherForm.school}
                      onChange={handleTeacherChange}
                    >
                      <option value="">Select School</option>
                      {SCHOOLS.map((school, index) => (
                        <option key={index} value={school}>{school}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="teacherMobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number
                    </label>
                    <input
                      id="teacherMobileNumber"
                      name="mobileNumber"
                      type="tel"
                      className="auth-input"
                      placeholder="Enter mobile number"
                      value={teacherForm.mobileNumber}
                      onChange={handleTeacherChange}
                      pattern="[0-9]*"
                      inputMode="numeric"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="teacherPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="teacherPassword"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="auth-input pr-10"
                      placeholder="Create password"
                      value={teacherForm.password}
                      onChange={handleTeacherChange}
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
                
                <div>
                  <label htmlFor="teacherConfirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="teacherConfirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      className="auth-input pr-10"
                      placeholder="Confirm password"
                      value={teacherForm.confirmPassword}
                      onChange={handleTeacherChange}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
