const IconCard = ({ data }) => {
  return (
    <div className="flex gap-3 bg-cardPrimary p-3 rounded text-secondary text-sm font-normal">
      <img src={data.iconImage} alt="" />
      <p>{data.iconName}</p>
    </div>
  );
};

export default IconCard;
