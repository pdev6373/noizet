"use client";
import Image from "next/image";
import Link from "next/link";

import {
  Dashboard,
  Settings,
  StakePoolCreation,
  Staking,
  Vesting,
} from "@/public/assets/components";
import { usePathname } from "next/navigation";

const navs = [
  {
    name: "Dashboard",
    route: "/",
    icon: Dashboard,
  },
  {
    name: "Vesting",
    route: "/vesting",
    icon: Vesting,
  },
  {
    name: "Staking",
    route: "/staking",
    icon: Staking,
  },
  {
    name: "Stake Pool Creation",
    route: "/stake-pool-creation",
    icon: StakePoolCreation,
  },
  {
    name: "Settings",
    route: "/settings",
    icon: Settings,
  },
];

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-[9vh] shrink-0 grow px-5 xl:px-7 pb-[50px] bg-[#3A2619] fixed lg:sticky right-[200vw] lg:right-auto top-0 lg:inset-0 h-screen overflow-x-hidden overflow-y-auto border-r border-solid border-[#422C1E]">
      <div className="flex justify-between gap-5 sticky top-0 bg-[#3A2619] z-10 pt-8 pb-3">
        <Link
          href="/"
          className="block relative w-[150px] xl:w-[170px] h-[25.588px] xl:h-[29px]"
        >
          <Image
            src="/assets/logo.svg"
            alt="logo"
            fill
            className="absolute w-[unset] h-[unset]"
          />
        </Link>

        {/* <div className="shrink-0 flex justify-center items-center cursor-pointer">
          <Image src="/assets/close.svg" alt="close" width={34} height={34} />
        </div> */}
      </div>
      <nav>
        <ul className="flex flex-col gap-5">
          {navs.map((nav) => (
            <li
              key={nav.name}
              className={`rounded-lg overflow-hidden ${
                pathname === nav.route ? "bg-[#CD81431A]" : ""
              } hover:bg-[#CD81431A]`}
            >
              <Link
                className="p-4 flex items-center gap-4 shrink-0 "
                href={nav.route}
              >
                {pathname === nav.route ? nav.icon("#CD8143") : nav.icon()}
                <p
                  className={`${
                    pathname === nav.route ? "text-[#CD8143]" : "text-[#EFEFEF]"
                  } text-base leading-[22px] shrink-0`}
                  style={
                    pathname === nav.route
                      ? {
                          textShadow: "0px 0px 25px #E98431",
                        }
                      : {}
                  }
                >
                  {nav.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="flex flex-col gap-2 mt-auto">
        <li className="p-4 flex items-center gap-4 shrink-0">
          <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
          <p className="text-[#EFEFEF] text-base leading-[22px] shrink-0">
            Logout
          </p>
        </li>

        <li className="p-4 flex items-center gap-4 shrink-0">
          <Image
            src="/assets/light-mode.svg"
            alt="mode"
            width={24}
            height={24}
          />
          <p className="text-[#EFEFEF] text-base leading-[22px] shrink-0">
            Light mode
          </p>
          <div className="ml-1.5 bg-[#594234] p-1 rounded-full w-14 cursor-pointer">
            <div className="bg-[#9E7452] rounded-full shadow-[0px 1px 3px 0px #0000001A] w-7 h-7 flex justify-center items-center">
              <Image
                src="/assets/light-mode-dark.svg"
                alt="mode"
                width={24}
                height={24}
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
