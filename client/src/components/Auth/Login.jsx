import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const nav = useNavigate();
    const submit = async e => {
    e.preventDefault();
    try {
        const res = await api.post("/api/auth/login",{ email, password });
        localStorage.setItem("token", res.data.token);
        nav("/dashboard");
    } catch(err) {
        alert(err.response?.data?.message || "Login failed");
    }
};
return (
    <form onSubmit={submit} style={{maxWidth:400,margin:"40px auto",display:"flex",flexDirection:"column",gap:8}}>
        <h2>Login</h2>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">Login</button>
    </form>
);
}
