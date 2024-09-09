import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BorderBeam from "../UI/BorderBeam";

// Define array of image URLs
const imageUrls = [
  "/images/hireme-1.jpeg",
  "/images/hireme-2.jpeg",
  "/images/hireme-3.jpeg",
];

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [currentImage, setCurrentImage] = useState(imageUrls[0]); // Initial image

  const resetForm = () => {
    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_gb3uz9r"; // Replace with your service ID
    const templateID = "template_pizvk9w"; // Replace with your template ID
    const userID = "xwfqoUCOekUT23Bt0"; // Replace with your user ID

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Successfully sent message.", response);
        toast.success("Message sent successfully");
        resetForm();
      })
      .catch((error) => {
        console.error("Failed to send message.", error);
        toast.error("Failed to send message");
      });
  };

  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setCurrentImage(imageUrls[randomIndex]);
  };

  useEffect(() => {
    if (isOpen) {
      changeImage(); // Change image when modal is opened

      const interval = setInterval(changeImage, 60000); // Change image every 60 seconds (60000 milliseconds)
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, [isOpen]); // Run effect only when `isOpen` changes

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 z-10 ${
        isOpen ? "" : "hidden"
      }`}
      style={{
        backgroundColor: isOpen ? "rgba(255, 255, 255, 0.1)" : "transparent",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="relative max-w-[95%] sm:max-w-[1000px] absolute top-1/2 left-1/2 z-20 bg-white rounded-lg transform -translate-x-1/2 -translate-y-1/2 lg:w-1/2 p-8 md:p-0 w-full flex flex-col md:flex-row">
        {/* Border animation */}
        <BorderBeam
          size={300}
          duration={10}
          delay={0}
          className="absolute inset-0 z-10"
        />

        {/* Image side for larger screens */}
        <div className="hidden md:block w-full md:w-1/2 relative overflow-hidden">
          <figure className="h-full w-full">
            <img
              src={currentImage}
              alt="Contact Modal"
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
        </div>

        {/* Contact form side */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative z-10">
          <h2 className="flex flex-col text-center md:text-left">
            <span className="lg:text-[36px] leading-[1.7] text-[30px] font-bold">
              Get in Touch
            </span>
          </h2>
          <p className="text-base text-gray-500 font-normal max-w-xl mx-auto leading-[1.7] mb-4 text-center md:text-left">
            Open to discussing new projects, creative ideas, or opportunities to
            collaborate on your visions. Feel free to reach out!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-neutral-800 font-semibold mb-2 text-sm">
                Name
              </label>
              <input
                name="user_name"
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 bg-white px-3 py-2 rounded-md outline-none focus:border-primaryColor"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-neutral-800 font-semibold mb-2 text-sm">
                Email
              </label>
              <input
                name="user_email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 bg-white px-3 py-2 rounded-md outline-none focus:border-primaryColor"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-neutral-800 font-semibold mb-2 text-sm">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Enter your message"
                className="w-full border border-gray-300 bg-white px-3 py-2 rounded-md outline-none focus:border-primaryColor"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primaryColor text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white text-xl flex items-center justify-center rounded-md leading-none cursor-pointer border-2 border-primaryColor z-10"
        >
          &times;
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactModal;
