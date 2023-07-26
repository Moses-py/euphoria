import Title from "@/components/title/Title";
import Card from "../components/Card";

const women_category = [
  {
    type: "Hoodies",
    img: "category_women_1",
  },
  {
    type: "Parkas",
    img: "category_women_2",
  },
  {
    type: "Tops",
    img: "category_women_3",
  },
  {
    type: "Boxers",
    img: "category_women_4",
  },
];

const CategoryWomen = () => {
  return (
    <section className="mt-[5rem] p-4">
      <div className="container">
        <Title>Categories for women</Title>

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-[1rem] xs:gap-[2rem] mt-[2rem] md:mt-[3rem]">
          {women_category.map((item, index) => {
            return (
              <Card
                key={index}
                type={item.type}
                img={item.img}
                category="women"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryWomen;
