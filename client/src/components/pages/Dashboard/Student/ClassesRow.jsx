const ClassesRow = () => {
  return (
    <>
      <tr className="border-b border-opacity-20 bg-gray-50">
        <td className="p-3">
          <p>97412378923</p>
        </td>
        <td className="p-3">
          <p>Python</p>
        </td>
        <td className="p-3">
          <p>Akther uzzaman</p>
          <p className="">akctg@gmail.com</p>
        </td>
        <td className="p-3">
          <p>01 Feb 2022</p>
          <p className="">Tuesday</p>
        </td>
        <td className="p-3">
          <p>800</p>
        </td>

        <td className="p-3">
          <span className=" cursor-pointer px-3 py-1 font-semibold rounded-md dark:bg-blue-400 dark:text-gray-900">
            <span>Pay</span>
          </span>
        </td>
        <td className="p-3">
          <span className=" cursor-pointer px-3 py-1 font-semibold rounded-md dark:bg-red-400 dark:text-gray-950 hover:bg-red-800 hover:text-gray-300">
            <span>Delete</span>
          </span>
        </td>
      </tr>
    </>
  );
};

export default ClassesRow;
