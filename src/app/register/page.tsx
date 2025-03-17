"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Имя" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" type="password" />
      <button onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  );
}
