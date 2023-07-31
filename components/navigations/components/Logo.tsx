import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={"/icons/euphoria.png"}
        alt={"euphoria logo"}
        height={45}
        width={90}
      />
    </Link>
  );
};

export default Logo;
