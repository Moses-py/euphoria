import Image from "next/image";
import Link from "next/link";

interface CardProps {
  type: string;
  img: string;
  category: Category;
}

type Category = "men" | "women";

const Card = ({ type, img, category }: CardProps) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <Image
          src={`/figma/categories/${category}/${img}.jpg`}
          alt={img}
          width={500}
          height={750}
          className="min-w-[200px] min-h-[300px] rounded-md"
        />
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-black mt-[2rem] font-sans text-lg">
              {type}
            </p>
            <Link
              href=""
              className="font-light underline text-black mt-1 font-sans text-md"
            >
              Explore now
            </Link>
          </div>
          <div>
            <Image
              src="/icons/right.png"
              alt="icon right"
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
