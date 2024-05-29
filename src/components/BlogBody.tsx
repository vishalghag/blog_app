import React, { useState } from "react";
import Image from "next/image";
import modalImg from "../../public/modal.jpg";
import Blog from "./Blog";
import { BlogItem } from "@/utils/types";

interface BlogBodyProps {
  blogData: BlogItem[];
}

const BlogBody: React.FC<BlogBodyProps> = ({ blogData }) => {
  const [viewAll, setViewAll] = useState<boolean>(false);

  const ViewAllFn = () => {
    setViewAll(!viewAll);
  };

  const handleDownload = () => {
    // const link = document.createElement("a");
    // link.href = "/vishal.pdf"; // Make sure this path matches your resume file's location in the public directory
    // link.download = "Vishal_Resume.pdf";
    // link.click();
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 justify-between">
        <div className="px-[10%] order-2 md:order-1 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold font-roboto-medium500">
            Hi, I am Vishal
          </h1>
          <h1 className="text-4xl font-bold my-2">Creative Technologist</h1>
          <p className="w-full md:w-[500px] font-medium text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa.
          </p>
          <button
            onClick={handleDownload}
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition duration-300"
          >
            Download Resume
          </button>
        </div>
        <div className="px-[10%] order-1 md:order-2">
          <Image
            src={modalImg}
            width={300}
            height={300}
            alt="profile"
            className="rounded-full aspect-square object-fill"
          />
        </div>
      </div>
      <div className="w-screen bg-[#83ebf9] mt-4 h-auto">
        <div className="flex flex-row justify-between">
          <h1 className="text-black px-[10%] font-medium text-lg pt-4 ">
            Recent Post
          </h1>
          <h1
            className="text-blue-600 px-[10%] font-medium text-lg pt-4 cursor-pointer"
            onClick={ViewAllFn}
          >
            {viewAll ? "View Less" : "View All"}
          </h1>
        </div>
        <Blog blogData={blogData} viewAll={viewAll} />
      </div>
    </div>
  );
};

export default BlogBody;
