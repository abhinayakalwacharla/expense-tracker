import React, { useEffect, useState } from "react";
import API from "../../services/api";

const ExpenseList = () => {
const [expenses, setExpenses] = useState([]);

useEffect(() => {
    fetchExpenses();
}, []);

const fetchExpenses = async () => {
    try {
    const res = await API.get("/expenses");
    setExpenses(res.data);
    } catch (error) {
    console.error(error);
    }
};

return (
    <div>
    <h4>All Expenses</h4>
    <ul className="list-group">
        {expenses.map((exp, index) => (
        <li key={index} className="list-group-item">
            {exp.title} - ₹{exp.amount}
        </li>
        ))}
    </ul>
    </div>
);
};

export default ExpenseList;
