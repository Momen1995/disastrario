import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import IncidentImg from "../../assets/images/incident.png";

const NewIndientOne = () => {
  const navigate = useNavigate();

  const handleNaviGate = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-[1270px] py-4 px-3 md:px-0 mx-auto font-onset-font gap-4 md:gap-0">
       
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

        
        <img
          src={IncidentImg}
          alt="Incident"
          className="w-full md:w-auto max-w-[300px] object-contain"
        />

        
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <button
            onClick={handleNaviGate}
            className="bg-white text-secondary text-[12px] px-10 py-3 rounded font-bold w-full md:w-auto"
          >
            Back
          </button>
          <button className="bg-btnPrimary text-btnColor text-[12px] px-8 py-3 rounded font-bold w-full md:w-auto">
            <Link to="/incidenttitle">Next step</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NewIndientOne;
