import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

api.interceptors.response.use(
    response => response,
    async (error) => {
        const original = error.config;

        if (error.response && error.response.status === 401 && !original._retry) {
            original._retry = true;
            
            try {
                // Try to refresh the token
                await api.post('/users/refresh'); 
                //Return the original request to be retried
                return api(original);
            } 
            catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
