interface QuantityProps {
  minusOnclick?: () => void;
  plusOnclick?: () => void;
  count: number;
}
const Quantity = ({ minusOnclick, plusOnclick, count }: QuantityProps) => {
  return (
    <div className="flex items-center justify-start xs:justify-end text-gray-1  border-gray-3 rounded-sm font-sans">
      <button
        className={`disabled:bg-gray-2 flex items-center justify-center px-3 text-xl bg-gray-3 text-primary rounded-l-lg hover:bg-gray-2`}
        onClick={minusOnclick}
      >
        -
      </button>
      <div className="flex items-end text-primary justify-center px-3 text-base font-regular">
        {count}
      </div>
      <button
        className={
          "flex items-center justify-center px-3 text-xl bg-gray-3 text-primary rounded-r-lg hover:bg-gray-2"
        }
        onClick={plusOnclick}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
