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
import { Info, MailQuestion } from "lucide-react";
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
    router.push(`/love?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-4">
      <TypewriterEffectSmooth
        words={[
          { text: "Happy", className: "text-zinc-800" },
          { text: "d", className: "text-rose-500" },
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
                <Button variant="ghost" size="icon" type="button">
                  <Info className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Name of tour love / crush</p>
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
                <Button variant="ghost" size="icon" type="button">
                  <MailQuestion className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Your email where we will send the acceptance notification ;)
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button className="font-semibold" title="submit" type="submit">
          Generate
        </Button>
      </form>
    </main>
  );
}
