import Image from "next/image";
import React from "react";

interface IconProps {
  icon: string;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <Image src={icon} alt={icon} width={16} height={16} />;
};

export default Icon;
