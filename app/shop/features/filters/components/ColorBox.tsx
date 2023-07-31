interface ColorBoxProps {
  color: string;
}

const ColorBox = ({ color }: ColorBoxProps) => {
  return (
    <>
      <div
        className={`rounded-xl h-14 w-14 cursor-pointer border border-gray-3 hover:border-gray-2`}
        style={{ backgroundColor: color }}
      />
      {/* <p className="text-sm text-gray-2 font-sans font-semibold">{color}</p> */}
    </>
  );
};

export default ColorBox;
