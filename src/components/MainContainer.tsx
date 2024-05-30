"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlogBody from "./BlogBody";
import { modalData } from "../utils/constant";
import { BlogItem } from "@/utils/types";

const MainContainer = () => {
  const [blogData, setBlogData] = useState<BlogItem[]>(modalData);
  const [searchInput, setSearchInput] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const searchResult = modalData.filter((ele) =>
      ele.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    setBlogData(searchResult);
  }, [searchInput]);

  // Apply or remove dark class from the document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle theme change
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <BlogBody blogData={blogData} />
      <Footer />
    </div>
  );
};

export default MainContainer;
