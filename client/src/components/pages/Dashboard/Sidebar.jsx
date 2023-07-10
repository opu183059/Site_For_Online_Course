import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineBars, AiOutlineHome } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { BsPersonVcard } from "react-icons/bs";
import { LuFolderEdit } from "react-icons/lu";
import { RiCalendarTodoLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { Authcontext } from "../../../provider/Authprovider";
const Sidebar = () => {
  const { userSignOut, role } = useContext(Authcontext);
  console.log(role);
  const [isActive, setActive] = useState("false");
  const navigate = useNavigate();
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogout = () => {
    userSignOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="bg-blue-500 text-gray-100 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold"></div>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:border-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden w-64 space-y-6 p-4 absolute inset-y-0 bg-gray-100 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out m-4 rounded-xl shadow-2xl hover:shadow-xl`}
      >
        <div>
          <div>
            <div>
              <div className="">
                <div className="relative h-28 flex justify-center w-full bg-[url('https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg')] bg-cover mb-12 rounded-t-xl rounded-b-md">
                  <img
                    className="absolute top-8 border-4 border-white mt-4 w-28 h-28 mx-2 rounded-full"
                    src="https://i.ibb.co/ZS3N2jJ/OIP-3.jpg"
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="mx-2 mt-2 cursor-default font-medium text-2xl">
                  {/* {user?.displayName} */}
                  Asif uz zaman
                </h4>
                {role == "Student" && (
                  <p className="mx-2 mt-1 cursor-default text-sm font-medium">
                    Student
                  </p>
                )}
                {role == "Instructor" && (
                  <p className="mx-2 mt-1 cursor-default text-sm font-medium">
                    Instructor
                  </p>
                )}
                {role == "Admin" && (
                  <p className="mx-2 mt-1 cursor-default text-sm font-medium">
                    Admin
                  </p>
                )}
              </div>
            </div>
          </div>
          {role == "Student" && (
            <div>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5 hover:text-gray-50 transition-colors duration-300 transform  hover:bg-blue-800  rounded-lg ${
                    isActive ? "bg-blue-800  text-white" : " "
                  }`
                }
              >
                <BsPersonVcard className="mr-4"></BsPersonVcard>
                My profile
              </NavLink>
              <NavLink
                to="/dashboard/StudentClass"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5 hover:text-gray-50 transition-colors duration-300 transform  hover:bg-blue-800  rounded-lg ${
                    isActive ? "bg-blue-800  text-white" : " "
                  }`
                }
              >
                <LuFolderEdit className="mr-4"></LuFolderEdit>
                Manage Class
              </NavLink>
            </div>
          )}
          {role == "Instructor" && (
            <div>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5 hover:text-gray-50 transition-colors duration-300 transform  hover:bg-blue-800  rounded-lg ${
                    isActive ? "bg-blue-800  text-white" : " "
                  }`
                }
              >
                <BsPersonVcard className="mr-4"></BsPersonVcard>
                My profile
              </NavLink>
              <NavLink
                to="/dashboard/Appoinments"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5 hover:text-gray-50 transition-colors duration-300 transform  hover:bg-blue-800  rounded-lg ${
                    isActive ? "bg-blue-800  text-white" : " "
                  }`
                }
              >
                <RiCalendarTodoLine className="mr-4"></RiCalendarTodoLine>
                Appoinments
              </NavLink>
              <NavLink
                to="/dashboard/StudentClass"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5 hover:text-gray-50 transition-colors duration-300 transform  hover:bg-blue-800  rounded-lg ${
                    isActive ? "bg-blue-800  text-white" : " "
                  }`
                }
              >
                <LuFolderEdit className="mr-4"></LuFolderEdit>
                Manage Class
              </NavLink>
            </div>
          )}
          {role == "Admin" && (
            <div>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5 hover:text-gray-50 transition-colors duration-300 transform  hover:bg-blue-800  rounded-lg ${
                    isActive ? "bg-blue-800  text-white" : " "
                  }`
                }
              >
                <BsPersonVcard className="mr-4"></BsPersonVcard>
                My profile
              </NavLink>
              <NavLink
                to="/dashboard/ManageAllClasses"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5 hover:text-gray-50 transition-colors duration-300 transform  hover:bg-blue-800  rounded-lg ${
                    isActive ? "bg-blue-800  text-white" : " "
                  }`
                }
              >
                <LuFolderEdit className="mr-4"></LuFolderEdit>
                All Classes
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <Link
            to={"/"}
            className="flex w-full items-center px-4 py-2 mt-5  hover:bg-blue-800 hover:text-gray-50 rounded-lg transition-colors duration-300 transform"
          >
            <AiOutlineHome></AiOutlineHome>
            <span className="mx-4 font-medium">Home</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 hover:bg-blue-800 hover:text-gray-50 rounded-lg transition-colors duration-300 transform "
          >
            <BiLogOutCircle></BiLogOutCircle>
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
