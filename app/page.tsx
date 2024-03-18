import { Card, PageHeader } from "@/components";
import { APR, Earning, Staking } from "@/public/assets/components";
import { CardType } from "@/types";

const data: CardType[] = [
  {
    title: "Total Staked",
    icon: Staking(),
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

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader icon="/assets/page-icon.svg">Dashboard Overview</PageHeader>

      <main>
        <div className="flex gap-5">
          {data.map((data) => (
            <Card body={data.body} icon={data.icon} title={data.title} />
          ))}
        </div>
      </main>
    </div>
  );
}
