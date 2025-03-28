
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type UserType = 'student' | 'teacher' | null;

interface User {
  id: string;
  name: string;
  userType: UserType;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  userType: UserType;
  login: (userData: User) => void;
  logout: () => void;
  setUserType: (type: UserType) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<UserType>(null);
  const navigate = useNavigate();
  
  // Check for user data in localStorage on initialization
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedUserType = localStorage.getItem('userType') as UserType;
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);
  
  // Login function
  const login = (userData: User) => {
    setUser(userData);
    setUserType(userData.userType);
    
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('userType', userData.userType || '');
    
    // Redirect to dashboard
    navigate('/dashboard');
  };
  
  // Logout function
  const logout = () => {
    setUser(null);
    setUserType(null);
    
    // Remove data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('userType');
    
    // Redirect to login
    navigate('/login');
  };
  
  const value = {
    user,
    isAuthenticated: !!user,
    userType,
    login,
    logout,
    setUserType,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
