import location from "../../assets/images/locations.png";
import Camera from "../../assets/images/camera.png";
import LocationCard from "./LocationCard";
import LocationDetail from "./LocationDetail";
import LocationdetailTwo from "./LocationdetailTwo";

const LocationLeft = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-3">
        <img src={location} alt="" className="w-12" />
        <div>
          <p className="text-secondary text-[14px]">Location</p>
          <h2 className="font-bold text-[20px] text-primary">
            Tulare County, Los Angeles, CA 23415
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <img src={Camera} alt="" className="w-12" />
        <div>
          <p className="text-secondary text-[14px]">Approx. Cost:</p>
          <h2 className="font-bold text-[20px] text-primary">$60,607,456.00</h2>
        </div>
      </div>
      <hr />
      <div>
        <h4 className="text-primary text-sm font-bold">Description</h4>
        <p className="text-secondary text-[16px]">
          Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
          general sac mascho werhoLorem ipsum dolar sit general sac mascho
          werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
          sit general sac mascho werhoLorem ipsum dolar sit general sac mascho
          werho
        </p>
      </div>
      <hr />
      <LocationCard/><hr/>
      <LocationDetail/><hr />
      <LocationdetailTwo/>
    </div>
  );
};

export default LocationLeft;
