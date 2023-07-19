import React from "react";

interface PProps {
  children: React.ReactNode;
  classname?: string;
}

const P: React.FC<PProps> = ({ children, classname }) => {
  return (
    <p
      className={`${classname} sm:text-lg text-base font-sans font-[300] text-primary`}
    >
      {children}
    </p>
  );
};

export default P;
