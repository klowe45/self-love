const baseFromEnv = (
  import.meta.env.VITE_API_BASE || "http://localhost:4000"
).trim();
export const BASE = baseFromEnv.replace(/\/$/, "");

function normalizeError(res, data) {
  const msg = (data && (data.message || data.error)) || `HTTP ${res.status}`;
  const err = new Error(msg);
  err.status = res.status;
  err.data = data;
  return err;
}

// Generic request that smartly handles JSON vs FormData
export async function request(path, opts = {}) {
  const { headers = {}, body, ...rest } = opts;
  const finalHeaders = { ...headers };

  // 🔑 Only set JSON when NOT sending FormData
  if (!(body instanceof FormData)) {
    finalHeaders["Content-Type"] =
      finalHeaders["Content-Type"] || "application/json";
  } else {
    delete finalHeaders["Content-Type"]; // browser sets multipart boundary
  }

  const res = await fetch(`${BASE}${path}`, {
    ...rest,
    headers: finalHeaders,
    body,
  });

  let data = null;
  try {
    data = await res.json();
  } catch (_) {}

  if (!res.ok) throw normalizeError(res, data);
  return data;
}

// ---- Auth helpers ----
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

// Authenticated wrapper that still respects FormData
export async function authRequest(path, options = {}) {
  const token = getToken();
  const headers = { ...(options.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;
  return request(path, { ...options, headers });
}

// ---- Services ----

// Create service with FormData (supports image upload)
// Uses request() so it won't force JSON headers.
export async function createService(formData) {
  return request(`/services`, {
    method: "POST",
    body: formData, // IMPORTANT: FormData, no Content-Type set manually
  });
}

// Get one service by id
export async function getServiceById(id) {
  if (!id) throw new Error("Service id is required");
  return request(`/services/${encodeURIComponent(id)}`, {
    method: "GET",
  });
}

// (Optional) Get list
export async function getServices(params = {}) {
  const qs = new URLSearchParams(params);
  const q = qs.toString() ? `?${qs.toString()}` : "";
  return request(`/services${q}`, { method: "GET" });
}
