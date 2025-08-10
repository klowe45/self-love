const BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export async function signUp({
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  mailingAddress,
}) {
  const res = await fetch(`${BASE}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      mailingAddress,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw data; // { message: ... }
  // Optional: persist token
  localStorage.setItem("token", data.token);
  return data;
}

export async function signIn(email, password) {
  const res = await fetch(`${BASE}/api/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw data;
  localStorage.setItem("token", data.token);
  return data;
}
