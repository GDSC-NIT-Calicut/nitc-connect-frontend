import { useGoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

export interface UserPayload {
  name: string;
  email: string;
  picture: string;
  sub: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<UserPayload | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const token = tokenResponse.credential || tokenResponse.access_token;
      if (!token) return;

      setIdToken(token);
      localStorage.setItem('idToken', token);

      try {
        const payload: UserPayload = jwtDecode(token);
        setUser(payload);

        await fetch('/api/auth', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        console.error('Login verification failed', err);
      }
    },
    onError: () => {
      console.error('Google login failed');
    },
    flow: 'implicit',
  });

  const logout = () => {
    setUser(null);
    setIdToken(null);
    localStorage.removeItem('idToken');
  };

  useEffect(() => {
    const token = localStorage.getItem('idToken');
    if (token) {
      try {
        const decoded: UserPayload = jwtDecode(token);
        setUser(decoded);
        setIdToken(token);
      } catch {
        logout();
      }
    }
  }, []);

  return { user, login, logout, idToken };
};
