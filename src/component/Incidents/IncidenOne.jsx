import { Link } from "react-router-dom";

const IncidenOne = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-[1270px] py-4 px-2 md:px-0 mx-auto font-onset-font gap-4">
        
        <div className="flex flex-col gap-1">
          <p className="text-secondary text-[12px]">Home-Incidents</p>
          <h3 className="text-primary font-bold text-[26px]">Incidents</h3>
        </div>

       
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
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
            <Link to="/getstart">+ New Incident</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default IncidenOne;
