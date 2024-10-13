
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'http://localhost/knowvex/user/', 
  headers: {
    'Content-Type': 'application/json',
  },
  
});

export default axiosInstance;
