import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("/EmpList.json")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Dashboard employees={employees} />}
        />

        <Route
          path="/employees"
          element={
            <EmployeeList
              employees={employees}
              setEmployees={setEmployees}
            />
          }
        />

        <Route
          path="/add-employee"
          element={
            <AddEmployee
              employees={employees}
              setEmployees={setEmployees}
          />
        }
      />
      </Routes>
    </>
  );
}

export default App;