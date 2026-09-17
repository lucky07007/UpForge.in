# Production deployment

## Cloudflare
1. Connect this repository to Cloudflare Workers/your preferred Next.js deployment flow.
2. Add the variables from `.env.example` to the production environment.
3. Add Firebase web config values.
4. Add `GROQ_API_KEY` and `GROQ_API_KEY_2` as encrypted server secrets.
5. Keep Razorpay values empty until live checkout is ready.
6. Build with `npm run cf:build` and deploy with `npm run cf:deploy`.

## Domain
Point `upforge.in` and `www.upforge.in` to the Cloudflare deployment. Add both domains to Firebase Authentication authorized domains.

## Firebase
Create a new Firebase project, enable Google + Email/Password authentication, Firestore and Storage. Deploy `firebase/firestore.rules` and `firebase/storage.rules`.

## AI
The server routes try `GROQ_API_KEY` first and fall back to `GROQ_API_KEY_2` when the first key is unavailable/rate-limited.

## Payments
Razorpay is intentionally isolated under `/api/payment/create-order`. The app is ready for the credentials, but live checkout/signature verification should only be activated after you add your production Razorpay account and complete the order/signature flow.
