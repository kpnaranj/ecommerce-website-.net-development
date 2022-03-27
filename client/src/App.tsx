import { useState, Fragment } from "react";
import Catalog from "./Components/Catalog/Catalog";
import Header from "./Components/Layout/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = (darkMode: boolean) => {
    if (darkMode === true) {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    setDarkMode(!darkMode);
  };

  return (
    <Fragment>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <div className="appContent">
        <h1>Ecommerce Website</h1>
        <Catalog />
      </div>
    </Fragment>
  );
};

export default App;
