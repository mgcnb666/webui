# NativeScript Authentication App

一个使用 NativeScript 构建的移动应用程序，具有登录和注册功能。

A mobile application built with NativeScript featuring login and registration functionality.

## 功能 Features

- 用户登录 User Login
- 用户注册 User Registration
- 表单验证 Form Validation

## 如何使用 How to Use

### 登录 Login
1. 打开应用后，您将看到登录页面
2. 输入电子邮件和密码
3. 点击"登录"按钮

测试账号 Test Account:
- 邮箱 Email: test@test.com
- 密码 Password: password

### 注册 Registration
1. 在登录页面点击"注册"按钮
2. 填写以下信息：
   - 电子邮件 Email
   - 密码 Password
   - 确认密码 Confirm Password
3. 点击"注册"按钮

## 开发说明 Development Notes

### 项目设置 Project Setup
```bash
# 安装依赖 Install dependencies
npm install

# 启动开发预览 Start development preview
npm start
```

### 项目结构 Project Structure
```
app/
├── auth/
│   ├── login-page.xml      # 登录页面 UI
│   ├── login-view-model.js # 登录页面逻辑
│   ├── register-page.xml   # 注册页面 UI
│   └── register-view-model.js # 注册页面逻辑
├── app-root.xml
├── app.css
└── app.js
```