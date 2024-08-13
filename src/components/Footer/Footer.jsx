import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 mt-auto">
      <div className="2xl:max-w-[1320px] w-[95vw] mx-auto px-4 py-5 mb-[70px] lg:mb-0">
        <div className="md:flex justify-between items-center">
          <p className="text-white text-base font-medium md:mb-0 mb-3">
            © Copyright {currentYear} <a
              href="https://vikas-kulari.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              vikas-kulari.netlify.app
            </a> All rights reserved.
          </p>
          <div className="flex space-x-3">
            <a
              href="https://github.com/vikas-500apps"
              target="_blank"
              rel="noreferrer"
              className="w-[40px] h-[40px] cursor-pointer border border-gray-100/20 flex justify-center items-center shadow-md transition-all ease-linear duration-200 hover:translate-y-[-4px] text-gray-500 hover:bg-gray-800 hover:text-white rounded-full"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-kulari-16013b198/"
              target="_blank"
              rel="noreferrer"
              className="w-[40px] h-[40px] cursor-pointer border border-gray-100/20 flex justify-center items-center shadow-md transition-all ease-linear duration-200 hover:translate-y-[-4px] text-gray-500 hover:bg-blue-800 hover:text-white rounded-full"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://www.facebook.com/vikas.kulari.52"
              target="_blank"
              rel="noreferrer"
              className="w-[40px] h-[40px] cursor-pointer border border-gray-100/20 flex justify-center items-center shadow-md transition-all ease-linear duration-200 hover:translate-y-[-4px] text-gray-500 hover:bg-blue-600 hover:text-white rounded-full"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-[40px] h-[40px] cursor-pointer border border-gray-100/20 flex justify-center items-center shadow-md transition-all ease-linear duration-200 hover:translate-y-[-4px] text-gray-500 hover:bg-pink-600 hover:text-white rounded-full"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="w-[40px] h-[40px] cursor-pointer border border-gray-100/20 flex justify-center items-center shadow-md transition-all ease-linear duration-200 hover:translate-y-[-4px] text-gray-500 hover:bg-black-600 hover:text-white rounded-full"
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-[40px] h-[40px] cursor-pointer border border-gray-100/20 flex justify-center items-center shadow-md transition-all ease-linear duration-200 hover:translate-y-[-4px] text-gray-500 hover:bg-red-600 hover:text-white rounded-full"
            >
              <i className="ri-youtube-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
