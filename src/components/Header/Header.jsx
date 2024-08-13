import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState('');

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    setActiveMenuItem(path || 'about'); // Default to 'about' if path is empty
  }, [location.pathname]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Reference to the public folder
    link.download = 'Resume.pdf';
    link.target = '_blank';
    link.click();
  };

  return (
    <>
      <header className="w-full h-[80px] leading-[80px] flex items-center bg-white/60 fixed top-0 z-10 backdrop-blur-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] text-white text-[18px] font-[500] flex items-center justify-center">
              <img src={'/images/logo.png'} alt="Logo" />
            </span>
            <ul className="hidden md:flex items-center gap-10">
              {['about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item}`}
                    className={`font-[600] hover:text-primaryColor transition duration-300 ${
                      activeMenuItem === item ? 'text-primaryColor' : 'text-smallTextColor'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="flex items-center gap-2 bg-primaryColor text-white font-[500] border border-solid py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
            onClick={handleDownloadResume}
          >
            Download Resume
          </button>
        </div>
      </header>

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white z-10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <ul className="flex justify-around items-center py-2">
            {[
              { name: 'about', icon: 'ri-user-line' },
              { name: 'experience', icon: 'ri-graduation-cap-line' },
              { name: 'skills', icon: 'ri-lightbulb-flash-fill' },
              { name: 'projects', icon: 'ri-briefcase-line' },
              { name: 'contact', icon: 'ri-mail-line' },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={`/${item.name}`}
                  className={`font-[600] hover:text-primaryColor transition duration-300 flex flex-col items-center ${
                    activeMenuItem === item.name ? 'text-primaryColor' : 'text-smallTextColor'
                  }`}
                >
                  <i className={`${item.icon} text-2xl`} />
                  <span className="block text-xs capitalize">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
