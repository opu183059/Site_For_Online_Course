import { Outlet } from "react-router-dom";
import "./App.css";
import FooterTailwind from "./components/common/FooterTailwind";
import Navbar from "./components/common/Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FooterTailwind></FooterTailwind>
    </>
  );
}

export default App;
