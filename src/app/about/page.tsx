import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <section className="w-full pt-12 md:pt-24 lg:pt-32 min-h-svh">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4 px-2 max-w-3xl text-center">
              <div className="inline-block border-primary border rounded-full cursor-default bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                Trending ✨
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl lg:text-7xl">
                Create cool animated{" "}
                <span className="text-primary">Birthday</span> Websites !
              </h1>
              <p className="text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Creating custom animated Birthday Website had never been easier
                !🪄 We provide you with a simple platform to create your own
                custom animated birthday website in just a few clicks🤩. You can
                also customize the name for your loved once and share the link
                directly 🎉
              </p>
            </div>
            <Button>
              <Link href="/">Create Now 🧑‍🚀</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="creators"
        className="py-10 md:py-20 lg:py-28 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
      >
        <h2 className="italic text-center text-4xl font-bold tracking-tighter sm:text-6xl lg:text-7xl">
          <span className="text-primary">C</span>reators
        </h2>
        <div className="container grid max-[3] gap-12 px-4 md:grid-cols-2 md:px-6">

        </div>
      </section>
    </>
  );
}
