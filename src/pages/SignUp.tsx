
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import AuthLayout from '@/components/layouts/AuthLayout';
import AuthCard from '@/components/auth/AuthCard';
import UserTypeSelector, { UserType } from '@/components/auth/UserTypeSelector';
import StudentForm, { StudentFormData } from '@/components/auth/StudentForm';
import TeacherForm, { TeacherFormData } from '@/components/auth/TeacherForm';
import { studentApi, teacherApi } from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

const SignUp = () => {
  const [userType, setUserType] = useState<UserType>('student');
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
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

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (userType === 'student') {
        // Basic student form validation
        if (Object.values(studentForm).some(val => !val.trim())) {
          toast({
            title: "Error",
            description: "Please fill in all fields",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }
        
        if (studentForm.password !== studentForm.confirmPassword) {
          toast({
            title: "Error",
            description: "Passwords do not match",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }
        
        // Map form data to API requirements
        const studentData = {
          name: studentForm.name,
          fatherName: studentForm.fatherName,
          schoolName: studentForm.school,
          mobile: studentForm.mobileNumber,
          standard: parseInt(studentForm.class.replace('Class ', '')),
          sirNumber: studentForm.srNumber,
          password: studentForm.password
        };
        
        // Create student in database
        const response = await studentApi.createStudent(studentData);
        
        toast({
          title: "Registration Successful",
          description: `Student account created for ${studentForm.name}`,
        });
        
        // Login the newly created student
        login({
          id: response.student._id,
          name: response.student.name,
          userType: 'student'
        });
        
        navigate('/dashboard');
      } else {
        // Basic teacher form validation
        if (Object.values(teacherForm).some(val => !val.trim())) {
          toast({
            title: "Error",
            description: "Please fill in all fields",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }
        
        if (teacherForm.password !== teacherForm.confirmPassword) {
          toast({
            title: "Error",
            description: "Passwords do not match",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }
        
        // Map form data to API requirements
        const teacherData = {
          name: teacherForm.name,
          ehrmsCode: teacherForm.ehrmsCode,
          schoolName: teacherForm.school,
          mobile: teacherForm.mobileNumber,
          password: teacherForm.password
        };
        
        // Create teacher in database
        const response = await teacherApi.createTeacher(teacherData);
        
        toast({
          title: "Registration Successful",
          description: `Teacher account created for ${teacherForm.name}`,
        });
        
        // Login the newly created teacher
        login({
          id: response.teacher._id,
          name: response.teacher.name,
          userType: 'teacher'
        });
        
        navigate('/dashboard');
      }
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.response?.data?.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
            <Button 
              type="submit" 
              className="w-full bg-edu-primary hover:bg-edu-primary-dark flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Sign Up"} {!isLoading && <ArrowRight size={16} />}
            </Button>
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
