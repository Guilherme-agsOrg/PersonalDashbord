import api from "@/lib/api";
import { UserAuthenticatedData } from "@/lib/Token";

export async function login(email: string, password: string) {
    const response = await api.post('/users/login', { email, password });

    return response.data;
}

export async function register(email: string, password: string, confirmPassword: string) {
    const response = await api.post('/users/register', { email, password, confirmPassword });

    return response.data;
}

export async function logout() {
    const response = await api.post('/users/logout');

    return response.data;
}

export async function getMe() {
    const response = await api.get<UserAuthenticatedData>('/users/me'); 

    return response.data;
}
