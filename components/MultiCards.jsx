'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaDollarSign, FaUsers, FaCreditCard, FaCode } from "react-icons/fa";

function incrementNumber(value, increment, max, decimals) {
  return Math.min(value + increment, max).toFixed(decimals);
}

function useIncrement(initialValue, increment, max, decimals, interval) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(prev => parseFloat(incrementNumber(prev, increment, max, decimals)));
    }, interval);
    return () => clearInterval(timer);
  }, [increment, max, decimals, interval]);

  return value;
}

export default function MultiCards() {
  const dineroAhorrado = useIncrement(1323548.23, 141.17, 2323548, 2, 8100);
  const proyectosActivos = useIncrement(117, 1, 57, 0, 18000000); // cada 5 segundos
  const clientesTotales = useIncrement(569, 1, 10000, 0, 180000000); // cada 30 minutos
  const clientesActivos = useIncrement(98, 1, 2000, 0, 180000000); // cada 30 minutos

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 py-12">
      <Card className="shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold text-primary  dark:text-zinc-200">
            Ahorros Generados
          </CardTitle>
          <FaDollarSign className="h-6 w-6 text-primary  dark:text-zinc-200" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">${dineroAhorrado}</div>
          <p className="text-lg text-zinc-600 text-muted dark:text-zinc-100">
            +16% desde el mes pasado
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold text-primary dark:text-zinc-200">
            Desarrollos Activos
          </CardTitle>
          <FaCode className="h-6 w-6 text-primary  dark:text-zinc-200" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">+{proyectosActivos}</div>
          <p className="text-lg text-zinc-600 text-muted dark:text-zinc-100">
            +9 en la última semana
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold text-primary  dark:text-zinc-200">
            Clientes Activos
          </CardTitle>
          <FaUsers className="h-6 w-6 text-primary  dark:text-zinc-200" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">+{clientesActivos}</div>
          <p className="text-lg text-zinc-600 text-muted dark:text-zinc-100">
            +13 desde el mes pasado
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold text-primary  dark:text-zinc-200">
            Clientes Totales
          </CardTitle>
          <FaUsers className="h-6 w-6 text-primary  dark:text-zinc-200" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">+{clientesTotales}</div>
          <p className="text-lg text-zinc-600 text-muted dark:text-zinc-100">
            +37 desde el mes pasado
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
