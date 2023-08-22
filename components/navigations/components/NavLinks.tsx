import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="flex justify-center items-center gap-[2.5rem] font-regular">
      <li>
        <Link
          href={"/shop"}
          className="text-base text-gray-1 tracking-wider hover:text-gray-2 transition-all ease-in"
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          href={"/shop/men"}
          className="text-base text-gray-1 tracking-wider hover:text-gray-2 transition-all ease-in"
        >
          Men
        </Link>
      </li>
      <li>
        <Link
          href={"/shop/women"}
          className="text-base text-gray-1 tracking-wider hover:text-gray-2 transition-all ease-in"
        >
          Women
        </Link>
      </li>
      <li>
        <Link
          href={"/categories/shirts"}
          className="text-base text-gray-1 tracking-wider hover:text-gray-2 transition-all ease-in"
        >
          Shirts
        </Link>
      </li>
      <li>
        <Link
          href={"/categories/jeans"}
          className="text-base text-gray-1 tracking-wider hover:text-gray-2 transition-all ease-in"
        >
          Jeans
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
