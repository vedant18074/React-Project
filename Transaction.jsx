import React from "react";
import "./Transaction.css";

const Transaction = () => {
  return (
    <div className="transaction-history-container">
      <h2 className="transaction-title">📜 Transaction History</h2>

      {/* Search & Filter Bar */}
      <div className="transaction-controls">
        <input
          type="text"
          placeholder="🔍 Search transactions..."
          className="transaction-search"
        />
        <select className="transaction-filter">
          <option value="">All</option>
          <option value="success">Success</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      <div className="transaction-table-wrapper">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty rows for now */}
            <tr>
              <td colSpan="5" style={{ textAlign: "center", color: "#888" }}>
                No transactions available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
