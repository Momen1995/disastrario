import { IoMdClose } from "react-icons/io";
import IncidentImg from "../../assets/images/incident.png";
import { Link, useNavigate } from "react-router-dom";

const WhereOne = () => {
  const navigate = useNavigate();

  const handleNaviGate = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[1270px] py-4 mx-auto font-onset-font px-4 md:px-0 gap-4">
        <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-4 md:gap-2 w-full md:w-auto">
          <div className="bg-[#fff] px-2 py-2 rounded-full text-[18px]">
            <IoMdClose />
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-secondary text-[10px] sm:text-[12px]">
              Home-Incidents-New incident
            </p>
            <h3 className="text-primary font-bold text-[20px] sm:text-[26px]">
              New Incidents
            </h3>
          </div>
        </div>
        <div className="my-4 w-full md:w-1/2 mx-auto flex justify-center items-center md:my-0">
          <img
            src={IncidentImg}
            alt="Incident"
            className=" md:w-auto object-contain" 
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 md:mt-0 md:ml-auto w-full md:w-auto">
          <button
            onClick={handleNaviGate}
            className="bg-white text-secondary text-[12px] px-5 py-2 sm:px-10 sm:py-3 rounded font-bold w-full md:w-auto"
          >
            Back
          </button>
          <button className="bg-btnPrimary text-btnColor text-[12px] px-5 py-2 sm:px-8 sm:py-3 rounded font-bold w-full md:w-auto">
            <Link to="/locations">Next step</Link>
          </button>
        </div>
        
      </div>
    </>
  );
};

export default WhereOne;


