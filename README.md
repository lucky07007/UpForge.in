# UpForge.in

UpForge.in is the learning + AI interview practice layer of the UpForge.org brand.

## Product
- Five career tracks: AI/ML & GenAI, Full Stack, Data, Cloud/DevOps, Cybersecurity.
- Structured notes and learning modules.
- Quizzes with explanations and Firebase-saved progress.
- Curated free/open learning and video resources.
- Personal Firebase account and dashboard.
- Optional resume PDF upload to Firebase Storage.
- AI feedback on practice answers.
- Two AI technical interview modes with contextual follow-ups and an AI-generated practice report.
- One ₹49 plan with an isolated Razorpay integration slot for later activation.

## Architecture
Next.js + Cloudflare/OpenNext + Firebase client SDK + Groq server routes. No separate Express/Render backend is required for the core product.

## Environment
Copy `.env.example` to `.env.local` for local development. Put Groq and future Razorpay secrets only in server/Cloudflare secrets.

## Local
npm install
npm run dev

## Cloudflare
npm run cf:build
npm run cf:deploy

## Firebase
Deploy the included Firestore and Storage rules with Firebase CLI after creating your new project. See FIREBASE_SETUP.md.
