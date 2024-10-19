import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavRight from "./NavRight";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 w-[1270px] mx-auto">
      <Logo />
      <NavLinks />
      <NavRight />
    </div>
  );
};

export default Navbar;
