import Lottie from "lottie-react";
import showAnimation from "../../assets/Animation/43391-404-error-page-not-found-confused-robot.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Lottie animationData={showAnimation} loop={true} className="w-4/12" />
      <h1 className="text-4xl text-blue-600 font-bold">Page not found</h1>
      <Link
        to={"/"}
        className="mt-4 text-gray-100 hover:bg-blue-900 transition-all duration-300 bg-blue-500 px-4 py-2 rounded-md"
      >
        Goto Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
