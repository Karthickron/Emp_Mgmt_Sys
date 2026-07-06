import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = ({ employees, setEmployees }) => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    department: "",
    designation: "",
    joining_date: "",
    manager: "",
    employment_type: "",
    salary: "",
    address: "",
    employment_status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: employees.length + 1,
      ...employee,
    };

    setEmployees([...employees, newEmployee]);

    navigate("/employees");
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-8">

      <h2 className="text-3xl font-bold mb-6">
        Add Employee
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-6"
      >

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={employee.phone}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <select
          name="department"
          value={employee.department}
          onChange={handleChange}
          className="border p-3 rounded"
        >
          <option value="">Select Department</option>
          <option>Technology</option>
          <option>HR</option>
          <option>Sales</option>
          <option>Marketing</option>
        </select>

        <select
          name="gender"
          value={employee.gender}
          onChange={handleChange}
          className="border p-3 rounded"
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
        </label>

        <input
            type="date"
            name="dob"
            value={employee.dob}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            Joining Date
        </label>

        <input
            type="date"
            name="dob"
            value={employee.joining_date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Designation <span className="text-red-500">*</span>
  </label>

    <select
        name="designation"
        value={employee.designation}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    >
        <option value="">Select Designation</option>
        <option value="Software Developer">Software Developer</option>
        <option value="Senior Software Developer">Senior Software Developer</option>
        <option value="Manager">Manager</option>
        <option value="Senior Manager">Senior Manager</option>
        <option value="Technology Architect">Technology Architect</option>
        <option value="Product Manager">Product Manager</option>
    </select>
    </div>

            <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            Manager <span className="text-red-500">*</span>
        </label>

        <input
            type="text"
            name="manager"
            value={employee.manager}
            onChange={handleChange}
            placeholder="Enter Manager Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        </div>

                <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            Employment Type <span className="text-red-500">*</span>
        </label>

        <select
            name="employment_type"
            value={employee.employment_type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
            <option value="">Select Employment Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contractual">Contractual</option>
        </select>
        </div>

                <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            Salary <span className="text-red-500">*</span>
        </label>

        <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            placeholder="Enter Salary"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        </div>

        <div className="md:col-span-2">
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Address <span className="text-red-500">*</span>
  </label>

  <textarea
    name="address"
    value={employee.address}
    onChange={handleChange}
    rows="4"
    placeholder="Enter Address"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
  />
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Employment Status <span className="text-red-500">*</span>
  </label>

  <select
    name="employment_status"
    value={employee.employment_status}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
  >
    <option value="">Select Status</option>
    <option value="Active">Active</option>
    <option value="Probation">Probation</option>
    <option value="On Leave">On Leave</option>
    <option value="Suspended">Suspended</option>
    <option value="Resigned">Resigned</option>
    <option value="Retired">Retired</option>
  </select>
</div>
        <button
          className="col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Save Employee
        </button>

      </form>

    </div>
  );
};

export default AddEmployee;