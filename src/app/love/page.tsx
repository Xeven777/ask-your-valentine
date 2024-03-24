import MainBox from "@/components/MainBox";
import { Metadata } from "next";
interface SearchParams {
  q: string;
  n: string;
  e: string;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const name = simpleDecrypt(decodeURIComponent(searchParams.n || "Cutie"));

  return {
    title: "Hey " + name,
    description: "I want to ask you something",
  };
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      <MainBox searchParams={searchParams} />
    </div>
  );
}
function simpleDecrypt(text: string): string {
  const key = process.env.NEXT_PUBLIC_KEY || "abcdefghijlkmnopqrstuvwxyz";
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
