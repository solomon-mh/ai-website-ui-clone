import FAQs from "../components/FAQ";
import FeaturesContainer from "../components/FeaturesContainer";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import LatestBlogs from "../components/LatestBlogs";
import Navigation from "../components/Navigation";
import Pricing from "../components/Pricing";
// import TestimonialSection from "../components/TestimonialSection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <FeaturesContainer />
      <HowItWorks />
      <Testimonials />
      {/* <TestimonialSection /> */}
      <Pricing />
      <FAQs />
      <LatestBlogs />
      <Footer />
    </div>
  );
};

export default Home;
