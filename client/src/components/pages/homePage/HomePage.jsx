import Banner from "./Banner";
import Business from "./Business";
import Classes from "./Classes";
import Instructor from "./Instructor";
import Pricing from "./Pricing";
import Review from "./Review";
import Showcase from "./Showcase";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Showcase></Showcase>
      <Classes></Classes>
      <Pricing></Pricing>
      <Business></Business>
      <Instructor></Instructor>
      <Review></Review>
    </div>
  );
};

export default HomePage;
