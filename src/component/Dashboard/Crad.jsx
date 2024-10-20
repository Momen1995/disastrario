const Crad = ({ data }) => {
  const { image, title, price, area } = data;

  return (
    <div className="font-onset-font transition-transform duration-200 hover:scale-105 hover:shadow-lg border rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="space-y-1 p-4">
        <p className="font-bold text-[16px] text-primary">{title}</p>
        <p className="text-[14px] text-secondary">{area}</p>
        <p className="font-bold text-[16px] text-primary">{price}</p>
      </div>
      {/* Uncomment if you want to add a button or additional functionality
      <div>
        <button className="flex items-center justify-center">
          <IoRainySharp />
          Bizzard
        </button>
      </div> */}
    </div>
  );
};

export default Crad;
