"use client";

import { TypewriterEffectSmooth } from "@/components/Text";
import wapicon from "../assets/whatsapp.svg";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  Copy,
  Feather,
  HeartIcon,
  Info,
  Loader2Icon,
  MailQuestion,
  Share2,
} from "lucide-react";
import { simpleEncrypt } from "@/actions";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Image from "next/image";
import heart from "../assets/heart.png";

export default function Home() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("Will you be my valentine?");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");

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
    toast.success("Link Generated!❤️");
    setLink(`${window.location.href}love?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-4 pt-16 caret-rose-500 selection:bg-rose-500 selection:text-white">
      <span className="inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-rose-400 bg-[linear-gradient(110deg,#f7043d,45%,#f76784,55%,#ea0036)] bg-[length:250%_100%] px-3 py-1 text-xs md:text-sm font-medium text-white">
        Trending
      </span>
      <TypewriterEffectSmooth
        words={[
          { text: "Ask Your", className: "text-zinc-800" },
          { text: "Love", className: "text-rose-500" },
        ]}
        className="tracking-tight"
        cursorClassName="cursor"
      />
      <Image
        src={heart}
        placeholder="blur"
        alt="heart"
        className="rounded-full absolute -z-10 lg:z-0 -top-10 -right-64 lg:top-5 lg:-right-44 -rotate-[25deg] hover:rotate-0 anim"
      />
      <Image
        src={heart}
        placeholder="blur"
        alt="heart"
        className="rounded-full absolute -z-10 lg:z-0 top-0 -left-64 lg:top-12 lg:-left-24 rotate-12 hover:rotate-0 anim"
      />
      <Image
        src={heart}
        placeholder="blur"
        alt="heart"
        className="rounded-full absolute -z-10 lg:z-0 -bottom-20 -right-2/3 lg:-bottom-60 lg:right-0 -rotate-[30deg] hover:rotate-0 anim"
      />
      <Image
        src={heart}
        placeholder="blur"
        alt="heart"
        className="rounded-full absolute -z-10 lg:z-0 -bottom-16 -left-48 lg:-bottom-64 lg:-left-4 rotate-[25deg] hover:rotate-0 anim"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-full max-w-sm"
      >
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
            title="email"
            placeholder="Your Email"
            type="email"
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
      <Outputbox slink={link} />
    </main>
  );
}

interface OutputboxProps {
  slink: string;
}
const Outputbox = ({ slink }: OutputboxProps) => {
  const [shareable, setShareable] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareable(navigator.share !== undefined);
    }
  }, []);

  function copyLink(link: string) {
    if (link === "")
      return toast.error("Link is empty. Generate a link first!");
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(link);
      toast.success("Link copied!💌");
    }
  }

  return (
    <div className="flex flex-col gap-1 w-full max-w-sm">
      <Input
        readOnly
        value={slink}
        placeholder="Link will be generated here"
        className="border border-rose-500/80"
      />
      <div className="flex gap-2">
        {shareable ? (
          <Button
            className="flex-1"
            onClick={() => {
              if (slink === "")
                return toast.warning("Link is empty. Generate a link first!");
              if (typeof window !== "undefined") {
                navigator.share({
                  title: "Send to your crush!",
                  text: "Hey! There something I want to show you. Click on the link to see it",
                  url: slink,
                });
              }
            }}
          >
            Share <Share2 className="ml-2 h-5" />
          </Button>
        ) : (
          <Button className="flex-1" onClick={() => copyLink(slink)}>
            Copy <Copy className="ml-2 h-5" />
          </Button>
        )}

        <Button asChild className="bg-green-600 hover:bg-green-500 flex-1">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `Hey! I want to show you something !! Click on this link to see : ${slink}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp <Image src={wapicon} alt="Wap" className="ml-2 h-5" />
          </a>
        </Button>
      </div>
    </div>
  );
};
