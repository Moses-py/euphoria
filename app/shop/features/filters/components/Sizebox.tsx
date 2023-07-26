interface SizeProps {
  size: Sizes;
}
const Sizebox: React.FC<SizeProps> = ({ size }) => {
  return (
    <div className="px-4 py-2 rounded-lg border border-gray-3 text-gray-1 grid place-items-center font-sans font-medium hover:bg-gray-3 cursor-pointer">
      {size}
    </div>
  );
};

export default Sizebox;
