# Security notes

- Firebase web configuration belongs in `NEXT_PUBLIC_*` variables and is safe to ship to the browser; Firebase Security Rules are the actual database/storage boundary.
- Groq keys must never be `NEXT_PUBLIC_*`.
- AI routes require a valid Firebase ID token before using Groq.
- Use Cloudflare WAF/rate limiting on `/api/ai/*` before high traffic. A stateless Worker cannot safely enforce a global daily quota without a stateful Cloudflare binding.
- Do not store passwords in Firestore. Firebase Authentication owns passwords.
- Resume uploads are restricted to the authenticated owner and PDFs under 5 MB.
