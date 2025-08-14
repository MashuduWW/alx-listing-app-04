import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        MyStay
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md w-full">
        <input
          type="text"
          placeholder="Search for destinations"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-2">
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100">
          Sign In
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Sign Up
        </button>
      </div>

      {/* Accommodation Types */}
      <div className="w-full flex justify-center gap-4 mt-4 md:mt-0 text-sm md:text-base">
        <span className="cursor-pointer hover:text-blue-600">Rooms</span>
        <span className="cursor-pointer hover:text-blue-600">Mansion</span>
        <span className="cursor-pointer hover:text-blue-600">Countryside</span>
        <span className="cursor-pointer hover:text-blue-600">Cabins</span>
        <span className="cursor-pointer hover:text-blue-600">Beach</span>
      </div>
    </header>
  );
};

export default Header;
