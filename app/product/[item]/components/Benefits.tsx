import Image from "next/image";

interface BenefitsProps {
  icon: string;
  text: string;
}

const Benefits = ({ icon, text }: BenefitsProps) => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <Image src={`/icons/${icon}.png`} alt={""} width={40} height={40} />
        <p className="text-lg font-sans text-primary font-light">{text}</p>
      </div>
    </>
  );
};

export default Benefits;
