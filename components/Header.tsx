"use client";
import Link from "next/link";
import { Button, Search } from ".";
import Image from "next/image";

export default function Header() {
  const connectHandler = () => {};

  return (
    <header className="flex justify-between items-center gap-10 p-[25px] md:px-8 xl:px-10 xl:py-5 border-b border-solid border-[#422C1E] sticky top-0 z-10 bg-inherit">
      <div className="hidden lg:block max-w-[683px] grow">
        <Search />
      </div>

      <Link
        href="/"
        className="lg:hidden relative w-[133.42px] md:w-[150px] xl:w-[170px] h-[22.75988px] md:h-[25.588px] xl:h-[29px]"
      >
        <Image
          src="/assets/logo.svg"
          alt="logo"
          fill
          className="absolute w-[unset] h-[unset]"
        />
      </Link>

      <Image
        src="/assets/hamburger.svg"
        alt="hamburger"
        width={24}
        height={24}
        className="lg:hidden"
      />

      <div className="hidden lg:block">
        <Button onClick={connectHandler} icon="/assets/connect.svg">
          Connect
        </Button>
      </div>
    </header>
  );
}
