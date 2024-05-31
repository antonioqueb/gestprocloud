import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full flex flex-col lg:flex-row xl:pb-2">
      <div className=" w-full lg:w-7/12  py-2 flex flex-col justify-center">
        <CardHeader className="text-start animate-fade-in-up px-0 ">
          <CardTitle className="text-3xl text-balance md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold text-zinc-800 mb-3 dark:text-zinc-100">
          Desarrollamos tecnología para optimizar empresas.
          </CardTitle>
          <CardDescription className="text-lg md:text-xl text-zinc-800 mb-3 text-balance dark:text-zinc-100 lg:pr-16">
          Las empresas y grupos comerciales a menudo enfrentan desafíos significativos para optimizar sus operaciones y mejorar la eficiencia. Estos problemas pueden obstaculizar su crecimiento y éxito.
          </CardDescription>
          <div className="flex w-full flex-col md:flex-row pt-12 md:items-center py-6 space-y-4 md:space-y-0 md:space-x-4 w-10/12 lg:w-10/12 ">
            <Link href="/iniciar-proyecto">
              <p className="bg-primary text-white font-semibold dark:text-zinc-100 border border-primary p-3 h-12 rounded-lg text-xl text-center flex items-center justify-center flex-grow md:flex-grow-0">
              Crear Proyecto
              </p>
            </Link>
            <Link href="#FormHero">
              <p className=" text-zinc-900 border  font-semibold dark:text-zinc-100  p-3 h-12 rounded-lg text-xl text-center flex items-center justify-center flex-grow md:flex-grow-0 md:border-none">
              Recibir Presupuesto
              </p>
            </Link>
          </div>
        </CardHeader>
      </div>
      <div className="w-full lg:w-5/12  py-4 flex items-center justify-center">
        <Image src="/banner.svg" width={500} height={200} alt="Banner" className="lg:w-[640px] lg:h-[440px] 2xl:w-[640px] 2xl:h-[525px]" />
      </div>
    </section>
  );
}
