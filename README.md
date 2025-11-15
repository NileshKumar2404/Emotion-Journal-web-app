📘 Emotion Journal — Full Stack Web App

A simple and intuitive journaling tool that allows users to record their emotions, write a short note, and view their emotional history over time.
Built as part of a technical assignment for Comminxy.

🚀 Live Demo
Frontend (Next.js – Vercel)

👉 https://emotion-journal-web-7z4eb8q2g-nilesh-kumars-projects-ee8f5c7b.vercel.app

Backend (Node.js – Render)

👉 https://emotion-journal-web-app.onrender.com

🛠 Tech Stack
##Frontend

Next.js 14 (App Router)

React

CSS (custom UI, animations, gradients)

Fetch API

##Backend

Node.js + Express

MongoDB Atlas

Mongoose

CORS

Deployed on Render

📂 Project Structure
Emotion-Journal-web-app/
│
├── Emotion Journal Backend/     # Node.js + Express API
└── emotion-journal-frontend/    # Next.js 14 frontend

📡 API Endpoints
Base URL:
https://emotion-journal-web-app.onrender.com/api/v1/emotions

1. Create an emotion entry

POST /emotion

Body:

{
  "emotion": "Happy",
  "note": "Feeling good today!"
}

2. Get all entries

GET /get-emotions

Response:

{
  "statusCode": 200,
  "data": {
    "entries": [...]
  },
  "message": "All entries fetched successfully",
  "success": true
}

🧑‍💻 Local Development Setup
1️⃣ Clone the repo
git clone https://github.com/your-username/Emotion-Journal-web-app.git
cd Emotion-Journal-web-app

2️⃣ Backend Setup
cd "Emotion Journal Backend"
npm install

Create .env
PORT=4000
MONGODB_URI=your_mongodb_atlas_uri
CORS_ORIGIN=http://localhost:3000

Run backend locally
npm start


Backend runs at:

http://localhost:4000

3️⃣ Frontend Setup
cd emotion-journal-frontend
npm install

Create .env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000

Run frontend
npm run dev


Frontend runs at:

http://localhost:3000

🟦 Reflection Questions (Required by Company)
1. Architecture Thinking

I chose Next.js for the frontend because it provides a clean structure, fast rendering, and a smooth developer experience. The backend is built in Node.js + Express, which is lightweight and perfect for building simple REST APIs.
They communicate using HTTP requests: the frontend calls the backend through fetch() using the /api/v1/emotions routes. The separation ensures scalability and clean maintainability.

2. Problem Solving

The most challenging part was handling CORS issues during deployment. Locally everything worked, but once deployed, the browser blocked requests. I debugged it using browser DevTools, adjusted the CORS configuration for Render, and ensured the frontend’s environment variable pointed to the correct backend URL. After properly configuring CORS and API_BASE_URL, everything worked smoothly.

3. Database Design

The database uses MongoDB Atlas, with a simple schema:

{
  emotion: String,
  note: String,
  createdAt: Date
}


To scale this for 1M+ users, I would:

Add proper indexing (createdAt, emotion)

Use sharded MongoDB clusters

Implement pagination to avoid fetching large datasets

Add caching (Redis) for frequently accessed lists

4. User Experience

I designed the UI to feel calm, smooth, and friendly with:

Soft gradients

Modern glassy card UI

Subtle animations

A scrollable journal feed

Real-time feedback via toast notifications

Clear error messages & inline validation

The goal was to make emotional journaling relaxing and frictionless.

5. Improvement Vision (If I had 3 more days)

With more time, I would:

Add user authentication (login/signup)

Implement emotion analytics (weekly mood trends, charts)

Add edit/delete emotion entries

Dark/light theme toggle

AI emotion classification from text

6. Deployment Steps
Backend (Render)

Create new Web Service.

Set Root Directory to:

Emotion Journal Backend


Build Command:

npm install


Start Command:

npm start


Add environment variables:

MONGODB_URI

CORS_ORIGIN

Deploy → Backend URL is generated.

Frontend (Vercel)

Import GitHub repo.

Set Root Directory to:

emotion-journal-frontend


Add environment variable:

NEXT_PUBLIC_API_BASE_URL=https://emotion-journal-web-app.onrender.com


Deploy → Frontend URL generated.

💬 What I Enjoyed Most

I really enjoyed shaping the UI to create a calm and reflective environment. Adding smooth animations, gradients, and a clean layout made the experience satisfying. Building the full flow from frontend → backend → database, and seeing it deployed live, was the most rewarding part.
