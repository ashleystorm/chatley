import { auth } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import Logout from "./Logout";

const Navbar = async () => {
  // checks if user is already logged in or not
  const session = await auth();
  return (
    <nav className="border-b bg-background w-full flex items-center">
      <div className="flex w-full items-center justify-between my-4">
        <Link className="font-bold" href="/">
          Home
        </Link>

        <div className="flex items-center gap-x-5">
            {/** this route is called middleware because we aim to protect this middleware route from the middleware file */}
          <Link href="/middleware">Middleware</Link>
          {/** this route is called server because we aim to protect this server route direclty from the server file */}
          <Link href="/server">Server</Link>
        </div>

        <div className="flex items-center gap-x-5">
            {/** if user logged in session does not exist, then redirect to sign in else (meaning they are logged in)..; */}
          {!session?.user ? (
            <Link href="/sign-in">
              <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm">
                Login
              </div>
            </Link>
          ) : (
            <>{/** should update this to redirect to Home , some of these components are NB*/}
              <div className="flex items-center gap-x-2 text-sm">
                {session?.user?.name}
                {session?.user?.image && (
                  <Image
                    className="rounded-full"
                    width={30}
                    height={30}
                    alt="User Avatar"
                    src={session?.user?.image || ""}
                  />
                )}
              </div>
              <Logout />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;