export interface AuthProviderProps {
  children?: React.ReactNode;
}

export interface AuthStateProps {
  token: string;
  user: object;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}
