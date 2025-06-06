
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',  // 백엔드 서버 주소
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  },
});

export default instance;  