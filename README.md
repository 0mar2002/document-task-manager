# 📁 Document & Task Management System

A full-stack document drive and task manager built with **Next.js**, **Express.js**, and **MongoDB**. Designed to streamline document uploads, task assignments, and progress tracking in a role-based work environment.

---

## ✨ Features

- 📤 **File Uploads** — Upload and store documents with metadata
- 🧾 **Task Assignments** — Link tasks to documents and manage by status
- 📊 **Dashboard** — Visual breakdown of task statuses and document count
- 🗂 **Organized Views** — Group tasks by status and due dates
- 🔒 **Role-based Access (coming soon)**

---

## 🛠 Tech Stack

| Layer        | Tech                          |
|--------------|-------------------------------|
| Frontend     | Next.js (React)               |
| Backend      | Node.js + Express             |
| Database     | MongoDB with Mongoose ODM     |
| File Uploads | Multer                        |
| Deployment   | Vercel (Frontend), Render (Backend)

---

## 📂 Folder Structure

```
project-drive-system/
├── client/       # Next.js frontend
├── server/       # Express backend API
└── uploads/      # Uploaded document files (ignored in Git)
```

---

## 🚀 Running the Project

1. **Clone the Repo**
   ```bash
   git clone https://github.com/0mar2002/document-task-manager.git
   cd document-task-manager
   ```

2. **Start the Backend**
   ```bash
   cd server
   npm install
   npm run dev
   ```

3. **Start the Frontend**
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

> 💡 Make sure MongoDB is running locally or use MongoDB Atlas and update your `.env`.

---

## 💼 How It Aligns with Business Analyst Skills

- 🧠 Simulates a **document-heavy workflow** for approvals and reporting
- 📌 Shows understanding of **task management systems** & **workflow automation**
- 📊 Demonstrates ability to create **dashboards** and **track KPIs**
- 🛠 Reflects strong knowledge of **databases**, **REST APIs**, and **deployment pipelines**

---

## 🔗 Links

- GitHub: [github.com/0mar2002/document-task-manager](https://github.com/0mar2002/document-task-manager)
- Demo: *Coming Soon*

---

## 📌 To-Do / Enhancements

- [ ] Add role-based access control (RBAC)
- [ ] Improve frontend UI with Tailwind components
- [ ] Add user login & authentication
- [ ] Enable public document sharing via shortlinks

