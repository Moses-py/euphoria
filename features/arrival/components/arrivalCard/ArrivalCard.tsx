import Image from "next/image";

interface CardProps {
  img: string;
  name: string;
}

const ArrivalCard = ({ img, name }: CardProps) => {
  return (
    <>
      <div className="flex flex-col gap-1 flex-1">
        <Image
          src={`/figma/new_arrivals/${img}.jpg`}
          alt={img}
          width={200}
          height={200}
          className="w-full h-full min-w-[200px] min-h-[200px] rounded-md"
        />
        <p className="font-bold text-black mt-[2rem] font-sans text-lg">
          {name}
        </p>
      </div>
    </>
  );
};

export default ArrivalCard;
