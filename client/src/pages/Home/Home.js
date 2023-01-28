import { Helmet } from "react-helmet";
import BookTable from "../../components/BookTable";
import Cards from "../../components/Cards";
import Discover from "../../components/Discover";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";



function Home() {
  return (
    <div>
      <Helmet>
      <title>Colorflib | Free Boostrap</title>
      </Helmet>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Discover/>
      <Cards/>
      <BookTable/>
      <Footer/>
    </div>
  );
}

export default Home;
