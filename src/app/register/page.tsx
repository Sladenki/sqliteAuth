"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);

  const { push } = useRouter();

  const handleRegister = async () => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    
    if (data.message) {
      setSuccess(true)
    }
  };

  useEffect(() => {
    success && push('/login')
  }, [success])

   

  return (
    <div>
      <h1>Регистрация</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Имя" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" type="password" />
      <button onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  );
}

export default RegisterPage
