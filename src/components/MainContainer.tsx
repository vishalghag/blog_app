"use client";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlogBody from "./BlogBody";
import { modalData } from "../utils/constant";
import { BlogItem } from "@/utils/types";

const MainContainer = () => {
  const [blogData, setBlogData] = useState<BlogItem[]>(modalData);

  return (
    <div>
      <Header />
      <BlogBody blogData={blogData} />
      <Footer />
    </div>
  );
};

export default MainContainer;
