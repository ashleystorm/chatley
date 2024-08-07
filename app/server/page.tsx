import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const Server = async () => {
  const session = await auth();
  // this is a server-side component
  if (!session?.user) { // is user session does not exist (not logged in), clicking on "server route" will redirect to "Home"
    redirect("/");
  }
  return (
    <main className="flex h-full items-center justify-center flex-col gap-2">
      <h1 className="text-3xl">Server page</h1>
      <p className="text-lg">{session?.user?.email}</p>
    </main>
  );
};

export default Server;