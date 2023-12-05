export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
}

export interface User {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}