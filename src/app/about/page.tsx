import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Features from "@/components/Features";

export default function Component() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ffc6e5,transparent)]"></div>
      </div>
      <section className="w-full py-32 min-h-svh">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4 px-2 max-w-3xl text-center">
              <div className="inline-block border-primary border rounded-full cursor-default bg-zinc-100/30 px-3 py-1 text-sm dark:bg-zinc-800">
                Trending ✨
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl lg:text-7xl">
                The
                <span className="text-primary"> Best</span> way to ask your
                crush ❤️
              </h1>
              <p className="text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Create custom web pages to ask your crush Anything in a unique
                way🥰. Share the link with them and get their response directly
                in your email !😉
              </p>
            </div>
            <Button>
              <Link href="/">Create Now 💌</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="flex py-12 lg:py-24">
        <Features />
      </section>
    </>
  );
}
