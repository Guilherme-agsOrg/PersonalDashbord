import { jwtDecode } from "jwt-decode";

export interface UserAuthenticatedData {
    id: string;
    email: string;
    name: string;
    exp: number; // Unix timestamp
    // claims, ex: roles, id, etc.
}

export function decodeToken(token: string): UserAuthenticatedData {
  return jwtDecode(token);
}