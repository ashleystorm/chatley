import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Navbar from "@/components/NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatley",
  description: "Chat with an intuitive AI model",
};

export default async function RootLayout({
  children,
}:  Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${inter.className} bg-[#212121] w-full m-0 p-0`}>
          <div className="mx-auto max-w-screen-lg h-screen flex flex-col">
          <Navbar />
          <div className="min-h-screen">{children}</div>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}

