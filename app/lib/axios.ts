import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
});

// We will initialize the interceptors inside a component to access the Context
export const setupInterceptors = (
  showLoader: () => void,
  hideLoader: () => void
) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      showLoader();
      return config;
    },
    (error) => {
      hideLoader();
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      hideLoader();
      return response;
    },
    (error) => {
      hideLoader();
      return Promise.reject(error);
    }
  );
};

export default axiosInstance;
