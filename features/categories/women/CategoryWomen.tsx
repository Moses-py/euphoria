import Title from "@/components/title/Title";
import Card from "../components/Card";

const women_category = [
  {
    type: "Hoodies & Sweatshirts",
    img: "category_women_1",
  },
  {
    type: "Coats & Parkas",
    img: "category_women_2",
  },
  {
    type: "Tees & T-shirts",
    img: "category_women_3",
  },
  {
    type: "Boxers",
    img: "category_women_4",
  },
];

const CategoryWomen = () => {
  return (
    <section className="mt-[5rem] p-5">
      <div className="container">
        <Title>Categories for women</Title>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[2rem] mt-[2rem] md:mt-[3rem]">
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
