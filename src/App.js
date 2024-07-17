// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/MenuList/AboutMe";
import RecentProject from "./components/MenuList/RecentProjects";
import EducationExperience from "./components/MenuList/EducationAndExperince";
import Contact from "./components/MenuList/Contact";
import Cta from "./components/MenuList/Cta";
import ErrorPage from "./components/ErrorPage";
import 'remixicon/fonts/remixicon.css';

function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    Aos.init();
    // Open contact modal every 1 minute
    const interval = setInterval(() => {
      setContactModalOpen(true);
    }, 60000); // 1 minute in milliseconds
  
    return () => clearInterval(interval);
  }, []);
  
  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="mt-[80px] flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/experience" element={<EducationExperience />} />
            <Route path="/projects" element={<RecentProject />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
        <Cta isOpen={contactModalOpen} onClose={closeContactModal} />
      </div>
    </Router>
  );
}

export default App;
