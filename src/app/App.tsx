import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { Suspense } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/provider/ThemeProvider";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>

      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
