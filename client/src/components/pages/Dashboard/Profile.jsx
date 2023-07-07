import { FaChalkboardTeacher } from "react-icons/fa";

import { SiGoogleclassroom } from "react-icons/si";
import { GrCertificate } from "react-icons/gr";
import { useContext } from "react";
import { Authcontext } from "../../../provider/Authprovider";
import Swal from "sweetalert2";

const save = () => {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};
const Profile = () => {
  const { role } = useContext(Authcontext);
  return (
    <div className="ml-4">
      <div className="bg-gray-100 overflow-hidden shadow-xl relative -mt-1 rounded-xl p-5 flex gap-8">
        <img
          src="https://i.ibb.co/ZS3N2jJ/OIP-3.jpg"
          alt=""
          className="rounded-xl w-80 max-h-80"
        />
        <div className="absolute -right-5 top-3 shadow-lg shadow-blue-400 hover:shadow-blue-500 cursor-default bg-blue-600 w-32 rotate-[35deg] text-gray-100">
          <p>{role}</p>
        </div>
        <div className="text-left text-xl flex flex-col justify-center">
          <p className="mb-2">
            <span className="text-blue-800 font-semibold">Name:</span> Asif uz
            zaman
          </p>

          <p className="mb-2">
            <span className="text-blue-800 font-semibold">Email:</span>{" "}
            asifctg@gmail.com
          </p>

          <p className="mb-2">
            <span className="text-blue-800 font-semibold">Mobile:</span> +880
            154 5454 454
          </p>

          <p className="mb-2">
            <span className="text-blue-800 font-semibold">Degree:</span> HSC
          </p>

          <p className="mb-2">
            <span className="text-blue-800 font-semibold">Institude:</span>{" "}
            Chittagong College, Chittagong
          </p>
        </div>
      </div>
      {role == "student" && (
        <div className="mt-8">
          <div className="md:flex mx-auto justify-between">
            <div className="flex gap-5 bg-blue-600/10 shadow-lg hover:shadow-md items-center cursor-pointer p-10 rounded-lg transition-all duration-300 group">
              <div className="group-hover:rotate-[360deg] duration-500">
                <SiGoogleclassroom size={35}></SiGoogleclassroom>
              </div>
              <div className="text-left flex gap-3 items-center">
                <h1 className="text-indigo-600 text-5xl font-extrabold">10</h1>
                <p className="text-sm">
                  Courses <br /> Completed
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center bg-blue-600/10 shadow-lg hover:shadow-md cursor-pointer p-10 rounded-lg transition-all duration-300 group">
              <div className="group-hover:rotate-[360deg] duration-500">
                <FaChalkboardTeacher size={35}></FaChalkboardTeacher>
              </div>
              <div className="text-left flex gap-3 items-center">
                <h1 className="text-indigo-600 text-5xl font-extrabold">17</h1>
                <p className="text-sm">
                  Assignments <br /> Done
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center bg-blue-600/10 shadow-lg hover:shadow-md cursor-pointer p-10 rounded-lg transition-all duration-300 group">
              <div className="group-hover:rotate-[360deg] duration-500">
                <GrCertificate size={35}></GrCertificate>
              </div>
              <div className="text-left flex gap-3 items-center">
                <h1 className="text-indigo-600 text-5xl font-extrabold">25</h1>
                <p className="text-sm">
                  Certificates <br /> Earned
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-gray-100 shadow-xl mt-8 rounded-xl text-left">
        <form
          action=""
          noValidate=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full">
              <h2 className="text-xl text-blue-800 font-semibold">
                Edit Your Profile
              </h2>
              <div className="col-span-full">
                <label htmlFor="firstname" className="text-sm">
                  Name
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  placeholder="Akther uz zaman"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="sellerEmail" className="text-sm">
                  Email
                </label>
                <input
                  readOnly
                  id="Email"
                  type="email"
                  placeholder="asif@gmail.com"
                  className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="sellerEmail" className="text-sm">
                  Mobile
                </label>
                <input
                  readOnly
                  id="mobile"
                  type="text"
                  placeholder="+880 154 5454 454"
                  className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="sellerEmail" className="text-sm">
                  Degree
                </label>
                <input
                  readOnly
                  id="degree"
                  type="text"
                  placeholder="HSC"
                  className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="sellerEmail" className="text-sm">
                  Institude
                </label>
                <input
                  readOnly
                  id="institude"
                  type="text"
                  placeholder="Chittagong College, Chittagong"
                  className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="photoURL" className="text-sm">
                  Photo URL
                </label>
                <input
                  required
                  id="photoURL"
                  type="text"
                  placeholder="Photo URL"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full w-full text-left mt-3">
                <input
                  onClick={save}
                  type="submit"
                  value="Save Changes"
                  className="py-2 cursor-pointer px-3 bg-blue-500 text-white rounded transition duration-300"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Profile;
