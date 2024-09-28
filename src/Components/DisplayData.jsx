import React, { useState } from "react";

const DisplayData = ({ data }) => {
  const [filter, setFilter] = useState("");

 


  const hasData = data && data.length > 0 && data[0].PostOffice;

  const filteredPostOffices = hasData
    ? data[0].PostOffice.filter((item) =>
        item.Name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  console.log(filteredPostOffices);

  return (
    <div>
      {hasData ? (
        <>
          <h1 className="m-5 font-bold">
            <span>Pincode: </span>
            {data[0].PostOffice[0]?.Pincode}
          </h1>
          <p className="m-5">
            <span className="font-bold">Message: </span> {data[0].Message}
          </p>

          <form className="border w-[60%] p-1 text-xl rounded-lg m-6">
            🔍
            <input
              onChange={(e) => setFilter(e.target.value)}
              className="ml-2 w-[860px] p-1"
              type="text"
              placeholder="Filter"
            />
          </form>

          {filteredPostOffices.length > 0 ? (
            <div className="grid grid-cols-2 gap-10 m-6 w-[70%]">
              {filteredPostOffices.map((item, idx) => (
                <div
                  className="border border-black p-4 w-[60%] h-[99%]"
                  key={idx}
                >
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Name:</span>
                    <span>{item.Name}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Branch Type:</span>
                    <span>{item.BranchType}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Delivery Status:</span>
                    <span>{item.DeliveryStatus}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-bold text-lg">District:</span>
                    <span>{item.District}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Division:</span>
                    <span>{item.Division}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mt-6 font-bold text-2xl">
              No matching post offices found.
            </div>
          )}
        </>
      ) : (
        <div className="text-center mt-[300px] font-bold text-4xl">
          Couldn’t find the postal data you’re looking for…
        </div>
      )}
    </div>
  );
};

export default DisplayData;
