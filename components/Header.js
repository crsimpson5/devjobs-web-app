import { useContext } from "react";
import Link from "next/link";

import { ThemeContext } from "../pages/_app";

export default function Header() {
  const { darkMode, updateDarkMode } = useContext(ThemeContext);

  return (
    <header className="main-header">
      <div className="container flex justify-between">
        <Link href="/">
          <a>
            <span className="visually-hidden">home</span>
            <img className="logo" src="/images/icons/logo.svg" alt="" />
          </a>
        </Link>

        <div className="inline-flex align-center">
          <div>
            <img src="../images/icons/icon-sun.svg" alt="" />
          </div>
          <label htmlFor="theme-switch" className="switch">
            <input
              type="checkbox"
              id="theme-switch"
              className="visually-hidden"
              checked={darkMode}
              onChange={() => updateDarkMode(!darkMode)}
            />
            <div className="switch__slider"></div>
          </label>
          <div>
            <img src="../images/icons/icon-moon.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
