import TopBar from "../component/TopBar";
import Header from "../component/Header";
import PropertiesHero from "../component/PropertiesHero";
import PropertiesFilterBar from "../component/PropertiesFilterBar";
import PropertyListingCard from "../component/PropertyListingCard";
import PropertiesPagination from "../component/PropertiesPagination";
import PropertiesFooter from "../component/PropertiesFooter";

export default function PropertiesPage() {
  return (
    <main>
      <TopBar email="Email us at: hello@gmail.com" phone="+1 234 567 890" />
      <Header activePage="PROPERTIES" showSearch subtitle />
      <PropertiesHero />
      <PropertiesFilterBar />

      <section className="bg-[#f8f9fa] py-10">
        <div className="mx-auto max-w-[1170px] px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, index) => (
              <PropertyListingCard key={index} />
            ))}
          </div>
          <PropertiesPagination />
        </div>
      </section>
      <PropertiesFooter />
    </main>
  );
}
