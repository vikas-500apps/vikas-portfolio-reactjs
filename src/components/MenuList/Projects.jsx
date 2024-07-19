import React, { useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const RecentProjects = ({ openModal, closeModal }) => {
  const [nextItems, setNextItems] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const showSelectedProjectDetails = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  const loadMoreRecentProject = () => {
    setNextItems((next) => next + 3);
  };

  return (
    <>
      <section id="projects">
        <div className="2xl:max-w-[1320px] w-[95vw] mx-auto px-4 py-[70px]">
          <div className="text-center mb-[70px]">
            <h1 className="flex flex-col">
              <span
                className="lg:text-[36px] leading-[1.7] text-[30px] font-bold"
                data-aos="fade-right"
                data-aos-duration="1900"
              >
                Projects
              </span>
            </h1>
            <p className="text-base text-gray-500 font-normal max-w-lg mx-auto leading-[1.7]">
              Crafting Cutting-Edge User Interfaces and Elevating Mobile App Experiences
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-3 md:grid-cols-2">
            {data?.slice(0, nextItems)?.map((item, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden bg-white shadow-lg"
                data-aos="fade-zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <a href={item.url} className="block">
                  <img
                    src={item.imgUrl}
                    alt=""
                    className="w-full h-[270px] object-cover transition-all duration-300 transform group-hover:scale-105"
                  />
                </a>
                <div className="absolute inset-0 overflow-hidden group">
                  <div className="absolute inset-0 bg-black bg-opacity-0 opacity-0 group-hover:bg-opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => showSelectedProjectDetails(item.id)}
                      className="text-white bg-gray-900 bg-opacity-30 hover:bg-gray-100 hover:bg-opacity-50 py-2 px-4 rounded-full transition-all duration-300"
                    >
                      <i className="ri-eye-line"></i>
                    </button>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    <a href={item.url} className="hover:text-primaryColor">
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-neutral-600 line-clamp-3">
                    {item.description.length > 200 ? item.description.slice(0, 200) + "..." : item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {nextItems < data.length && (
            <div className="text-center mt-6">
              <button
                onClick={loadMoreRecentProject}
                className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded font-semibold transition-colors duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {showModal && <Modal setShowModal={setShowModal} activeID={activeID} openModal={openModal}
              closeModal={closeModal} />}
      </section>
    </>
  );
};

export default RecentProjects;
