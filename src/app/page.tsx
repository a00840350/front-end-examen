"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Home() {
  const router = useRouter(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3001/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Usuario: username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok && data.success) {
       
        localStorage.setItem("nombreSocio", data.data.nombre);
  
        
        router.push("/Page1");
      } else {
        setError(data.message || "Error desconocido");
      }
    } catch (err) {
      console.error(err);
      setError("No se pudo conectar con el servidor.");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5]">
      <main className="p-8 bg-white rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Greenpark Iniciar sesión</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="bg-[#12a14b] text-white p-2 rounded hover:bg-[#5a3c2a]">
            Iniciar sesión
          </button>
        </form>
      </main>
    </div>
  );
}