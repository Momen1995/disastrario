import { useEffect, useState } from "react";
import NewIndientOne from "./NewIndientOne";
import IconCard from "./IconCard";

const NewIncident = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetch("icons.json")
      .then((res) => res.json())
      .then((data) => setIcons(data));
  }, []);

  return (
    <div>
      <div className="bg-bgPrimary ">
        <NewIndientOne />
      </div>
      <h3 className="text-primary font-bold text-[24px] w-1/2 mx-auto mt-8">
        Which of these best describes the incident?
      </h3>
      <div className="w-1/2 mx-auto grid grid-cols-4 gap-4 mt-5 h-[40vh]">
        {icons.map((data) => (
          <IconCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default NewIncident;
