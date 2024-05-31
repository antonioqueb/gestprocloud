"use client";

// Componente del formulario
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { handleBudgetRequest } from "@/actions/budgetActions";

export default function CardWithForm() {
  const [descriptionError, setDescriptionError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');

  const validateForm = (event) => {
    const description = event.target.description.value;
    const phone = event.target.phone.value;
    let isValid = true;

    if (description.length < 50) {
      setDescriptionError('La descripción debe tener al menos 50 caracteres.');
      isValid = false;
    } else {
      setDescriptionError('');
    }

    if (phone.length < 10) {
      setPhoneError('El número de teléfono debe tener al menos 10 dígitos.');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!isValid) {
      event.preventDefault();
    }
  };

  return (
    <Card id="FormHero" className="w-full min-h-xl max-w-2xl md:w-[900px] mx-auto md:mx-0 shadow-lg transform transition-all duration-300 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none">
      <CardHeader>
        <CardTitle className="text-2xl xl:text-4xl">Recibir Presupuesto</CardTitle>
        <CardDescription className="text-lg">Describa su proyecto para recibir una cotización personalizada.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleBudgetRequest} className="py-2" onSubmit={validateForm}>
          <div className="grid w-full items-center gap-2">
            <div className="flex flex-col space-y-1.5 py-1">
              <Label htmlFor="email" className="text-lg">Correo Electrónico</Label>
              <Input id="email" name="email" type="email" placeholder="correo@empresa.com" className="text-base text-zinc-900 border border-zinc-300 dark:border-zinc-400 dark:text-zinc-50" required />
            </div>
            <div className="flex flex-col space-y-1.5 py-1">
              <Label htmlFor="phone" className="text-lg">Teléfono de Contacto</Label>
              <Input id="phone" name="phone" className="text-base border border-zinc-300 dark:border-zinc-400" type="tel" placeholder="Teléfono de contacto" required />
              {phoneError && <p className="text-red-600">{phoneError}</p>}
            </div>
            <div className="flex flex-col space-y-1.5 py-1">
              <Label htmlFor="projectType" className="text-lg">Tipo de Proyecto</Label>
              <Select name="projectType">
                <SelectTrigger id="projectType" className="text-base border border-zinc-300 dark:border-zinc-400">
                  <SelectValue placeholder="Seleccione el tipo de proyecto" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem className="text-base" value="softwareDevelopment">Desarrollo de Software</SelectItem>
                  <SelectItem className="text-base" value="automation">Automatización</SelectItem>
                  <SelectItem className="text-base" value="cloudIntegration">Integración Cloud</SelectItem>
                  <SelectItem className="text-base" value="erpIntegration">Integración ERP</SelectItem>
                  <SelectItem className="text-base" value="mobileAppDevelopment">Desarrollo de Aplicaciones Móviles</SelectItem>
                  <SelectItem className="text-base" value="webDevelopment">Desarrollo Web</SelectItem>
                  <SelectItem className="text-base" value="dataAnalysis">Análisis de Datos</SelectItem>
                  <SelectItem className="text-base" value="cyberSecurity">Ciberseguridad</SelectItem>
                  <SelectItem className="text-base" value="customSolutions">Soluciones Personalizadas</SelectItem>
                  <SelectItem className="text-base" value="consulting">Consultoría</SelectItem>
                  <SelectItem className="text-base" value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5 py-1">
              <Label htmlFor="description" className="text-lg">Descripción del Proyecto</Label>
              <Textarea id="description" name="description" className="text-base border border-zinc-300 dark:border-zinc-400" placeholder="Proporcione una descripción detallada del proyecto" required />
              {descriptionError && <p className="text-red-600">{descriptionError}</p>}
            </div>
          </div>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button">Cancelar</Button>
            <Button type="submit">Enviar</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
