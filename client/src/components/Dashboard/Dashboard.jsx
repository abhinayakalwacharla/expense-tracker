import React, { useState, useEffect } from "react";
import { getExpenses, addExpense, deleteExpense } from "../../services/api";


const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

useEffect(() => {
    fetchExpenses();
}, []);

const fetchExpenses = async () => {
    try {
    const res = await axios.get("/expenses");
    setExpenses(res.data);
    } catch (err) {
    console.error(err);
    }
};

const addExpense = async (e) => {
    e.preventDefault();
    try {
    await axios.post("/expenses", { title, amount });
    setTitle("");
    setAmount("");
    fetchExpenses();
    } catch (err) {
    console.error(err);
    }
};

const deleteExpense = async (id) => {
    try {
    await axios.delete(`/expenses/${id}`);
    fetchExpenses();
    } catch (err) {
    console.error(err);
    }
};

  // ✅ Calculate Total Balance
const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">Expense Tracker Dashboard</h2>

    <h4 className="text-success text-center mb-4">
        💰 Total Balance: ₹{total}
    </h4>

    <form onSubmit={addExpense} className="mb-4">
        <div className="row">
        <div className="col-md-5">
            <input
            type="text"
            placeholder="Expense title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
        </div>
        <div className="col-md-4">
            <input
            type="number"
            placeholder="Amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            />
        </div>
        <div className="col-md-3">
            <button type="submit" className="btn btn-primary w-100">
            Add Expense
            </button>
        </div>
        </div>
    </form>

    <table className="table table-bordered text-center">
        <thead>
        <tr>
            <th>Title</th>
            <th>Amount (₹)</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {expenses.map((exp) => (
            <tr key={exp._id}>
            <td>{exp.title}</td>
            <td>{exp.amount}</td>
            <td>
                <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteExpense(exp._id)}
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

export default Dashboard;
