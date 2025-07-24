import React, { useState, useRef } from "react";

interface Props{
    email: string;
}

export default function VerificationCode({email}: Props) {
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Code entered: " + code.join(""));
  };

  const handleResend = () => {
    alert("Code resent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-green-500">
      <div className="bg-black bg-opacity-60 p-8 rounded-lg border border-blue-500 text-white w-full max-w-sm">
        <h2 className="text-lg font-semibold mb-2">
          2-Step Verification code sent to {email}
        </h2>
        <p className="mb-4">Enter the code</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex space-x-2 mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                className="w-10 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white"
              />
            ))}
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-10 rounded transition-colors"
          >
            Submit
          </button>
        </form>
        <button
          onClick={handleResend}
          className="mt-4 text-green-300 hover:underline text-sm"
        >
          Resend Code
        </button>
      </div>
    </div>
  );
}
