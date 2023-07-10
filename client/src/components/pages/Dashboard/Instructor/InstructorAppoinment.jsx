import AppoinmentsCard from "./AppoinmentsCard";

const InstructorAppoinment = () => {
  return (
    <div className="ml-4">
      <h2 className="text-3xl font-bold text-left text-blue-600 bg-slate-50 rounded-lg p-3 shadow-lg">
        Appoinments
      </h2>
      <AppoinmentsCard></AppoinmentsCard>
      <AppoinmentsCard></AppoinmentsCard>
      <AppoinmentsCard></AppoinmentsCard>
      <AppoinmentsCard></AppoinmentsCard>
    </div>
  );
};

export default InstructorAppoinment;
