import TopBar from "../component/TopBar";
import Header from "../component/Header";
import PropertiesHero from "../component/PropertiesHero";
import PropertiesFilterBar from "../component/PropertiesFilterBar";
import PropertyListingCard from "../component/PropertyListingCard";
import PropertiesPagination from "../component/PropertiesPagination";
import PropertiesFooter from "../component/PropertiesFooter";

const properties = [
  {
    image: "/whitehouse.jpg",
    price: "$590,693",
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    beds: 4,
    baths: 3,
    sqft: "2,096.00 ft",
    agent: "Janne Wilson",
    agentImage: "/whitehouse.jpg",
  },
  {
    image: "/house2.jpg",
    price: "$485,500",
    title: "123 OAK STREET, MIAMI FL 33101",
    beds: 3,
    baths: 2,
    sqft: "1,850.00 ft",
    agent: "John Smith",
    agentImage: "/house2.jpg",
  },
  {
    image: "/wishingtone.jpg",
    price: "$750,000",
    title: "456 MAPLE AVENUE, TAMPA FL 33602",
    beds: 5,
    baths: 4,
    sqft: "3,200.00 ft",
    agent: "Sarah Johnson",
    agentImage: "/wishingtone.jpg",
  },
  {
    image: "/lobby.jpg",
    price: "$620,000",
    title: "789 PINE ROAD, JACKSONVILLE FL 32202",
    beds: 4,
    baths: 3,
    sqft: "2,500.00 ft",
    agent: "Mike Davis",
    agentImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
  },
  {
    image: "/latesthouse.jpg",
    price: "$550,000",
    title: "321 ELM STREET, ORLANDO FL 32803",
    beds: 3,
    baths: 2,
    sqft: "1,920.00 ft",
    agent: "Emily Brown",
    agentImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  },
  {
    image: "/poolhouse.jpg",
    price: "$890,000",
    title: "654 CEDAR LANE, MIAMI FL 33109",
    beds: 4,
    baths: 3,
    sqft: "2,800.00 ft",
    agent: "David Wilson",
    agentImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
  },
  {
    image: "/whitehouse.jpg",
    price: "$475,000",
    title: "987 BIRCH WAY, TAMPA FL 33604",
    beds: 3,
    baths: 2,
    sqft: "1,750.00 ft",
    agent: "Lisa Anderson",
    agentImage: "/whitehouse.jpg",
  },
  {
    image: "/house2.jpg",
    price: "$680,000",
    title: "147 SPRINGFIELD AVE, ORLANDO FL 32806",
    beds: 4,
    baths: 3,
    sqft: "2,300.00 ft",
    agent: "Robert Taylor",
    agentImage: "/house2.jpg",
  },
  {
    image: "/wishingtone.jpg",
    price: "$720,000",
    title: "258 RIVER ROAD, JACKSONVILLE FL 32207",
    beds: 5,
    baths: 4,
    sqft: "3,100.00 ft",
    agent: "Jennifer Martinez",
    agentImage: "/wishingtone.jpg",
  },
];

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
            {properties.map((property) => (
              <PropertyListingCard key={property.title} {...property} />
            ))}
          </div>
          <PropertiesPagination />
        </div>
      </section>
      <PropertiesFooter />
    </main>
  );
}
