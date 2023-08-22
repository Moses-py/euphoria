import React from "react";

interface PProps {
  children: React.ReactNode;
  classname?: string;
}

const P: React.FC<PProps> = ({ children, classname }) => {
  return (
    <p
      className={`${classname} sm:text-md text-base font-sans font-regular text-primary`}
    >
      {children}
    </p>
  );
};

export default P;
