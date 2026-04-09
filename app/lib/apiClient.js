import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://admin.threatsysacademy.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// REQUEST Interceptor: Add token to every request
apiClient.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? sessionStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE Interceptor: Watch for 401 errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear session and redirect to our custom 401 page
      sessionStorage.removeItem('token');
      window.location.href = '/unauthorized'; 
    }
    return Promise.reject(error);
  }
);

export default apiClient;