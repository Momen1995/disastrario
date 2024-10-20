import LocationCards from "./LocationCards";

const LocationCard = () => {
  const datas = [
    {
      id: 1,
      title: "Whitechapel Rd",
      price: "$1,456,654.00",
      image: "https://i.ibb.co.com/WfWdgp5/homeone.png",
      area: "Tulare County, Los Angeles, CA 2341",
    },
    {
      id: 2,
      title: "Whitechapel Rd",
      price: "$1,456,654.00",
      image: "https://i.ibb.co.com/zZGgxHw/Group-1171276280.png",
      area: "Tulare County, Los Angeles, CA 2341",
    },
    {
      id: 3,
      title: "Whitechapel Rd",
      price: "$1,456,654.00",
      image: "https://i.ibb.co.com/WfWdgp5/homeone.png",
      area: "Tulare County, Los Angeles, CA 2341",
    },
    {
      id: 4,
      title: "Whitechapel Rd",
      price: "$1,456,654.00",
      image: "https://i.ibb.co.com/WfWdgp5/homeone.png",
      area: "Tulare County, Los Angeles, CA 2341",
    },
  ];

  return (
    <div>
      <p className="mb-2 text-primary font-semibold text-sm">Location</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {datas.map((data) => (
          <LocationCards key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default LocationCard;
