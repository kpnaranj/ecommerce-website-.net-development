import 'react-toastify/dist/ReactToastify.css';
import { Fragment, useState } from "react";

import { Container, createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./Components/Layout/Header";
import Catalog from "./Components/Catalog/Catalog";
import HomePage from "./Components/Home/HomePage";
import ProductDetails from "./Components/Catalog/ProductDetails";
import AboutPage from "./Components/About/AboutPage";
import ContactPage from "./Components/Contact/ContactPage";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#EAEAEA" : "#121212",
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <ToastContainer position="bottom-right" hideProgressBar/>
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<ProductDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
