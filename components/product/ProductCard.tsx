import Image from "next/image";

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
          className="w-full min-w-[200px] rounded-xl"
        />
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-black mt-[2rem] font-serif text-lg">
              {name}
            </p>
            <p className="font-light text-primary font-sans text-md">{brand}</p>
          </div>
          <div className="px-2 py-1 grid place-items-center bg-gray-3 rounded-md">
            <p className="font-semibold text-primary font-sans text-sm">
              ${price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
