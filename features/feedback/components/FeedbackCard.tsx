import P from "@/components/typography/P";
import Image from "next/image";
import React from "react";

interface FeedbackCardPropd {
  image: string;
  name: string;
  content: string;
}

const FeedbackCard = ({ image, name, content }: FeedbackCardPropd) => {
  return (
    <>
      <div className="p-8 rounded-xl border border-gray-2">
        <div className="flex flex-col gap-4">
          <Image
            src={`/figma/feedback/${image}.png`}
            alt={name}
            width={400}
            height={50}
            className="w-full h-full"
          />
          <div>
            <h2 className="font-sans font-semibold 2xl:text-2xl sm:text-xl text-lg text-primary tracking-wide my-1">
              {name}
            </h2>
            <P classname="my-2">{content}</P>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
