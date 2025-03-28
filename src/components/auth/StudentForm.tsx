
import React from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import PasswordInput from './PasswordInput';

// Mock data for schools and classes
const SCHOOLS = [
  "Delhi Public School",
  "St. Mary's High School",
  "Kendriya Vidyalaya",
  "DAV Public School",
  "Army Public School"
];

const CLASSES = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"];

export interface StudentFormData {
  name: string;
  fatherName: string;
  school: string;
  class: string;
  mobileNumber: string;
  srNumber: string;
  password: string;
  confirmPassword: string;
}

interface StudentFormProps {
  formData: StudentFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const StudentForm = ({ formData, onChange }: StudentFormProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={onChange}
          placeholder="Enter student name"
          label="Student Name"
        />
        
        <FormInput
          id="fatherName"
          name="fatherName"
          type="text"
          value={formData.fatherName}
          onChange={onChange}
          placeholder="Enter father's name"
          label="Father's Name"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormSelect
          id="school"
          name="school"
          value={formData.school}
          onChange={onChange}
          label="School"
          options={SCHOOLS.map(school => ({ value: school, label: school }))}
          placeholder="Select School"
        />
        
        <FormSelect
          id="class"
          name="class"
          value={formData.class}
          onChange={onChange}
          label="Class"
          options={CLASSES.map(cls => ({ value: cls, label: cls }))}
          placeholder="Select Class"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          id="mobileNumber"
          name="mobileNumber"
          type="tel"
          value={formData.mobileNumber}
          onChange={onChange}
          placeholder="Enter mobile number"
          label="Mobile Number"
          pattern="[0-9]*"
          inputMode="numeric"
        />
        
        <FormInput
          id="srNumber"
          name="srNumber"
          type="text"
          value={formData.srNumber}
          onChange={onChange}
          placeholder="Enter S/R number"
          label="S/R Number"
        />
      </div>
      
      <PasswordInput
        id="password"
        name="password"
        value={formData.password}
        onChange={onChange}
        placeholder="Create password"
        label="Password"
      />
      
      <PasswordInput
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={onChange}
        placeholder="Confirm password"
        label="Confirm Password"
      />
    </div>
  );
};

export default StudentForm;
