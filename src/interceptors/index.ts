import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

axios.interceptors.request.use(
  async (request: AxiosRequestConfig) => {
    
    const token = sessionStorage.getItem('token');
    
    request.headers = {"Authorization" : `Bearer ${token}`};
    
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const response = {
      data: error.response.data,
      code: error.response.status,
    };
    
    return Promise.reject(response);
  },
);
