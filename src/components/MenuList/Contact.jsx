import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const resetForm = () => {
    setFormData({
      user_name: '',
      user_email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceID = 'service_gb3uz9r'; // Replace with your service ID
    const templateID = 'template_pizvk9w'; // Replace with your template ID
    const userID = 'xwfqoUCOekUT23Bt0'; // Replace with your user ID

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.error('Successfully to send message.', response);
        toast.success('Message send successfully');
        resetForm();
      })
      .catch((error) => {
        console.error('Failed to send message.', error);
        toast.error('Failed to send message');
      });
  };

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
        <form className="lg:w-[75%] w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-8">
            <div className="lg:col-span-6 col-span-full">
              <input
                name="user_name"
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 bg-white px-8 py-4 rounded-md outline-none focus:border-primaryColor"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="lg:col-span-6 col-span-full">
              <input
                name="user_email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 bg-white px-8 py-4 rounded-md outline-none focus:border-primaryColor"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="lg:col-span-full col-span-full">
              <textarea
                name="message"
                rows="4"
                placeholder="Enter your message"
                className="w-full border border-gray-300 bg-white px-8 py-4 rounded-md outline-none focus:border-primaryColor"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="lg:col-span-full col-span-full text-center">
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
      <ToastContainer />
    </div>
  );
};

export default Contact;
