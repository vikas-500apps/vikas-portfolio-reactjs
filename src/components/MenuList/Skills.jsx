import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'remixicon/fonts/remixicon.css'; // Ensure you import the Remix Icon CSS

const SkillsSection = () => {
  const allSkills = [
    { icon: 'ri-html5-fill', name: 'HTML5' },
    { icon: 'ri-css3-fill', name: 'CSS3' },
    { icon: 'ri-javascript-fill', name: 'JavaScript' },
    { icon: 'ri-vuejs-fill', name: 'Vue.js' },
    { icon: 'ri-reactjs-fill', name: 'React.js' },
    { icon: 'ri-bootstrap-line', name: 'Bootstrap' },
    { icon: 'ri-nodejs-line', name: 'Node.js' },
    { icon: 'ri-tailwind-css-fill', name: 'Tailwind CSS' },
    { icon: 'ri-database-2-fill', name: 'MongoDB' }, // Example for MongoDB icon
    { icon: 'ri-file-list-3-fill', name: 'TypeScript' }, // Example for TypeScript icon
    { icon: 'ri-python-fill', name: 'Python' }, // Example for Python icon
    { icon: 'ri-nuxt-fill', name: 'Nuxt.js' }, // Example for Nuxt.js icon
  ];

  const [skills, setSkills] = useState(allSkills.slice(0, 8));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreSkills = () => {
    if (skills.length >= allSkills.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setSkills(prevSkills => [
        ...prevSkills,
        ...allSkills.slice(prevSkills.length, prevSkills.length + 4),
      ]);
    }, 1500);
  };

  return (
    <section className="text-center p-6">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      <h3 className="text-xl font-medium mb-6">Technologies I Work With</h3>
      <div
        id="scrollableDiv"
        className="w-full overflow-x-auto whitespace-nowrap"
      >
        <InfiniteScroll
          dataLength={skills.length}
          next={fetchMoreSkills}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
          horizontal={true}
          className="flex"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-3 p-4 border border-gray-300 rounded-lg w-24 transform transition-transform hover:scale-105"
            >
              <i className={`${skill.icon} text-4xl mb-2`}></i>
              <p className="m-0">{skill.name}</p>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default SkillsSection;
