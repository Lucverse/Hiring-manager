import BenefitsSection from "./Benefits/BenefitsSection";
import Footer from "./Footer/Footer";
import GridDiv from "./GridDiv/GridDiv";
import Header from "./Header/Header";
import "./home.css";
import KeyFeatures from "./KeyFeatures/KeyFeatures";

function Home() {
  return (
    <div className="home">
      <Header />
      <GridDiv />
      <KeyFeatures />
      <GridDiv />
      <BenefitsSection />
      <Footer />
    </div>
  );
}
export default Home;
