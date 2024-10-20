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
      <div className="md:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1270px] py-4 mx-0 md:mx-auto font-onset-font">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <div className="bg-[#fff] px-2 py-2 rounded-full text-[18px]">
              <IoMdClose />
            </div>
            <div className="flex flex-col gap-1 text-center md:text-left">
              <p className="text-secondary text-[10px] sm:text-[12px]">
                Home-Incidents-New incident
              </p>
              <h3 className="text-primary font-bold text-[22px] sm:text-[26px]">
                New Incidents
              </h3>
            </div>
          </div>

          <div className="my-4 md:my-0">
            <img
              src={IncidentImg}
              alt="Incident"
              className="w-[100px] sm:w-[150px] md:w-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 md:mt-0">
            <button
              onClick={handleNaviGate}
              className="bg-white text-secondary text-[12px] px-5 py-2 sm:px-10 sm:py-3 rounded font-bold"
            >
              Back
            </button>
            <button className="bg-btnPrimary text-btnColor text-[12px] px-5 py-2 sm:px-8 sm:py-3 rounded font-bold">
              <Link to="/locations">Next step</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereOne;
