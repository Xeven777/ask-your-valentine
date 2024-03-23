import Image from "next/image";
import Link from "next/link";

const IconHome = () => {
  return (
    <div className="absolute p-5 top-0 left-0 md:left-16 animate-pulse">
      <Link href={"/"} title="home">
        <Image src="/apple-touch-icon.png" alt="Love" width={60} height={60}/>
      </Link>
    </div>
  );
};

export default IconHome;
