import { useEffect, useState } from "react";
import IncidenOne from "./IncidenOne";
import { IoMdClose } from "react-icons/io";
import { TbLetterC } from "react-icons/tb";
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-[1100px] ms-10 mt-10 bg-[#fff]">
        {data.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>

      <div className="flex flex-col mt-5 w-3/4 mx-auto z-10 h-72">
        <div className="flex justify-end w-full max-w-7xl mx-auto">
          {isShowModal && (
            <div className="flex flex-col w-full max-w-sm h-96 border rounded-lg shadow-lg mr-5">
              <div className="p-4 bg-btnPrimary text-white font-bold text-center rounded-t-lg">
                Messenger Chat
              </div>

              <div className="flex-1 p-4 overflow-y-auto bg-white">
                <div className="mb-3 p-2 bg-orange-100 rounded-lg max-w-xs">
                  Hello, how are you?
                </div>
                <div className="mb-3 p-2 bg-orange-100 rounded-lg max-w-xs">
                  I'm good, thanks!
                </div>
              </div>

              <div className="p-3 bg-gray-100 flex items-center space-x-2">
                <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.232 5H8.768A1.768 1.768 0 007 6.768v10.464A1.768 1.768 0 008.768 19h6.464A1.768 1.768 0 0017 17.232V6.768A1.768 1.768 0 0015.232 5zM10 10h.01M15.5 14.5L12 11l-2.5 2.5"
                    />
                  </svg>
                </button>

                <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 6h18M2 12h5l1-2h8l1 2h5M15 18l-3 3m0-3l-3-3m0 0h6m-3 0V9m0 6v-6"
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <button className="bg-btnPrimary text-white px-4 py-2 rounded-full">
                  Send
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end w-3/4 max-w-6xl mx-auto mt-5 fixed right-0 bottom-0">
          <button
            onClick={handleShowModal}
            className="bg-btnPrimary rounded-full px-5 py-4 text-[#fff] font-bold text-4xl font-onset-font"
          >
            {isShowModal ? <IoMdClose /> : <TbLetterC />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Incidents;
