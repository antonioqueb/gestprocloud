import Link from "next/link";

// Diccionario de textos (copy)
const copy = {
  title: "Nuestros Servicios de Consultoría para Manufactura",
  description:
    "Transformamos procesos industriales mediante soluciones tecnológicas avanzadas que reducen costos, optimizan la producción y mejoran la competitividad de tu empresa manufacturera.",
  services: [
    {
      title: "Implementación de Sistemas SCADA",
      description:
        "Monitoreo y control en tiempo real de procesos industriales, optimizando la supervisión y reduciendo tiempos de inactividad hasta un 40%.",
      imageSrc: "/scada.jpg",
      imageAlt: "Sistemas SCADA para Manufactura",
    },
    {
      title: "Automatización de Líneas de Producción",
      description:
        "Diseñamos soluciones de automatización personalizadas que incrementan la capacidad de producción, mejoran la consistencia y reducen costos operativos.",
      imageSrc: "/automatizacion.jpg",
      imageAlt: "Automatización Industrial",
    },
    {
      title: "Consultoría en Transformación Digital",
      description:
        "Acompañamiento estratégico para digitalizar procesos operativos, comerciales y administrativos, mejorando la toma de decisiones y la eficiencia global.",
      imageSrc: "/digital.jpg",
      imageAlt: "Transformación Digital Manufacturera",
    },
  ],
  learnMore: "Conoce más →",
};

export default function Servicios() {
  return (
    <div className="mx-auto pt-16 pb-4">
      <div className="space-y-4 text-start py-4">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50">
          {copy.title}
        </h2>
        <p className="mx-auto text-lg text-pretty text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
          {copy.description}
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {copy.services.map((service, index) => (
          <div
            key={index}
            className="group relative dark:bg-stone-900 rounded-xl"
          >
            <div className="w-full min-h-80 bg-zinc-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                alt={service.imageAlt}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                height="80"
                src={service.imageSrc}
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
                width="80"
              />
            </div>
            <div className="mt-4 flex flex-col gap-2 justify-between">
              <div className="px-2">
                <h3 className="text-xl text-zinc-700 dark:text-zinc-50 font-medium">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0v " />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-1 text-lg text-zinc-500 dark:text-zinc-400">
                  {service.description}
                </p>
              </div>
              <Link
                className="text-lg font-medium text-primary hover:text-primary pb-4 pl-2"
                href="#"
              >
                {copy.learnMore}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
