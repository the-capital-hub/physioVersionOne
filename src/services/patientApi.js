const API_BASE = (import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace(/\/$/, "");

export function getPatientToken() {
  return localStorage.getItem("physio_patient_token");
}

export function clearPatientSession() {
  localStorage.removeItem("physio_patient_token");
  localStorage.removeItem("physio_patient_user");
}

export function getStoredPatient() {
  try {
    return JSON.parse(localStorage.getItem("physio_patient_user") || "null");
  } catch {
    return null;
  }
}

export async function patientRequest(path, options = {}) {
  const token = getPatientToken();
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.success === false) {
    throw new Error(payload.message || "Something went wrong. Please try again.");
  }
  return payload;
}

export async function patientLogin(email, password) {
  const result = await patientRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (!result.token || !result.user) throw new Error("Login response was incomplete.");
  if (!["patient", "member"].includes(result.user.role)) {
    throw new Error("This portal is for patient accounts. Please use the correct login portal.");
  }
  localStorage.setItem("physio_patient_token", result.token);
  localStorage.setItem("physio_patient_user", JSON.stringify(result.user));
  return result.user;
}

export async function patientRegister(form) {
  return patientRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify({ ...form, profession: form.profession || "Patient" }),
  });
}
