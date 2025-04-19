import api from "@/lib/api";

export async function login(email: string, password: string) {
    const response = await api.post('/auth/login', { email, password });
    const { accessToken, refreshToken } = response.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
}

export async function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}
