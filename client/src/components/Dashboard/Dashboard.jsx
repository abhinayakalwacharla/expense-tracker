import React, { useEffect, useState } from "react";
import { getExpenses, addExpense, deleteExpense } from "../../services/api";

function Dashboard() {
    const [expenses, setExpenses] = useState([]);
    const [form, setForm] = useState({ title: "", amount: "", category: "" });

  // Fetch all expenses when the page loads
useEffect(() => {
    fetchExpenses();
}, []);

const fetchExpenses = async () => {
    const res = await getExpenses();
    setExpenses(res.data);
};

const handleSubmit = async (e) => {
    e.preventDefault();
    await addExpense(form);
    setForm({ title: "", amount: "", category: "" });
    fetchExpenses();
};

const handleDelete = async (id) => {
    await deleteExpense(id);
    fetchExpenses();
};

return (
    <div className="container mt-5">
    <h2>Expense Tracker</h2>

    <form onSubmit={handleSubmit} className="mb-3">
        <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="form-control mb-2"
        required
        />
        <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="form-control mb-2"
        required
        />
        <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="form-control mb-2"
        required
        />
        <button type="submit" className="btn btn-primary w-100">
        Add Expense
        </button>
    </form>

    <ul className="list-group">
        {expenses.map((exp) => (
        <li
            key={exp._id}
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            {exp.title} — ₹{exp.amount} ({exp.category})
            <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(exp._id)}
            >
            Delete
            </button>
        </li>
        ))}
    </ul>
    </div>
);
}

export default Dashboard;
