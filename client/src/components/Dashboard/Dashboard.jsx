import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function Dashboard() {
    return (
    <div className="container mt-5">
    <h2>Dashboard</h2>
    <ExpenseForm />
    <ExpenseList />
    </div>
);
}

export default Dashboard;
