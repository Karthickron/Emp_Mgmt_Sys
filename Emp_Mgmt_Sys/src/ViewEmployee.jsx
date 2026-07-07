import { useParams } from "react-router-dom";

const ViewEmployee = ({ employees }) => {
  const { id } = useParams();

  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return <h2 className="text-center mt-10">Employee Not Found</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Employee Details</h2>

      <p><b>Name:</b> {employee.name}</p>
      <p><b>Email:</b> {employee.email}</p>
      <p><b>Phone:</b> {employee.phone}</p>
      <p><b>Department:</b> {employee.department}</p>
      <p><b>Designation:</b> {employee.designation}</p>
      <p><b>Manager:</b> {employee.manager}</p>
      <p><b>Salary:</b> {employee.salary}</p>
      <p><b>Status:</b> {employee.employment_status}</p>
      <p><b>Address:</b> {employee.address}</p>
    </div>
  );
};

export default ViewEmployee;