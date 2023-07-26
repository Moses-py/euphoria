import Image from "next/image";
const Logo = () => {
  return (
    <div>
      <Image
        src={"/icons/euphoria.png"}
        alt={"euphoria logo"}
        height={45}
        width={90}
      />
    </div>
  );
};

export default Logo;
