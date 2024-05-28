import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-end m-4">
      <ul className="flex flex-wrap md:flex-nowrap space-x-4">
        <li className="text-black cursor-pointer font-medium text-2xl hover:text-red-500">
          work
        </li>
        <li className="text-black cursor-pointer font-medium text-2xl hover:text-red-500">
          blog
        </li>
        <li className="text-black cursor-pointer font-medium text-2xl hover:text-red-500">
          contact
        </li>
      </ul>
      <input
        type="text"
        placeholder="Search blog"
        className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 m-4"
      />
    </div>
  );
};

export default Header;
