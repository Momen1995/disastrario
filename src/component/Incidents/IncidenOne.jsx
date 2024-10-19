import { Link } from "react-router-dom";

const IncidenOne = () => {
  return (
    <>
      <div className="flex justify-between items-center w-[1270px] py-4 mx-auto font-onset-font ">
        <div className="flex flex-col gap-1">
          <p className="text-secondary text-[12px]">Home-Incidents</p>
          <h3 className="text-primary font-bold text-[26px]">Incidents</h3>
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
            <Link to="/getstart">+ New Incident</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default IncidenOne;
