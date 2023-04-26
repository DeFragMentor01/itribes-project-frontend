import React from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useRecoilState, useRecoilValue } from "recoil";
import { darkModeAtom, showLoginFormAtom } from "../atoms";

const HomePage: React.FC = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  const showLoginForm = useRecoilValue(showLoginFormAtom);

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <NavBar darkMode={darkMode} onToggleTheme={handleToggleTheme} />
      {showLoginForm ? (
        <LoginForm darkMode={darkMode} />
      ) : (
        <RegisterForm darkMode={darkMode} />
      )}
    </div>
  );
};

export default HomePage;
