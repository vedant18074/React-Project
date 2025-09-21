import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    closeSidebar();
    navigate(path);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <ul>
          <li onClick={() => handleNavigate("/")}>Dashboard</li>
          <li onClick={() => handleNavigate("/add-expense")}>Add Expense</li>
          <li onClick={() => handleNavigate("/calculator")}>Calculator</li>
          <li onClick={() => handleNavigate("/transaction")}>Transaction</li>
          <li onClick={() => handleNavigate("/profile")}>Profile</li>
        </ul>
      </div>
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}
    </>
  );
};

export default Sidebar;
