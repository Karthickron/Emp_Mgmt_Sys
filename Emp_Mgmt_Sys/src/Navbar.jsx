import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700 tracking-wide">
          Employee Management System
        </h1>

        {/* Menu */}
        <div className="flex items-center space-x-6">
         <NavLink to="/">Dashboard</NavLink>

        <NavLink to="/employees">Employee List</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;