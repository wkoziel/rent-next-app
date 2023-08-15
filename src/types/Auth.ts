export type AuthRequest = {
  identifier: string;
  password: string;
};

export type AuthResponse = {
  jwt: string;
  user: User;
};

type User = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
};
