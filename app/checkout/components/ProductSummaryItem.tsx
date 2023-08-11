import Image from "next/image";

interface ItemProps {
  item: ProductSummaryItemProp;
  itemLength: number;
}
const ProductSummaryItem = ({ item, itemLength }: ItemProps) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <Image
            src={`${item?.image}.jpg`}
            alt={item?.name}
            height={30}
            width={60}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-1">
            <p className="text-base font-semibold text-primary font-sans">
              {item?.name} x{itemLength}
            </p>
            <p className="text-sm font-normal text-primary font-sans">
              <span className="font-semibold">Colour:</span>{" "}
              {item?.selectedColor}
            </p>
            <p className="text-sm font-normal text-primary font-sans">
              <span className="font-semibold">Size:</span> {item?.selectedSize}
            </p>
          </div>
        </div>
        <p className="text-sm font-normal text-primary font-sans">
          <span className="font-semibold">Price:</span> ${item?.price}
        </p>
      </div>
      <hr className="" />
    </>
  );
};

export default ProductSummaryItem;
