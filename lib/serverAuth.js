export async function requireFirebaseUser(req){
  const auth=req.headers.get("authorization")||"";
  const token=auth.startsWith("Bearer ")?auth.slice(7):"";
  if(!token) throw new Error("Authentication required");
  const key=process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if(!key) throw new Error("Firebase API key is not configured");
  const r=await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(key)}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({idToken:token})});
  const d=await r.json();
  if(!r.ok||!d.users?.[0]) throw new Error("Invalid Firebase session");
  return d.users[0];
}
