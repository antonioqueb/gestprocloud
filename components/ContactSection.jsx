import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita la recarga de la página al enviar el formulario

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const message = formData.get('message');
    const name = formData.get('name');

    // Incluimos user_id y company_id con los valores especificados
    const data = {
      email,
      message,
      name,
      user_id: 2,
      company_id: 1,
    };

    try {
      const response = await fetch('https://contact.alphaqueb.com/create_contact_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Agrega cualquier encabezado adicional si es necesario
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      const result = await response.json();
      console.log('Respuesta de la API:', result);

      setStatus('success');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="dark:bg-stone-900 mx-auto px-7 py-16 border rounded-lg shadow-lg mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl xl:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Contáctanos</h2>
          <p className="mt-4 text-lg text-zinc-500">
            Estamos aquí para ayudarte con cualquier duda o inquietud que tengas. No dudes en contactarnos y uno de nuestros representantes se pondrá en contacto contigo lo antes posible.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <Label className="block text-lg font-medium text-zinc-700 dark:text-zinc-200" htmlFor="name">
                Nombre
              </Label>
              <Input
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-primary focus:ring-primary sm:text-lg"
                id="name"
                name="name"
                placeholder="Ingresa tu nombre"
                type="text"
                required
              />
            </div>
            <div>
              <Label className="block text-lg font-medium text-zinc-700 dark:text-zinc-200" htmlFor="email">
                Correo electrónico
              </Label>
              <Input
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-primary focus:ring-primary sm:text-lg"
                id="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                type="email"
                required
              />
            </div>
            <div>
              <Label className="block text-lg font-medium text-zinc-700 dark:text-zinc-200" htmlFor="message">
                Mensaje
              </Label>
              <Textarea
                className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-primary focus:ring-primary sm:text-lg"
                id="message"
                name="message"
                placeholder="Escribe tu mensaje aquí"
                rows={4}
                required
              />
            </div>
            <Button
              className="w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              type="submit"
            >
              Enviar
            </Button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-green-500">Mensaje enviado con éxito.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-500">Error al enviar el mensaje.</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="Contact Image"
            className="object-cover rounded-lg w-full h-full"
            src="/contact.jpg"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}
