import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, User, LoginCredentials, RegisterCredentials } from '../types/auth';
import { loginUser, registerUser, getCurrentUser } from '../services/authService';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    token: localStorage.getItem('token')
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const user = await getCurrentUser(token);
          setAuth({ user, token });
        } catch (error) {
          localStorage.removeItem('token');
          setAuth({ user: null, token: null });
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const { user, token } = await loginUser(credentials);
    localStorage.setItem('token', token);
    setAuth({ user, token });
  };

  const register = async (credentials: RegisterCredentials) => {
    const { user, token } = await registerUser(credentials);
    localStorage.setItem('token', token);
    setAuth({ user, token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ user: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}