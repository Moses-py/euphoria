"use client";
import Title from "@/components/title/Title";
import P from "@/components/typography/P";
import React from "react";
import Image from "next/image";
import DashboardNavigationMobile from "./components/DashboardNavigationMobile";
import { usePathname } from "next/navigation";
import Link from "next/link";
type Props = {};

const DashboardNavigation = (props: Props) => {
  const pathname = usePathname();
  return (
    <div className="lg:w-[300px]  flex-0 font-sans">
      <div className="px-5">
        <div className="flex justify-between items-center">
          <div>
            <Title>Hello Moses</Title>
            <P>Welcome to your account</P>
          </div>
          <div className="lg:hidden">
            <DashboardNavigationMobile />
          </div>
        </div>

        <div className="hidden lg:block py-8 w-full">
          <ul className="flex flex-col gap-4 w-full">
            <Link href="/account/dashboard/orders" className="flex gap-5">
              <li
                className={`px-2 py-3 hover:bg-light hover:border-l-primary hover:border-l-4 flex gap-5 items-center cursor-pointer w-full transition-all ease-linear duration-200 ${
                  pathname === "/account/dashboard/orders" &&
                  "bg-light border-l-primary border-l-4"
                }`}
              >
                <Image src="/icons/orders.svg" height={20} width={20} alt="" />
                <P classname="font-normal text-gray-1">My orders</P>
              </li>
            </Link>
            <Link href="/account/dashboard/wishlist">
              <li
                className={`px-2 py-3 hover:bg-light hover:border-l-primary hover:border-l-4 flex gap-5 items-center cursor-pointer w-full transition-all ease-linear duration-200 ${
                  pathname === "/account/dashboard/wishlist" &&
                  "bg-light border-l-primary border-l-4"
                }`}
              >
                <Image src="/icons/heart.svg" height={20} width={20} alt="" />
                <P classname="font-normal text-gray-1">Wishlist</P>
              </li>
            </Link>
            <Link href="/account/dashboard/info" className="flex gap-5">
              <li
                className={`px-2 py-3 hover:bg-light hover:border-l-primary hover:border-l-4 flex gap-5 items-center cursor-pointer w-full transition-all ease-linear duration-200 
                ${
                  (pathname === "/account/dashboard/info" ||
                    pathname === "/account/dashboard/info/addressupdate") &&
                  "bg-light border-l-primary border-l-4"
                }`}
              >
                <Image src="/icons/user.svg" height={20} width={20} alt="" />
                <P classname="font-normal text-gray-1">My Info</P>
              </li>
            </Link>
            <li
              className={`px-2 py-3 hover:bg-light hover:border-l-primary hover:border-l-4 flex gap-5 items-center cursor-pointer w-full transition-all ease-linear duration-200`}
            >
              <Image src="/icons/sign_out.svg" height={20} width={20} alt="" />
              <P classname="font-normal text-gray-1">Sign out</P>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavigation;
