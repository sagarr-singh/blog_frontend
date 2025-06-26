import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://fbxmc70v-6000.inc1.devtunnels.ms/api', 
    baseURL: 'https://vdj0l79s-6000.inc1.devtunnels.ms/api',
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default api;
