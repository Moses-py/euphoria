import Desktop from "./Desktop";
import Mobile from "./Mobile";
import Logo from "./components/Logo";
import Actions from "./components/Actions";

const Navbar = () => {
  return (
    <div className="sm:container font-sans px-2 py-4 flex justify-between items-center relative w-full">
      {/* Logo */}

      <Logo />

      <div className="flex lg:block">
        <Desktop />
        <div className="lg:hidden">
          <Actions hidden={true} />
        </div>
        <Mobile />
      </div>
    </div>
  );
};

export default Navbar;
