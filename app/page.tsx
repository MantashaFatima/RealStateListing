import CTA from "./component/CTA";
import Hero from "./component/Hero";
import LatestPropertiesGrid from "./component/LatestPropertiesGrid";
import PropertiesByArea from "./component/PropertiesByArea";
import PropertyCarousel from "./component/PropertyCarousel";
import Services from "./component/Services";
import Footer from "./component/Footer";



export default function Home() {
  return (
    <main>
      <Hero />
      <PropertiesByArea />
      <Services/>
      <LatestPropertiesGrid/>
      <PropertyCarousel/>
      <CTA/>
      <Footer/>
     
    </main>
  );
}
