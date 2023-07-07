import { FaChalkboardTeacher } from "react-icons/fa";

import { SiGoogleclassroom } from "react-icons/si";
import { GrCertificate } from "react-icons/gr";

const Profile = () => {
  return (
    <div className="ml-4">
      <div className="bg-gray-100 shadow-xl -mt-1 rounded-xl p-5 flex gap-8">
        <img
          src="https://i.ibb.co/ZS3N2jJ/OIP-3.jpg"
          alt=""
          className="rounded-xl w-80 max-h-80"
        />
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
      <div className="bg-gray-100 shadow-xl mt-8 rounded-xl text-left">
        <form
          action=""
          noValidate=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="text-xl">Edit Your Profile</h2>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full">
                <label htmlFor="firstname" className="text-sm">
                  Toy name
                </label>
                <input
                  required
                  id="toyname"
                  type="text"
                  placeholder="Toy Name"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="sellerName" className="text-sm">
                  Seller Name
                </label>
                <input
                  readOnly
                  id="sellerName"
                  type="text"
                  placeholder="Seller Name"
                  className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="sellerEmail" className="text-sm">
                  Seller Email
                </label>
                <input
                  readOnly
                  id="sellerEmail"
                  type="email"
                  placeholder="Seller Email "
                  className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full -mt-3 text-sm">
                <p>
                  <span className="text-yellow-400">Note:</span> Seller name and
                  email will be as your seller profile
                </p>
              </div>
              <div className="col-span-full">
                <label htmlFor="photoURL" className="text-sm">
                  Photo URL
                </label>
                <input
                  required
                  id="photoURL"
                  type="text"
                  placeholder="Give Photo URL"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Price" className="text-sm">
                  Price
                </label>
                <input
                  required
                  id="Price"
                  type="number"
                  placeholder="Price"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Rating" className="text-sm">
                  Rating
                </label>
                <input
                  required
                  id="Rating"
                  type="text"
                  placeholder="Ratings"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Available" className="text-sm">
                  Available
                </label>
                <input
                  required
                  id="Available"
                  type="number"
                  placeholder="Total Available"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="description" className="text-sm">
                  Description
                </label>
                {/* <textarea className="textarea" placeholder="Details"></textarea> */}
                <textarea
                  required
                  id="description"
                  type="text"
                  placeholder="Description"
                  className="textarea w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full w-full text-right mt-3">
                <input
                  type="submit"
                  className="btn bg-amber-600 border-0 text-white"
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
