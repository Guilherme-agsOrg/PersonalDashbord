import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

api.interceptors.response.use(
    response => response,
    async (error) => {
        const original = error.config;
        if (error.response.status === 401 && !original._retry){
            original._retry = true;

            const refreshToken = localStorage.getItem("refreshToken");
            const responseRefresh = await axios.post(`${api.defaults.baseURL}/auth/refresh`, {refreshToken});

            localStorage.setItem("accessToken", responseRefresh.data.accessToken);
            localStorage.setItem("refreshToken", responseRefresh.data.refreshToken);

            original.headers.Authorization = `Bearer ${responseRefresh.data.accessToken}`;
            return axios(original);
        }
        return Promise.reject(error);
    }
);

export default api;
