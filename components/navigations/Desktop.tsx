import Actions from "./components/Actions";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import Search from "./components/Search";

const Desktop = () => {
  return (
    <>
      <nav className="hidden lg:flex justify-between items-center gap-[2.5rem]">
        {/* Nav items */}
        <NavLinks />
        {/* Search bar */}
        <Search />
        {/* Action buttons */}
        <Actions hidden={true} />
      </nav>
    </>
  );
};

export default Desktop;
