interface CounterProps {
  minusOnclick: () => void;
  plusOnclick: () => void;
  count: number;
}

const Counter = ({ minusOnclick, plusOnclick, count }: CounterProps) => {
  return (
    <div className="flex items-center justify-center h-12 text-gray-1 w-full border-gray-3 rounded-sm font-sans ">
      <button
        disabled={count < 1 && true}
        className={`disabled:bg-gray-2 flex items-center justify-center w-12 h-12 text-2xl text-white bg-secondary rounded-l-lg hover:bg-purple-900`}
        onClick={minusOnclick}
      >
        -
      </button>
      <div className="flex items-center justify-center w-16 h-12 text-lg font-semibold">
        {count}
      </div>
      <button
        className={
          "flex items-center justify-center w-12 h-12 text-2xl text-white bg-secondary rounded-r-lg hover:bg-purple-900"
        }
        onClick={plusOnclick}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
