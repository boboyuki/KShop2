import axios from 'axios';
const baseURL = import.meta.env.VITE_APP_API_PATH as string;
const appPath = import.meta.env.VITE_APP_CUSTOM_PATH as string;
const instance = axios.create({
  baseURL: `${baseURL}/api/${appPath}`,
  timeout: 1000,
});

export default instance;