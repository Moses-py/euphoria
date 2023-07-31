import Image from "next/image";
import Link from "next/link";

export interface ProductCardProps {
  name: string;
  img: string;
  brand: Brand;
  price: string;
}

const ProductCard = ({ name, img, brand, price }: ProductCardProps) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <Image
          src={`${img}.jpg`}
          alt={img}
          width={200}
          height={300}
          className="w-full h-full rounded-md border border-gray-3"
        />
        <div className=" justify-between items-center">
          <div className="my-2">
            <Link
              href={`/product/${name}`}
              className="font-bold font-sans text-primary mt-[2rem] text-base sm:text-md"
            >
              {name}
            </Link>
            <p className="font-light text-primary mt-1 font-sans text-sm">
              {brand}
            </p>
          </div>
          <div className="p-2 my-2 grid place-items-center bg-gray-3 rounded-md">
            <p className="font-semibold text-primary text-base font-sans">
              ${price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
