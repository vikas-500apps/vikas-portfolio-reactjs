import React, { useState } from "react";

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="experience">
      <div className="2xl:max-w-[1320px] w-[95vw] mx-auto px-4 lg:pt-[120px] lg:pb-[90px] py-[70px]">
        <div className="text-center mb-[70px]">
          <h1
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="1900"
          >
            <span className="lg:text-[36px] leading-[1.7] text-[30px] font-bold">
              Experience & Education
            </span>
          </h1>
          <p className="text-base text-gray-500 font-normal max-w-lg mx-auto leading-[1.7]">
            Frontend Developer with two years of hands-on experience, proficient
            in highly interactive user interfaces.
          </p>
          <div className="flex justify-center mt-6 space-x-8">
            <button
              className={`bg-purple-600 text-white font-[600] leading-[1] text-[12px] inline-flex justify-center items-center py-2 px-4 rounded-full hover:-translate-y-1 uppercase ${
                activeTab === "experience" ? "bg-gray-800" : ""
              }`}
              onClick={() => handleTabClick("experience")}
            >
              Experience
            </button>
            <button
              className={`bg-purple-600 text-white font-[600] leading-[1] text-[12px] inline-flex justify-center items-center py-2 px-4 rounded-full hover:-translate-y-1 uppercase ${
                activeTab === "education" ? "bg-gray-800" : ""
              }`}
              onClick={() => handleTabClick("education")}
            >
              Education
            </button>
          </div>
        </div>
        <div className="pt-12 relative">
          <span className="absolute top-0 block w-[1px] bg-[#d7dfff] lg:left-[50%] left-0 h-full"></span>
          <div className="flex flex-wrap ml-[-16px] mr-[-16px]">
            {activeTab === "experience" && (
              <>
                <div className="px-4 lg:w-[50%] w-full">
                  <div className="lg:max-w-[490px] lg:text-right pb-12 lg:mr-5 ml-5 max-w-full lg:ml-auto relative">
                    <span className="absolute lg:left-auto left-[-28px] top-3 lg:right-[-45px] bg-white border-purple-600 border-4 rounded-full w-[16px] h-[16px]"></span>
                    <h3 className="text-[20px] font-[600] leading-[1.75] text-gray-900 mb-1">
                      Software Developer
                    </h3>
                    <p className="text-[16px] font-[600] mb-3 text-gray-500">
                      MantraReal | Hyderabad
                    </p>
                    <span className="bg-purple-600 text-white font-[600] leading-[1] text-[12px] inline-flex justify-center items-center py-2 px-4 rounded-full">
                      March 2022 - Present
                    </span>
                    <p className="mt-5 text-gray-500 font-normal leading-[1.75]">
                      I have around 2 years of work experience in Software
                      Developer at MantraReal. I have worked on my relevant
                      technical skills like e.g: HTML/HTML5, Vue 3, JavaScript,
                      TypeScript, Vue.js, Nuxt.js, Plugins, CSS, Bootstrap, Vue
                      Bootstrap, SASS, Tailwind CSS.
                    </p>
                  </div>
                </div>
                <div className="px-4 lg:w-[50%] w-full"></div>
                <div className="px-4 lg:w-[50%] w-full"></div>
                <div className="px-4 lg:w-[50%] w-full">
                  <div className="lg:max-w-[490px] text-left pb-12 ml-5 max-w-full lg:mr-auto relative">
                    <span className="absolute top-2 lg:left-[-43px] left-[-28px] bg-white border-purple-600 border-4 rounded-full w-[16px] h-[16px]"></span>
                    <h3 className="text-[20px] font-[600] leading-[1.75] text-gray-900 mb-1">
                      Software Developer Trainee
                    </h3>
                    <p className="text-[16px] font-[600] mb-3 text-gray-500">
                      MANTRA | Hyderabad
                    </p>
                    <span className="bg-purple-600 text-white font-[600] leading-[1] text-[12px] inline-flex justify-center items-center py-2 px-4 rounded-full">
                      Aug 2022 - Mar 2024
                    </span>
                    <p className="mt-5 text-gray-500 font-normal leading-[1.75]">
                      Developing websites and web applications using technical
                      skills like HTML/HTML5, CSS/CSS3, Bootstrap, Vue
                      Bootstrap, SASS, Tailwind CSS, Tailwind UI, JavaScript,
                      Vue.
                    </p>
                  </div>
                </div>
              </>
            )}
            {activeTab === "education" && (
              <>
                <div className="px-4 lg:w-[50%] w-full">
                  <div className="lg:max-w-[490px] lg:text-right pb-12 lg:mr-5 ml-5 max-w-full lg:ml-auto relative">
                    <span className="absolute lg:left-auto left-[-28px] top-3 lg:right-[-45px] bg-white border-purple-600 border-4 rounded-full w-[16px] h-[16px]"></span>
                    <h3 className="text-[20px] font-[600] leading-[1.75] text-gray-900 mb-1">
                      B.Tech (Electronics And Communication Engineering)
                    </h3>
                    <p className="text-[16px] font-[600] mb-3 text-gray-500">
                      Narasimha Reddy Engineering College | Hyderabad
                    </p>
                    <span className="bg-purple-600 text-white font-[600] leading-[1] text-[12px] inline-flex justify-center items-center py-2 px-4 rounded-full">
                      2018 - 2022
                    </span>
                    <p className="mt-5 text-gray-500 font-normal leading-[1.75]">
                      I honed teamwork skills and collaborated on diverse
                      projects during my B.Tech, focusing on developing a
                      chatbot and working with robotics, showcasing my hands-on
                      experience in innovative technological solutions.
                    </p>
                  </div>
                </div>
                <div className="px-4 lg:w-[50%] w-full"></div>
                <div className="px-4 lg:w-[50%] w-full"></div>
                <div className="px-4 lg:w-[50%] w-full">
                  <div className="lg:max-w-[490px] text-left pb-12 ml-5 max-w-full lg:mr-auto relative">
                    <span className="absolute top-2 lg:left-[-43px] left-[-28px] bg-white border-purple-600 border-4 rounded-full w-[16px] h-[16px]"></span>
                    <h3 className="text-[20px] font-[600] leading-[1.75] text-gray-900 mb-1">
                      Intermediate (MPC)
                    </h3>
                    <p className="text-[16px] font-[600] mb-3 text-gray-500">
                      Sri Chaitanya Junior Kalasala College | Hyderabad
                    </p>
                    <span className="bg-purple-600 text-white font-[600] leading-[1] text-[12px] inline-flex justify-center items-center py-2 px-4 rounded-full">
                      2016 - 2018
                    </span>
                    <p className="mt-5 text-gray-500 font-normal leading-[1.75]">
                      I gained a strong foundation in these subjects.
                      Mathematics enhanced my problem-solving skills, Physics
                      provided insights into natural laws, and Chemistry covered
                      the properties and changes of matter. This curriculum
                      developed my analytical abilities and prepared me for
                      further education and scientific careers.
                    </p>
                  </div>
                </div>
                <div className="px-4 lg:w-[50%] w-full">
                  <div className="lg:max-w-[490px] lg:text-right pb-12 lg:mr-5 ml-5 max-w-full lg:ml-auto relative">
                    <span className="absolute lg:left-auto left-[-28px] top-3 lg:right-[-45px] bg-white border-purple-600 border-4 rounded-full w-[16px] h-[16px]"></span>
                    <h3 className="text-[20px] font-[600] leading-[1.75] text-gray-900 mb-1">
                      Primary School (10)<sup>th</sup>
                    </h3>
                    <p className="text-[16px] font-[600] mb-3 text-gray-500">
                      Sri Chaitanya Techno School | Hyderabad
                    </p>
                    <span className="bg-purple-600 text-white font-[600] leading-[1] text-[12px] inline-flex justify-center items-center py-2 px-4 rounded-full">
                      2016
                    </span>
                    <p className="mt-5 text-gray-500 font-normal leading-[1.75]">
                      This education equipped me with critical thinking skills, problem-solving abilities, and a strong academic base. It laid the groundwork for my future academic pursuits and career aspirations in technology, emphasizing logical reasoning and analytical skills.
                    </p>
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
