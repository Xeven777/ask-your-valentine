import { simpleDecrypt } from "@/actions";
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
  const name = await simpleDecrypt(
    decodeURIComponent(searchParams.n || "Cutie")
  );

  return {
    title: "Hey " + name,
    description: "I want to ask you something",
  };
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 min-h-svh max-h-[170vh] -mt-16  text-zinc-900">
      <MainBox searchParams={searchParams} />
    </div>
  );
}
