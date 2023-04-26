import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { darkModeAtom } from "../atoms";

interface LoginFormProps {
  darkMode: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ darkMode }) => {
    const darkModeValue = useRecoilValue(darkModeAtom);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [errors, setErrors] = useState<string[]>([]);
    

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors: string[] = [];

    // Validate email
    if (!email.trim()) {
      errors.push("Email is required");
    }

    // Validate password
    if (!password.trim()) {
      errors.push("Password is required");
    }

    // If there are no errors, submit the form
    if (errors.length === 0) {
      setEmail("");
      setPassword("");
      setErrors([]);
      alert("Form submitted!");
    } else {
      setErrors(errors);
    }
  };

  const handleForgotPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("Forgot password");
  };

  const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("Register");
  };

  return (
    <div
      className={`flex flex-col items-center ${
        darkMode ? "bg-green-800 text-white" : "bg-white text-green-700"
      } p-40`}
    >
      <h2 className="font-bold text-xl mb-4">Login</h2>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`appearance-none border ${
              darkMode
                ? "border-green-300 text-green-300"
                : "border-green-500 text-green-700"
            } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
              setErrors([]);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`appearance-none border ${
              darkMode
                ? "border-green-300 text-green-300"
                : "border-green-500 text-green-700"
            } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
              setErrors([]);
            }}
          />
        </div>
        {errors.length > 0 && (
          <div className="mb-4">
            {errors.map((error, index) => (
              <p key={index} className="text-red-500 text-sm">
                {error}
              </p>
            ))}
          </div>
        )}
        <div className="mb-4">
          <input
            className={`mr-2 leading-tight`}
            id="rememberMe"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.currentTarget.checked)}
          />

          <label className="text-gray-700 font-bold" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-green-500 ${
              darkMode
                ? "hover:bg-green-400 text-green-800"
                : "hover:bg-green-600 text-white"
            } font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
          >
            Login
          </button>

          <button
            className={`text-green-500 font-bold hover:text-green-700`}
            type="button"
            onClick={handleForgotPassword}
          >
            Forgot password?
          </button>
        </div>
      </form>
      <div className="mt-4">
        <p className="text-gray-700">
          Don't have an account?{" "}
          <button
            className={`text-green-500 font-bold hover:text-green-700 ${
              darkMode ? "text-green-300" : "text-green-700"
            }`}
            type="button"
            onClick={handleRegister}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
