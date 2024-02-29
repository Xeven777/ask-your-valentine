"use client";

import { TypewriterEffectSmooth } from "@/components/Text";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HeartIcon, Info, Loader2Icon, MailQuestion } from "lucide-react";
import { simpleEncrypt } from "@/actions";

export default function Home() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    let params = new URLSearchParams();
    const encname = await simpleEncrypt(name);
    const encemail = await simpleEncrypt(email);
    params.append("n", encname);
    params.append("e", encemail);
    setLoading(false);
    router.push(`/love?${encodeURIComponent(params.toString())}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-4">
      <span className="inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-gray-300">
        Trending
      </span>
      <TypewriterEffectSmooth
        words={[
          { text: "Happy", className: "text-zinc-800" },
          { text: "v", className: "text-rose-500" },
        ]}
        className="tracking-tight"
        cursorClassName="cursor"
      />
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
        <div className="flex">
          <Input
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            title="name"
            placeholder="Your Crush's name"
            type="text"
          />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-5 w-5 m-2" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Name of your love / crush</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex">
          <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            title="name"
            placeholder="Your Email"
            type="text"
          />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <MailQuestion className="h-5 w-5 m-2" />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Your email where we will send the acceptance notification ;)
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button
          disabled={loading}
          className="font-semibold "
          title="submit"
          type="submit"
        >
          Generate {loading ? <Loader2Icon /> : <HeartIcon />}
        </Button>
        <button class="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-rose-600 px-8 py-2 text-neutral-50">
          <span class="relative z-10">Hover Me</span>
          <span class="absolute inset-0 overflow-hidden rounded-md">
            <span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-rose-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </button>
      </form>
    </main>
  );
}
