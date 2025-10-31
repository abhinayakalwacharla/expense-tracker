import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
};
return (
    <div className="container mt-5">
    <h2>Register</h2>
    <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" className="form-control mb-3" required />
        <input type="email" placeholder="Email" className="form-control mb-3" required />
        <input type="password" placeholder="Password" className="form-control mb-3" required />
        <button type="submit" className="btn btn-success w-100">Register</button>
    </form>
    </div>
);
}

export default Register;
