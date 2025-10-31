import React, { useState } from "react";
import API from "../../services/api";

const Register = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await API.post("/register", form);
        alert("Registration successful! You can now login.");
    } catch (error) {
        console.error(error);
        alert("Registration failed. Try again.");
    }
};
return (
    <div className="container mt-5">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="form-control mb-2"
        />
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
        <button className="btn btn-primary">Register</button>
    </form>
    </div>
);
};

export default Register;
