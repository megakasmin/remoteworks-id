# RemoteWorks ID 🌍

RemoteWorks ID is a simple job portal MVP that helps users find **remote and hybrid job opportunities**, especially in tech and digital roles.  
This project was built as a **learning project and portfolio**, focusing on clean UX, modern frontend architecture, and realistic product flow.

## 🚀 Live Demo
👉 https://remoteworks-id.vercel.app/

---

## ✨ Features

- Job listing page with clean UI
- Search jobs in real-time
- Filter jobs by type (Remote / Hybrid)
- Job detail page with dynamic routing
- Apply job flow with modal form
- Success state after application
- SEO-ready structure using Next.js App Router

---

## 🧠 Why This Project?

I built this project to:
- Learn how to build a real-world product using **Next.js App Router**
- Understand **component structure, routing, and state management**
- Create a **portfolio-ready project** that reflects real product thinking
- Practice building UX flows without relying on backend services

This is intentionally built as an **MVP**, focusing on core functionality rather than complexity.

---

## 🛠 Tech Stack

- **Next.js 14 (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (Deployment)

---

## 📁 Project Structure (Simplified)

app/
├─ page.tsx # Homepage
├─ jobs/
│ ├─ page.tsx # Job listing (search & filter)
│ ├─ layout.tsx # SEO metadata for jobs
│ └─ [slug]/
│ └─ page.tsx # Job detail + apply flow
components/
└─ ui/
├─ Card.tsx
└─ Button.tsx


---

## 📝 Apply Flow (How It Works)

1. User opens a job detail page
2. Clicks **Apply Now**
3. Modal form appears
4. User submits application
5. Success message is shown (client-side simulation)

> No backend is used at this stage — the goal is to demonstrate UX and frontend logic.

---

## 🔍 SEO Approach

- Page-level metadata using `metadata` export
- Layout-based SEO for client components
- Clean and readable URLs (`/jobs/[slug]`)

---

## 📌 Future Improvements

- Dynamic SEO per job
- Backend integration (API & database)
- User authentication
- Employer dashboard
- Save / bookmark jobs

---

## 🙌 Author

Built with ❤️ by **Mega Iriantika Kasmin**

If you have feedback or suggestions, feel free to reach out.
