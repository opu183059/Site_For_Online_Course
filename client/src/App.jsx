import "./App.css";
// import Footer from "./components/common/Footer";
import FooterTailwind from "./components/common/FooterTailwind";
import Navbar from "./components/common/Navbar";
import HomePage from "./components/pages/homePage/HomePage";
// import NavbarWithMaterial from "./components/common/NavbarWithMaterial";
function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <NavbarWithMaterial></NavbarWithMaterial> */}
      <HomePage></HomePage>
      {/* <Footer></Footer> */}
      <FooterTailwind></FooterTailwind>
    </>
  );
}

export default App;
