// https://dummyjson.com
import axios, { InternalAxiosRequestConfig } from 'axios';

const axiosAuth = axios.create({
  baseURL: 'https://dummyjson.com',
});

axiosAuth.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
  
    const isLoginRequest = config.url!.includes('/auth/login');
  
    if (token && !isLoginRequest) {
      config.headers!.Authorization = `Bearer ${token}`;
      console.log('interceptor', config);
    }
  
    return config;
  });

// const setupInterceptors = (setLoading: (loading: boolean) => void) => {
//   axiosAuth.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//     setLoading(true); 
//     return config;
//   });

//   axiosAuth.interceptors.response.use(
//     (response) => {
//       setLoading(false);
//       return response;
//     },
//     (error) => {
//       setLoading(false);
//       return Promise.reject(error);
//     }
//   );
// };

// export { axiosAuth, setupInterceptors };
export default axiosAuth;