import WhereOne from "./WhereOne";
import Map from "../../assets/images/map.png";

const IncidentWhere = () => {
  return (
    <>
      <div className="bg-bgPrimary">
        <WhereOne />
      </div>
      <div className="w-full md:w-2/3 lg:w-1/3 mx-auto mt-12 md:mt-5 space-y-2 px-4">
        <h3 className="text-primary font-bold text-[20px] sm:text-[24px] text-center md:text-left">
          Where’s the incident?
        </h3>
        <p className="text-sm text-secondary text-center md:text-left">
          Enter a GPS, address, or pin point on the map. Try to be as accurate
          as possible, or click: <strong>Jurisdiction Wide</strong>
        </p>
        <img
          src={Map}
          alt="Map"
          className="h-60 sm:h-72 md:h-80 w-full object-cover rounded-lg"
        />
      </div>
    </>
  );
};

export default IncidentWhere;
