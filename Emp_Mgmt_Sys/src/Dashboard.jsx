import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = ({ employees }) => {

  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (emp) => emp.employment_status === "Active"
  ).length;

  const retiredEmployees = employees.filter(
    (emp) => emp.employment_status === "Retired"
  ).length;

   const employeesOnLeave = employees.filter(
    (emp) => emp.employment_status === "On Leave"
  ).length;

   const resignedEmployees = employees.filter(
    (emp) => emp.employment_status === "Resigned"
  ).length;

  const totalDepartments = new Set(
    employees.map((emp) => emp.department)
  ).size;

  const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);

  const newlyJoined = employees.filter((emp) => {
    const [day, month, year] = emp.joining_date.split(".");

    const joiningDate = new Date(year, month - 1, day);

    return joiningDate >= lastMonth;
    }).length;

  return (
    <div>
        <div className="bg-white rounded-xl shadow-md p-6 flex justify-evenly items-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-700">Employee Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-500">Total Employees</p>
            <h2 className="text-3xl font-bold">{totalEmployees}</h2>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-500">Active Employees</p>
            <h2 className="text-3xl font-bold text-green-600">{activeEmployees}</h2>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-500">On Leave</p>
            <h2 className="text-3xl font-bold text-yellow-500">{employeesOnLeave}</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-500">Retired Employees</p>
            <h2 className="text-3xl font-bold text-blue-600">{retiredEmployees}</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-500">Resigned Employees</p>
            <h2 className="text-3xl font-bold text-blue-600">{resignedEmployees}</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-500">Total Departments</p>
            <h2 className="text-3xl font-bold text-blue-600">{totalDepartments}</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-500">New Joinees</p>
            <h2 className="text-3xl font-bold text-blue-600">{newlyJoined}</h2>
        </div>
</div>
</div>
</div>
     
  );
};

export default Dashboard;