
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'http://3.91.144.249:9000/knowvex/user/', 
  headers: {
    'Content-Type': 'application/json',
  },
  
});

export default axiosInstance;
