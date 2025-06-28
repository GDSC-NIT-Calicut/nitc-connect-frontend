
// import { useGoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const navigate = useNavigate();

//   const login = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       try {
//         const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
//           headers: {
//             Authorization: `Bearer ${tokenResponse.access_token}`,
//           },
//         });

//         const user = res.data;
//         console.log('Google User:', user);

//         if (!user.email.endsWith('@nitc.ac.in')) {
//           alert('Only @nitc.ac.in emails allowed');
//           return;
//         }

//         // ✅ Redirect to Dashboard
//         navigate('/dashboard');
//       } catch (error) {
//         console.error('Failed to fetch user info', error);
//       }
//     },
//     onError: () => {
//       console.error('Login Failed');
//     },
//   });

//   return (
//     <div>
//       <h1>Login</h1>
//       <button onClick={() => login()}>Login with Google</button>
//     </div>
//   );
// };

// export default Login;
// src/pages/Login.tsx
// import { useAuth } from "../hooks/useAuth";

// const Login = () => {
//   const { login } = useAuth();

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <button onClick={login}>Login with Google</button>
//     </div>
//   );
// };

// export default Login;
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-800 to-gray-900 text-white font-sans">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-xl text-center">
        <h1 className="text-3xl font-semibold mb-6">Welcome to NITC Connect</h1>
        <p className="mb-4 text-sm text-gray-200">Please log in with your NITC Google account to continue</p>
        <button
          onClick={login}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white font-medium transition"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;





