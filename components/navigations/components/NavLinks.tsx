import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="flex justify-center items-center gap-[2.5rem] font-light">
      <li>
        <Link
          href={""}
          className="text-base text-gray-1 tracking-wider hover:text-gray-2 transition-all ease-in"
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          href={""}
          className="text-base text-gray-1 tracking-wider hover:text-gray-2 transition-all ease-in"
        >
          Men
        </Link>
      </li>
      <li>
        <Link
          href={""}
          className="text-base text-gray-1 tracking-wider hover:text-gray-2 transition-all ease-in"
        >
          Women
        </Link>
      </li>
      <li>
        <Link
          href={""}
          className="text-base text-gray-1 tracking-wider hover:text-gray-2 transition-all ease-in"
        >
          Combo
        </Link>
      </li>
      <li>
        <Link
          href={""}
          className="text-base text-gray-1 tracking-wider hover:text-gray-2 transition-all ease-in"
        >
          Joggers
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
