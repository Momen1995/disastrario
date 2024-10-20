import WhereOne from "./WhereOne";
import Map from "../../assets/images/map.png";

const IncidentWhere = () => {
  return (
    <>
      <div className="bg-bgPrimary">
        <WhereOne />
      </div>
      <div className="w-1/3 mx-auto mt-5 space-y-2">
        <h3 className="text-primary font-bold text-[24px]">
          Where’s the incident?
        </h3>
        <p className="text-sm text-secondary">
          Enter a GPS, address. or pin point on the map. Try to be as accurate
          as possible, or click:Jurisdiction Wide
        </p>
        <img src={Map} alt="" className="h-80" />
      </div>
    </>
  );
};

export default IncidentWhere;
