import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  onclick?: () => void;
}
const Logo = ({ onclick }: LogoProps) => {
  return (
    <Link href="/" onClick={onclick}>
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
