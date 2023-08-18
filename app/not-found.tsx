import Button from "@/components/button/Button";
import Navbar from "@/components/navigations/Navbar";
import H2 from "@/components/typography/H2";
import P from "@/components/typography/P";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[90svh] bg-black text-center">
        <div className="absolute inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-3">
          <Image
            src={"/icons/notfound.png"}
            alt="not found logo"
            height={300}
            width={300}
          />
          <H2 classname="text-light">Oops! Page not found.</H2>
          <P classname="text-light">
            The page you are looking for might have been removed or temporarily
            unavailable.
          </P>
          <Link href={"/"}>
            <Button variant="filled" size="sm" type="button">
              Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
