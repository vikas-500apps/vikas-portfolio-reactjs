import React, { useEffect } from "react";
import {portfolios} from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal, openModal, closeModal }) => {
  const projectDetail = portfolios.find((project) => project.id === activeID);

  useEffect(() => {
    document.body.classList.add("no-scroll"); // Disable background scrolling when the modal is open
    openModal();

    return () => {
      document.body.classList.remove("no-scroll"); // Remove the class when the component unmounts
      closeModal();
    };
  }, [openModal, closeModal]);

  if (!projectDetail) {
    return null; // Return null if project detail is not found
  }

  // Adjusted overlayStyle based on activeID instead of setShowModal
  const overlayStyle = {
    backgroundColor: activeID ? "rgba(255, 255, 255, 0.1)" : "transparent", // Adjust based on activeID
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10" style={overlayStyle}>
      <div className="max-w-[90%] sm:max-w-[800px] lg:w-3/4 lg:p-10 w-full h-[83vh] p-[40px] overflow-auto modal-scroll absolute top-1/2 left-1/2 z-20 bg-gray-50 rounded-lg transform -translate-x-1/2 -translate-y-1/2 border-2 border-gray-300">
        <div className="relative">
          <figure className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <img
              className="w-full object-cover"
              src={projectDetail.imgUrl}
              alt={projectDetail.title}
            />
            <a
              href={projectDetail.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 right-0 m-4 inline-flex items-center gap-x-1.5 rounded-full px-3 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-500 transition hover:bg-red-50 ease-in-out duration-300"
            >
              <span className="relative flex items-center justify-center">
                <svg
                  viewBox="0 0 6 6"
                  aria-hidden="true"
                  className="h-2 w-2 fill-red-500 animate-pulse"
                >
                  <circle r={3} cx={3} cy={3} />
                </svg>
              </span>
              <span>Live Site</span>
            </a>
          </figure>
        </div>
        <div>
          <h2 className="text-3xl text-headingColor font-bold my-2">
            {projectDetail.title}
          </h2>

          <p className="text-base leading-7 text-smallTextColor">
            {projectDetail.description}
          </p>

          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-lg font-bold">
              Skills Used:
            </h4>

            {projectDetail.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-50 text-gray-700 py-1.5 px-3 rounded-md text-sm leading-none border-2 border-gray-300 hover:-translate-y-1 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="w-8 h-8 bg-white absolute top-4 right-4 text-xl flex items-center justify-center rounded-md leading-none cursor-pointer border-2 border-gray-300"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
