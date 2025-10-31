import React, { useState } from "react";
import API from "../../services/api";

const ExpenseForm = () => {
const [expense, setExpense] = useState({ title: "", amount: "" });
const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await API.post("/expenses", expense);
    alert("Expense added successfully!");
    } catch (error) {
    console.error(error);
    alert("Failed to add expense.");
    }
};

return (
    <form onSubmit={handleSubmit} className="mb-4">
    <input
        type="text"
        name="title"
        placeholder="Expense Title"
        onChange={handleChange}
        className="form-control mb-2"
    />
    <input
        type="number"
        name="amount"
        placeholder="Amount"
        onChange={handleChange}
        className="form-control mb-2"
    />
    <button className="btn btn-primary">Add Expense</button>
    </form>
);
};

export default ExpenseForm;
