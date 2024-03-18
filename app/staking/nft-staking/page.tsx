"use client";
import { Button } from "@/components";
import { APR, Check, Earning, Stack } from "@/public/assets/components";
import { CardType } from "@/types";
import Image from "next/image";
import React from "react";

const nfts = [
  {
    image: "/assets/nft-one.png",
    title: "NFT Name #1234",
    details: [
      {
        title: "APY",
        value: "30%",
      },
      {
        title: "Ends in",
        value: "23:01:23:45",
      },
      {
        title: "Staking Contract",
        value: "View",
      },
    ],
  },
  {
    image: "/assets/nft-two.png",
    title: "NFT Name #1234",
    details: [
      {
        title: "APY",
        value: "30%",
      },
      {
        title: "Ends in",
        value: "23:01:23:45",
      },
      {
        title: "Staking Contract",
        value: "View",
      },
    ],
  },
  {
    image: "/assets/nft-three.png",
    title: "The little prince",
    details: [
      {
        title: "APY",
        value: "30%",
      },
      {
        title: "Ends in",
        value: "23:01:23:45",
      },
      {
        title: "Staking Contract",
        value: "View",
      },
    ],
  },
];

const info: CardType[] = [
  {
    title: "Total Staked",
    icon: Stack(),
    body: "7.38 SOL",
  },
  {
    title: "Average APR",
    icon: APR("#D99A67"),
    body: "107%",
  },
  {
    title: "Total Earnings",
    icon: Earning(),
    body: "0.51 SOL",
  },
];

export default function NftStaking() {
  return (
    <div className="flex justify-start gap-4 flex-col md:flex-row">
      <div
        className="bg-[#3A2619] rounded-[12px] py-[25px] px-[15px] lg:px-[25px] flex flex-col gap-[15px] w-full md:w-[70%]"
        style={{
          boxShadow: "0px 4px 14px 0px #38220C80",
        }}
      >
        <div className="flex justify-between gap-5 items-center max-[410px]:flex-col">
          <h3 className="text-base md:text-lg lg:text-xl leading-[21.79px] lg:leading-[27.24px] text-[#fff] font-semibold">
            My NFT’s{" "}
          </h3>

          <div className="flex gap-[17px] bg-[#493121] py-1.5 px-2.5 rounded-[12px] flex-wrap">
            <p className="flex justify-center items-center py-[5px] px-[15px] rounded-[6px] text-[#ABABAB] text-[10px] lg:text-xs leading-[13.62px] lg:leading-[16.34px] cursor-pointer max-[410px]:basis-0 max-[410px]:grow">
              All
            </p>
            <p className="flex justify-center items-center py-[5px] px-[15px] rounded-[6px] text-[#FFFFFF] text-[10px] lg:text-xs leading-[13.62px] lg:leading-[16.34px] bg-[#634430] cursor-pointe max-[410px]:basis-0 max-[410px]:grow">
              Staked
            </p>
            <p className="flex justify-center items-center py-[5px] px-[15px] rounded-[6px] text-[#ABABAB] text-[10px] lg:text-xs leading-[13.62px] lg:leading-[16.34px] cursor-pointer max-[410px]:basis-0 max-[410px]:grow">
              Unstaked
            </p>
          </div>
        </div>

        <div
          className="flex gap-[15px] overflow-y-hidden overflow-x-auto"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
          }}
        >
          {nfts.map((nft) => (
            <div
              key={nft.title}
              className="bg-[#493121] rounded-[10px] p-[15px] flex flex-col gap-3 min-w-[250px] basis-0 grow"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={nft.image}
                  alt="nft"
                  fill
                  className="absolute w-[unset] h-[unset] object-cover rounded-[10px]"
                />
              </div>

              <p className="text-[#fff] text-lg leading-[24.51px] font-semibold">
                {nft.title}
              </p>

              <div className="flex flex-col gap-[11px]">
                {nft.details.map((detail) => (
                  <div
                    key={detail.title}
                    className="flex justify-between items-center gap-5"
                  >
                    <p className="text-[#ABABAB] text-xs leading-[16.34px]">
                      {detail.title}
                    </p>
                    <div>
                      <p className="text-[#fff] text-xs leading-[16.34px]">
                        {detail.value}
                      </p>
                      {/* <Image src={nft.image} alt="nft" fill /> */}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2 flex flex-col gap-3">
                <button className="text-base text-white font-semibold p-2.5 border border-solid border-[#89785E] rounded-[8px] max-w-[350px]">
                  Extend
                </button>
                <Button onClick={() => {}}>STAKE</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center gap-5 flex-wrap">
          <p className="text-[#ABABAB] text-xs leading-[16.34px]">
            Showing 1-3 from 23
          </p>

          <div className="flex gap-2.5">
            <Image
              src="/assets/previous.svg"
              alt="next"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <Image
              src="/assets/next.svg"
              alt="next"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4  grow w-full md:w-auto">
        <div
          className="flex flex-col grow gap-5 bg-[#3A2619] py-[25px] px-[15px] md:p-[25px] rounded-[12px]"
          style={{
            boxShadow: "0px 4px 14px 0px #38220C80",
          }}
        >
          <h3 className="text-white text-lg leading-[24.51px] font-semibold">
            Staking Info
          </h3>

          <div className="flex flex-col gap-5">
            {info.map((info) => (
              <div key={info.title} className="flex gap-[15px]">
                <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#674226] rounded-[4px]">
                  {info.icon}
                </div>

                <div key={info.title} className="flex flex-col gap-[5px]">
                  <p className="text-[#ABABAB] text-xs">{info.title}</p>
                  <p className="text-white text-lg leading-[24.51px] font-semibold break-words">
                    {info.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col gap-5 bg-[#3A2619] py-[25px] px-[15px] md:p-[25px] rounded-[12px]"
          style={{
            boxShadow: "0px 4px 14px 0px #38220C80",
          }}
        >
          <div className="flex flex-col grow gap-5">
            <h3 className="text-white text-lg leading-[24.51px] font-semibold">
              Withdraw
            </h3>

            <div className="flex gap-[15px]">
              <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#674226] rounded-[4px]">
                <Check />
              </div>

              <div className="flex flex-col gap-[5px]">
                <p className="text-[#ABABAB] text-xs">Available for withdraw</p>
                <p className="text-white text-lg leading-[24.51px] font-semibold break-words">
                  0.23 SOL
                </p>
              </div>
            </div>
          </div>

          <button className="text-base text-white font-semibold p-2.5 border border-solid border-[#89785E] rounded-[8px] max-w-[350px]">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
