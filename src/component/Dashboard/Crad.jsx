//import { IoRainySharp } from "react-icons/io5";
const Crad = ({ data }) => {
  const { image, title, price, area } = data;
  return (
    <div className="font-onset-font">
      <img src={image} alt="" />
      <div className="space-y-1">
        <p className="font-bold text-[16px] text-primary">{title}</p>
        <p className="text-[14px] text-secondary">{area}</p>
        <p className="font-bold text-[16px] text-primary">{price}</p>
      </div>
      {/* <div>
        <button className="flex items-center justify-center">
          <IoRainySharp />
          Bizzard
        </button>
      </div> */}
    </div>
  );
};

export default Crad;
