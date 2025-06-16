
import { useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    console.log('Sign in:', email, password);
    setUser({ id: '1', email, name: 'User' });
  };

  const signOut = async () => {
    console.log('Sign out');
    setUser(null);
  };

  const signUp = async (email: string, password: string) => {
    console.log('Sign up:', email, password);
    setUser({ id: '1', email, name: 'User' });
  };

  return {
    user,
    signIn,
    signOut,
    signUp,
    isLoading: false,
  };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
