import api from "@/lib/api";

export async function login(email: string, password: string) {
    const response = await api.post('/auth/login', { email, password });
    const { accessToken, refreshToken } = response.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    return response.data;
}

export async function register(email: string, password: string, confirmPassword: string) {
    const response = await api.post('/auth/register', { email, password, confirmPassword });
    const { accessToken, refreshToken } = response.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    return response.data;
}

export async function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}
