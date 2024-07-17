import React from "react";

const ErrorPage = () => {
  const videoUrl = "https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/65f06269dfe44d1c5e8eae08_cgpt_404-transcode.mp4";

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center relative">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white p-4 md:p-8">
        <div className="text-left md:text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">Oops! Error 404</h1>
          <p className="text-lg md:text-xl px-4 mb-6">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <a
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 text-lg"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
