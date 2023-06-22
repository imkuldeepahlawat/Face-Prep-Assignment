"use client";
import React from "react";

const Login = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="border w-[550px] flex flex-col h-[600px]  p-10 rounded-lg">
        
        <div className="flex flex-col justify-center items-center mt-10 gap-10">
          <input
            type="text"
            className="size outline-none text-Left text-lg  border-b-4 border-indigo-500"
            placeholder="Username"
          />

          <input
          type="password"
            className="outline-none text-lg border-b-4 border-indigo-500 "
            placeholder="PassWord"
          />
          <button className=" text-lg rounded-md px-5 bg-indigo-500">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
