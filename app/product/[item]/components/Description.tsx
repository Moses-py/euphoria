import Title from "@/components/title/Title";
import Properties from "./Properties";
import Image from "next/image";

interface DescriptionProps {
  item: CollectionItem;
}
const Description = ({ item }: DescriptionProps) => {
  return (
    <>
      <section className="mt-[1rem] sm:container p-3 xl:p-[1.5rem]">
        <Title>Product Description</Title>
        <div className="grid md:grid-cols-2 gap-8 my-[1rem]">
          <div className="flex flex-col gap-8">
            <p className="text-lg font-sans text-primary font-regular tracking-wide">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              consequuntur in beatae eaque similique nam, est cum incidunt
              provident repellat saepe id. Temporibus corpori.
            </p>
            <div className="mt-4">
              <Properties
                fabric={item!.properties.fabric}
                pattern={item!.properties.pattern}
                fit={item!.properties.fit}
                style={item!.properties.style}
                neck={item!.properties.neck}
                sleeve={item!.properties.sleeve}
              />
            </div>
          </div>
          <div>
            <Image
              src={"/hero/quality.jpg"}
              alt={"quality image"}
              height={720}
              width={1280}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Description;
