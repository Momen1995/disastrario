import { Link } from "react-router-dom";

const LocationOne = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-[1270px] py-4 mx-auto font-onset-font px-4">
        {/* Incident Details */}
        <div className="flex flex-col gap-1">
          <p className="text-secondary text-[12px]">
            Incidents - DR-4699 March 2023 Severe Storms
          </p>
          <h3 className="text-primary font-bold text-[18px] md:text-[26px]">
            DR-4699 March 2023 Severe Storms
          </h3>
        </div>

        {/* Search and Sort Inputs */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search incident"
            className="py-2 px-2 rounded text-[12px] w-full md:w-auto"
          />
          <input
            type="text"
            placeholder="Sort by date modified"
            className="py-2 px-2 rounded text-[12px] w-full md:w-auto"
          />
          <button className="bg-btnPrimary text-btnColor text-[12px] px-4 py-3 rounded font-bold w-full md:w-auto">
            <Link to="/getstart">+ New Location</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LocationOne;
