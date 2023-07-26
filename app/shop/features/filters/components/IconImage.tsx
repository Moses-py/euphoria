import Image from "next/image";
interface IconImageProps {
  icon: string;
  onclick?: () => void;
  classname?: string;
}
const IconImage = ({ icon, onclick, classname }: IconImageProps) => {
  return (
    <Image
      src={`/icons/${icon}.png`}
      alt={"filter icon"}
      width={20}
      height={20}
      className={`${classname} transition-all ease-in duration-200`}
      onClick={onclick}
    />
  );
};

export default IconImage;
