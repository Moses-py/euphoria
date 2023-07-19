interface H1Props {
  children: React.ReactNode;
  classname?: string;
}

const H1: React.FC<H1Props> = ({ children, classname }) => {
  return (
    <>
      <h1
        className={`xl:text-5xl md:text-3xl sm:text-2xl text-xl font-[800] font-serif tracking-wide ${classname}`}
      >
        {children}
      </h1>
    </>
  );
};

export default H1;
