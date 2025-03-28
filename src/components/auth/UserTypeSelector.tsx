
import React from 'react';

export type UserType = 'student' | 'teacher';

interface UserTypeSelectorProps {
  userType: UserType;
  onUserTypeChange: (type: UserType) => void;
}

const UserTypeSelector = ({ userType, onUserTypeChange }: UserTypeSelectorProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 mb-6">
      <button 
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${userType === 'student' ? 'tab-active' : 'tab-inactive'}`}
        onClick={() => onUserTypeChange('student')}
      >
        Student
      </button>
      <button 
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${userType === 'teacher' ? 'tab-active' : 'tab-inactive'}`}
        onClick={() => onUserTypeChange('teacher')}
      >
        Teacher
      </button>
    </div>
  );
};

export default UserTypeSelector;
