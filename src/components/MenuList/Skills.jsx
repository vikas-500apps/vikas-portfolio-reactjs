import React, { useEffect, useState } from 'react';
import HTML5 from '../../assets/images/skills/html5-48.png';
import css3 from '../../assets/images/skills/css3-48.png';
import typescript from '../../assets/images/skills/typescript-48.png';
import javascript from '../../assets/images/skills/javascript-48.png';
import vueJs from '../../assets/images/skills/vue-js-48.png';
import nodejs from '../../assets/images/skills/nodejs-48.png';
import nuxtJs from '../../assets/images/skills/nuxt-js-48.png';
import tailwind from '../../assets/images/skills/tailwind-css-48.png';
import react from '../../assets/images/skills/react-48.png';
import python from '../../assets/images/skills/python-48.png';
import mongoDb from '../../assets/images/skills/mongo-db-48.png';

const skills = [
  { name: 'HTML', img: HTML5 },
  { name: 'CSS', img: css3 },
  { name: 'JavaScript', img: javascript },
  { name: 'TypeScript', img: typescript },
  { name: 'Vue.js', img: vueJs },
  { name: 'Nuxt.js', img: nuxtJs },
  { name: 'Node.js', img: nodejs },
  { name: 'Tailwind CSS', img: tailwind },
  { name: 'MongoDB', img: mongoDb },
  { name: 'Python', img: python },
  { name: 'React.js', img: react },
];

// Function to convert RGB-(Red, Green, Blue) to  HSL-(Hue, Saturation, Lightness)
const rgbToHsl = (r, g, b) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l]; // achromatic

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

  let h;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;

  h /= 6;
  return [h, s, l];
};

// Convert HSL to RGB
const hslToRgb = (h, s, l) => {
  if (s === 0) return [l, l, l];
  
  const hueToRgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [hueToRgb(p, q, h + 1 / 3), hueToRgb(p, q, h), hueToRgb(p, q, h - 1 / 3)]
    .map(v => Math.round(v * 255));
};

// Get the dominant color from an image and brighten it
const getBrightColor = (image) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;
  ctx.drawImage(image, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let [r, g, b, count] = [0, 0, 0, imageData.length / 4];

  for (let i = 0; i < imageData.length; i += 4) {
    r += imageData[i];
    g += imageData[i + 1];
    b += imageData[i + 2];
  }

  r = Math.floor(r / count);
  g = Math.floor(g / count);
  b = Math.floor(b / count);

  const [h, s, l] = rgbToHsl(r, g, b);
  const brightL = Math.min(1, l + 0.3);
  const [newR, newG, newB] = hslToRgb(h, s, brightL);

  return `rgb(${newR}, ${newG}, ${newB})`;
};

const SkillsSection = () => {
  const [colors, setColors] = useState(Array(skills.length).fill(''));

  useEffect(() => {
    skills.forEach((skill, index) => {
      const img = new Image();
      img.src = skill.img;
      img.onload = () => {
        const color = getBrightColor(img);
        setColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[index] = color;
          return newColors;
        });
      };
    });
  }, []);

  return (
    <section id="skills">
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="lg:text-3xl text-2xl font-bold" data-aos="fade-right" data-aos-duration="1900">
            Skills
          </h2>
          <p className="text-base text-gray-500 font-normal max-w-lg mx-auto leading-relaxed">
            Skilled in front-end web development, specializing in creating modern, responsive designs with a focus on user experience.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center p-4 rounded-lg border border-transparent bg-white hover:animate-glow transition-colors duration-500"
              style={{ borderColor: colors[index] }}
            >
              <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-2" />
              <p className="text-center text-sm font-medium cursor-text">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
