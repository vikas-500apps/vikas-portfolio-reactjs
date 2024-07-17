import React, { useEffect }from "react";
import image from "../../../src/assets/images/image.jpeg"; // Adjust the path to your image file
import CountUp from "react-countup";

const Home = () => {
    useEffect(() => {
        const text = "Software Engineer";
        let index = 0;
        const interval = setInterval(() => {
          if (index <= text.length) {
            document.getElementById('softwareEngineer').textContent = text.slice(0, index);
            index++;
          } else {
            clearInterval(interval);
          }
        }, 150); // Adjust speed here (milliseconds per character)
    
        return () => clearInterval(interval);
      }, []);
  return (
    <>
      {/* About Section */}
      <section className="pt-0" id="about">
        <div className="container pt-14">
          <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
            {/* Left Section */}
            <div className="w-full md:basis-1/2">
              {/* Heading */}
              <h1
                data-aos="fade-right"
                data-aos-duration="1500"
                className="flex flex-col"
              >
                <span className="text-primaryColor text-base font-medium mt-6">
                  {" "}
                  Hey There 👋 I am {" "}
                </span>
                <span className="text-[45px] font-bold">{" "} Vikas Kulari {" "}</span>
              </h1>
              {/* Subheading */}
              <h2
                className="text-gray-500 text-xl font-medium mb-5"
                data-aos="fade-right"
                data-aos-duration="1500"
              >{" "}
              Professional {" "} <span className="text-primaryColor" id="softwareEngineer"></span>
              </h2>
              {/* Buttons */}
              <div
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-delay="200"
                className="flex items-center gap-6 mt-7"
              >
                <a href="/contact">
                  <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 ease-in duration-300 py-2 px-4 rounded-[8px] hover:-translate-y-1">
                    <i className="ri-mail-line"></i>Hire Me
                  </button>
                </a>
                <a
                  href="/projects"
                  className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor hover:-translate-y-1"
                >
                  <i className="ri-scroll-to-bottom-fill"></i>see projects
                </a>
              </div>
              {/* Paragraph */}
              <p
                data-aos="fade-up"
                data-aos-duration="1900"
                className="flex gap-2 text-gray-500 mt-14 font-normal text-base mb-10 leading-[1.75] sm:pl-14 sm:pr-10"
              >
                <span>
                  <i className="ri-apps-2-line"></i>
                </span>
                Highly motivated Frontend Developer with 2 years of experience
                building exceptional user experiences using Nuxt.js, Vue.js,
                Tailwind CSS, and SEO best practices. I excel in crafting
                interactive UIs, reusable plugins, and server-side rendered
                (SSR) applications for optimal performance and search engine
                visibility. Committed to clean, maintainable code and a passion
                for user-centric design.
              </p>
              {/* Social Media Links */}
              <div className="flex items-center gap-9 mt-14" data-aos="fade-up"
                data-aos-duration="1900">
                <span className="text-smallTextColor text-[15px] font-[600]">
                  Follow Me:
                </span>
                <span>
                  <a
                    href="https://github.com/vikas-500apps"
                    target="_blank"
                    rel="noreferrer"
                    className="text-smallTextColor text-[20px] font-[800]"
                  >
                    <i className="ri-github-line hover:text-gray-800"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/vikas-kulari-16013b198/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-smallTextColor text-[18px] font-[600]"
                  >
                    <i className="ri-linkedin-line hover:text-blue-500"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-smallTextColor text-[18px] font-[600]"
                  >
                    <i className="ri-instagram-line hover:text-pink-500"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.facebook.com/vikas.kulari.52"
                    target="_blank"
                    rel="noreferrer"
                    className="text-smallTextColor text-[18px] font-[600]"
                  >
                    <i className="ri-facebook-line hover:text-blue-700"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.youtube.com/@gharpe3d"
                    target="_blank"
                    rel="noreferrer"
                    className="text-smallTextColor text-[18px] font-[600]"
                  >
                    <i className="ri-youtube-line hover:text-red-500"></i>
                  </a>
                </span>
              </div>
            </div>
            {/* Right Section */}
            <div className="basis-1/3 mt-10 sm:mt-0">
              <figure className="flex items-center justify-center">
                <img src={image} alt="" />
              </figure>
            </div>
            {/* Statistics Section */}
            <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
              {/* Year of Experience */}
              <div className="mb-10">
                <h2 className="text-gray-800 font-[700] text-[32px]">
                  <CountUp start={0} end={2} duration={2} suffix="+" />
                </h2>
                <h3 className="text-gray-800 font-[700] text-[18px]">
                  Year of Experience
                </h3>
              </div>
              {/* Success Rate */}
              <div className="mb-10">
                <h2 className="text-gray-800 font-[700] text-[32px]">
                  <CountUp start={0} end={100} duration={2} suffix="%" />
                </h2>
                <h3 className="text-gray-800 font-[700] text-[18px]">
                  Success Rate
                </h3>
              </div>
              {/* Projects Completed */}
              <div className="mb-10">
                <h2 className="text-gray-800 font-[700] text-[32px]">
                  <CountUp start={0} end={2} duration={2} suffix="+" />
                </h2>
                <h3 className="text-gray-800 font-[700] text-[18px]">
                  Projects Completed
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
