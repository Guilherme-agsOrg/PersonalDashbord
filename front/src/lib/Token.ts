import { jwtDecode } from "jwt-decode";

export interface DecodedToken {
    id: string;
    email: string;
    name: string;
    exp: number; // Unix timestamp
    // claims, ex: roles, id, etc.
}

export function decodeToken(token: string): DecodedToken {
  return jwtDecode(token);
}