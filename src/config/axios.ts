import axios from 'axios';

axios.create({
  baseURL: 'http://192.168.1.11:5000',
});

export default axios;
