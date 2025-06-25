import { useState } from "react";
import api from "../api"; // Make sure api.js is correctly configured

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/signup", { name, email, password });
      console.log(res.data.message);
    } catch (err) {
      console.error(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="form-control mb-3"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="form-control mb-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-success w-100">Signup</button>
      </form>
    </div>
  );
}
