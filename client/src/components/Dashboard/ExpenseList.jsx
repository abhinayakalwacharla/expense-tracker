import api from "../../services/api";

export default function ExpenseList({ items=[], onDeleted }){
    const del = async (id) => {
    if(!confirm("Delete this expense?")) return;
    try {
        await api.delete(`/api/expenses/${id}`);
        onDeleted?.();
    } catch (err) {
        alert("Delete failed");
    }
};

return (
    <div>
        {items.length===0 && <p>No expenses yet</p>}
        {items.map(item => (
        <div key={item._id} style={{display:"flex",justifyContent:"space-between",padding:8,borderBottom:"1px solid #eee"}}>
            <div>
            <strong>{item.title}</strong>
            <div>{item.category} • {new Date(item.date).toLocaleDateString()}</div>
            </div>
            <div style={{textAlign:"right"}}>
            <div>₹ {item.amount}</div>
            <button onClick={()=>del(item._id)}>Delete</button>
            </div>
        </div>
))}
    </div>
);
}
