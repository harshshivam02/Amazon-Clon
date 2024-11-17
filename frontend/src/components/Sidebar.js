import React from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-[365px] bg-white z-[70] overflow-y-auto transform transition-transform duration-300">
            {/* Header */}
            <div className="flex items-center bg-[#232f3e] text-white justify-between flex-row-reverse">
              {/* Close button */}
              <button 
                onClick={onClose}
                className="p-4 hover:bg-[#3d5169] transition-colors"
              >
                <IoClose size={24} />
              </button>
              
              {/* User section */}
              <div className="flex items-center gap-3 p-3">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-8 h-8 text-gray-300"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <span className="text-xl font-bold">Hello, Harsh</span>
              </div>
            </div>

            {/* Content */}
            <div className="text-black">
              {/* Digital Content & Devices */}
              <div className="border-b">
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-3">Digital Content & Devices</h2>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center hover:bg-gray-100 p-1 rounded cursor-pointer">
                      <span>Amazon Music</span>
                      <MdKeyboardArrowRight />
                    </li>
                    <li className="flex justify-between items-center hover:bg-gray-100 p-1 rounded cursor-pointer">
                      <span>Kindle E-readers & Books</span>
                      <MdKeyboardArrowRight />
                    </li>
                    <li className="flex justify-between items-center hover:bg-gray-100 p-1 rounded cursor-pointer">
                      <span>Amazon Appstore</span>
                      <MdKeyboardArrowRight />
                    </li>
                  </ul>
                </div>
              </div>

              {/* Shop By Department */}
              <div className="border-b">
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-3">Shop By Department</h2>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center hover:bg-gray-100 p-1 rounded cursor-pointer">
                      <span>Electronics</span>
                      <MdKeyboardArrowRight />
                    </li>
                    <li className="flex justify-between items-center hover:bg-gray-100 p-1 rounded cursor-pointer">
                      <span>Computers</span>
                      <MdKeyboardArrowRight />
                    </li>
                    <li className="flex justify-between items-center hover:bg-gray-100 p-1 rounded cursor-pointer">
                      <span>Smart Home</span>
                      <MdKeyboardArrowRight />
                    </li>
                    <li className="flex justify-between items-center hover:bg-gray-100 p-1 rounded cursor-pointer">
                      <span>Arts & Crafts</span>
                      <MdKeyboardArrowRight />
                    </li>
                    <li className="hover:bg-gray-100 p-1 rounded cursor-pointer text-[#007185]">
                      See All
                    </li>
                  </ul>
                </div>
              </div>

              {/* Programs & Features */}
              <div className="border-b">
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-3">Programs & Features</h2>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center hover:bg-gray-100 p-1 rounded cursor-pointer">
                      <span>Gift Cards</span>
                      <MdKeyboardArrowRight />
                    </li>
                    <li className="flex justify-between items-center hover:bg-gray-100 p-1 rounded cursor-pointer">
                      <span>Amazon Live</span>
                      <MdKeyboardArrowRight />
                    </li>
                    <li className="flex justify-between items-center hover:bg-gray-100 p-1 rounded cursor-pointer">
                      <span>International Shopping</span>
                      <MdKeyboardArrowRight />
                    </li>
                    <li className="hover:bg-gray-100 p-1 rounded cursor-pointer text-[#007185]">
                      See All
                    </li>
                  </ul>
                </div>
              </div>

              {/* Help & Settings */}
              <div className="border-b">
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-3">Help & Settings</h2>
                  <ul className="space-y-3">
                    <li className="hover:bg-gray-100 p-1 rounded cursor-pointer">
                      Your Account
                    </li>
                    <li className="hover:bg-gray-100 p-1 rounded cursor-pointer">
                      Customer Service
                    </li>
                    <li className="hover:bg-gray-100 p-1 rounded cursor-pointer">
                      Sign Out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
