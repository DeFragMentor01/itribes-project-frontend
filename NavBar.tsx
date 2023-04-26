import React from "react";
import { useRecoilState } from "recoil";
import { darkModeAtom, showLoginFormAtom } from "../atoms";

interface NavBarProps {
  onToggleTheme: () => void;
  darkMode: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ onToggleTheme }) => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  const [showLoginForm, setShowLoginForm] = useRecoilState(showLoginFormAtom);

  const handleLogin = () => {
    setShowLoginForm(true);
  };

  const handleRegister = () => {
    setShowLoginForm(false);
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`flex items-center justify-between p-6 ${
        darkMode
          ? "bg-gradient-to-r from-green-900 to-green-600 text-white"
          : "bg-white text-green-700"
      }`}
      style={{ borderBottom: `1px solid ${darkMode ? "green" : "brown"}` }}
    >
      <div
        className={`font-bold text-2xl ${
          darkMode ? "text-white" : "text-green-700"
        }`}
      >
        iTribes
      </div>
      <div className="flex items-center space-x-2">
        <button
          className={`px-4 py-2 rounded-md ${
            darkMode
              ? "text-green-300 border-green-300"
              : "text-green-700 border-brown-500"
          } border hover:bg-green-700 hover:text-green-300`}
          style={{
            background: darkMode ? "#2C2C2C" : "white",
            color: darkMode ? "#47B649" : "brown",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
          }}
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            darkMode
              ? "text-green-300 border-green-300"
              : "text-green-700 border-brown-500"
          } border hover:bg-green-700 hover:text-green-300`}
          style={{
            background: darkMode ? "#2C2C2C" : "white",
            color: darkMode ? "#47B649" : "brown",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
          }}
          onClick={handleRegister}
        >
          Register
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            darkMode ? "bg-green-700 text-green-300" : "bg-green-500 text-white"
          } hover:bg-green-600 hover:text-green-200`}
          style={{
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
          }}
          onClick={handleToggleTheme}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
