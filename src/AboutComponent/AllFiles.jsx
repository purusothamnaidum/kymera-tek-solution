import { Helmet } from "react-helmet";
import FeaturedClients from "./ClientList";

import ContactSection from "./ContactSection";
import AboutContainer from "./First";
import CompanyStats from "./Stats";
import CompanyVision from "./Vision";
import WhoWeAre from "./WhoWe";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
      </Helmet>
      <AboutContainer />
      <WhoWeAre />
      <CompanyStats />
      <CompanyVision />
      <FeaturedClients />
      <ContactSection />
    </>
  );
};

export default AboutUs;
