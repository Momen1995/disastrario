import MapOne from "../../assets/images/map1.png";

const LocationRight = () => {
  return (
    <div>
      <p className="text-sm text-secondary mb-2 font-semibold">Incident Map</p>
      <img src={MapOne} alt="" />
      <div className="flex justify-start gap-10 py-2">
        <p className="text-sm text-secondary">Start 19.1232, -118.233</p>
        <p className="text-sm text-secondary">End 19.3245, -119.2323</p>
      </div>
    </div>
  );
};

export default LocationRight;
