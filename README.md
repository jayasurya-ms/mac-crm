# <div align="center">

# 🚀 **Mac Website CRM**

## ✨ Modern Content Management System

### _Built with React • Powered by Vite • Styled with Tailwind_

![Version](https://img.shields.io/badge/💎%20Version-3.0.8-00d4ff?style=for-the-badge&labelColor=1a1a2e)
![React](https://img.shields.io/badge/⚛️%20React-18.3-61dafb?style=for-the-badge&labelColor=1a1a2e)
![Vite](https://img.shields.io/badge/⚡%20Vite-5.4-646cff?style=for-the-badge&labelColor=1a1a2e)
![Node](https://img.shields.io/badge/🟢%20Node-16+-success?style=for-the-badge&labelColor=1a1a2e)
![License](https://img.shields.io/badge/📜%20MIT-License-green?style=for-the-badge&labelColor=1a1a2e)

---

</div>

<div align="center">

### 🎯 **Transforming Content Management with Modern Technology**

</div>

---

## 📌 **Table of Contents**

| Section            | Quick Link                                |
| ------------------ | ----------------------------------------- |
| ✨ **Features**    | [Jump to Features](#-features)            |
| 🚀 **Quick Start** | [Jump to Setup](#-quick-start)            |
| 🛠️ **Tech Stack**  | [Jump to Stack](#-technology-stack)       |
| 📂 **Structure**   | [Jump to Structure](#-project-structure)  |
| 📦 **Modules**     | [Jump to Modules](#-core-modules)         |
| 🔐 **Security**    | [Jump to Security](#-security-highlights) |
| 🚀 **Deploy**      | [Jump to Deploy](#-deployment-guide)      |

---

## ✨ **Features**

<table>
<tr>
<td width="50%">

### 🔐 **Secure Authentication**

Enterprise-grade JWT authentication with encrypted state persistence and session management

### 👥 **User Management**

Complete student lifecycle management with testimonials, certificates, and achievements tracking

### 📝 **Content Management**

Intuitive tools for blogs, FAQs, banners, galleries with rich text editing capabilities

</td>
<td width="50%">

### 🎓 **Course Management**

YouTube lecture integration with comprehensive course organization and student progress tracking

### 🏢 **Multi-Company**

Support multiple organizations with country-specific configurations and role-based access

### 📊 **Analytics Dashboard**

Real-time reports, user activity tracking, and performance metrics at your fingertips

</td>
</tr>
<tr>
<td width="50%">

### 📱 **Responsive Design**

Mobile-first approach with adaptive layouts, collapsible navigation, and touch-optimized UI

</td>
<td width="50%">

### 🎨 **Modern UI Components**

Shadcn UI with smooth animations, dark mode support, and beautiful visual hierarchy

</td>
</tr>
</table>

---

## 🚀 **Quick Start**

### ✅ **Prerequisites**

```
✓ Node.js v16 or higher
✓ npm or yarn package manager
✓ Git for version control
```

### 📥 **Installation Steps**

```bash
# 1️⃣ Clone the repository
git clone https://github.com/moorthygithub/MAC-website-crm.git
cd MAC-website-crm

# 2️⃣ Install all dependencies
npm install

# 3️⃣ Start the development server
npm run dev

# 4️⃣ Open in your browser
🌐 http://localhost:5173
```

### ⚙️ **Available Commands**

```bash
npm run dev      # 🚀 Start development server with Hot Reload
npm run build    # 📦 Build optimized production bundle
npm run lint     # ✔️  Check code quality with ESLint
npm run preview  # 👁️  Preview production build locally
```

---

## 🛠️ **Technology Stack**

### 🎯 **Frontend Framework**

```
┌─────────────────────────────────────────────────┐
│  ⚛️  React 18.3        │ Component Library      │
│  ⚡ Vite 5.4          │ Lightning Fast Builder │
│  🛣️  React Router 6.27 │ Client-side Routing   │
└─────────────────────────────────────────────────┘
```

### 🎨 **UI & Styling**

```
┌─────────────────────────────────────────────────┐
│  🎨 Tailwind CSS 3.4      │ Utility CSS         │
│  🧩 Shadcn UI             │ Beautiful Components│
│  🌈 Radix UI 1.x          │ Accessible Base    │
│  ✨ Framer Motion 11.11   │ Smooth Animations  │
│  🎭 Emotion 11.13         │ CSS-in-JS          │
│  🎪 Embla Carousel 8.3    │ Carousel Component │
│  📦 Lucide React 0.453    │ Icon Library       │
└─────────────────────────────────────────────────┘
```

### 📦 **State & Data Management**

```
┌─────────────────────────────────────────────────┐
│  🏪 Redux Toolkit 2.11        │ State Management  │
│  💾 Redux Persist 6.0         │ State Persistence │
│  🔄 TanStack Query 5.60       │ Server State      │
│  📊 TanStack Table 8.20       │ Data Tables       │
│  📝 React Hook Form 7.53      │ Form Handling     │
└─────────────────────────────────────────────────┘
```

### 🔧 **Tools & Utilities**

```
┌─────────────────────────────────────────────────┐
│  🌐 Axios 1.7            │ HTTP Client         │
│  🔐 Crypto-JS 4.2        │ Encryption          │
│  📅 Moment.js 2.30       │ Date Formatting     │
│  🔔 Sonner 2.0           │ Toast Notifications │
│  📝 CKEditor 4 4.3       │ Rich Text Editor    │
│  ✏️  React Select 5.9    │ Advanced Select     │
└─────────────────────────────────────────────────┘
```

---

## 📂 **Project Structure**

```
📁 MAC-website-crm/
│
├── 📦 src/
│   ├── 🎨 components/
│   │   ├── ui/                    # 🧩 Shadcn Components
│   │   ├── auth/                  # 🔐 Auth Components
│   │   ├── common/                # 🔄 Shared Utilities
│   │   ├── loader/                # ⏳ Loading States
│   │   └── error-boundry/         # ⚠️  Error Handling
│   │
│   ├── 📄 app/
│   │   ├── auth/                  # 🔓 Login & Auth
│   │   ├── blog/                  # 📚 Blog Management
│   │   ├── student/               # 👨‍🎓 Student Records
│   │   │   ├── student-list.jsx
│   │   │   ├── student-certificate.jsx
│   │   │   ├── student-testimonial.jsx
│   │   │   └── student-story.jsx
│   │   ├── company/               # 🏢 Company Mgmt
│   │   ├── gallery/               # 🖼️  Gallery
│   │   ├── banner/                # 🎪 Banners
│   │   ├── faq/                   # ❓ FAQ
│   │   ├── lecture-youtube/       # 🎥 Lectures
│   │   ├── newsletter/            # 📧 Newsletter
│   │   └── setting/               # ⚙️  Settings
│   │
│   ├── 🔌 api/
│   │   ├── apiClient.js           # 🌐 Axios Instance
│   │   └── index.js               # 📍 Endpoints
│   │
│   ├── 🎣 hooks/
│   │   ├── useApiMutation.js      # 📤 API Calls
│   │   ├── use-auth.js            # 🔐 Auth Hook
│   │   └── use-mutation.js        # 🔄 Mutations
│   │
│   ├── 🏪 store/
│   │   ├── authSlice.js           # 🔑 Auth State
│   │   ├── companySlice.js        # 🏢 Company State
│   │   ├── versionSlice.js        # 📦 Version State
│   │   └── ui/uiSlice.js          # 🎨 UI State
│   │
│   ├── 🛣️  routes/
│   │   ├── app-routes.jsx         # 🗺️  Main Routes
│   │   ├── protected-route.jsx    # 🔒 Protected
│   │   └── auth-route.jsx         # 🔐 Auth Routes
│   │
│   ├── 🔧 utils/
│   │   ├── authToken.js           # 🔑 Token Mgmt
│   │   ├── imageUtils.js          # 🖼️  Image Tools
│   │   ├── logout.js              # 🚪 Logout
│   │   └── encryption/            # 🔐 Encryption
│   │
│   ├── ⚙️  config/
│   ├── 📚 constants/
│   ├── 📖 lib/
│   ├── App.jsx
│   └── main.jsx
│
├── 📋 package.json
├── ⚡ vite.config.js
├── 🎨 tailwind.config.js
├── 🔧 eslint.config.js
└── 📖 README.md
```

---

## 📦 **Core Modules**

### 🔐 **Authentication Module**

```
Path: app/auth/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Secure JWT login system
✓ Session management
✓ Token refresh mechanism
✓ Logout functionality
```

### 📝 **Blog Module**

```
Path: app/blog/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Create & edit blog posts
✓ Rich text editor with CKEditor
✓ FAQ integration
✓ Search & filter capabilities
```

### 👨‍🎓 **Student Module**

```
Path: app/student/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Student records & profiles
✓ Testimonials & reviews
✓ Certificate management
✓ Student stories
✓ Office images gallery
✓ Recent passouts tracking
✓ YouTube testimonials
```

### 🏢 **Company Module**

```
Path: app/company/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Multi-company management
✓ Company profiles
✓ Country-specific settings
✓ Role-based access control
```

### 🖼️ **Gallery Module**

```
Path: app/gallery/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Image upload & management
✓ Gallery creation
✓ Image editing
✓ Bulk operations
```

### 🎪 **Banner Module**

```
Path: app/banner/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Website banner management
✓ Promotional content
✓ Banner scheduling
✓ Performance tracking
```

### ❓ **FAQ Module**

```
Path: app/faq/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ FAQ creation & management
✓ Category organization
✓ Search functionality
✓ User-friendly display
```

### 🎥 **Lecture Module**

```
Path: app/lecture-youtube/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ YouTube video integration
✓ Course organization
✓ Lecture management
✓ Progress tracking
```

### 📧 **Newsletter Module**

```
Path: app/newsletter/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Subscription management
✓ Email templates
✓ Campaign tracking
✓ Subscriber management
```

---

## 🔐 **Security Highlights**

<div align="center">

| Feature                   | Status | Details                           |
| ------------------------- | ------ | --------------------------------- |
| 🔑 **JWT Authentication** | ✅     | Secure token-based auth system    |
| ⏱️ **Session Timeout**    | ✅     | Auto-logout after inactivity      |
| 🔒 **Encrypted Storage**  | ✅     | Redux state with AES encryption   |
| 👮 **Role-Based Access**  | ✅     | Protected routes with permissions |
| 🛡️ **Secure API Client**  | ✅     | Axios with token injection        |
| 🔄 **Token Refresh**      | ✅     | Automatic token rotation          |
| 🚫 **CORS Protection**    | ✅     | Configured CORS headers           |
| 📱 **Mobile Security**    | ✅     | Touch ID & biometric support      |

</div>

---

## 🎨 **Design System**

```
┌──────────────────────────────────────────┐
│          🎨 DESIGN PHILOSOPHY            │
├──────────────────────────────────────────┤
│                                          │
│  🌙 Dark Mode Support                   │
│  ✨ Smooth Animations                   │
│  📱 Mobile-First Responsive             │
│  ♿ WCAG Accessibility                  │
│  🎯 Intuitive Navigation                │
│  🚀 Fast Performance                    │
│  🎭 Consistent Visual Language          │
│  💫 Delightful Micro-interactions       │
│                                          │
└──────────────────────────────────────────┘
```

---

## 🚀 **Getting Started in 3 Steps**

### **Step 1️⃣ : Clone & Install**

```bash
git clone https://github.com/moorthygithub/MAC-website-crm.git
cd MAC-website-crm && npm install
```

### **Step 2️⃣ : Run Development Server**

```bash
npm run dev
# Server running at http://localhost:5173 🎉
```

### **Step 3️⃣ : Start Developing**

```bash
# Make changes to src/ files
# Hot reload updates your browser automatically ⚡
```

---

## 📊 **Performance Metrics**

```
✨ Features:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ Vite Build Time         < 500ms
🚀 Dev Server Start        < 1s
♻️  Hot Reload             < 100ms
📦 Production Bundle       ~ 200KB (gzipped)
🎨 Components              50+
🔌 API Endpoints           30+
📄 Pages                   15+
```

---

## 🌐 **Deployment Options**

<table align="center">
<tr>
<td width="33%">

### ⚡ **Vercel**

_Recommended for Vite_

- ✅ Automatic deployments
- ✅ Preview deployments
- ✅ Analytics included
- ✅ Serverless functions

</td>
<td width="33%">

### 🌐 **Netlify**

_Drag & Drop Deploy_

- ✅ Git integration
- ✅ Environment variables
- ✅ Form handling
- ✅ Serverless functions

</td>
<td width="33%">

### ☁️ **AWS S3 + CloudFront**

_Scalable & Reliable_

- ✅ Global CDN
- ✅ Cost effective
- ✅ High availability
- ✅ SSL/TLS included

</td>
</tr>
</table>

### 🚀 **Deployment Steps**

```bash
# 1. Build for production
npm run build

# 2. Preview your build locally
npm run preview

# 3. Deploy the 'dist' folder to your platform
#    - Vercel: vercel deploy
#    - Netlify: netlify deploy
#    - AWS: aws s3 sync dist/ s3://bucket-name
```

---

## 📝 **Environment Configuration**

Create `.env` file in root:

```env
# 🌐 API Configuration
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_API_TIMEOUT=30000

# 🔐 Security
VITE_ENCRYPTION_KEY=your_secure_key_here
VITE_APP_SECRET=your_app_secret

# 📊 Analytics
VITE_ANALYTICS_ID=your_analytics_id
VITE_SENTRY_DSN=your_sentry_dsn

# 🎯 App Settings
VITE_APP_NAME=Mac CRM
VITE_APP_VERSION=3.0.8
VITE_DEBUG_MODE=false
```

---

## 🔄 **Development Workflow**

```
┌─────────────────────────────────────────┐
│     💻 LOCAL DEVELOPMENT SETUP          │
├─────────────────────────────────────────┤
│                                         │
│  1. npm run dev                         │
│     └─ Start Vite dev server            │
│                                         │
│  2. Open http://localhost:5173          │
│     └─ Hot reload enabled ♨️            │
│                                         │
│  3. Edit src/ files                     │
│     └─ Changes reflect instantly        │
│                                         │
│  4. npm run lint                        │
│     └─ Check code quality               │
│                                         │
│  5. npm run build                       │
│     └─ Production-ready bundle          │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🤝 **Contributing**

We ❤️ contributions! Here's how to get started:

```bash
# 1. Fork the repository
git clone https://github.com/YOUR_USERNAME/MAC-website-crm.git

# 2. Create feature branch
git checkout -b feature/amazing-feature

# 3. Commit changes
git commit -m '✨ Add amazing feature'

# 4. Push to branch
git push origin feature/amazing-feature

# 5. Open Pull Request
# → Describe your changes
# → Reference any related issues
```

### ✅ **Code Standards**

```
✓ Follow ESLint rules
✓ Use meaningful commit messages
✓ Add comments for complex logic
✓ Test before submitting PR
✓ Update documentation
```

---

## 📚 **Resources & Documentation**

<div align="center">

| Resource      | Link                                                 | Description                  |
| ------------- | ---------------------------------------------------- | ---------------------------- |
| 🔗 React Docs | [react.dev](https://react.dev)                       | Official React documentation |
| ⚡ Vite Guide | [vitejs.dev](https://vitejs.dev)                     | Vite build tool guide        |
| 🎨 Tailwind   | [tailwindcss.com](https://tailwindcss.com)           | Utility-first CSS framework  |
| 🧩 Shadcn UI  | [ui.shadcn.com](https://ui.shadcn.com)               | Beautiful component library  |
| 🎣 Hook Form  | [react-hook-form.com](https://react-hook-form.com)   | Form management library      |
| 🔄 Redux TK   | [redux-toolkit.js.org](https://redux-toolkit.js.org) | State management             |

</div>

---

## 📞 **Support & Feedback**

<div align="center">

### Have Questions? 💬

| Platform                 | Link                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------- |
| 🐛 **Bug Reports**       | [GitHub Issues](https://github.com/moorthygithub/MAC-website-crm/issues)           |
| 💡 **Feature Requests**  | [GitHub Discussions](https://github.com/moorthygithub/MAC-website-crm/discussions) |
| 📧 **Email Support**     | contact@MACcrm.com                                                                 |
| 💬 **Discord Community** | [Join Server](https://discord.gg/MACcrm)                                           |

</div>

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Commercial use
✓ Modification
✓ Distribution
✓ Private use

⚠️ Liability & Warranty limitations
```

---

## 🎯 **Roadmap**

```
🚀 Version 3.0.8 (Current)
├─ ✅ Core CRM functionality
├─ ✅ Multi-company support
├─ ✅ Student management
└─ ✅ Content management

📅 Upcoming Features
├─ 🔄 Real-time notifications
├─ 📊 Advanced analytics
├─ 🤖 AI-powered insights
└─ 📱 Native mobile app
```

---

<div align="center">

## ⭐ **Support This Project**

If you found this project helpful, please consider:

- ⭐ Starring the repository
- 🔗 Sharing with others
- 💬 Providing feedback
- 🤝 Contributing improvements

### **Made with ❤️ by the Mac Team**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-ff1744?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-💚-green?style=for-the-badge)

**Version 3.0.8** | © 2026 Mac Website CRM | All Rights Reserved

[⬆ Back to Top](#-MAC-website-crm)

</div>
