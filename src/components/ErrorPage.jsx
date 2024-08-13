import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <div className="relative flex flex-col items-center justify-center text-center text-white p-4 md:p-8 bg-black bg-opacity-50" style={{ height: '60vh', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
        <h1 className="text-8xl font-bold mb-4">404</h1>
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="/error-page.mp4"
          type="video/mp4"
        />
        <h3 className="text-4xl font-bold mb-1">Look like you're lost</h3>
        <p className="text-lg mb-6">The page you are looking for is not available!</p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
