import React, { useState } from "react";

function ExpenseForm() {
const [expense, setExpense] = useState({ title: "", amount: "" });

const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Added: ${expense.title} - ₹${expense.amount}`);
    setExpense({ title: "", amount: "" });
};

return (
    <form onSubmit={handleSubmit} className="mb-4">
    <input
        type="text"
        placeholder="Expense Title"
        value={expense.title}
        onChange={(e) => setExpense({ ...expense, title: e.target.value })}
        className="form-control mb-2"
        required
    />
    <input
        type="number"
        placeholder="Amount"
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        className="form-control mb-2"
        required
    />
    <button type="submit" className="btn btn-primary w-100">Add Expense</button>
    </form>
);
}

export default ExpenseForm;
