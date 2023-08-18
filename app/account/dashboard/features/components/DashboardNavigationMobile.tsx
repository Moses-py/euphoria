"use client";
import { Drawer } from "vaul";
import Image from "next/image";
import { useState } from "react";
import P from "@/components/typography/P";
import Link from "next/link";
import { usePathname } from "next/navigation";
const DashboardNavigationMobile = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div>
        <Drawer.Root shouldScaleBackground open={open} dismissible={true}>
          <Drawer.Trigger asChild className="">
            <div className="p-2 bg-gray-3 rounded-md">
              <Image
                src={"/icons/menu.svg"}
                alt={""}
                height={20}
                width={20}
                onClick={() => setOpen(!open)}
              />
            </div>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
            <Drawer.Content className="bg-zinc-100 flex flex-col px-5 rounded-t-[10px] h-[60%] fixed bottom-0 left-0 right-0 pt-[1.5rem] z-50">
              <div className="p-2 rounded-md w-full flex justify-end">
                <Image
                  src={"/icons/close.png"}
                  alt={""}
                  height={20}
                  width={20}
                  onClick={() => setOpen(!open)}
                />
              </div>
              <div className="py-5 w-full">
                <ul className="flex flex-col gap-4 w-full">
                  <Link
                    onClick={() => setOpen(false)}
                    href="/account/dashboard/orders"
                    className="flex gap-5"
                  >
                    <li
                      className={`px-2 py-3 hover:bg-light hover:border-l-primary hover:border-l-4 flex gap-5 items-center cursor-pointer w-full transition-all ease-linear duration-200 ${
                        pathname === "/account/dashboard/orders" &&
                        "bg-light border-l-primary border-l-4"
                      }`}
                    >
                      <Image
                        src="/icons/orders.svg"
                        height={20}
                        width={20}
                        alt=""
                      />
                      <P classname="font-normal text-gray-1">My orders</P>
                    </li>
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/account/dashboard/wishlist"
                  >
                    <li
                      className={`px-2 py-3 hover:bg-light hover:border-l-primary hover:border-l-4 flex gap-5 items-center cursor-pointer w-full transition-all ease-linear duration-200 ${
                        pathname === "/account/dashboard/wishlist" &&
                        "bg-light border-l-primary border-l-4"
                      }`}
                    >
                      <Image
                        src="/icons/heart.svg"
                        height={20}
                        width={20}
                        alt=""
                      />
                      <P classname="font-normal text-gray-1">Wishlist</P>
                    </li>
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/account/dashboard/info"
                    className="flex gap-5"
                  >
                    <li
                      className={`px-2 py-3 hover:bg-light hover:border-l-primary hover:border-l-4 flex gap-5 items-center cursor-pointer w-full transition-all ease-linear duration-200                 ${
                        (pathname === "/account/dashboard/info" ||
                          pathname ===
                            "/account/dashboard/info/addressupdate") &&
                        "bg-light border-l-primary border-l-4"
                      }`}
                    >
                      <Image
                        src="/icons/user.svg"
                        height={20}
                        width={20}
                        alt=""
                      />
                      <P classname="font-normal text-gray-1">My Info</P>
                    </li>
                  </Link>
                  <li
                    className={`px-2 py-3 hover:bg-light hover:border-l-primary hover:border-l-4 flex gap-5 items-center cursor-pointer w-full transition-all ease-linear duration-200`}
                  >
                    <Image
                      src="/icons/sign_out.svg"
                      height={20}
                      width={20}
                      alt=""
                    />
                    <P classname="font-normal text-gray-1">Sign out</P>
                  </li>
                </ul>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </>
  );
};

export default DashboardNavigationMobile;
