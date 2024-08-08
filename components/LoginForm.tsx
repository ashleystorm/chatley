"use client";
import React from "react";
import AuthButton from "./AuthButton";
import { loginWithCreds } from "@/actions/auth";
import Link from "next/link";
import LoginGithub from "./LoginGithub";

const LoginForm = () => {
  return (
      <div className="sm: shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12 pl-16 pr-16 bg-inherit">
        <p className="text-center">
          <LoginGithub/>
        </p>

      </div>
  );
};

export default LoginForm;

{/* <div className="sm: shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12 pl-16 pr-16 bg-white">
<h1 className="font-semibold text-2xl ">Login</h1>
<p className="text-center">
  Need to create an Account? {''}
  <Link className="text-indigo-500 hover: underline " href="/sign-up">
    Create Account
  </Link> {''}
</p>

</div> */}
      <div>
      {/** this action attribute is how we connect our form to the auth file -> prisma -> mongo */}
      <form action={loginWithCreds} className="w-full flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-200">
            Email
          </label>
          <input
            // these input attributes will be information added to db
            type="email"
            placeholder="Email"
            id="Email"
            name="email"  // 'name' is NB as it acts as a pointer to match the correct attributes in our db (server action)
            className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
          />
        </div>
        <div className="mt-4">
          <AuthButton /> {/** <authButton/> is a separated so we can use form-status hook to show loader when user clicks login */}
        </div>
      </form>
      </div>