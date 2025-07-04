import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(4, "Password must be at least 4 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

interface Props{
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setIsVerify: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LoginForm({setEmail, setIsVerify}:Props) {
  const { login } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: signUpErrors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSignUpSubmit = (data: any) => {
    console.log("Signup Data:", data);
    setEmail(data.email);
    setIsVerify(true);
    // navigate("/verify");
  };

  const onLoginSubmit = (data: any) => {
    console.log("Login Data:", data);
    // In your original logic, you don't navigate, you call login()
  };

  return (
    <div className="flex items-center justify-center h-screen bg-login-bg">
      <div className="w-[503px] h-[550px] bg-black bg-opacity-60 backdrop-blur-md rounded-lg p-8 flex flex-col justify-center">
        <div className="flex mb-8 border-b border-gray-400">
          <button
            onClick={() => setIsSignUp(false)}
            className={`text-white border-b-2 ${!isSignUp ? "border-white" : "border-none"} px-4 pb-2 mr-4`}
          >
            Login
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`text-white px-4 pb-2 border-b-2 ${isSignUp ? "border-white" : "border-none"}`}
          >
            Signup
          </button>
        </div>
        {isSignUp ? (
          <form onSubmit={handleSubmitSignUp(onSignUpSubmit)} className="flex flex-col">
            <label className="text-white mb-1">Email</label>
            <input
              {...registerSignUp("email")}
              type="email"
              placeholder="example@gmail.com"
              className="mb-1 p-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
            />
            {signUpErrors.email && <p className="text-red-400 text-sm mb-2">{signUpErrors.email.message}</p>}

            <label className="text-white mb-1">Password</label>
            <input
              {...registerSignUp("password")}
              type="password"
              placeholder="********"
              className="mb-1 p-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
            />
            {signUpErrors.password && <p className="text-red-400 text-sm mb-2">{signUpErrors.password.message}</p>}

            <label className="text-white mb-1">Confirm Password</label>
            <input
              {...registerSignUp("confirmPassword")}
              type="password"
              placeholder="********"
              className="mb-1 p-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
            />
            {signUpErrors.confirmPassword && (
              <p className="text-red-400 text-sm mb-2">{signUpErrors.confirmPassword.message}</p>
            )}

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
          </form>
        ) : (
          <form onSubmit={handleSubmitLogin(onLoginSubmit)} className="flex flex-col">
            <label className="text-white mb-1">Email</label>
            <input
              {...registerLogin("email")}
              type="email"
              placeholder="example@gmail.com"
              className="mb-1 p-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
            />
            {loginErrors.email && <p className="text-red-400 text-sm mb-2">{loginErrors.email.message}</p>}

            <label className="text-white mb-1">Password</label>
            <input
              {...registerLogin("password")}
              type="password"
              placeholder="********"
              className="mb-1 p-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none"
            />
            {loginErrors.password && <p className="text-red-400 text-sm mb-2">{loginErrors.password.message}</p>}

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
        )}
      </div>
    </div>
  );
}
