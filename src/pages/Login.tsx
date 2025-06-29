
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
// import { useAuth } from "../hooks/useAuth";

// const Login = () => {
//   const { login } = useAuth();

//   return (
//     <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-800 to-gray-900 text-white font-sans">
//       <div className="bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-xl text-center">
//         <h1 className="text-3xl font-semibold mb-6">Welcome to NITC Connect</h1>
//         <p className="mb-4 text-sm text-gray-200">Please log in with your NITC Google account to continue</p>
//         <button
//           onClick={login}
//           className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white font-medium transition"
//         >
//           Login with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;





import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const {login} = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen bg-login-bg">
      <div className="w-[503px] h-[550px] bg-black bg-opacity-60 backdrop-blur-md rounded-lg p-8 flex flex-col justify-center">
        <div className="flex mb-8 border-b border-gray-400">
          <button onClick={()=>{setIsSignUp(false)}} className={`text-white border-b-2 ${(!isSignUp)?"border-white":"border-none"} px-4 pb-2 mr-4`}>
            Login
          </button>
          <button onClick={()=>{setIsSignUp(true)}} className={`text-white px-4 pb-2 border-b-2 ${(isSignUp)?"border-white":"border-none"}`}>Signup</button>
        </div>
        {(isSignUp)?<form className="flex flex-col">
          <label className="text-white mb-1">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="mb-4 p-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
            />
          <label className="text-white mb-1">Password</label>
          <input
            type="password"
            placeholder="********"
            className="mb-2 p-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
            />
          <label className="text-white mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="********"
            className="mb-2 p-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
            />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded mb-4 hover:bg-green-600 transition"
            >
            Signup
          </button>
          <button
            type="button"
            onClick={login}
            className="border border-gray-400 text-white py-2 rounded hover:bg-gray-700 transition"
            >
            Signup with Google
          </button>
        </form>:
        <form className="flex flex-col">
          <label className="text-white mb-1">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="mb-4 p-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
            />
          <label className="text-white mb-1">Password</label>
          <input
            type="password"
            placeholder="********"
            className="mb-2 p-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
            />
          <a href="#" className="text-gray-400 text-sm mb-6 hover:underline">
            Forgot Password?
          </a>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded mb-4 hover:bg-green-600 transition"
            >
            Login
          </button>
          <button
            type="button"
            onClick={login}
            className="border border-gray-400 text-white py-2 rounded hover:bg-gray-700 transition"
            >
            Login with Google
          </button>
        </form>
        }
      </div>
      </div>
    );
}