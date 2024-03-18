"use client";

import Image from "next/image";

type ButtonType = {
  children: string;
  icon?: string;
  onClick: () => any;
  dark?: boolean;
};

export default function Button({
  onClick,
  children,
  icon,
  dark = false,
}: ButtonType) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-5 rounded-lg py-3 px-[25px]"
      style={{
        boxShadow: "0px 0px 20px 0px #DBA67566, 0px 0px 5px 0px #FFCAAC inset",
        background:
          "radial-gradient(109.99% 253.12% at 76.68% 66.67%, #E2914F 0%, #994D0E 100%), linear-gradient(180deg, rgba(254, 200, 241, 0.9) -22.92%, rgba(254, 200, 241, 0) 26.73%)",
        backgroundBlendMode: "overlay",
        opacity: dark ? 0.5 : 1,
      }}
    >
      <p className="text-[#EFEFEF] text-base leading-[22.4px] font-semibold">
        {children}
      </p>
      {icon ? (
        <Image src={icon} alt="button icon" width={24} height={24} />
      ) : (
        <></>
      )}
    </button>
  );
}
