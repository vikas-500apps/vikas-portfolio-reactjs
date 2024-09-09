import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define array of image URLs
const imageUrls = [
  "/images/hireme-1.jpeg",
  "/images/hireme-2.jpeg",
  "/images/hireme-3.jpeg",
];

const Contact = () => {
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
        console.error("Successfully sent message.", response);
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
    const interval = setInterval(changeImage, 3000); // Change image every 60 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="2xl:max-w-[1320px] w-[95vw] mx-auto px-4 lg:pb-[90px]" id="contact">
      <div className="text-center mb-[70px]">
        <h1 className="flex flex-col">
          <span className="lg:text-[36px] leading-[1.7] text-[30px] font-bold" data-aos="fade-up" data-aos-duration="1900">Get in Touch</span>
        </h1>
        <p className="text-base text-gray-500 font-normal max-w-xl mx-auto leading-[1.7]" data-aos="fade-up" data-aos-duration="1900">
          Open to discussing new projects, creative ideas, or opportunities to collaborate on your visions. Feel free to reach out!
        </p>
      </div>
      <div className="flex justify-center">
        <div className="lg:w-[75%] w-full flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="hidden md:block w-full md:w-1/2 relative">
            <img
              src={currentImage}
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact Form */}
          <form className="w-full md:w-1/2 p-4 flex flex-col" onSubmit={handleSubmit}>
            {/* Title and Subtitle */}
            <div className="mb-6">
              <h2 className="text-center md:text-left text-[24px] font-bold mb-2">
                Thinking about your next big project?
              </h2>
              <p className="text-gray-500 font-normal text-center md:text-left">
                Join us in turning your dreams into a masterpiece!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="user_name" className="text-gray-700 font-semibold mb-1">Name</label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 bg-white px-8 py-4 rounded-md outline-none focus:border-primaryColor"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="user_email" className="text-gray-700 font-semibold mb-1">Email</label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 bg-white px-8 py-4 rounded-md outline-none focus:border-primaryColor"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-700 font-semibold mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 bg-white px-8 py-4 rounded-md outline-none focus:border-primaryColor"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primaryColor text-white font-[600] text-base px-9 py-3 hover:bg-blue-700 rounded-full transition-all ease-linear duration-200 hover:shadow-md hover:translate-y-[-5px]"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
