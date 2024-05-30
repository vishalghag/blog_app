"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link href="https://github.com/vishalghag" passHref>
          <div className="cursor-pointer hover:text-gray-400">
            <FaGithub size={30} />
          </div>
        </Link>

        <Link
          href="https://www.linkedin.com/in/vishal-ghag-020b2a198/"
          passHref
        >
          <div className="cursor-pointer hover:text-gray-400">
            <FaLinkedin size={30} />
          </div>
        </Link>

        <Link href="https://x.com/home" passHref>
          <div className="cursor-pointer hover:text-gray-400">
            <FaTwitter size={30} />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
