import Image from "next/image";

interface BrandCardProps {
  brand: string;
}

const BrandCard = ({ brand }: BrandCardProps) => {
  return (
    <div className="grid place-items-center bg-white rounded-2xl">
      <Image
        src={`/figma/brands/${brand}.png`}
        alt={brand}
        width={200}
        height={100}
        className="object-cover"
      />
    </div>
  );
};

export default BrandCard;
