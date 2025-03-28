
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

// API client with base configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Student API endpoints
export const studentApi = {
  // Create new student
  createStudent: async (studentData: any) => {
    try {
      const response = await apiClient.post('/student/create', studentData);
      return response.data;
    } catch (error) {
      console.error('Error creating student:', error);
      throw error;
    }
  },
  
  // Login student
  loginStudent: async (credentials: { mobile: string; password: string }) => {
    try {
      const response = await apiClient.post('/student/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Error logging in student:', error);
      throw error;
    }
  }
};

// Teacher API endpoints
export const teacherApi = {
  // Create new teacher
  createTeacher: async (teacherData: any) => {
    try {
      const response = await apiClient.post('/teacher/create', teacherData);
      return response.data;
    } catch (error) {
      console.error('Error creating teacher:', error);
      throw error;
    }
  },
  
  // Login teacher
  loginTeacher: async (credentials: { mobile: string; password: string }) => {
    try {
      const response = await apiClient.post('/teacher/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Error logging in teacher:', error);
      throw error;
    }
  }
};
