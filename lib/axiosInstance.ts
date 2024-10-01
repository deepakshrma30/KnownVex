// src/axiosInstance.ts
import axios from 'axios';

// Create an axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://3.91.144.249:9000/knowvex/user/', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000, // Optional: You can set a timeout for the requests
});

export default axiosInstance;
