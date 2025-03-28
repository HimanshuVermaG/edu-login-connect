
import React from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import PasswordInput from './PasswordInput';

// Mock data for schools
const SCHOOLS = [
  "Delhi Public School",
  "St. Mary's High School",
  "Kendriya Vidyalaya",
  "DAV Public School",
  "Army Public School"
];

export interface TeacherFormData {
  name: string;
  ehrmsCode: string;
  school: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
}

interface TeacherFormProps {
  formData: TeacherFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const TeacherForm = ({ formData, onChange }: TeacherFormProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          id="teacherName"
          name="name"
          type="text"
          value={formData.name}
          onChange={onChange}
          placeholder="Enter teacher name"
          label="Teacher Name"
        />
        
        <FormInput
          id="ehrmsCode"
          name="ehrmsCode"
          type="text"
          value={formData.ehrmsCode}
          onChange={onChange}
          placeholder="Enter EHRMS code"
          label="EHRMS Code"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormSelect
          id="teacherSchool"
          name="school"
          value={formData.school}
          onChange={onChange}
          label="School"
          options={SCHOOLS.map(school => ({ value: school, label: school }))}
          placeholder="Select School"
        />
        
        <FormInput
          id="teacherMobileNumber"
          name="mobileNumber"
          type="tel"
          value={formData.mobileNumber}
          onChange={onChange}
          placeholder="Enter mobile number"
          label="Mobile Number"
          pattern="[0-9]*"
          inputMode="numeric"
        />
      </div>
      
      <PasswordInput
        id="teacherPassword"
        name="password"
        value={formData.password}
        onChange={onChange}
        placeholder="Create password"
        label="Password"
      />
      
      <PasswordInput
        id="teacherConfirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={onChange}
        placeholder="Confirm password"
        label="Confirm Password"
      />
    </div>
  );
};

export default TeacherForm;
