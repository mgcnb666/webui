### NativeScript Authentication App

A mobile application built with NativeScript featuring login and registration functionality.

#### Features
- **User Login**
- **User Registration**
- **Form Validation**

#### How to Use

**Login**
1. After opening the app, you will see the login page.
2. Enter your email and password.
3. Click the "Login" button.

**Test Account:**
- **Email:** test@test.com
- **Password:** password

**Registration**
1. Click the "Register" button on the login page.
2. Fill in the following information:
   - **Email**
   - **Password**
   - **Confirm Password**
3. Click the "Register" button.

#### Development Notes

**Project Setup**
```bash
# Install dependencies
npm install

# Start development preview
npm start
```

**Project Structure**
```
app/
├── auth/
│   ├── login-page.xml      # Login page UI
│   ├── login-view-model.js  # Login page logic
│   ├── register-page.xml    # Registration page UI
│   └── register-view-model.js # Registration page logic
├── app-root.xml
├── app.css
└── app.js
```
