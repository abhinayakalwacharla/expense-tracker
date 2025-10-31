import React from "react";

function ExpenseList() {
    const dummyExpenses = [
    { title: "Groceries", amount: 500 },
    { title: "Internet Bill", amount: 800 },
];
return (
    <div>
    <h4>Expenses</h4>
    <ul className="list-group">
        {dummyExpenses.map((exp, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between">
            <span>{exp.title}</span>
            <span>₹{exp.amount}</span>
        </li>
        ))}
    </ul>
    </div>
);
}

export default ExpenseList;
