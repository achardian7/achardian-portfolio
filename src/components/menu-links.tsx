"use client";

import Link from "next/link";
import { links } from "@/lib/constant";
import { cn } from "@/lib/cn";
import useObserverStore from "@/store/use-observer-store";

const MenuLinks = () => {
  const { activeSection } = useObserverStore();

  return (
    <div className="flex flex-col space-y-6 text-gray-400">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className="group hidden w-fit items-center space-x-3 text-[14px] font-bold uppercase tracking-widest hover:text-white lg:flex"
        >
          <span
            className={cn(
              "block h-[2px] w-10 bg-gray-400 duration-100 ease-in-out group-hover:w-20 group-hover:bg-white",
              activeSection === link.name.toLowerCase() && "w-20 bg-white",
            )}
          ></span>
          <span
            className={
              activeSection === link.name.toLowerCase()
                ? "text-white"
                : "text-gray-400"
            }
          >
            {link.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default MenuLinks;
