import { useState } from "react";

const IconCard = ({ data }) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex gap-2 items-center ${
        isOn ? `bg-[#f26922] text-white` : "bg-cardPrimary"
      } px-4 py-3 rounded text-secondary text-sm font-normal`}
    >
      <img src={data.iconImage} alt="" className="w-5" />
      <p className="text-[13px]">{data.iconName}</p>
    </div>
  );
};

export default IconCard;
