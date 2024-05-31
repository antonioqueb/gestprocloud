
import Link from "next/link"

export default function Servicios() {
  return (
    <div className="mx-auto  pt-16 pb-4">
      <div className="space-y-4 text-start py-4">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50 ">Principales Oportunidades</h2>
          <p
            className="mx-auto text-lg text-pretty text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Tu empresa puede dejar atrás esos desafíos con nuestras soluciones. Imagina sistemas que funcionan a la perfección, procesos automatizados y una comunicación interna impecable.
            Con años de experiencia y un historial probado, nuestro equipo está listo para guiarte hacia la Integración de Sistemas, el Desarrollo de Software y la Arquitectura de Software.
          </p>
        </div>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div className="group relative dark:bg-stone-900  rounded-xl ">
          <div className="w-full min-h-80 bg-zinc-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              alt="Desarrollo de Software"
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              height="80"
              src="/softwae-development.jpg"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2 justify-between ">
            <div  className="px-2">
              <h3 className="text-xl text-zinc-700 dark:text-zinc-50">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0 " />
                  Desarrollo de Software
                </a>
              </h3>
              <p className="mt-1 text-lg text-zinc-500 dark:text-zinc-400">
              Creamos soluciones personalizadas adaptadas a las necesidades específicas de tu negocio, utilizando las últimas tecnologías del mercado.
              </p>
            </div>
            <Link className="text-lg font-medium text-primary hover:text-primary pb-4 pl-2" href="#">
              Saber Más →
            </Link>
          </div>
        </div>
        <div className="group relative dark:bg-stone-900  rounded-xl">
          <div className="w-full min-h-80 bg-zinc-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              alt="Integraciones Complejas"
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              height="80"
              src="/integrations.jpg"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2 justify-between ">
            <div  className="px-2">
              <h3 className="text-xl text-zinc-700 dark:text-zinc-50">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Integraciones Complejas
                </a>
              </h3>
              <p className="mt-1 text-lg text-zinc-500 dark:text-zinc-400">
              Especialistas en integrar diferentes sistemas y plataformas, asegurando una comunicación fluida y eficiente entre tus herramientas digitales.
              </p>
            </div>
            <Link className="text-lg font-medium text-primary hover:text-primary pb-4 pl-2" href="#">
              Saber Más →
            </Link>
          </div>
        </div>
        <div className="group relative dark:bg-stone-900  rounded-xl">
          <div className="w-full min-h-80 bg-zinc-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              alt="Diseño de Interfaces"
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              height="80"
              src="/devops.jpg"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2 justify-between ">
            <div className="px-2">
              <h3 className="text-xl text-zinc-700 dark:text-zinc-50">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />
                 Arquitectura de Software
                </a>
              </h3>
              <p className="mt-1 text-lg text-zinc-500 dark:text-zinc-400">
              Diseñamos la arquitectura de tu software, garantizando un sistema escalable, seguro y de alto rendimiento.
              </p>
            </div>
            <Link className="text-lg font-medium text-primary hover:text-primary pb-4 pl-2" href="#">
              Saber Más →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}