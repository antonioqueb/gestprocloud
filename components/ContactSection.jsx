import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { handleContactForm } from "@/actions/contactFormHandler";

export default function ContactSection() {
  return (
    <div className="dark:bg-stone-900 mx-auto px-7 py-16 border  rounded-lg shadow-lg mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className=" text-3xl xl:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Contáctanos</h2>
          <p className="mt-4 text-lg text-zinc-500">
          Estamos aquí para ayudarte con cualquier duda o inquietud que tengas. No dudes en contactarnos y uno de nuestros representantes se pondrá en contacto contigo lo antes posible.
          </p>
          <form action={handleContactForm} className="mt-8 space-y-6" >
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
