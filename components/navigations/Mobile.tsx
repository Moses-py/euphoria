"use client";
import Link from "next/link";
import ActionButton from "./components/ActionButton";
import Logo from "./components/Logo";
import Search from "./components/Search";
import { useStore } from "@/store/Store";
import Actions from "./components/Actions";

const Mobile = () => {
  const [toggleNav, nav] = useStore((state) => [state.toggleNav, state.nav]);
  return (
    <div
      className={`${
        nav ? "left-0 block" : "left-[-150%]"
      } fixed top-0 transition-all duration-300 ease-in z-50`}
    >
      <div className="h-[100svh] w-[320px] bg-gray-3 px-5 py-8">
        <div className="flex justify-between items-center">
          <Logo />
          <ActionButton icon="close" onclick={toggleNav} />
        </div>
        <div className="mt-[3rem]">
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
              href="/"
            >
              Men
            </Link>

            <Link
              onClick={toggleNav}
              className="text-sm text-gray-600 tracking-wider hover:text-gray-2 transition-all ease-in"
              href="/"
            >
              Women
            </Link>

            <Link
              onClick={toggleNav}
              className="text-sm text-gray-600 tracking-wider hover:text-gray-2 transition-all ease-in"
              href="/"
            >
              Combos
            </Link>

            <Link
              onClick={toggleNav}
              className="text-sm text-gray-600 tracking-wider hover:text-gray-2 transition-all ease-in"
              href="/"
            >
              Joggers
            </Link>

            <Search theme="light" />
            <Actions hidden={true} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
