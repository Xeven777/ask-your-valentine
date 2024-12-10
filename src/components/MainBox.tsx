/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import lovesvg from "../assets/Love In The Air SVG Cut File.svg";
import lovesvg2 from "../assets/All You Need Is Love SVG Cut File.svg";
import Link from "next/link";
import { simpleDecrypt } from "@/actions";
interface SearchParams {
  q: string;
  n: string;
  e: string;
}
const MainBox = ({ searchParams }: { searchParams: SearchParams }) => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [name, setName] = useState("Cutie");
  const [question, setQuestion] = useState("Will you be my valentine?");
  useEffect(() => {
    const fetchData = async () => {
      const decryptedName = await simpleDecrypt(
        decodeURIComponent(searchParams.n || "Cutie")
      );
      setName(decryptedName);
      const decryptedQuestion = await simpleDecrypt(
        decodeURIComponent(searchParams.q || "Will you be my valentine?")
      );
      setQuestion(decryptedQuestion);
    };
    fetchData();
  }, [searchParams]);
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = async () => {
    setYesPressed(true);

    const email = decodeURIComponent(searchParams.e || "");

    try {
      const fetchPromise = fetch("/api/click", {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.promise(fetchPromise, {
        loading: "Loading... We are sending your response! 💌",
        success: "Wohoo! Message sent! 🥰",
        error: "Oops, Error! Try again!",
      });
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Error sending response! Please try again later! 😢");
    }
  };
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center mt-6 px-4 max-w-xl ">
      {yesPressed ? (
        <>
          <img
            src="https://gifdb.com/images/high/yay-milk-and-mocha-bears-cheering-confetti-9rjvz35rjxvj7oup.gif"
            alt="Yaaayyy"
            className="w-full h-auto rounded-lg shadow-md z-10"
          />
          <div className="text-4xl md:text-7xl font-bold my-4 riot text-center mx-auto">
            Wohooo Yayyyyy!!!
          </div>
        </>
      ) : (
        <>
          <Image
            src={lovesvg}
            alt="love"
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <Image
            alt="love"
            src={lovesvg2}
            className="fixed animate-pulse bottom-16 -z-10 md:right-24 right-10 md:w-40 w-32"
          />
          <img
            alt="love"
            className="h-[250px] rounded-lg shadow-lg mx-auto z-10"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center riot max-w-4xl">
            {name}, {question}
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              type="button"
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainBox;

const Footer = () => {
  return (
    <Link
      className="fixed md:text-base text-sm bottom-1 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border py-1 px-2 rounded-md border-rose-300"
      href="/"
    >
      Made using this{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </Link>
  );
};
