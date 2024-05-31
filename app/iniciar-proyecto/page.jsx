// app/iniciar-proyecto/page.jsx
'use client';

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";


export default function IniciarProyecto() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Cargando...</p>;
  }

  if (!session) {
    return redirect('/login');
  }

  return (
    <div className="flex h-full w-full items-center justify-center px-4 dark:bg-gray-950">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <h1 className="text-5xl font-bold">Bienvenido</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">Estás conectado como {session.user.email}</p>
        <div className="space-y-4">
        
        </div>
      </div>
    </div>
  );



}
