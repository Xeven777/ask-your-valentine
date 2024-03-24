/* eslint-disable @next/next/no-img-element */
"use client";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import lovesvg from "../../assets/Love In The Air SVG Cut File.svg";
import lovesvg2 from "../../assets/All You Need Is Love SVG Cut File.svg";
import Image from "next/image";
import { Footer } from "@/components/Footer";

export default function Page() {
  const searchParams = useSearchParams();
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [name, setName] = useState("Cutie");
  const [question, setQuestion] = useState("Will you be my valentine?");
  useEffect(() => {
    setName(
      simpleDecrypt(decodeURIComponent(searchParams.get("n") || "Cutie"))
    );
    setQuestion(
      simpleDecrypt(
        decodeURIComponent(searchParams.get("q") || "Will you be my valentine?")
      )
    );
  }, [searchParams]);
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = async () => {
    setYesPressed(true);

    const email = decodeURIComponent(searchParams.get("e") || "");

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
        error: "Oops,Error! Try again!",
      });
    } catch (error) {
      console.error("Fetch error:", error);
      toast("Error sending response! Please try again later! 😢");
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
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img
            src="https://gifdb.com/images/high/yay-milk-and-mocha-bears-cheering-confetti-9rjvz35rjxvj7oup.gif"
            alt="Yaaayyy"
          />
          <div className="text-4xl md:text-6xl font-bold my-4 riot">
            Ok Yayyyyy!!!
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
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            alt="love"
            className="h-[230px] rounded-lg shadow-lg"
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
}

function simpleDecrypt(text: string): string {
  const key = process.env.NEXT_PUBLIC_KEY || "abcd";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const decryptedText = text
    .split("")
    .map((char) => {
      const isAlphabetic = char.match(/[a-zA-Z]/);
      if (isAlphabetic) {
        const isUpperCase = char === char.toUpperCase();
        const index = isUpperCase
          ? key.indexOf(char.toLowerCase())
          : key.indexOf(char);
        const decryptedChar = isUpperCase
          ? alphabet[index].toUpperCase()
          : alphabet[index];
        return decryptedChar;
      } else {
        return char;
      }
    })
    .join("");

  return decryptedText;
}
