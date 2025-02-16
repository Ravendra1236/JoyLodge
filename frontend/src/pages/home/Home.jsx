import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/featuredProperties";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="homeContainer">
        <Featured></Featured>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties></FeaturedProperties>
        <MailList></MailList>
        
      </div>
    </div>
  );
}

export default Home;
