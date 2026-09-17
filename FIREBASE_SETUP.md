# One-time Firebase setup for UpForge.in

1. Create a **new Firebase project** for UpForge.in. Do not reuse the old Internadda project if you want a clean start.
2. Add a Web app and copy its Firebase web configuration into `.env.local` and the Cloudflare environment variables.
3. Authentication → Sign-in method: enable **Google** and **Email/Password**.
4. Authentication → Settings → Authorized domains: add `upforge.in`, `www.upforge.in`, and your local host for development.
5. Firestore Database: create the database in production mode.
6. Storage: enable Firebase Storage. Firebase may require the Blaze/pay-as-you-go plan for Storage.
7. Deploy the rules below.

## Firestore rules
```rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, create, update: if request.auth != null && request.auth.uid == uid;
      allow delete: if false;
    }
    match /learningProfiles/{uid} {
      allow read, create, update: if request.auth != null && request.auth.uid == uid;
      allow delete: if false;
    }
    match /learningProgress/{uid} {
      allow read, create, update: if request.auth != null && request.auth.uid == uid;
      allow delete: if false;
    }
    match /quizProgress/{uid} {
      allow read, create, update: if request.auth != null && request.auth.uid == uid;
      allow delete: if false;
    }
    match /interviewReports/{uid}/reports/{reportId} {
      allow read, create: if request.auth != null && request.auth.uid == uid;
      allow update, delete: if false;
    }
    match /{document=**} { allow read, write: if false; }
  }
}
```

## Storage rules
```rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /resumes/{uid}/{fileName} {
      allow read, delete: if request.auth != null && request.auth.uid == uid;
      allow create: if request.auth != null && request.auth.uid == uid
        && request.resource.size < 5 * 1024 * 1024
        && request.resource.contentType == 'application/pdf';
      allow update: if false;
    }
    match /{allPaths=**} { allow read, write: if false; }
  }
}
```

The Firebase web API key is client configuration, not a Firebase Admin private key. Never put Groq or payment secrets in `NEXT_PUBLIC_*` variables.
