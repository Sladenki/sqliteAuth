"use client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (data.user) login(data.user);
    alert(data.message || data.error);
  };

  return (
    <div>
      <h1>Вход</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Имя" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" type="password" />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
}
