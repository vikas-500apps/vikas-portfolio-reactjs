import gharpe from "../images/gharpe.png";
import builderpe from "../images/builderpe.png";

const portfolios = [
  {
    id: "01",
    imgUrl: gharpe,
    category: "Web Developer",
    title: "Gharpe",
    description:
      "Gharpe is an innovative platform dedicated to providing users with comprehensive property solutions. Whether you are looking to buy, rent, or invest in real estate, Gharpe offers a user-friendly interface and advanced search capabilities to help you find the perfect property. With detailed listings, virtual tours, and expert advice, Gharpe simplifies the process of finding your dream home or making smart real estate investments.",
    technologies: ["HTML5", "CSS3", "Vue.js", "Nuxt 3", "Tailwind UI", "Tailwind CSS", "Node.js", "MongoDB"],
    siteUrl: "https://gharpe.com/",
  },
  {
    id: "02",
    imgUrl: builderpe,
    category: "Web Developer",
    title: "Builderpe",
    description:
      "BuilderPe is a cutting-edge digital marketing platform designed for real estate builders, enhancing their online presence and marketing efforts. It features advanced 3D tools and virtual reality (VR) capabilities, allowing for immersive property tours that engage potential buyers. BuilderPe also offers robust SEO optimization to improve search engine rankings and attract more organic traffic. With customizable website templates, social media monitoring, and AI-powered video creation, BuilderPe equips builders with the tools needed to showcase properties effectively, generate leads, and boost overall sales performance.",
    technologies: ["HTML5", "CSS3", "Vue.js", "Nuxt 3", "Tailwind UI", "Tailwind CSS", "Node.js", "Pinia"],
    siteUrl: "http://builderpe.com/",
  },
  ];

export default portfolios;
