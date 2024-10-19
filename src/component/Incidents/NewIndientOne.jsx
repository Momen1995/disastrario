import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const NewIndientOne = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-[1270px] py-4 mx-auto font-onset-font ">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-[#fff] px-2 py-2 rounded-full text-[18px]">
            <IoMdClose />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-secondary text-[12px]">
              Home-Incidents-New incident
            </p>
            <h3 className="text-primary font-bold text-[26px]">
              New Incidents
            </h3>
          </div>
        </div>
        <div className="flex gap-6">
          <button className="bg-white text-secondary text-[12px] px-10 py-3 rounded font-bold">
            <Link to="/getstart">Back</Link>
          </button>
          <button className="bg-btnPrimary text-btnColor text-[12px] px-8 py-3 rounded font-bold">
            <Link to="/getstart">Next step</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewIndientOne;
