import FAQ from "../components/FAQ";
import FeaturesContainer from "../components/FeaturesContainer";
import HalfMoon from "../components/HalfMoon";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import LatestBlogs from "../components/LatestBlogs";
import Navigation from "../components/Navigation";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <FeaturesContainer />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <LatestBlogs />
      <HalfMoon />
    </div>
  );
};

export default Home;
