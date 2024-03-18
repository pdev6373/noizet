"use client";
import { Button, Card, PageHeader } from "@/components";
import { CardType } from "@/types";
import Image from "next/image";

const data: CardType[] = [
  {
    title: "Total Staking",
    body: "250,000.000 N01zet",
  },
  {
    title: "Estimated Reward",
    body: "134577.09% ARP",
  },
];

const summary: CardType[] = [
  {
    title: "N01ZET Price",
    body: "$0.0988",
  },
  {
    title: "Daily Rewards",
    body: "1232435",
  },
  {
    title: "Total Supply",
    body: "7,000,000,000.00",
  },
  {
    title: "Interest period",
    body: "6 Months",
  },
  {
    title: "Stake start date",
    body: "29-11-2023",
  },
  {
    title: "Stake end date",
    body: "29-05-2024",
  },
];

export default function Staking() {
  return (
    <main className="flex flex-col gap-4 md:gap-5">
      <div
        className="flex justify-between items-center bg-[#3A2619] px-[15px] py-[19px] md:py-0 md:pl-[25px] md:pr-0 xl:pr-[53px] rounded-[12px] overflow-hidden"
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
          <p className="relative  cursor-pointer text-sm md:text-base xl:text-lg leading-[24px] text-white before:absolute before:bottom-[-15px] md:before:bottom-[-25px] before:w-full before:h-0.5 before:bg-[#FB9037] mb-[16px] md:mb-[26px] before:transition-colors">
            Token Staking
          </p>
          <p className="cursor-pointer text-sm md:text-base xl:text-lg leading-[24px] text-[#ABABAB]">
            NFT Staking
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-5 max-[1320px]:flex-col">
        <div
          className="flex flex-col basis-0 shrink-0 grow gap-[35px] md:gap-[45px] bg-[#3A2619] py-[25px] px-[15px] md:px-[25px] md:py-[35px] rounded-[12px]"
          style={{
            boxShadow: "0px 4px 14px 0px #38220C80",
          }}
        >
          <PageHeader icon="/assets/page-icon.svg" type="small">
            N01ZET Staking
          </PageHeader>

          <div className="flex justify-between gap-14 md:mt-[5px] max-[400px]:flex-col">
            <div className="grow max-w-[198px] flex flex-col gap-[35px]">
              <div className="flex flex-col gap-2.5">
                <p className="text-white text-base font-semibold">
                  Available in wallet
                </p>
                <div className="flex justify-between items-center gap-4 md:gap-5">
                  <p className="text-white text-lg leading-[24px]">0.00 Max</p>
                  <p className="text-base text-[#FB9037] underline">Max</p>
                </div>
              </div>

              <div className="flex gap-[5px]">
                <p className="grow text-center bg-[#462E1F] border border-solid border-[#9D8B70] rounded aspect-square max-w-[43px] flex justify-center items-center text-[32px] text-[#9D8B70]">
                  -
                </p>
                <p className="grow-[2] text-center text-[#9D8B70] text-[20px] leading-[24px] flex justify-center items-center border border-solid border-[#9D8B70] bg-[#3a2619] rounded">
                  0
                </p>
                <p className="grow text-center bg-[#462E1F] border border-solid border-[#9D8B70] rounded aspect-square max-w-[43px] flex justify-center items-center text-[32px] text-[#9D8B70]">
                  +
                </p>
              </div>

              <Button onClick={() => {}}>STAKE</Button>
            </div>

            <div className="grow max-w-[198px] flex flex-col gap-[35px]">
              <div className="flex flex-col gap-2.5">
                <p className="text-white text-base font-semibold">
                  Total Staked
                </p>
                <div className="flex justify-between items-center gap-4 md:gap-5">
                  <p className="text-white text-lg leading-[24px]">0.00 Max</p>
                  <p className="text-base text-[#FB9037] underline">Max</p>
                </div>
              </div>

              <div className="flex gap-[5px]">
                <p className="grow text-center bg-[#462E1F] border border-solid border-[#9D8B70] rounded aspect-square max-w-[43px] flex justify-center items-center text-[32px] text-[#9D8B70]">
                  -
                </p>
                <p className="grow-[2] text-center text-[#9D8B70] text-[20px] leading-[24px] flex justify-center items-center border border-solid border-[#9D8B70] bg-[#3a2619] rounded">
                  0
                </p>
                <p className="grow text-center bg-[#462E1F] border border-solid border-[#9D8B70] rounded aspect-square max-w-[43px] flex justify-center items-center text-[32px] text-[#9D8B70]">
                  +
                </p>
              </div>

              <Button onClick={() => {}} dark>
                UNSTAKE
              </Button>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 md:gap-5 mt-auto">
            <p className="text-white text-lg leading-[24px]">
              Pending rewards: 0.00
            </p>
            <Button icon="/assets/download.svg" onClick={() => {}}>
              Claim
            </Button>
          </div>
        </div>

        <div className="basis-0 shrink-0 grow flex flex-col gap-4 md:gap-5">
          <div className="flex flex-wrap gap-4 md:gap-5">
            {data.map((data) => (
              <Card key={data.title} body={data.body} title={data.title} />
            ))}
          </div>

          <div
            className="flex flex-col grow gap-[30px] bg-[#3A2619] py-[25px] px-[15px] md:p-[25px] md:pb-[35px] rounded-[12px] overflow-hidden"
            style={{
              boxShadow: "0px 4px 14px 0px #38220C80",
            }}
          >
            <h3 className="text-white text-lg leading-[24.51px] font-semibold">
              Staking Summary
            </h3>

            <div
              className="grid gap-8 xl:gap-6"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
              }}
            >
              {summary.map((summary) => (
                <div key={summary.title} className="flex flex-col gap-2.5">
                  <p className="text-[#ABABAB] text-xs">{summary.title}</p>
                  <p className="text-white text-lg leading-[24.51px] font-semibold break-words">
                    {summary.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-[10px] md:pt-[5px] mt-auto">
              <Button icon="/assets/download.svg" onClick={() => {}}>
                Audit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
