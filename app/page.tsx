import Title from "@/components/title/Title";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";

export default function Home() {
  return (
    <main className="p-4">
      <div>
        <H1>Best interest attires</H1>
        <H2>Big Saving Zone</H2>
        <H3>UPTO 50% OFF</H3>
        <P classname="font-[600]">UPTO 50% OFF</P>
        <Title>New Arrivals</Title>
        <Title>Big Saving Zone</Title>
      </div>
    </main>
  );
}
