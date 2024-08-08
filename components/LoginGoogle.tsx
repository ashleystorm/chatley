"use client";
import { login } from "@/actions/auth";
import React from "react";
import {FaGoogle } from "react-icons/fa";

const LoginGoogle = () => {
  return (
    <div
      onClick={() => login("google")}
      className="w-full gap-4  hover:cursor-pointer mt-6 h-12 bg-white rounded-xl p-4 flex justify-center items-center"
    >
      <FaGoogle className="text-black" />
      <p className="text-black">Login with Google</p>
    </div>
  );
};

export default LoginGoogle;