import React from "react";
import { useFormStatus } from "react-dom";

const AuthButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className={`${
        // when loading, the button color will be grey else blue...
        pending ? "bg-gray-600" : "bg-blue-600"
      } rounded-md w-full px-12 py-3 text-sm font-medium text-white`}
    >   {/**... text will either show "loading" when loading or sign-in when stateless */}
      {pending ? "Loading..." : "Sign in"}
    </button>
  );
};

export default AuthButton;