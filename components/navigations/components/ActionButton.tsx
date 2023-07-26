import Image from "next/image";

type Props = {
  icon: string;
  onclick?: () => void;
};

const ActionButton = ({ icon, onclick }: Props) => {
  return (
    <>
      <div
        className="p-3 rounded-md  cursor-pointer hover:bg-gray-2 transition-all ease-in"
        onClick={onclick}
      >
        <Image
          src={`/icons/${icon}.png`}
          alt={`${icon}-icon`}
          height={20}
          width={20}
        />
      </div>
    </>
  );
};

export default ActionButton;
