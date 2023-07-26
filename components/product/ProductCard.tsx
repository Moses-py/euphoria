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
          className="min-w-[150px] min-h-[200px] rounded-md"
        />
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-black mt-[2rem] font-sans text-md sm:text-lg">
              {name}
            </p>
            <p className="font-light underline text-black mt-1 font-sans text-sm">
              {brand}
            </p>
          </div>
          {/* <div className="px-2 py-1 grid place-items-center bg-gray-3 rounded-md">
            <p className="font-semibold text-primary font-sans text-sm">
              ${price}
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
