import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

// Diccionario de textos (copy)
const copy = {
  title: "Testimonios",
  description:
    "Dejemos que ellos hablen por nosotros. Estos son algunos de los comentarios que hemos recibido:",
  testimonials: [
    {
      name: "Gema P.",
      role: "Project Manager, Ark Project",
      avatarFallback: "GP",
      feedback:
        "La mejor elección que he hecho fue contratarlos para mí proyectos, son pacientes, profesionales y me han guiado en todo el proyecto. Si tienen la oportunidad de trabajar con ellos no duden en hacerlo.",
    },
    {
      name: "Luis G.",
      role: "CEO, Historial Laboral",
      avatarFallback: "LG",
      feedback:
        "Es increíble lo rápido que los equipos arman los prototipos y los entregan. La calidad del trabajo es excelente y el soporte es inmejorable.",
    },
    {
      name: "Luis Argaez",
      role: "Director, Agencia Argaez",
      avatarFallback: "LA",
      feedback:
        "Muy útil la plataforma de seguimiento, me ayudó a mantenerme informado en todo momento del progreso del proyecto. El equipo de soporte es muy amable.",
    },
  ],
};

export default function Testimonials() {
  return (
    <section className="w-full mt-24 mb-28">
      <div className="w-full">
        <div className="space-y-4 text-start">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50">
            {copy.title}
          </h2>
          <p className="mx-auto text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            {copy.description}
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {copy.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group space-y-4 rounded-lg border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-stone-900"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    alt={`@${testimonial.name}`}
                    src="/placeholder-avatar.jpg"
                  />
                  <AvatarFallback className="dark:text-zinc-200">
                    {testimonial.avatarFallback}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold dark:text-zinc-200">
                    {testimonial.name}
                  </h3>
                  <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-lg/relaxed leading-relaxed text-zinc-500 dark:text-zinc-400">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
