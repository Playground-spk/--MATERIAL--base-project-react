import axios from 'axios';

axios.defaults.baseURL = 'https://api.dev.farmkunnatam.com/farmkunnatamdev/webapp/'

axios.interceptors.request.use(
    (config) => {
    //   if (config.url.includes("/login")) {
    //     return config;
    //   }
      const token = localStorage.getItem(ACCESS_TOKEN);
      config.headers["Authorization"] = `Bearer ${token}`;
  
      return config;
    },
    (error) => {
      throw error;
    }
  );
  
  axios.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem(ACCESS_TOKEN);
        unauthorized();
        window.location.reload();
      }
      return Promise.reject(error);
    }
  );
  
  export default axios;
  