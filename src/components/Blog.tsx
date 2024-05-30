"use client";
import { BlogItem } from "@/utils/types";
import Image from "next/image";
import React from "react";

interface BlogProps {
  blogData: BlogItem[];
  viewAll: boolean;
}

const Blog: React.FC<BlogProps> = ({ blogData, viewAll }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const displayBlogs = viewAll ? blogData : blogData.slice(0, 2);

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-[9%]">
      {displayBlogs.length > 0 ? (
        displayBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white/50 p-4 m-2 sm:m-4 rounded-lg hover:bg-white hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
          >
            <h1 className="text-xl sm:text-3xl font-bold m-2 sm:m-4">
              {blog.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center m-2 sm:m-4">
              <span className="text-lg sm:text-2xl text-gray-500 font-bold mx-1 sm:mx-2">
                {formatDate(blog.date)}
              </span>{" "}
              <span className="hidden sm:inline">|</span>
              <span className="text-lg sm:text-2xl text-gray-500 font-bold mx-1 sm:mx-2">
                {blog.author}
              </span>
            </div>
            <p className="text-sm sm:text-lg text-gray-500 font-thin m-2 sm:m-4">
              {blog.description}
            </p>
            <div className="mt-2 sm:mt-4">
              <Image
                src={blog.thumbnail}
                width={40}
                height={40}
                alt="thumbnail"
                className="rounded-lg aspect-square object-cover"
              />
            </div>
          </div>
        ))
      ) : (
        <>
          <h1 className=" text-3xl font-medium flex justify-center text-red-500">
            Search Blog is not present
          </h1>
        </>
      )}
    </div>
  );
};

export default Blog;
