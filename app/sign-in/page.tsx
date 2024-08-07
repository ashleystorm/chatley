import LoginFacebook from "@/components/LoginFacebook";
import LoginForm from "@/components/LoginForm";
import LoginGithub from "@/components/LoginGithub";
import LoginGoogle from "@/components/LoginGoogle";
import React from "react";

const SignIn = () => {
  return (
    <div className="w-full flex mt-20 justify-center items-center"> 
    {/** NB - this is how I fixed the padding issue on button elements for sign-in page --> inside <section/> className [added pl-8 + pr-8] */}
      <section className="flex flex-col w-[400px] pl-8 pr-8">
        <h1 className="text-3xl w-full text-center font-bold mb-6">Sign in</h1>
        {/* <LoginForm /> */}
        <LoginGithub /> 
        <LoginGoogle/>
        <LoginFacebook/>
      </section>
    </div>
  );
};

export default SignIn;