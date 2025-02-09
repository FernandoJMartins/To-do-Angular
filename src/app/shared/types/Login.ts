import { Usuario } from "../model/Usuario";

export type Login = {
  accessToken: string,
  user: User
}

type User = {
  id: number,
  email: string
}
