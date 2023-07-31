interface SizeProps {
  size: Sizes;
}
const ProductSizeBox: React.FC<SizeProps> = ({ size }) => {
  return (
    <button className="px-4 py-2 rounded-xl border active:bg-primary focus:bg-primary border-gray-3 text-gray-1 grid place-items-center font-sans font-medium w-fit hover:bg-primary cursor-pointer">
      {size}
    </button>
  );
};

export default ProductSizeBox;
