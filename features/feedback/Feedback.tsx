import Title from "@/components/title/Title";
import Card from "../categories/components/Card";
import FeedbackCard from "./components/FeedbackCard";

const feedbacks = [
  {
    image: "feedback1",
    name: "Floyd Miles",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo quisquam iste possimus temporibus provident aliquid, earum corporis modi minima.",
  },
  {
    image: "feedback2",
    name: "Ronald Richards",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo quisquam iste possimus temporibus provident aliquid, earum corporis modi minima.",
  },
  {
    image: "feedback3",
    name: "Savannah Nguyen",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo quisquam iste possimus temporibus provident aliquid, earum corporis modi minima.",
  },
];

const Feedback = () => {
  return (
    <section className="mt-[5rem] p-5">
      <div className="sm:container">
        <Title>Feedback</Title>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[2rem] mt-[2rem] md:mt-[3rem]">
          {feedbacks.map((feedback, index) => {
            return (
              <FeedbackCard
                key={index}
                image={feedback.image}
                name={feedback.name}
                content={feedback.content}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
