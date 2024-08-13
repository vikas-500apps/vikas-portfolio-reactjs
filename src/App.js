// App.js
import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/MenuList/AboutMe";
import Projects from "./components/MenuList/Projects";
import Skills from "./components/MenuList/Skills"
import EducationAndExperience from "./components/MenuList/EducationAndExperience";
import Contact from "./components/MenuList/Contact";
import ContactModal from "./components/MenuList/ContactModal";
import ErrorPage from "./components/ErrorPage";
import 'remixicon/fonts/remixicon.css';

function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [anyModalOpen, setAnyModalOpen] = useState(false);

  useEffect(() => {
    Aos.init();
    // Open contact modal every 1 minute if no other modal is open
    const interval = setInterval(() => {
      if (!anyModalOpen) {
        setContactModalOpen(true);
      }
    }, 60000); // 1 minute in milliseconds

    return () => clearInterval(interval);
  }, [anyModalOpen]);
  
  const closeContactModal = useCallback(() => {
    setContactModalOpen(false);
    setAnyModalOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setAnyModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setAnyModalOpen(false);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="mt-[80px] flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/experience" element={<EducationAndExperience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects openModal={openModal} closeModal={closeModal} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
        <ContactModal isOpen={contactModalOpen} onClose={closeContactModal} />
      </div>
    </Router>
  );
}

export default App;
