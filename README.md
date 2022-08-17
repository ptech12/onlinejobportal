# Job Portal

Job Portal is a MERN Stack based web app which helps in streamlining the flow of job application process. It allows users to select there roles (applicant/recruiter), and create an account. In this web app, login session are persistent and REST APIs are securely protected by JWT token verification. After logging in, a recruiter can create/delete/update jobs, shortlist/accept/reject applications, view resume and edit profile. And, an applicant can view jobs, perform fuzzy search with various filters, apply for jobs with an SOP, view applications, upload profile picture, upload resume and edit profile. Hence, it is an all in one solution for a job application system.
<!-- 
Demo: [Click Here](https://www.youtube.com/watch?v=lIrN-LbbBnw&ab_channel=ShlokPandey) -->

Directory structure of the web app is as follows:

```
- backend/
    - public/
        - profile/
        - resume/
- frontend/
- README.md
```

## Instructions for initializing web app:


- Move inside backend directory: `cd backend`
- Install dependencies in backend directory: `npm install`
- Start express server: `npm start`
- Backend server will start on port 4444.
- Now go inside frontend directory: `cd ..\frontend`
- Install dependencies in frontend directory: `npm install`
- Start web app's frontend server: `npm start`
- Frontend server will start on port 3000.
- Now open `http://localhost:3000/` and proceed creating jobs and applications by signing up in required categories.

## Dependencies:

- Frontend
  - @material-ui/core
  - @material-ui/icons
  - @material-ui/lab
  - axios
  - material-ui-chip-input
  - react-phone-input-2
- Backend
  - bcrypt
  - body-parser
  - connect-flash
  - connect-mongo
  - cors
  - crypto
  - express
  - express-session
  - jsonwebtoken
  - mongoose
  - mongoose-type-email
  - multer
  - passport
  - passport-jwt
  - passport-local
  - uuid
