
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });
//       localStorage.setItem("token", res.data.token); // Store token in localStorage
//       navigate("/dashboard"); // Redirect to dashboard
//     } catch (err) {
//       setError(err.response.data.message || "Login failed!");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account? <a href="/register">Register</a>
//       </p>
//     </div>
//   );
// };

// export default Login;
// src/pages/Login.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import the context

const Login = () => {
    const { login } = useAuth(); // Use the login method from context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Example: replace with actual login logic
        login({ email }); // For demonstration, just saving the email
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login; 
