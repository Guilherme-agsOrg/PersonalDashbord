import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

api.interceptors.response.use(
    response => response,
    async (error) => {
        const original = error.config;
        if (error.response.status === 401 && !original._retry){
            original._retry = true;
            await axios.post(`${api.defaults.baseURL}/auth/refresh`, {withCredentials: true});
            return axios(original);
        }
        return Promise.reject(error);
    }
);

export default api;
