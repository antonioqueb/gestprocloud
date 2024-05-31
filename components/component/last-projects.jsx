
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

export default function LastProjects() {
  return (
    (<main
      className="flex flex-1 flex-col mb-20  gap-4 md:gap-8  py-12 ">
        <div className="w-full space-y-4 text-start mb-">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50 mt-16">Últimos Proyectos</h2>
          <p
            className="mx-auto  text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Explora algunos de nuestros proyectos recientes que han ayudado a nuestros clientes a alcanzar sus objetivos de manera más eficiente y efectiva.
          </p>
        </div>
      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  w-full mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <HomeIcon className="w-8 h-8" />
            <div className="grid gap-1">
              <CardTitle>Historial Laboral</CardTitle>
              <CardDescription>historial-laboral.com</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <img
              alt="Project Image"
              className="rounded-lg object-cover w-full aspect-[3/2]"
              height={400}
              src="/historial-laboral.jpg"
              width={600} />
            <div className="flex items-center gap-4 text-lg">
            <Link className="text-lg font-medium text-primary hover:text-primary pt-4" href="#">
              Saber Más →
            </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <BookOpenIcon className="w-8 h-8" />
            <div className="grid gap-1">
              <CardTitle>Marketing Web</CardTitle>
              <CardDescription>marketing-website.gestpro.cloud</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <img
              alt="Project Image"
              className="rounded-lg object-cover w-full aspect-[3/2]"
              height={400}
              src="/mkt.png"
              width={600} />
            <div className="flex items-center gap-4 text-lg">
            <Link className="text-lg font-medium text-primary hover:text-primary pt-4" href="#">
              Saber Más →
            </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <LayoutPanelLeftIcon className="w-8 h-8" />
            <div className="grid gap-1">
              <CardTitle>Ark Project</CardTitle>
              <CardDescription>arktoart.es</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <img
              alt="Project Image"
              className="rounded-lg object-cover w-full aspect-[3/2]"
              height={400}
              src="/ark.png"
              width={600} />
            <div className="flex items-center gap-4 text-lg">
            <Link className="text-lg font-medium text-primary hover:text-primary pt-4" href="#">
              Saber Más →
            </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>)
  );
}

function BookOpenIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>)
  );
}


function HomeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function LayoutPanelLeftIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="7" height="18" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </svg>)
  );
}
