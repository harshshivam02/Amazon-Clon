import React from "react";
import amazonLogo from "../assets/Amazon-logo.png";

function Signin() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <div className="flex items-center mb-5">
        <img
          src={amazonLogo}
          alt="amazon-logo"
          className="w-[103px] mr-2 invert"
        />
        <span className="text-sm font-normal">.in</span>
      </div>
      
      <div className="bg-white p-6 border border-gray-300 shadow-lg rounded-xl w-[310px]">
        <h1 className="text-2xl font-normal mb-4">Sign in</h1>

        <label htmlFor="email" className="text-sm font-semibold mb-2 block">Email or mobile phone number</label>
        <input
          className="w-full py-2 px-3 mb-4 border border-gray-300 rounded-md text-sm"
          type="email"
        />
        <button className="w-full py-2 bg-[#f7ca00] border border-[#a88734] rounded-md cursor-pointer hover:bg-[#e2b33b] text-sm font-medium">
          Continue
        </button>

        <p className="text-xs text-black mt-3">
          By continuing, you agree to Amazon's{" "}
          <a href=" " className="text-[#0066c0] hover:underline">Conditions of Use</a> and{" "}
          <a href=" " className="text-[#0066c0] hover:underline">Privacy Notice</a>.
        </p>

        <a href=" " className="block mt-3 text-xs text-[#0066c0] hover:underline">Need help?</a>

        <hr className="my-5 border-t border-gray-300" />

        <div className="text-left">
          <p className="text-sm font-bold text-black">Buying for work?</p>
          <a href=" " className="text-[#0066c0] text-xs font-medium hover:underline">Shop on Amazon Business</a>
        </div>
      </div>

      <div className="mt-5 w-[300px] text-center">
        <div className="relative flex justify-center items-center mb-3">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <p className="relative bg-white px-2 text-sm text-gray-500">New to Amazon?</p>
        </div>
        <button className="w-full py-2 bg-white border border-[#adb1b8] rounded-md shadow-md cursor-pointer hover:bg-[#f3f5f7] text-sm font-medium">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Signin;