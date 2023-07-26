import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navigations/Navbar";

import About from "@/features/about/About";
import Arrival from "@/features/arrival/Arrival";
import Brand from "@/features/brands/Brand";
import CategoryMen from "@/features/categories/men/CategoryMen";
import CategoryWomen from "@/features/categories/women/CategoryWomen";
import Feedback from "@/features/feedback/Feedback";
import Hero from "@/features/hero/Hero";
import Limelight from "@/features/limelight/Limelight";
import SavingZone from "@/features/savings_zone/SavingZone";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Arrival />
        <SavingZone />
        <CategoryMen />
        <CategoryWomen />
        <Brand />
        <Limelight />
        <Feedback />
        <Footer />
      </div>
    </main>
  );
}
