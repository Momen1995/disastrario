import { useEffect, useState } from "react";
import IncidenOne from "./IncidenOne";
import Card from "./Card";

const Incidents = () => {
  const [data, setData] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleShowModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <div className="bg-bgPrimary ">
        <IncidenOne />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[1100px] ms-10 mt-10 bg-[#fff]">
        {data.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Incidents;
