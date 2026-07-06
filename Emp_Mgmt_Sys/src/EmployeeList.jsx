import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const EmployeeList = ({ employees, setEmployees }) => {
  const navigate = useNavigate();
 
 const handleView = (employee) => {
    console.log("View:", employee);
  };
 
  const handleEdit = (employee) => {
    console.log("Edit:", employee);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    
    
    <div className="max-w-6xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">
        Employee List
      </h2>
      <div className="flex justify-between items-center mb-6">

      <button
        onClick={() => navigate("/add-employee")}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        + Add Employee
      </button>
    </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="border-b hover:bg-gray-100 transition"
            >
              <td className="p-3">{employee.id}</td>
              <td className="p-3">{employee.name}</td>
              <td className="p-3 capitalize">{employee.department}</td>

              <td className="p-3 text-center">
                <button
                  onClick={() => handleView(employee)}
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
                >
                  View
                </button>

                <button
                  onClick={() => handleEdit(employee)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(employee.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;