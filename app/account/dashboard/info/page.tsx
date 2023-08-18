import React from "react";
import InfoData from "./components/InfoData";
import InfoAddress from "./components/InfoAddress";

type Props = {};
const data_types = [
  { type: "Your Name", value: "Moses Chukwunekwu" },
  { type: "Email Address", value: "dantereus1@gmail.com" },
  { type: "Phone number", value: "+2349069885063" },
  { type: "Password", value: "********" },
];
const Info = (props: Props) => {
  return (
    <>
      <div className="px-5 mt-5 lg:mt-0 flex-1">
        <h2 className="md:text-2xl sm:text-xl text-lg text-primary font-[600] font-serif tracking-wide">
          My Info
        </h2>
        <h3 className="md:text-xl text-md text-primary font-serif font-[600]">
          Contact Details
        </h3>
        <div className="flex flex-col w-full mt-[2rem]">
          {data_types.map((data, index) => {
            return (
              <InfoData key={index} datatype={data.type} value={data.value} />
            );
          })}
        </div>
        {/* Address */}
        <InfoAddress />
      </div>
    </>
  );
};

export default Info;
