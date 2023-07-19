import H2 from "../typography/H2";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className="flex gap-5 items-center">
      <span className="w-2 rounded-lg bg-secondary h-8" />
      <H2>{children}</H2>
    </div>
  );
};

export default Title;
