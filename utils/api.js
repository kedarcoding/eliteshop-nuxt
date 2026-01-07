// utils/api.js
import axios from 'axios';

// ✅ COOKIE-based auth: withCredentials true
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE + '/api' || 'http://localhost:8000/api',
  headers: {
    Accept: 'application/json',
  },
  withCredentials: true, // 👈 cookies browser se auto bhejne ke liye
});

// Clean undefined / null (keep false/0)
function cleanPayload(obj) {
  if (!obj || typeof obj !== 'object') return {};
  return Object.entries(obj).reduce((acc, [k, v]) => {
    if (v !== undefined && v !== null && v !== '') acc[k] = v;
    return acc;
  }, {});
}

// Normalize errors
function normalizeError(e) {
  if (e?.response) {
    const { status, data, statusText } = e.response;
    if (status === 422 && data?.errors) {
      const first = Object.values(data.errors).flat()[0];
      return new Error(first || 'Validation error');
    }
    if (data?.message) return new Error(data.message);
    if (typeof data === 'string') return new Error(data);
    return new Error(statusText || `Server error (${status})`);
  }
  return new Error(e?.message || 'Network error');
}

// HTTP wrappers
async function get(url, params = {}, options = {}) {
  try {
    return (await api.get(url, { params: cleanPayload(params), ...options })).data;
  } catch (e) {
    throw normalizeError(e);
  }
}

async function post(url, payload = {}, options = {}) {
  try {
    const { asFormData = false, ...rest } = options;
    let body = cleanPayload(payload);
    let headers = {};

    if (asFormData) {
      const formData = new FormData();
      Object.entries(body).forEach(([k, v]) => {
        if (Array.isArray(v)) v.forEach(item => formData.append(`${k}[]`, item));
        else formData.append(k, v);
      });
      body = formData;
      headers['Content-Type'] = 'multipart/form-data';
    } else {
      headers['Content-Type'] = 'application/json';
    }

    return (await api.post(url, body, { headers, ...rest })).data;
  } catch (e) {
    throw normalizeError(e);
  }
}

async function put(url, payload = {}, options = {}) {
  return post(url, payload, { ...options, method: 'put' });
}

async function patch(url, payload = {}, options = {}) {
  try {
    return (await api.patch(url, cleanPayload(payload), options)).data;
  } catch (e) {
    throw normalizeError(e);
  }
}

async function del(url, params = {}, options = {}) {
  try {
    return (await api.delete(url, { data: cleanPayload(params), ...options })).data;
  } catch (e) {
    throw normalizeError(e);
  }
}

// Download PDF / blob
async function downloadFile(url, payload = {}, method = 'GET', options = {}) {
  try {
    const config = { responseType: 'blob', headers: { Accept: 'application/pdf' }, ...options };
    if (method === 'GET') config.params = cleanPayload(payload);
    const res = method === 'POST' ? await api.post(url, cleanPayload(payload), config) : await api.get(url, config);
    return res.data;
  } catch (e) {
    throw normalizeError(e);
  }
}

export const apiService = { get, post, put, patch, delete: del, downloadFile };
export default apiService;
