import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Aos from "aos";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/MenuList/AboutMe";
import Projects from "./components/MenuList/Projects";
import Skills from "./components/MenuList/Skills";
import EducationAndExperience from "./components/MenuList/EducationAndExperience";
import Contact from "./components/MenuList/Contact";
import ContactModal from "./components/MenuList/ContactModal";
import ErrorPage from "./components/ErrorPage";
import 'remixicon/fonts/remixicon.css';

function AppContent() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [anyModalOpen, setAnyModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    Aos.init();
    // Scroll to top on route change
    window.scrollTo(0, 0);
    // Open contact modal every 1 minute if no other modal is open and the route is not /contact
    const interval = setInterval(() => {
      if (!anyModalOpen && location.pathname !== '/contact') {
        setContactModalOpen(true);
      }
    }, 50000); // 1 minute in milliseconds

    return () => clearInterval(interval);
  }, [anyModalOpen, location.pathname]);

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
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
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
      </div>
      <ContactModal isOpen={contactModalOpen} onClose={closeContactModal} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
