/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  const { image, title, price, area } = data;
  return (
    <div className="font-onset-font">
      <img src={image} alt="" />
      <div className="space-y-1">
        <p className="font-bold text-[16px] text-primary">{title}</p>
        <p className="text-[14px] text-secondary">{area}</p>
        <p className="font-bold text-[16px] text-primary">{price}</p>
      </div>
    </div>
  );
};

export default Card;
