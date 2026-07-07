import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditEmployee = ({ employees, setEmployees }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return <h2 className="text-center mt-10">Employee Not Found</h2>;
  }

  const [formData, setFormData] = useState(employee);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEmployees = employees.map((emp) =>
      emp.id === Number(id) ? formData : emp
    );

    setEmployees(updatedEmployees);
    navigate("/employees");
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white shadow p-6 rounded">
      <h2 className="text-2xl font-bold mb-4">Edit Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 w-full mb-3"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 w-full mb-3"
        />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-3 w-full mb-3"
        />

        <button className="bg-blue-600 text-white px-5 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;