import P from "@/components/typography/P";
import React from "react";

interface InfoDataProps {
  datatype: string;
  value: string;
}

const InfoData = ({ datatype, value }: InfoDataProps) => {
  return (
    <>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-gray-1 font-semibold">{datatype}</p>
          <P classname="font-semibold">{value}</P>
        </div>
        <P classname="font-semibold text-primary cursor-pointer">Change</P>
      </div>
      <hr className="my-5" />
    </>
  );
};

export default InfoData;
