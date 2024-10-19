import NewIndientOne from "../Incidents/NewIndientOne";
import Title from "./Title";

const IncidentTile = () => {
  return (
    <div>
      <div className="bg-bgPrimary ">
        <NewIndientOne />
      </div>
      <Title />
    </div>
  );
};

export default IncidentTile;
