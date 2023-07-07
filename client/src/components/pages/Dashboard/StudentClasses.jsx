const StudentClasses = () => {
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left">
            <thead className="dark:bg-gray-700">
              <tr className="">
                <th className="p-3">Course ID</th>
                <th className="p-3">Course Name</th>
                <th className="p-3">Instructor</th>
                <th className="p-3">Date</th>
                <th className="p-3">Course Fee</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Python</p>
                </td>
                <td className="p-3">
                  <p>Akther uzzaman</p>
                  <p className="dark:text-gray-400">akctg@gmail.com</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="dark:text-gray-400">Tuesday</p>
                </td>
                <td className="p-3">
                  <p>800</p>
                </td>

                <td className="p-3">
                  <span className=" cursor-pointer px-3 py-1 font-semibold rounded-md dark:bg-blue-400 dark:text-gray-900">
                    <span>Pay</span>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>React</p>
                </td>
                <td className="p-3">
                  <p>Akther uzzaman</p>
                  <p className="dark:text-gray-400">akctg@gmail.com</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="dark:text-gray-400">Friday</p>
                </td>
                <td className="p-3">
                  <p>202</p>
                </td>

                <td className="p-3 ">
                  <span className=" cursor-pointer px-3 py-1 font-semibold rounded-md dark:bg-blue-400 dark:text-gray-900">
                    <span>Pay</span>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>JavaScript</p>
                </td>
                <td className="p-3">
                  <p>Akther uzzaman</p>
                  <p className="dark:text-gray-400">akctg@gmail.com</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="dark:text-gray-400">Friday</p>
                </td>
                <td className="p-3">
                  <p>600</p>
                </td>

                <td className="p-3 ">
                  <span className=" cursor-pointer px-3 py-1 font-semibold rounded-md dark:bg-blue-400 dark:text-gray-900">
                    <span>Pay</span>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Python</p>
                </td>
                <td className="p-3">
                  <p>Akther uzzaman</p>
                  <p className="dark:text-gray-400">akctg@gmail.com</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="dark:text-gray-400">Friday</p>
                </td>
                <td className="p-3">
                  <p>20</p>
                </td>
                <td className="p-3 ">
                  <span className=" cursor-pointer px-3 py-1 font-semibold rounded-md dark:bg-blue-400 dark:text-gray-900">
                    <span>Pay</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentClasses;
