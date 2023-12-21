import DetailsPages from "./home/DetailsPages";
import Features from "./home/Features";
import Footer from "./home/Footer";
import Header from "./home/Header";
import HeaderLayout from "./home/HeaderLayout";
import MasonaryCard from "./home/MasonaryCard";
import MobileOptimized from "./home/MobileOptimized";
import ShopPages from "./home/ShopPages";
import Demos from "./home/demosBuilt/Demos";

export default function Home() {
  return (
    <main>
      <Header />
      <Demos />
      <ShopPages />
      <DetailsPages />
      <MasonaryCard />
      <HeaderLayout />
      <MobileOptimized />
      <Features />
      <Footer />
    </main>
  );
}
