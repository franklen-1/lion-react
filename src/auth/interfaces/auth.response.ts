import type { User } from "@/interfaces/user.interface";

 // login, registros y estado
export interface AuthResponse {
    user:  User;
    token: string;
}

