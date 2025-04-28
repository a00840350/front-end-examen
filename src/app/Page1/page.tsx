"use client";

import { useEffect, useState } from "react";

export default function Page1() {
  const [nombre, setNombre] = useState<string>("");

  useEffect(() => {
    const nombreGuardado = localStorage.getItem("nombreSocio");
    if (nombreGuardado) {
      setNombre(nombreGuardado);
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5]">
      <main className="p-8 bg-white rounded-2xl shadow-md w-full max-w-md text-center">
        {nombre ? (
          <>
            <h1 className="text-3xl font-bold mb-4">¡Hola, {nombre}!</h1>
            <p className="text-lg">disfruta tu experiencia en GreenPark.</p>
          </>
        ) : (
          <h1 className="text-2xl font-bold">Cargando...</h1>
        )}
      </main>
    </div>
  );
}