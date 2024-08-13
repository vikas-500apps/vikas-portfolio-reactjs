const portfolios = [
  {
    id: "01",
    imgUrl: "/images/gharpe.png",
    category: "Web Developer",
    title: "GharPe",
    description:
      "Gharpe is an innovative platform dedicated to providing users with comprehensive property solutions. Whether you are looking to buy, rent, or invest in real estate, Gharpe offers a user-friendly interface and advanced search capabilities to help you find the perfect property. With detailed listings, virtual tours, and expert advice, Gharpe simplifies the process of finding your dream home or making smart real estate investments.",
    technologies: [
      "HTML5",
      "CSS3",
      "Vue.js",
      "Nuxt 3",
      "Tailwind UI",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    siteUrl: "https://gharpe.com/",
  },
  {
    id: "02",
    imgUrl: "/images/builderpe.png",
    category: "Web Developer",
    title: "BuilderPe",
    description:
      "BuilderPe is a cutting-edge digital marketing platform designed for real estate builders, enhancing their online presence and marketing efforts. It features advanced 3D tools and virtual reality (VR) capabilities, allowing for immersive property tours that engage potential buyers. BuilderPe also offers robust SEO optimization to improve search engine rankings and attract more organic traffic. With customizable website templates, social media monitoring, and AI-powered video creation, BuilderPe equips builders with the tools needed to showcase properties effectively, generate leads, and boost overall sales performance.",
    technologies: [
      "HTML5",
      "CSS3",
      "Vue.js",
      "Nuxt 3",
      "Tailwind UI",
      "Tailwind CSS",
      "Node.js",
      "Pinia",
    ],
    siteUrl: "http://builderpe.com/",
  },
];

const AboutMe = {
  name: "Vikas Kulari",
  role: "Software Engineer",
  introText: "Hey There 👋 I am",
  description:
    "As a skilled Frontend Developer with two years of hands-on experience, I excel in creating dynamic and engaging user interfaces and reusable components using technologies like Vue.js, Vuex, React.js, and Redux. My expertise extends to server-side rendering frameworks such as Nuxt.js and Next.js. I am skilled in JavaScript, TypeScript, Node.js, Python, and MongoDB, and am dedicated to developing responsive, user-centric web applications with a strong focus on SEO and user experience. Known for my effective problem-solving abilities, I deliver scalable and efficient solutions while thriving in collaborative team environments. With excellent communication skills and a commitment to continuous learning, I stay abreast of industry trends to ensure cutting-edge and impactful solutions.",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/vikas-500apps",
      iconClass: "ri-github-fill",
      hoverColor: "hover:bg-gray-800 hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vikas-kulari-16013b198/",
      iconClass: "ri-linkedin-fill",
      hoverColor: "hover:bg-blue-800 hover:text-white",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/vikas.kulari.52",
      iconClass: "ri-facebook-fill",
      hoverColor: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      iconClass: "ri-instagram-fill",
      hoverColor: "hover:bg-pink-600 hover:text-white",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@gharpe3d",
      iconClass: "ri-youtube-fill",
      hoverColor: "hover:bg-red-600 hover:text-white",
    },
  ],
  stats: [
    {
      label: "Year of Experience",
      value: 2,
      suffix: "+",
    },
    {
      label: "Success Rate",
      value: 100,
      suffix: "%",
    },
    {
      label: "Projects Completed",
      value: 2,
      suffix: "+",
    },
  ],
};

export { portfolios, AboutMe };
