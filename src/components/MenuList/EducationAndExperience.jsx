import React, { useState } from "react";

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="experience">
      <div className="2xl:max-w-[1320px] w-[95vw] mx-auto px-4 lg:pb-[90px]">
        <div className="text-center mb-[70px]">
          <h1
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="1900"
          >
            <span className="text-2xl lg:text-4xl leading-tight font-bold">
              Experience & Education
            </span>
          </h1>
          <p className="text-base text-gray-500 font-normal max-w-lg mx-auto leading-relaxed">
            Frontend Developer with two years of hands-on experience, proficient
            in highly interactive user interfaces.
          </p>
          <div className="flex flex-wrap justify-center mt-6 space-x-4">
            <button
              className={`text-white font-semibold py-2 px-4 rounded-full uppercase transition-transform duration-300 hover:-translate-y-1 ${
                activeTab === "experience" 
                  ? "bg-gray-800 transform translate-y-[-2px]" 
                  : "bg-purple-600 hover:bg-gray-700"
              }`}
              onClick={() => handleTabClick("experience")}
            >
              Experience
            </button>
            <button
              className={`text-white font-semibold py-2 px-4 rounded-full uppercase transition-transform duration-300 hover:-translate-y-1 ${
                activeTab === "education" 
                  ? "bg-gray-800 transform translate-y-[-2px]" 
                  : "bg-purple-600 hover:bg-gray-700"
              }`}
              onClick={() => handleTabClick("education")}
            >
              Education
            </button>
          </div>
        </div>
        <div className="pt-12 relative">
          <span className="absolute top-0 block w-[1px] bg-[#d7dfff] lg:left-[50%] left-0 h-full"></span>
          <div className="flex flex-wrap mx-[-16px]">
            {activeTab === "experience" && (
              <>
                <div className="px-4 lg:w-1/2 w-full">
                  <div className="lg:max-w-[490px] lg:text-right pb-12 lg:mr-5 ml-5 max-w-full lg:ml-auto relative">
                    <span className="absolute lg:left-auto left-[-28px] top-3 lg:right-[-45px] bg-white border-purple-600 border-4 rounded-full w-4 h-4"></span>
                    <div data-aos="fade-right" data-aos-duration="1500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        Software Developer
                      </h3>
                      <p className="text-base font-semibold mb-3 text-gray-500">
                        MantraReal | Hyderabad
                      </p>
                      <span className="bg-purple-600 text-white font-semibold text-xs inline-flex justify-center items-center py-1 px-2 rounded-full">
                        March 2022 - Present
                      </span>
                      <p className="mt-5 text-gray-500 font-normal leading-relaxed">
                        I have around 2 years of work experience in Software
                        Developer at MantraReal. I have worked on my relevant
                        technical skills like e.g: HTML/HTML5, Vue 3, JavaScript,
                        TypeScript, Vue.js, Nuxt.js, Plugins, CSS, Bootstrap, Vue
                        Bootstrap, SASS, Tailwind CSS.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-4 lg:w-1/2 w-full"></div>
                <div className="px-4 lg:w-1/2 w-full"></div>
                <div className="px-4 lg:w-1/2 w-full">
                  <div className="lg:max-w-[490px] text-left pb-12 ml-5 max-w-full lg:mr-auto relative">
                    <span className="absolute top-2 lg:left-[-43px] left-[-28px] bg-white border-purple-600 border-4 rounded-full w-4 h-4"></span>
                    <div data-aos="fade-left" data-aos-duration="1500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        Software Developer Trainee
                      </h3>
                      <p className="text-base font-semibold mb-3 text-gray-500">
                        MANTRA | Hyderabad
                      </p>
                      <span className="bg-purple-600 text-white font-semibold text-xs inline-flex justify-center items-center py-1 px-2 rounded-full">
                        Aug 2022 - Mar 2024
                      </span>
                      <p className="mt-5 text-gray-500 font-normal leading-relaxed">
                        Developing websites and web applications using technical
                        skills like HTML/HTML5, CSS/CSS3, Bootstrap, Vue
                        Bootstrap, SASS, Tailwind CSS, Tailwind UI, JavaScript,
                        Vue.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "education" && (
              <>
                <div className="px-4 lg:w-1/2 w-full">
                  <div className="lg:max-w-[490px] lg:text-right pb-12 lg:mr-5 ml-5 max-w-full lg:ml-auto relative">
                    <span className="absolute lg:left-auto left-[-28px] top-3 lg:right-[-45px] bg-white border-purple-600 border-4 rounded-full w-4 h-4"></span>
                    <div data-aos="fade-right" data-aos-duration="1500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        B.Tech (Electronics And Communication Engineering)
                      </h3>
                      <p className="text-base font-semibold mb-3 text-gray-500">
                        Narasimha Reddy Engineering College | Hyderabad
                      </p>
                      <span className="bg-purple-600 text-white font-semibold text-xs inline-flex justify-center items-center py-1 px-2 rounded-full">
                        2018 - 2022
                      </span>
                      <p className="mt-5 text-gray-500 font-normal leading-relaxed">
                        I honed teamwork skills and collaborated on diverse
                        projects during my B.Tech, focusing on developing a
                        chatbot and working with robotics, showcasing my hands-on
                        experience in innovative technological solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-4 lg:w-1/2 w-full"></div>
                <div className="px-4 lg:w-1/2 w-full"></div>
                <div className="px-4 lg:w-1/2 w-full">
                  <div className="lg:max-w-[490px] text-left pb-12 ml-5 max-w-full lg:mr-auto relative">
                    <span className="absolute top-2 lg:left-[-43px] left-[-28px] bg-white border-purple-600 border-4 rounded-full w-4 h-4"></span>
                    <div data-aos="fade-left" data-aos-duration="1500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        Intermediate (MPC)
                      </h3>
                      <p className="text-base font-semibold mb-3 text-gray-500">
                        Sri Chaitanya Junior Kalasala College | Hyderabad
                      </p>
                      <span className="bg-purple-600 text-white font-semibold text-xs inline-flex justify-center items-center py-1 px-2 rounded-full">
                        2016 - 2018
                      </span>
                      <p className="mt-5 text-gray-500 font-normal leading-relaxed">
                        I gained a strong foundation in these subjects.
                        Mathematics enhanced my problem-solving skills, Physics
                        provided insights into natural laws, and Chemistry covered
                        the properties and changes of matter. This curriculum
                        developed my analytical abilities and prepared me for
                        advanced studies in technology and engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
