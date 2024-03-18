import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header, Sidenav } from "@/components";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NOIZET",
  description: "NOIZET - NFT APP",
  icons: {
    icon: "/assets/favicon.png", // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="flex">
          <Sidenav />
          <div className="flex-grow-[100] bg-[#231507] min-h-screen overflow-x-hidden">
            <Header />
            <div className="py-[35px] px-[25px] md:p-8 xl:p-10 grow">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
