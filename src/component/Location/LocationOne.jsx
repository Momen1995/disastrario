import { Link } from "react-router-dom";

const LocationOne = () => {
  return (
    <>
      <div className="flex justify-between items-center w-[1270px] py-4 mx-auto font-onset-font ">
        <div className="flex flex-col gap-1">
          <p className="text-secondary text-[12px]">
            Incidents - DR-4699 March 2023 Severe Storms{" "}
          </p>
          <h3 className="text-primary font-bold text-[18px] md:text-[26px]">
            DR-4699 March 2023 Severe Storms
          </h3>
        </div>
        <div className="flex gap-6">
          <input
            type="text"
            placeholder="Search incident"
            className="py-2 px-2 rounded text-[12px]"
          />
          <input
            type="text"
            placeholder="Sort by date modify"
            className="py-2 px-2 rounded text-[12px]"
          />
          <button className="bg-btnPrimary text-btnColor text-[12px] px-4 py-3 rounded font-bold">
            <Link to="/getstart">+ New Location</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LocationOne;
