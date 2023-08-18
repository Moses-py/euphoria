interface H2Props {
  children: React.ReactNode;
  classname?: string;
}

const H2: React.FC<H2Props> = ({ children, classname }) => {
  return (
    <>
      <h2
        className={`md:text-2xl sm:text-xl text-lg text-primary font-[600] font-serif tracking-wide ${classname}`}
      >
        {children}
      </h2>
    </>
  );
};

export default H2;
