
# Education Platform

## Setup Instructions

### Setting up MongoDB connection:

1. Create a `.env` file in the root directory
2. Add your MongoDB connection URI to the `.env` file:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=8000
   ```

### Starting the server:

```bash
# Install dependencies
npm install

# Start the backend server
node server.js

# In a separate terminal, start the React app
npm run dev
```

## API Endpoints

### Student
- `POST /api/v1/student/create` - Create a new student
- `POST /api/v1/student/login` - Student login

### Teacher
- `POST /api/v1/teacher/create` - Create a new teacher
- `POST /api/v1/teacher/login` - Teacher login
