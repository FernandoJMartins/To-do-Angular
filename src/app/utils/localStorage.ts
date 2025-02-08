import { Usuario } from "../shared/model/Usuario";

export function saveUser(key: string, user: Usuario): void {
  const userData = {
    id: user.id,
    email: user.email,
  };
  localStorage.setItem(key, JSON.stringify(userData));
}

export function loadUser(key: string): Usuario {
    return JSON.parse(localStorage.getItem(key) || '{}');
}
