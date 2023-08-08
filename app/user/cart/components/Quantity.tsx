interface QuantityProps {
  minusOnclick?: () => void;
  plusOnclick?: () => void;
  count: number;
}
const Quantity = ({ minusOnclick, plusOnclick, count }: QuantityProps) => {
  return (
    <div className="flex items-center justify-start xs:justify-end text-gray-1  border-gray-3 rounded-sm font-sans">
      <button
        disabled={count < 1 && true}
        className={`disabled:bg-gray-2 flex items-center justify-center w-8 h-8 text-lg text-white rounded-l-lg bg-primary hover:bg-purple-900`}
        onClick={minusOnclick}
      >
        -
      </button>
      <div className="flex items-center text-primary justify-center w-8 h-8 text-base font-light">
        {count}
      </div>
      <button
        className={
          "flex items-center justify-center w-8 h-8 text-lg text-white rounded-r-lg hover:bg-purple-900 bg-primary"
        }
        onClick={plusOnclick}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
