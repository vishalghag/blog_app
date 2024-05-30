"use client";
import React from "react";

interface SearchProps {
  searchInput: string;
  setSearchInput: (input: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<SearchProps> = ({
  searchInput,
  setSearchInput,
  isDarkMode,
  toggleTheme,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-end dark:bg-black">
      <ul className="flex flex-wrap md:flex-nowrap space-x-4">
        <li className="text-black cursor-pointer font-medium text-2xl hover:text-red-500 dark:text-white dark:hover:text-red-500">
          work
        </li>
        <li className="text-black cursor-pointer font-medium text-2xl hover:text-red-500  dark:text-white dark:hover:text-red-500">
          blog
        </li>
        <li className="text-black cursor-pointer font-medium text-2xl hover:text-red-500 dark:text-white dark:hover:text-red-500">
          contact
        </li>
      </ul>
      <input
        type="text"
        placeholder="Search blog"
        value={searchInput}
        onChange={handleInputChange}
        className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 m-4 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />
      <button
        onClick={toggleTheme}
        className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded mr-3"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
