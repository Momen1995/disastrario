const GetCard = ({ data }) => {
  return (
    <div className="bg-[#E4E4E7] p-6 space-y-12 rounded">
      <img src={data.image} alt="" />
      <div>
        <h3 className="text-primary font-bold text-[20px] w-2/3">
          {data.title}
        </h3>
        <p className="text-sm text-secondary">{data.description}</p>
      </div>
    </div>
  );
};

export default GetCard;
