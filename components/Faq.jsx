import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-12">
      <div className="w-full">
        <CardHeader className="mb-10 p-0 justify-start ">
          <CardTitle className="text-3xl xl:text-5xl font-semibold dark:text-zinc-50">Preguntas Frecuentes</CardTitle>
          <CardDescription className="mt-2 text-lg text-zinc-500 dark:text-zinc-400">
            Si tienes alguna pregunta personalizada,{" "}
            <a href="/support" className="text-custom-orange hover:underline">
              contacta soporte
            </a>{" "}
            para recibir respuestas.
          </CardDescription>
        </CardHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg md:text-xl text-left dark:text-white">
                  ¿Cómo puedo recibir una cotización?
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-base md:text-lg text-left text-zinc-600 dark:text-zinc-300">
                  Ingresa tu email en Recibir Presupuesto y obtendrás una cotización personalizada en menos de 24 horas.
               

                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg md:text-xl text-left dark:text-white">
                  ¿Cuales son las formas de pago?
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-base md:text-lg text-left text-zinc-600 dark:text-zinc-300">
                  Aceptamos pagos con tarjeta de crédito, débito, transferencia bancaria y PayPal.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg md:text-xl text-left dark:text-white">
                  ¿Cuentan con garantía de satisfacción?
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-base md:text-lg text-left text-zinc-600 dark:text-zinc-300">
                Sí, si no estás satisfecho con el servicio, te devolvemos tu dinero.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg md:text-xl text-left dark:text-white">
                  ¿Cómo puedo solicitar soporte técnico?	
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-base md:text-lg text-left text-zinc-600 dark:text-zinc-300">
                  Puedes solicitar soporte técnico a través de nuestro chat en vivo o enviando un email a soporte@alphaqueb.online.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
