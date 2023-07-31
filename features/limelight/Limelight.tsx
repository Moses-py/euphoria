import Title from "@/components/title/Title";
import ProductCard, {
  ProductCardProps,
} from "@/components/product/ProductCard";

const limelights: ProductCardProps[] = [
  {
    name: "Black sweatshirt",
    price: "59.99",
    img: "/figma/limelight/limelight_1",
    brand: "H&M",
  },
  {
    name: "Line pattern black",
    price: "79.99",
    img: "/figma/limelight/limelight_2",
    brand: "Levi's",
  },
  {
    name: "Black shorts",
    price: "99.99",
    img: "/figma/limelight/limelight_3",
    brand: "Nike",
  },
  {
    name: "Lavendar hoodie",
    price: "109.99",
    img: "/figma/limelight/limelight_4",
    brand: "US Polo",
  },
];
const Limelight = () => {
  return (
    <section className="mt-[5rem] p-4">
      <div className="sm:container">
        <Title>In the limelight</Title>

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-[1rem] xs:gap-[2rem] mt-[2rem] md:mt-[3rem]">
          {limelights.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.img}
                brand={item.brand}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Limelight;
