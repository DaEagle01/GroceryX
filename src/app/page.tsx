import FlashSale from "@/components/FlashSale";
import Hero from "@/components/Hero";
import OurCustomerCompanies from "@/components/OurCustomerCompanies";
import PopularProducts from "@/components/PopularProducts";
import TopCategories from "@/components/TopCategories";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FlashSale />
      <TopCategories />
      <PopularProducts />
      <OurCustomerCompanies />
    </div>
  );
}
