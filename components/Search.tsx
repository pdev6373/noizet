"use client";

import Image from "next/image";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <div className="grow flex justify-between items-center gap-5 border border-solid border-[#3A2619] bg-[#3A2619] px-[22px] rounded-[5px]">
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="grow border-none outline-none bg-inherit placeholder:text-[#ABABAB] text-[#ABABAB] text-[15px] leading-10 tracking-[-0.3%]"
      />
      <Image src="/assets/search.svg" alt="search" width={16} height={16} />
    </div>
  );
}
