"use client";
import { logout } from "@/actions/auth";
import { Button } from "./ui/button";

const Logout = () => {
  return (
    <Button onClick={() => logout()}>
      <div className="bg-gray-600 text-white text-sm px-4 py-2 rounded-xl cursor-pointer">
        Logout
      </div>
    </Button>
  );
};

export default Logout;