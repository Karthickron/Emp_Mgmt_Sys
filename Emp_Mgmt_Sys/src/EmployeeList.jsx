import { useState } from "react"
import { useNavigate } from "react-router-dom"


const EmployeeList = ({ employees, setEmployees }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
 
const handleView = (employee) => {
  navigate(`/view/${employee.id}`);
};

const handleEdit = (employee) => {
  navigate(`/edit/${employee.id}`);
};

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  
    let filteredEmployees = [...employees];

    if (search.trim() !== "") {
      filteredEmployees = filteredEmployees.filter((emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filteredEmployees.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sortOrder === "desc") {
      filteredEmployees.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

  return (
    
    
    <div className="max-w-6xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">
        Employee List
      </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

  <button
    onClick={() => navigate("/add-employee")}
    className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
  >
    + Add Employee
  </button>

  <div className="flex gap-3 w-full md:w-auto">

    <input
      type="text"
      placeholder="Search Employee..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:ring-2 focus:ring-blue-500 outline-none"
    />

    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-2"
    >
      <option value="">Sort</option>
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
    </select>

  </div>

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
          {filteredEmployees.map((employee) => (
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