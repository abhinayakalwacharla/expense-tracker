import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
};

return (
    <div className="container mt-5">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" className="form-control mb-3" required />
        <input type="password" placeholder="Password" className="form-control mb-3" required />
        <button type="submit" className="btn btn-primary w-100">Login</button>
    </form>
    </div>
);
}

export default Login;
