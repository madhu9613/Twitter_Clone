<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-blueviolet?style=for-the-badge&logo=mongodb&logoColor=white" alt="MERN Badge"/>
  <img src="https://img.shields.io/badge/TailwindCSS-UI-blue?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind Badge"/>
  <img src="https://img.shields.io/badge/DaisyUI-Tailwind-rose?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI Badge"/>
</p>

<h1 align="center"> X-Clone</h1>
<h3 align="center">A MERN Stack Twitter/X-inspired Social Media App</h3>

<p align="center">
  Built with MongoDB, Express.js, React.js, Node.js, Tailwind CSS, and DaisyUI.
</p>

---

## 🌐 Live Demo

🔗 [Click here to view the live project](https://twitter-clone-hscd.onrender.com/)

---

## 🧩 Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-3C873A?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/DaisyUI-F472B6?style=for-the-badge&logo=daisyui&logoColor=white"/>
</p>

---

## ✨ Features

- 🔐 Authentication (Sign up / Login / Logout)
- ✏️ Create, delete, and view tweets
- ❤️ Like and 💬 Comment system
- 🧑‍🤝‍🧑 Follow/Unfollow users
- 🔔 Real-time notifications
- 🔎 Explore trending content
- 🌙 Light/Dark mode using DaisyUI
- 📱 Responsive mobile-first UI

---

## 🖼️ Screenshots

| Signup | Profile | View Post |
|--------|---------|-----------|
| ![signup](https://github.com/user-attachments/assets/c900d3d2-cec2-428e-8d7c-41dd51350412) | ![Capture1](https://github.com/user-attachments/assets/a025560e-f7ab-4b08-ad73-0b0849f6cda2) | ![viewing post](https://github.com/user-attachments/assets/bdec30fc-94e7-4b95-9684-3f77b7450991) |

| Feed | Comments | Notifications |
|------|----------|---------------|
| ![2](https://github.com/user-attachments/assets/29198cee-4f64-47fc-8698-a88c3bcc9570) | ![comment](https://github.com/user-attachments/assets/f1763870-8dcf-4805-ba2d-cee6e455ce83) | ![notifications](https://github.com/user-attachments/assets/077a6dba-e3fd-49ef-b0e1-f74e6ae2404d) |

---

## 🧪 Installation & Running Locally

### ⚙️ Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Cloudinary account (for image hosting)

---

### 📦 Setup Instructions


# 1. Clone the repository
git clone https://github.com/your-username/x-clone.git
cd x-clone

# 2. Install Backend dependencies
cd server
npm install

# 3. Install Frontend dependencies
cd ../client
npm install

🧩 Environment Variables
Create a .env file inside the /server directory with the following content:

env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


▶️ Run the App Locally

# In one terminal, run backend
cd server
npm run dev

# In another terminal, run frontend
cd client
npm run dev
