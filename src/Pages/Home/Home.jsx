import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Review from "../../Components/Review/Review";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Banner />
      <Brands />
      <About />
      <Review />
    </div>
  );
};

export default Home;
