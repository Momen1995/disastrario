import NavOne from "../../assets/images/navone.png";
import NavTwo from "../../assets/images/nav-two.png";
const NavRight = () => {
  return (
    <div className="flex gap-2">
      <img src={NavTwo} alt="" />
      <img src={NavOne} alt="" />
      <div className="flex flex-col">
        <p className="text-[16px] font-semibold text-[#71717A]">Usman Zafar</p>
        <p className="text-[14px] text-[#71717A]">usmanzafar@gmail.com</p>
      </div>
    </div>
  );
};

export default NavRight;
