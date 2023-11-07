import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL
//const BASE_URL = import.meta.env.VITE_BASE_URL_DEV
export const instance = axios.create({ baseURL: BASE_URL });
