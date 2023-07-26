import Image from "next/image";

type BGProps = {
  image: string;
  content?: string;
  category: string;
  description: string;
};

const BackgroundImage = ({
  image,
  content,
  description,
  category,
}: BGProps) => {
  return (
    <div className="relative block">
      <Image
        src={`/hero/${image}.jpg`}
        alt={`${image}-background`}
        width={1920}
        height={400}
        className="object-cover h-[60vh] lg:h-[80vh] w-full"
      />
      <div
        className={` 

        absolute inset-0 flex flex-col justify-center md:items-start items-center gap-4 lg:gap-8 z-30 text-light px-2 md:px-[5rem] lg:px-[10rem] `}
      >
        <p className="font-sans xl:text-3xl sm:text-2xl text-xl font-light">
          {category}
        </p>
        <h1 className="xl:text-[78px] md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-[800] leading-[1] text-center md:text-left font-serif tracking-wide w-full md:w-2/3 2xl:w-1/3">
          {content}
        </h1>
        <p className="font-sans xl:text-3xl sm:text-2xl text-xl font-light">
          {description}
        </p>
        <button className="bg-light text-black rounded-md px-[4rem] py-[0.5rem] w-fit font-sans text-lg font-light hover:bg-button-primary-focused-hover hover:text-light">
          Shop now
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-20 z-20" />
    </div>
  );
};

export default BackgroundImage;
