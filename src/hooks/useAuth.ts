// import { useGoogleLogin } from '@react-oauth/google';
// import { useState, useEffect } from 'react';
// import jwtDecode from 'jwt-decode';

// export interface UserPayload {
//   name: string;
//   email: string;
//   picture: string;
//   sub: string;
// }

// export const useAuth = () => {
//   const [user, setUser] = useState<UserPayload | null>(null);
//   const [idToken, setIdToken] = useState<string | null>(null);

//   const login = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       const token = tokenResponse.credential || tokenResponse.access_token;
//       if (!token) return;

//       setIdToken(token);
//       localStorage.setItem('idToken', token);

//       try {
//         const payload: UserPayload = jwtDecode(token);
//         setUser(payload);

//         await fetch('/api/auth', {
//           method: 'POST',
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//       } catch (err) {
//         console.error('Login verification failed', err);
//       }
//     },
//     onError: () => {
//       console.error('Google login failed');
//     },
//     flow: 'implicit',
//   });

//   const logout = () => {
//     setUser(null);
//     setIdToken(null);
//     localStorage.removeItem('idToken');
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('idToken');
//     if (token) {
//       try {
//         const decoded: UserPayload = jwtDecode(token);
//         setUser(decoded);
//         setIdToken(token);
//       } catch {
//         logout();
//       }
//     }
//   }, []);

//   return { user, login, logout, idToken };
// };
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const logout = async () => {
    await fetch("http://localhost:8080/logout", {
      method: "POST",
      credentials: "include",
    });
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  useEffect(() => {
    fetch("http://localhost:8080/", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        setIsLoggedIn(res.ok);
      })
      .catch(() => setIsLoggedIn(false));
  }, []);

  return { isLoggedIn, login, logout };
};

