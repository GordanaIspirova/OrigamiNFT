/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosPaperPlane } from "react-icons/io";
import GridBg from "./GridBg";

const Header = () => {
  return (
    <>
      <header className="px-4 h-16 relative">
        <GridBg />
        <div
          className="grid h-full container mx-auto grid-flow-col content-center"
          style={{ gridTemplateColumns: "1fr auto 1fr" }}
        >
          <div className="flex items-center">
            <IoIosPaperPlane className="text-blue-400 mr-2" size="2rem" />{" "}
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 hidden md:block">
              Origami World
            </span>
          </div>
          <div className="bg-gray-800 rounded-2xl p-1 overflow-hidden flex items-center shadow-lg">
            <a className="px-4 py-1 rounded-xl bg-gray-700 font-medium hover:bg-gray-600 transition-all">
              Mint
            </a>
            <a
              href="https://origamiworldnft.com/"
              className="px-4 py-1 rounded-xl font-medium text-gray-400 hover:bg-gray-600 hover:text-gray-100 hover:underline cursor-pointer transition-all flex space-x-2"
            >
              Back to home <FiArrowUpRight size="1rem" />
            </a>
          </div>
        </div>
      </header>
      <span className="mt-40 block"></span>
    </>
  );
};

export default Header;
