import DashBoardOne from "./DashBoardOne";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-[#f1f1f3]">
      <Navbar />
      <hr />
      <DashBoardOne />
    </div>
  );
};

export default Header;
