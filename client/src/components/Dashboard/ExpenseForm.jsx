import { useState } from "react";
import api from "../../services/api";

export default function ExpenseForm({ onAdded }){
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [category,setCategory]=useState("General");
    const submit = async (e) => {
    e.preventDefault();
    try {
        await api.post("/api/expenses", { title, amount: Number(amount), category });
        setTitle(""); setAmount(""); setCategory("General");
        onAdded?.();
    } catch (err) {
        alert("Failed to add expense");
    }
};

return (
    <form onSubmit={submit} style={{marginBottom:20,display:"flex",gap:8,flexWrap:"wrap"}}>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required />
        <input placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} required />
        <select value={category} onChange={e=>setCategory(e.target.value)}>
        <option>General</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Utilities</option>
        <option>Salary</option>
        </select>
        <button type="submit">Add Expense</button>
    </form>
);
}
