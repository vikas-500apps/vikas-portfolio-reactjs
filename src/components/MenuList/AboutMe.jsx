import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { AboutMe } from "../../assets/data/portfolioData"; // Update with the actual path

const skills = [
  { name: 'HTML', img: '/images/skills/html5.png' },
  { name: 'CSS', img: '/images/skills/css3.png' },
  { name: 'JavaScript', img: '/images/skills/javascript.png' },
  { name: 'TypeScript', img: '/images/skills/typescript.png' },
  { name: 'Vue.js', img: '/images/skills/vue-js.png' },
  { name: 'Nuxt.js', img: '/images/skills/nuxt-js.png' },
  { name: 'Node.js', img: '/images/skills/nodejs.png' },
  { name: 'TailwindCSS', img: '/images/skills/tailwind-css.png' },
  { name: 'MongoDB', img: '/images/skills/mongo-db.png' },
  { name: 'Python', img: '/images/skills/python.png' },
  { name: 'React.js', img: '/images/skills/react.png' },
];

const Home = () => {
  const softwareEngineerRef = useRef(null);

  useEffect(() => {
    const text = AboutMe.role;
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        if (softwareEngineerRef.current) {
          softwareEngineerRef.current.textContent = text.slice(0, index);
        }
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Adjust speed here (milliseconds per character)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* Left Section */}
          <div className="w-full md:basis-1/2">
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="flex flex-col"
            >
              <span className="text-primaryColor text-base font-medium mt-6">
                {AboutMe.introText}
              </span>
              <span className="text-[45px] font-bold">{AboutMe.name}</span>
            </h1>
            <h2
              className="text-gray-500 text-xl font-medium mb-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Professional{" "}
              <span
                className="text-primaryColor"
                ref={softwareEngineerRef}
              ></span>
            </h2>
            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <Link to="/contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 ease-in duration-300 py-2 px-4 rounded-[8px] hover:-translate-y-1">
                  <i className="ri-mail-line"></i>Hire Me
                </button>
              </Link>
              <Link
                to="/projects"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor hover:-translate-y-1"
              >
                See Projects
              </Link>
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="1900"
              className="flex gap-1 text-gray-500 mt-14 font-normal text-base mb-10 leading-[1.75] sm:pl-14 sm:pr-10"
            >
              {AboutMe.description}
            </p>
             {/* Social Media Section */}
          <div
            className="flex items-center gap-4 mt-4"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            <span className="text-primaryColor mt-6 text-xl font-[600] mb-5">
              Follow Me:
            </span>
            <div className="flex space-x-3">
              {AboutMe.socialLinks.map(
                ({ name, url, iconClass, hoverColor }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-[40px] h-[40px] cursor-pointer border border-gray-100/20 flex justify-center items-center shadow-md transition-all ease-linear duration-200 hover:translate-y-[-4px] text-gray-500 ${hoverColor} rounded-full`}
                  >
                    <i className={iconClass}></i>
                  </a>
                )
              )}
            </div>
          </div>
          </div>
          {/* Right Section */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={"/images/image.jpeg"} alt="Profile" />
            </figure>
          </div>
          {/* Statistics Section */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            {AboutMe.stats.map(({ label, value, suffix }, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-gray-800 font-[700] text-[32px]">
                  <CountUp start={0} end={value} duration={2} suffix={suffix} />
                </h2>
                <h3 className="text-gray-800 font-[700] text-[18px]">
                  {label}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Section */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex-col flex-shrink-0 p-4 w-[130px] h-[130px] flex items-center justify-center"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-12 h-12 mb-2"
                />
                <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200 mt-2">
                  <svg
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                    className="h-1.5 w-1.5 fill-gray-500"
                  >
                    <circle r={3} cx={3} cy={3} />
                  </svg>
                  {skill.name}
                </span>
              </div>
            ))}
            {skills.map((skill, index) => (
              <div
                key={index + skills.length}
                className="flex-col flex-shrink-0 p-4 w-[130px] h-[130px] flex items-center justify-center"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-12 h-12 mb-2"
                />
                <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200 mt-2">
                  <svg
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                    className="h-1.5 w-1.5 fill-blue-500"
                  >
                    <circle r={3} cx={3} cy={3} />
                  </svg>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
