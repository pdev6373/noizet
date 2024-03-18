import { CardType } from "@/types";
import Image from "next/image";

export default function Card({ body, icon, title }: CardType) {
  return (
    <div
      className="grow flex items-center gap-[10.5px] md:gap-[15px] py-[21px] md:py-[32px] px-[15px] md:px-[25px] bg-[#3A2619] rounded-[12px]"
      style={{
        boxShadow: "0px 4px 14px 0px #38220C80",
      }}
    >
      {icon}
      <div className={`flex flex-col ${icon ? "gap-1" : "gap-2.5"}`}>
        <p className="text-[#ABABAB] text-xs">{title}</p>
        <p className="text-white text-lg leading-[24.51px] font-semibold">
          {body}
        </p>
      </div>
    </div>
  );
}
