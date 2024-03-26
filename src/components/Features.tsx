import Image from "next/image";
import anish from "../assets/anish.webp";
import { Github, Instagram, Linkedin } from "lucide-react";
export default function Features() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-10">
      <div className="grid max-w-3xl gap-8 mx-auto items-center space-y-2 lg:gap-16">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            How to use?
          </h1>
        </div>
        <div className="grid gap-4">
          <h3 className="text-xl md:text-2xl text-zinc-700">
            1. Enter your Crush&apos;s / Love&apos;s name
          </h3>

          <h3 className="text-xl md:text-2xl text-zinc-700">
            2. Enter your email, where you want to get the response notification
          </h3>

          <h3 className="text-xl md:text-2xl text-zinc-700">
            3. Enter the question you want to ask. Keep it simple and a yes/no
            question
          </h3>

          <h3 className="text-xl md:text-2xl text-zinc-700">
            4. Click on the Generate✨ button and Voila! Your unique link is
            ready to be shared with your crush 🤩🥰
          </h3>
        </div>
        <div className="grid gap-8">
          <h3 className="text-xl md:text-3xl font-bold">Key Features</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:scale-105 transition-all">
              <h4 className="text-lg font-semibold">Customizable Site🪄</h4>
              <p className="text-zinc-500 dark:text-zinc-400">
                Customise the name , the question and the email however you
                want🧑‍🚀
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:scale-105 transition-all">
              <h4 className="text-lg font-semibold">
                Get detailed response in Email💌
              </h4>
              <p className="text-zinc-500 dark:text-zinc-400">
                Get every detail of who clicked &quot;yes&quot;! IP address,
                location, mobile and lot more of the response 🔍
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:scale-105 transition-all">
              <h4 className="text-lg font-semibold">Most secure!🔒</h4>
              <p className="text-zinc-500 dark:text-zinc-400">
                We dont store any data of the user. Not the name, question nor
                the response! Even your email will be securedly encrypted💌
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:scale-105 transition-all">
              <h4 className="text-lg font-semibold">
                What else do you need?🤨
              </h4>
              <p className="text-zinc-500 dark:text-zinc-400">
                OFC, some courage to send this! But hey, you can do it!😏✨
                <br />
                So, just send it now! 😍
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-xl md:text-3xl font-bold text-center">Made By :</h3>
        <a
          href="https://github.com/Xeven777"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mx-auto flex-col items-center bg-white border border-zinc-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 overflow-hidden"
        >
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            src={anish}
            alt="Anish"
            placeholder="blur"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Anish
            </h5>
            <p className="mb-3 font-normal text-zinc-700 dark:text-zinc-400">
              Full stack developer. Loves to play football , produce music (and
              code maybe👽)
            </p>

            <div className="flex mt-2 space-x-8 px-2">
              <a
                href="https://www.instagram.com/anish_biswas_7_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anishbiswas777/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Xeven777"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
