import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Header({ toggleSidebar }) {
  const navigate = useNavigate();

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); 

    return () => clearInterval(timer); 
  }, []);

  return (
    <div className="header">
      <div
        className="left-section menu-logo"
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        onClick={() => toggleSidebar(true)}
      >
        <div className="menu-logo">
          <span className="menu-icon">≡</span>
          <span className="logo">📘 Expense Tracker</span>
        </div>
      </div>

      <div className="date-time">
        <div className="date">{dateTime.toLocaleDateString("en-GB")}</div>
        <div className="time">{dateTime.toLocaleTimeString()}</div>
      </div>

      <div className="nav-buttons">
        <button onClick={() => navigate("/login")}>Login/Register</button>
        <button onClick={() => navigate("/profile")}>Profile</button>
      </div>
    </div>
  );
}

function SummaryBoxes() {
  return (
    <div className="summary-boxes">
      <div className="box income">
        Total Income
        <br />
        Rs. 0
      </div>
      <div className="box expense">
        Total Expense
        <br />
        Rs. 0
      </div>
      <div className="box balance">
        Current Balance
        <br />
        Rs. 0
      </div>
    </div>
  );
}

function Chart() {
  return (
    <div className="chart-section">
      <div className="chart-title">Charts</div>
      <div className="charts">
        <div className="chart-box pie">Pie Chart: Expense by Category</div>
        <div className="chart-box line">Line Chart: Trends Over Time</div>
      </div>
    </div>
  );
}

function Actions() {
  const navigate = useNavigate();
  return (
    <div className="actions">
      <button className="action-btn" onClick={() => navigate("/add-expense")}>
        Add Expense
      </button>
      <button className="action-btn" onClick={() => navigate("/calculator")}>
        Calculator
      </button>
      <button className="action-btn" onClick={() => navigate("/transaction")}>
        Transactions
      </button>
    </div>
  );
}

function Transactions() {
  return (
    <div className="transactions">
      <div className="recent-title">
        <h3><center>Recent Transactions</center></h3>
      </div>
      <div className="transaction-table-header">
        <span>Title</span>
        <span>Amt</span>
        <span>Type</span>
        <span>Date</span>
        <span>Category</span>
        <span>Edit</span>
        <span>Delete</span>
      </div>
      
    </div>
  );
}


function Home({ toggleSidebar }) {
  return (
    <div className="Home">
      <Header toggleSidebar={toggleSidebar} />
      <SummaryBoxes />
      <Chart />
      <Actions />
      <Transactions />
    </div>
  );
}

export default Home;
