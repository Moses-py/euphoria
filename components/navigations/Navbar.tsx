"use client";
import Image from "next/image";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import Logo from "./components/Logo";
import { useStore } from "@/store/Store";

const Navbar = () => {
  const [toggleNav, nav] = useStore((state) => [state.toggleNav, state.nav]);

  return (
    <div className="sm:container font-sans px-2 py-4 flex justify-between items-center relative w-full">
      {/* Logo */}
      <Logo />
      <Desktop />
      <Mobile />
      <div
        className={`lg:hidden ${
          nav && "hidden"
        } flex p-3 rounded-md cursor-pointer hover:bg-gray-2 transition-all ease-in`}
        onClick={toggleNav}
      >
        <Image src={"/icons/menu.svg"} alt="menu" height={20} width={20} />
      </div>
    </div>
  );
};

export default Navbar;
