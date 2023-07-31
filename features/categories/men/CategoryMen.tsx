import Title from "@/components/title/Title";
import Card from "../components/Card";

const men_category = [
  {
    type: "Shirts",
    img: "category_men_1",
  },
  {
    type: "Printed T-shirts",
    img: "category_men_2",
  },
  {
    type: "Plain T-shirts",
    img: "category_men_3",
  },
  {
    type: "Polo T-shirts",
    img: "category_men_4",
  },
  {
    type: "Hoodies",
    img: "category_men_5",
  },
  {
    type: "Jeans",
    img: "category_men_6",
  },
  {
    type: "Active wear",
    img: "category_men_7",
  },
  {
    type: "Boxers",
    img: "category_men_8",
  },
];

const CategoryMen = () => {
  return (
    <section className="mt-[5rem] p-4">
      <div className="sm:container">
        <Title>Categories for men</Title>

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-[1rem] xs:gap-[2rem] mt-[2rem] md:mt-[3rem]">
          {men_category.map((item, index) => {
            return (
              <Card
                key={index}
                type={item.type}
                img={item.img}
                category="men"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryMen;
