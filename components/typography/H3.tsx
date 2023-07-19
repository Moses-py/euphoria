interface H3Props {
  children: React.ReactNode;
  classname?: string;
}

const H3: React.FC<H3Props> = ({ children, classname }) => {
  return (
    <>
      <h3
        className={`md:text-xl text-lg text-primary font-serif font-[600] ${classname}`}
      >
        {children}
      </h3>
    </>
  );
};

export default H3;
