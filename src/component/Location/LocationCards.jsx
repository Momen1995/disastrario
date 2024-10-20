const LocationCards = ({data}) => {
  return (
    <div className="mt-2 space-y-1">
      <img src={data.image} alt="" />
      <h3 className="font-bold text-sm md:text-[18px]">{data.title}</h3>
      <p className="text-secondary text-sm">{data.area}</p>
      <p className="font-bold text-[18px]">{data.price}</p>
    </div>
  );
};

export default LocationCards;