import axios from 'axios';

const URL = 'http://localhost:3001';

const requestHeaders = {
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 30000,
  headers: requestHeaders,
});

export default axiosInstance;
