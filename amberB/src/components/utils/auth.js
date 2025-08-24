const baseFromEnv = (
  import.meta.env.VITE_API_BASE || "http://localhost:4000"
).trim();
const BASE = baseFromEnv.replace(/\/$/, ""); // no trailing slash

function normalizeError(res, data) {
  const msg = (data && (data.message || data.error)) || `HTTP ${res.status}`;
  const err = new Error(msg);
  err.status = res.status;
  err.data = data;
  return err;
}

async function request(path, { headers = {}, ...opts } = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...headers },
    ...opts,
  });

  // response might not be JSON on errors, so guard it
  let data = null;
  try {
    data = await res.json();
  } catch (_) {
    /* ignore */
  }

  if (!res.ok) throw normalizeError(res, data);
  return data;
}

// ---- Public API ----

export async function signUp(payload) {
  const data = await request(`/auth/signup`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (data?.token) localStorage.setItem("token", data.token);
  return data;
}

export async function signIn({ email, password }) {
  const data = await request(`/auth/signin`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (data?.token) localStorage.setItem("token", data.token);
  return data;
}

export function getToken() {
  return localStorage.getItem("token");
}

export function signOut() {
  localStorage.removeItem("token");
}

// Use this for authenticated requests later:
export async function authRequest(path, options = {}) {
  const token = getToken();
  const headers = { ...(options.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;
  return request(path, { ...options, headers });
}
