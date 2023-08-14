"use client";
import Image from "next/image";
import Catalog from "../shop/features/catalog/Catalog";
import Filter from "../shop/features/filters/Filter";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";
import { renderByPathname } from "@/utils/renderByPathname";

const Shopboard = () => {
  const pathname = usePathname();
  return (
    <section className="scroll-smooth" id="shop">
      <Link
        href="#shop"
        className="fixed bottom-[1rem] right-[1rem] z-[10] p-0"
      >
        <button className="h-14 w-14 rounded-full grid place-items-center bg-gray-2">
          <Image src="/icons/up.png" alt="up arrow" height={20} width={20} />
        </button>
      </Link>

      <div className="flex relative">
        <Filter />
        <Catalog items={renderByPathname(pathname)} />
      </div>
      <Footer />
    </section>
  );
};

export default Shopboard;
