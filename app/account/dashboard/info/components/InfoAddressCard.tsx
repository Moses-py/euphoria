import P from "@/components/typography/P";
import React from "react";

interface InfoAddressCardProps {
  name: string;
  address: string;
  tags: string[];
  phonenumber: string;
}

const InfoAddressCard = ({
  name,
  address,
  tags,
  phonenumber,
}: InfoAddressCardProps) => {
  return (
    <div className="bg-light p-8 font-sans rounded-xl flex flex-col gap-4">
      <P classname="font-bold">{name}</P>
      <p className="text-base font-regular text-gray-1">{phonenumber}</p>
      <p className="text-base text-gray-1">{address}</p>
      <div className="flex gap-3 flex-wrap">
        {tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="px-3 py-1 rounded-md ring-1 ring-gray-2"
            >
              <p className="text-base font-regular text-gray-1">{tag}</p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-1">
        <button className="text-sm font-semibold">Remove</button>
        <span className="mx-2">|</span>
        <button className="text-sm font-bold">Edit</button>
      </div>
    </div>
  );
};

export default InfoAddressCard;
