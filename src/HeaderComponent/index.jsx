import AboutUs from "./Aboutus";
import ChooseUs from "./Choose";
import QuestionAnswer from "./FAQ";
import ImageComponent from "./Home";
import Services from "./Sevices";
import TestimonialSlider from "./Testimonial";

const HomePage = () => {
  return (
    <div>
      <ImageComponent />
      <AboutUs />
      <Services />
      <ChooseUs />
      <TestimonialSlider />
      <QuestionAnswer />
    </div>
  );
};

export default HomePage;
