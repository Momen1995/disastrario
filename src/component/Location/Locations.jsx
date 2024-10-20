import LocationLeft from "./LocationLeft";
import LocationOne from "./LocationOne";
import LocationRight from "./LocationRight";

const Locations = () => {
  return (
    <>
      <div>
        <div className="bg-bgPrimary">
          <LocationOne />
        </div>
        <div className="w-11/12 mx-auto mt-8 flex flex-col md:flex-row justify-between ">
          <div className="w-full md:w-1/2">
            <LocationLeft />
    
          </div>
          <div>
            <LocationRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
