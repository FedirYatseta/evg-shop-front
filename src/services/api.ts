import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL
const NOVA_POST_URL = import.meta.env.VITE_NOVA_POST_URL
//const BASE_URL = import.meta.env.VITE_BASE_URL_DEV
export const instance = axios.create({ baseURL: BASE_URL });
export const instanceNP = axios.create({ baseURL: NOVA_POST_URL });