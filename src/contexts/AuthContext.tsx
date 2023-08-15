import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

type AuthContextType = {
  user: string | null;
  login: (identifier: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const { push } = useRouter();

  const login = (identifier: string, password: string) => {
    console.log('Zalogowano jako: ', identifier, password);
    setUser(identifier);
    push('/clients');
  };

  const logout = () => {
    push('/login');
    setUser(null);
  };

  const authContextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
