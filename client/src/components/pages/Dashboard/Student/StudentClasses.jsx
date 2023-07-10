import ClassesRow from "./ClassesRow";

const StudentClasses = () => {
  return (
    <div>
      <div className="ml-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left">
            <tr className="text-sm">
              <th className="p-3 bg-slate-200 rounded-tl-2xl">Course ID</th>
              <th className="p-3 bg-slate-200">Course Name</th>
              <th className="p-3 bg-slate-200">Instructor</th>
              <th className="p-3 bg-slate-200">Date</th>
              <th className="p-3 bg-slate-200">Course Fee</th>
              <th className="p-3 bg-slate-200">Status</th>
              <th className="p-3 bg-slate-200 rounded-tr-2xl">Delete</th>
            </tr>
            <tbody>
              <ClassesRow></ClassesRow>
              <ClassesRow></ClassesRow>
              <ClassesRow></ClassesRow>
              <ClassesRow></ClassesRow>
              <ClassesRow></ClassesRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentClasses;
