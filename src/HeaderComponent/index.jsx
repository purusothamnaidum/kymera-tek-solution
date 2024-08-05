import AboutUs from "./Aboutus";
import ChooseUs from "./Choose";
import QuestionAnswer from "./FAQ";
import ImageComponent from "./Home";
import Services from "./Sevices";
import TestimonialSlider from "./Testimonial";
import TrainerProfiles from "./TrainerProfiles";

const HomePage = () => {
    return (
      <div>
       <ImageComponent/>
       <AboutUs/> 
       <Services/> 
        <ChooseUs/> 
       {/* <TrainerProfiles/>  */}
       <TestimonialSlider/>  
       <QuestionAnswer/>      
      </div>
    );
  };
  
  export default HomePage;
  