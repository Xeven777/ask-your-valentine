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
import {
  Feather,
  HeartIcon,
  Info,
  Loader2Icon,
  MailOpen,
  MailQuestion,
} from "lucide-react";
import { simpleEncrypt } from "@/actions";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("Will you be my valentine?");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    let params = new URLSearchParams();
    const encname = await simpleEncrypt(name);
    const encemail = await simpleEncrypt(email);
    const encquestion = await simpleEncrypt(question);
    params.append("n", encodeURIComponent(encname));
    params.append("e", encodeURIComponent(encemail));
    params.append("q", encodeURIComponent(encquestion));
    setLoading(false);
    router.push(`/love?${(params.toString())}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-4 pt-20">
      <span className="inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-rose-400 bg-[linear-gradient(110deg,#f7043d,45%,#f76784,55%,#ea0036)] bg-[length:250%_100%] px-3 py-1 text-xs md:text-sm font-medium text-white">
        Trending
      </span>
      <TypewriterEffectSmooth
        words={[
          { text: "For My", className: "text-zinc-800" },
          { text: "Love", className: "text-rose-500" },
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

        <div className="flex">
          <Textarea
            required
            value={question}
            maxLength={100}
            onChange={(e) => setQuestion(e.target.value)}
            title="question"
            placeholder="The question you want to ask your crush"
          />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Feather className="h-5 w-5 m-2" />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  The question you want to ask your crush.
                  <br /> It can be anything, but keep it a yes or no question.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Button
          disabled={loading}
          className="font-semibold"
          title="submit"
          type="submit"
        >
          Generate{" "}
          {loading ? (
            <Loader2Icon className="h-5 w-5 m-2 animate-spin" />
          ) : (
            <HeartIcon className="h-5 w-5 m-2 animate-pulse" />
          )}
        </Button>
      </form>
    </main>
  );
}
