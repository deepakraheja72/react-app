import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import components
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MiddleSection from "./components/MiddleSection/MiddleSection";

function App() {
  return (
    <Router>
      <Header />
      <MiddleSection>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MiddleSection>
      <Footer />
    </Router>
  );
}

export default App;