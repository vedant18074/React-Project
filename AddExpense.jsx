import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./AddExpense.css"; // Import CSS file

export default function AddExpense() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState(""); // for "Other"
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate(); // ✅ Create navigation function

  const handleSave = () => {
    const finalAmount = amount === "Other" ? customAmount : amount;

    if (!title || !finalAmount || !category || !date) {
      alert("⚠️ Please fill all required fields.");
      return;
    }

    alert(
      `✅ Expense Added!\n\nTitle: ${title}\nAmount: ${finalAmount}\nCategory: ${category}\nDate: ${date}\nNotes: ${notes}`
    );
  };

  return (
    <div className="expense-container">
      <div className="expense-card">
        <h2 className="expense-title">Add Expense</h2>

        {/* Title */}
        <label>Title</label>
        <select value={title} onChange={(e) => setTitle(e.target.value)}>
          <option value="">Select Title</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
        </select>

        {/* Amount */}
        <label>Amount</label>
        <select value={amount} onChange={(e) => setAmount(e.target.value)}>
          <option value="">Select Amount</option>
          <option value="100">₹100</option>
          <option value="500">₹500</option>
          <option value="1000">₹1000</option>
          <option value="Other">Other</option>
        </select>

        {/* Show custom amount input if "Other" is selected */}
        {amount === "Other" && (
          <input
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
          />
        )}

        {/* Category */}
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Grocery">Grocery</option>
          <option value="Other">Other</option>
        </select>

        {/* Date */}
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Notes */}
        <label>Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter notes..."
        />

        {/* Buttons */}
        <div className="btn-group">
          <button className="btn-save" onClick={handleSave}>
            Save
          </button>
          <button
            className="btn-cancel"
            onClick={() => {
              setTitle("");
              setAmount("");
              setCustomAmount("");
              setCategory("");
              setDate("");
              setNotes("");
            }}
          >
            Cancel
          </button>

          {/* ✅ Back to Homepage Button */}
          <button className="btn-home" onClick={() => navigate("/")}>
            ⬅ Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
