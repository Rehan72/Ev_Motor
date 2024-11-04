import axios from 'axios';

const API_URL = 'https://yourapi.com/api'; // Replace with your API URL

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Set up interceptors if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage and add it to the headers
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
