import React from "react";

interface IconProps {
  color: "default" | "black";
}
const Icon = ({ color }: IconProps) => {
  return (
    <svg
      className={`h-2 w-2 ${
        color === "default" ? "bg-light" : "bg-black"
      } rounded-full`}
    />
  );
};

export default Icon;
