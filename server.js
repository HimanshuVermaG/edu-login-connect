
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eduapp')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Student Model
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  fatherName: {
    type: String,
    required: true,
    trim: true
  },
  schoolName: {
    type: String,
    required: true,
    trim: true
  },
  mobile: {
    type: Number,
    required: true,
  },
  standard: {
    type: Number,
    required: true,
  },
  sirNumber: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

// Pre-save hook to hash password
studentSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare passwords
studentSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Student = mongoose.model('Student', studentSchema);

// Teacher Model
const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  ehrmsCode: {
    type: String,
    required: true,
    trim: true
  },
  schoolName: {
    type: String,
    required: true,
    trim: true
  },
  mobile: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

// Pre-save hook to hash password
teacherSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare passwords
teacherSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Teacher = mongoose.model('Teacher', teacherSchema);

// API Routes
// Student Routes
app.post('/api/v1/student/create', async (req, res) => {
  try {
    const { name, fatherName, schoolName, mobile, standard, sirNumber, password } = req.body;
    
    // Check if student already exists with this mobile number
    const existingStudent = await Student.findOne({ mobile });
    if (existingStudent) {
      return res.status(400).json({ success: false, message: 'Student with this mobile number already exists' });
    }
    
    // Create new student
    const student = new Student({
      name,
      fatherName,
      schoolName,
      mobile,
      standard,
      sirNumber,
      password
    });
    
    await student.save();
    
    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      student: {
        _id: student._id,
        name: student.name
      }
    });
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ success: false, message: 'Failed to create student' });
  }
});

app.post('/api/v1/student/login', async (req, res) => {
  try {
    const { mobile, password } = req.body;
    
    // Find student by mobile
    const student = await Student.findOne({ mobile });
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    
    // Verify password
    const isPasswordValid = await student.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }
    
    res.status(200).json({
      success: true,
      message: 'Login successful',
      student: {
        _id: student._id,
        name: student.name
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
});

// Teacher Routes
app.post('/api/v1/teacher/create', async (req, res) => {
  try {
    const { name, ehrmsCode, schoolName, mobile, password } = req.body;
    
    // Check if teacher already exists with this mobile number
    const existingTeacher = await Teacher.findOne({ mobile });
    if (existingTeacher) {
      return res.status(400).json({ success: false, message: 'Teacher with this mobile number already exists' });
    }
    
    // Create new teacher
    const teacher = new Teacher({
      name,
      ehrmsCode,
      schoolName,
      mobile,
      password
    });
    
    await teacher.save();
    
    res.status(201).json({
      success: true,
      message: 'Teacher created successfully',
      teacher: {
        _id: teacher._id,
        name: teacher.name
      }
    });
  } catch (error) {
    console.error('Error creating teacher:', error);
    res.status(500).json({ success: false, message: 'Failed to create teacher' });
  }
});

app.post('/api/v1/teacher/login', async (req, res) => {
  try {
    const { mobile, password } = req.body;
    
    // Find teacher by mobile
    const teacher = await Teacher.findOne({ mobile });
    if (!teacher) {
      return res.status(404).json({ success: false, message: 'Teacher not found' });
    }
    
    // Verify password
    const isPasswordValid = await teacher.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }
    
    res.status(200).json({
      success: true,
      message: 'Login successful',
      teacher: {
        _id: teacher._id,
        name: teacher.name
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
