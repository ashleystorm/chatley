"use client";
import { login } from "@/actions/auth";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const LoginFacebook = () => {
  return (
    <div
      onClick={() => login("facebook")}
      className="w-full gap-4  hover:cursor-pointer mt-6 h-12 bg-blue-600 rounded-xl p-4 flex justify-center items-center"
    >
      <FaFacebook className="text-white" />
      <p className="text-white">Login with Facebook</p>
    </div>
  );
};

export default LoginFacebook;