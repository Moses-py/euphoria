import Image from "next/image";
const Logo = () => {
  return (
    <div>
      <Image
        src={"/icons/euphoria.png"}
        alt={"euphoria logo"}
        height={50}
        width={100}
      />
    </div>
  );
};

export default Logo;
