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
          className="min-w-[150px] min-h-[200px] rounded-md"
        />
        <div>
          <p className="font-bold text-black mt-[2rem] font-sans text-md sm:text-lg">
            {type}
          </p>
          <Link
            href=""
            className="font-light underline text-black mt-1 font-sans text-sm"
          >
            Explore now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
