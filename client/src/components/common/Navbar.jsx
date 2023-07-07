import { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../provider/Authprovider";
import { Avatar } from "@mui/material";
const Navbar = () => {
  const [isActive, setActive] = useState("false");
  const { user, userSignOut } = useContext(Authcontext);
  const navigate = useNavigate();
  const handleToggle = () => {
    setActive(!isActive);
  };

  const signOut = () => {
    userSignOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <nav className="bg-gray-100 fixed w-full z-50 shadow-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* <!-- logo --> */}
              <div>
                <Link
                  to={"/"}
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="font-bold">COURSERA</span>
                </Link>
              </div>

              {/* <!-- primary nav --> */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Business
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Teach
                </a>
                {user && (
                  <Link
                    to={"/dashboard"}
                    className="py-5 px-3 text-gray-700 hover:text-gray-900"
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            </div>

            {/* <!-- secondary nav --> */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="relative flex mr-3 items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
              <AiOutlineShoppingCart size={35}></AiOutlineShoppingCart>
              {user ? (
                <>
                  {/* <Link to={""} className="py-5 px-3">
                    {user.displayName}
                  </Link> */}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://i.ibb.co/ZS3N2jJ/OIP-3.jpg"
                    className=""
                  />
                  <button
                    onClick={signOut}
                    className="py-2 px-3 bg-blue-500 text-white rounded transition duration-300"
                  >
                    Signout
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/login"} className="py-5 px-3">
                    Login
                  </Link>
                  <Link
                    to={"/signup"}
                    className="py-2 px-3 bg-blue-500 text-white rounded transition duration-300"
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>

            {/* <!-- mobile button goes here --> */}
            <div onClick={handleToggle} className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- mobile menu --> */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-blue-500 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full block"
        }  md:hidden transition duration-200 ease-in-out`}
      >
        <div className={`mobile-menu  md:hidden`}>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Features
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Pricing
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
