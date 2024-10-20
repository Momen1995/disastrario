import HomePic from "../../assets/images/home.png";
const LocationDetail = () => {
  return (
    <>
      <div>
        <h3 className="text-primary font-semibold">Activities</h3>
        <div className="mt-2 flex flex-col md:flex-row justify-between bg-[#f4f4f5] px-4 py-3 rounded transition-transform duration-300 transform hover:scale-105">
          <div className="flex gap-4 items-center mt-3">
            <img src={HomePic} alt="" className="w-32" />
            <div className="space-y-1">
              <h3 className="text-primary text-[18px] font-bold">
                Document name
              </h3>
              <p className="text-[16px] text-secondary">
                Location name <span className="ml-4">.16.12212, -122.1424</span>
              </p>
              <p className="text-primary text-[18px] font-bold">
                $1,456,654.00
              </p>
            </div>
          </div>
          <a href="#" className="text-primary underline">
            Sell all
          </a>
        </div>

        <div className="mt-2 flex flex-col md:flex-row justify-between bg-[#f4f4f5] px-4 py-3 rounded transition-transform duration-300 transform hover:scale-105">
          <div className="flex gap-4 items-center mt-3">
            <img src={HomePic} alt="" className="w-32" />
            <div className="space-y-1">
              <h3 className="text-primary text-[18px] font-bold">
                Document name
              </h3>
              <p className="text-[16px] text-secondary">
                Location name <span className="ml-4">.16.12212, -122.1424</span>
              </p>
              <p className="text-primary text-[18px] font-bold">
                $1,456,654.00
              </p>
            </div>
          </div>
          <a href="#" className="text-primary underline">
            Sell all
          </a>
        </div>
      </div>
    </>
  );
};

export default LocationDetail;
