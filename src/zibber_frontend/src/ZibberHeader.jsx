import React from "react";

const ZibberHeader = () => {
  return (
    <div className="bg-white min-h-screen px-8 py-12">
      {/* Navbar */}
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-purple-600 font-bold text-2xl">zibber.</h1>
          <img
            src="/path-to-leaf-icon.png"
            alt="leaf icon"
            className="h-6 w-6"
          />
        </div>
        <ul className="flex items-center space-x-8 text-gray-800 font-medium">
          <li className="text-blue-600">Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Insights</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
          Get A Quote
        </button>
      </nav>

      {/* Main Section */}
      <main className="text-center mt-16">
        <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full font-semibold text-sm">
          Welcome To Zibber.
        </span>
        <h1 className="mt-6 text-6xl font-bold text-gray-900">
          Get more <br /> Impact Fasted
        </h1>
        <p className="text-gray-500 text-lg mt-4 max-w-md mx-auto">
          Tinkety tonk old fruit baking cakes cobblers happy days argy-bargy up
          the duff excuse my french fanny around.
        </p>

        {/* Images Section */}
        <div className="flex items-center justify-center space-x-6 mt-12">
          <img
            src="/path-to-image1.jpg"
            alt="Person 1"
            className="w-32 h-32 rounded-full shadow-lg"
          />
          <img
            src="/path-to-image2.jpg"
            alt="Person 2"
            className="w-32 h-32 rounded-full shadow-lg"
          />
          <img
            src="/path-to-image3.jpg"
            alt="Person 3"
            className="w-32 h-32 rounded-full shadow-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default ZibberHeader;
