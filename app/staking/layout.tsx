"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StakingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main className="flex flex-col gap-4 md:gap-5">
      <div
        className="flex justify-between items-center bg-[#3A2619] px-[15px] py-[19px] md:py-0 md:pl-[25px] md:pr-0 xl:pr-[53px] rounded-[12px]"
        style={{
          boxShadow: "0px 4px 14px 0px #38220C80",
        }}
      >
        <div className="flex flex-col gap-2.5 md:gap-[15px]">
          <h2 className="text-[20px] md:text-[24px] xl:text-[28px] font-semibold leading-7 sm:leading-6 text-white">
            Earn passive income with{" "}
            <span className="text-[#fb9037]">staking</span>
          </h2>

          <p className="text-[#CD8143] text-sm lg:text-base leading-[24px]">
            stake Now!
          </p>
        </div>

        <div className="hidden md:flex">
          <Image
            src="/assets/laptop.svg"
            alt="stake icon"
            width={152}
            height={113}
          />
        </div>
      </div>

      <div
        className="flex flex-wrap gap-4 md:gap-10 xl:gap-[60px] bg-[#3A2619] p-[15px] md:p-[25px] pb-0 md:pb-0 rounded-[12px] overflow-hidden"
        style={{
          boxShadow: "0px 4px 14px 0px #38220C80",
        }}
      >
        <p className="text-white text-sm md:text-base xl:text-lg leading-[24px] font-semibold">
          Select Staking type:
        </p>

        <div className="flex flex-wrap gap-4 md:gap-10 xl:gap-[60px]">
          <Link
            href="/staking"
            className={`relative cursor-pointer text-sm md:text-base xl:text-lg leading-[24px] before:absolute before:bottom-[-15px] md:before:bottom-[-25px] before:w-full before:h-0.5 mb-[16px] md:mb-[26px] before:transition-colors ${
              pathname === "/staking"
                ? "before:bg-[#FB9037]"
                : "before:bg-inherit"
            } ${pathname === "/staking" ? "text-white" : "text-[#ABABAB]"}`}
          >
            Token Staking
          </Link>
          <Link
            href="/staking/nft-staking"
            className={`relative cursor-pointer text-sm md:text-base xl:text-lg leading-[24px] before:absolute before:bottom-[-15px] md:before:bottom-[-25px] before:w-full before:h-0.5 mb-[16px] md:mb-[26px] before:transition-colors ${
              pathname === "/staking/nft-staking"
                ? "before:bg-[#FB9037]"
                : "before:bg-inherit"
            } ${
              pathname === "/staking/nft-staking"
                ? "text-white"
                : "text-[#ABABAB]"
            }`}
          >
            NFT Staking
          </Link>
        </div>
      </div>

      {children}
    </main>
  );
}
