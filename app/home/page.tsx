"use client";

import Chats from "@/components/Chats";
import InitialUI from "@/components/InitialUI";
import Typing from "@/components/Typing";
import { Input } from "@/components/ui/input";
import { run } from "@/utils/action";
import { useRef, useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";

interface Chat {
  role: "user" | "model";
  parts: string;
}

export default function Home() {
  const [userPrompt, setUserPrompt] = useState("");
  const [typing, setTyping] = useState(false);
  const [history, setHistory] = useState<Chat[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const addChat = (role: Chat["role"], parts: string) => {
    const newChat: Chat = { role, parts };
    setHistory((prevHistory) => [...prevHistory, newChat]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTyping(true);
    addChat("user", userPrompt);
    const response = await run(userPrompt, history);
    console.log(response);

    setUserPrompt("");
    addChat("model", response);

    setTyping(false);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, typing]);

  return (
    <div className="max-w mx-auto h-screen relative flex flex-col pt-16">
      <div className="p-5 w-full max-h-[calc(100vh-100px)] overflow-y-auto flex flex-col gap-4 hide-scrollbar">
        {history.length > 0 ? (
          <Chats history={history} />
        ) : (
          <InitialUI />
        )}
        {typing && <Typing typing={typing} />}
        <div ref={scrollRef} /> {/* This div is used for scrolling */}
      </div>
      <div className="w-[80%] h-20 fixed bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full flex items-center">
          <Input
            autoFocus
            type="text"
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            className="border-[1px] border-neutral-500 ring-none rounded-l-xl bg-inherit text-neutral-200 placeholder:text-neutral-400 h-12 flex-grow"
            placeholder="Type here..."
            disabled={typing}
          />
          <button
            type="submit"
            className="h-12 w-12 flex items-center justify-center bg-neutral-500 rounded-r-xl"
            disabled={typing}
          >
            <AiOutlineSend className="text-neutral-200" />
          </button>
        </form>
      </div>
    </div>
  );
}