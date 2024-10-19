import { Link } from "react-router-dom";
import GetImage from "../../assets/images/get.png";
import GetCard from "./GetCard";

const GetStart = () => {
  const data = [
    {
      id: crypto.randomUUID(),
      image: "https://i.ibb.co.com/c642xQG/Frame1.png",
      title: "What type of incident?",
      description: "Choose the category that best describes the incident.",
    },
    {
      id: crypto.randomUUID(),
      image: "https://i.ibb.co.com/PtnpH99/Frame2.png",
      title: "Tell us about the incident?",
      description: "Let’s connect the dots and see where to start.",
    },
    {
      id: crypto.randomUUID(),
      image: "https://i.ibb.co.com/Wktk3Hk/Frame.png",
      title: "Where did the incident occur?",
      description: "Lorem ipsum dolar sit general sac mascho werho",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-[80vh] mt-5 items-center w-4/5 mx-auto">
      <h1 className="text-primary font-bold text-[32px]">Let’s get started</h1>
      <p className="text-center w-1/2 text-secondary text-[16px] mt-2 mb-5">
        Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
        general sac mascho werhoLorem ipsum dolar sit gene
      </p>
      <img src={GetImage} alt="" className="mb-6" />

      <div className="grid grid-cols-3 gap-5 w-9/12">
        {data.map((data) => (
          <GetCard key={data.id} data={data} />
        ))}
      </div>

      <div className="mt-5">
        <button className="bg-btnPrimary px-5 py-2 rounded text-[#fff] font-bold text-sm">
          <Link to="/newincident">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default GetStart;
