"use client";

import { Drawer } from "vaul";
import { useStore } from "@/store/Store";
import ActionButton from "@/components/navigations/components/ActionButton";
import Actions from "@/components/navigations/components/Actions";
import Logo from "@/components/navigations/components/Logo";
import Search from "@/components/navigations/components/Search";
import Link from "next/link";
import Image from "next/image";
const Mobile = () => {
  const [toggleNav, nav] = useStore((state) => [state.toggleNav, state.nav]);

  return (
    <Drawer.Root shouldScaleBackground open={nav} dismissible={true}>
      <Drawer.Trigger asChild className="p-3">
        <div
          className={`lg:hidden flex rounded-md cursor-pointer hover:bg-gray-2 transition-all ease-in`}
          onClick={toggleNav}
        >
          <Image src={"/icons/menu.svg"} alt="menu" height={20} width={20} />
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[20px] h-[60%] z-50 mt-24 fixed bottom-0 left-0 right-0 pt-[1.5rem]">
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-4 " />
          <div className=" px-5 pb-4 overflow-y-scroll">
            <div className="flex justify-between items-center">
              <Logo onclick={toggleNav} />
              <ActionButton icon="close" onclick={toggleNav} />
            </div>
            <div className="mt-[3rem] font-sans">
              <ul className="flex gap-8 flex-col font-light">
                <Link
                  onClick={toggleNav}
                  className="text-sm text-gray-600 tracking-wider hover:text-gray-2 transition-all ease-in"
                  href="/shop"
                >
                  Shop
                </Link>

                <Link
                  onClick={toggleNav}
                  className="text-sm text-gray-600 tracking-wider hover:text-gray-2 transition-all ease-in"
                  href="/men"
                >
                  Men
                </Link>

                <Link
                  onClick={toggleNav}
                  className="text-sm text-gray-600 tracking-wider hover:text-gray-2 transition-all ease-in"
                  href="/women"
                >
                  Women
                </Link>

                <Link
                  onClick={toggleNav}
                  className="text-sm text-gray-600 tracking-wider hover:text-gray-2 transition-all ease-in"
                  href="/categories/shirts"
                >
                  Shirts
                </Link>

                <Link
                  onClick={toggleNav}
                  className="text-sm text-gray-600 tracking-wider hover:text-gray-2 transition-all ease-in"
                  href="/categories/jeans"
                >
                  Jeans
                </Link>

                <Search theme="light" />
                <Actions hidden={false} />
              </ul>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Mobile;
