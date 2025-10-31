import { useEffect, useState } from "react";
import api from "../../services/api";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function Dashboard(){
    const [expenses, setExpenses] = useState([]);
    const fetchExpenses = async () => {
    try {
        const res = await api.get("/api/expenses");
        setExpenses(res.data);
    } catch (err) {
        console.error(err);
    }
};

useEffect(()=>{ fetchExpenses(); }, []);

return (
    <div style={{maxWidth:900,margin:"20px auto"}}>
        <h1>Dashboard</h1>
        <ExpenseForm onAdded={fetchExpenses} />
        <ExpenseList items={expenses} onDeleted={fetchExpenses}/>
    </div>
);
}
