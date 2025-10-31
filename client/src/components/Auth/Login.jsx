import React, { useState } from "react";
import API from "../../services/api";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await API.post("/login", form);
        localStorage.setItem("token", res.data.token);
        alert("Login successful!");
    } catch (error) {
        console.error(error);
        alert("Invalid credentials. Try again.");
    }
};
return (
    <div className="container mt-5">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
        <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="form-control mb-2"
        />
        <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="form-control mb-2"
        />
        <button className="btn btn-success">Login</button>
    </form>
    </div>
);
};

export default Login;
