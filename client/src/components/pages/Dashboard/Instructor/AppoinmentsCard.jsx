import { AiFillEye } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const AppoinmentsCard = () => {
  return (
    <div className="my-5 flex justify-between items-center shadow-lg hover:shadow-xl p-4 rounded-xl bg-slate-50">
      <div className="left flex gap-4">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          className="w-24 h-28 rounded-lg"
        />
        <div className="details text-left">
          <h3 className="text-blue-600 font-bold text-lg mb-1">
            Tyron Roberts
          </h3>
          <p>14 August, 10.00 AM</p>
          <p>tyron@gmail.com</p>
          <p>+880 1245 154</p>
        </div>
      </div>
      <div className="right">
        <div className="flex gap-4 font-medium">
          <button className="flex items-center gap-1 bg-teal-100 text-teal-600 px-3 py-1 rounded-md">
            <AiFillEye></AiFillEye> View
          </button>
          <button className="flex items-center gap-1 bg-green-100 text-green-600 px-3 py-1 rounded-md">
            <BsCheckLg></BsCheckLg> Accept
          </button>
          <button className="flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1 rounded-md">
            <RxCross2></RxCross2> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentsCard;
