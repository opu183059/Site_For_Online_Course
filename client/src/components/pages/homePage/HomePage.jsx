import Banner from "./Banner";
import Business from "./Business";
import Classes from "./Classes";
import Contact from "./Contact";
import Instructor from "./Instructor";
import Pricing from "./Pricing";
import Review from "./Review";
import Showcase from "./Showcase";
import WorkingProcess from "./WorkingProcess";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Showcase></Showcase>
      <Classes></Classes>
      <WorkingProcess></WorkingProcess>
      <Pricing></Pricing>
      <Business></Business>
      <Instructor></Instructor>
      <Review></Review>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
