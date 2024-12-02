
import Link from "next/link"

export default function ContentCardsBlog() {
  return (
    (
      <>
        <div className="w-full space-y-4 text-start py-14">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50">Últimos Articulos</h2>
          <p
            className="mx-auto  text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Bienvenido a nuestro blog. Aquí encontrarás artículos sobre tecnología, desarrollo de software, y mucho más.
          </p>
        </div>
        <section
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12 md:py-16">
          <article
            className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-zinc-950">
            <img
              alt="Blog Post Image"
              className="w-full h-48 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-4 md:p-6 dark:bg-stone-900">
              <h2 className="text-xl font-bold mb-2 dark:text-zinc-50">Título del artículo</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mb-4">
                Breve descripción del artículo. Esta es una descripción corta que resume el contenido del artículo.
              </p>
              <Link className="text-lg font-medium text-custom-orange hover:text-custom-orange" href="#">
              Saber Más →
            </Link>
            </div>
          </article>
          <article
            className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-zinc-950">
            <img
              alt="Blog Post Image"
              className="w-full h-48 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-4 md:p-6 dark:bg-stone-900">
              <h2 className="text-xl font-bold mb-2 dark:text-zinc-50">Título del artículo</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mb-4">
                Breve descripción del artículo. Esta es una descripción corta que resume el contenido del artículo.
              </p>
              <Link className="text-lg font-medium text-custom-orange hover:text-custom-orange" href="#">
              Saber Más →
            </Link>
            </div>
          </article>
          <article
            className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-zinc-950">
            <img
              alt="Blog Post Image"
              className="w-full h-48 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-4 md:p-6 dark:bg-stone-900">
              <h2 className="text-xl font-bold mb-2 dark:text-zinc-50">Título del artículo</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mb-4">
                Breve descripción del artículo. Esta es una descripción corta que resume el contenido del artículo.
              </p>
              <Link className="text-lg font-medium text-custom-orange hover:text-custom-orange" href="#">
              Saber Más →
            </Link>
            </div>
          </article>
          <article
            className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-zinc-950">
            <img
              alt="Blog Post Image"
              className="w-full h-48 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-4 md:p-6 dark:bg-stone-900">
              <h2 className="text-xl font-bold mb-2 dark:text-zinc-50">Título del artículo</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mb-4">
                Breve descripción del artículo. Esta es una descripción corta que resume el contenido del artículo.
              </p>
              <Link className="text-lg font-medium text-custom-orange hover:text-custom-orange" href="#">
              Saber Más →
            </Link>
            </div>
          </article>
          <article
            className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-zinc-950">
            <img
              alt="Blog Post Image"
              className="w-full h-48 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-4 md:p-6 dark:bg-stone-900">
              <h2 className="text-xl font-bold mb-2 dark:text-zinc-50">Título del artículo</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mb-4">
                Breve descripción del artículo. Esta es una descripción corta que resume el contenido del artículo.
              </p>
              <Link className="text-lg font-medium text-custom-orange hover:text-custom-orange" href="#">
              Saber Más →
            </Link>
            </div>
          </article>
          <article
            className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-zinc-950">
            <img
              alt="Blog Post Image"
              className="w-full h-48 object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-4 md:p-6 dark:bg-stone-900">
              <h2 className="text-xl font-bold mb-2 dark:text-zinc-50">Título del artículo</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mb-4">
                Breve descripción del artículo. Esta es una descripción corta que resume el contenido del artículo.
              </p>
              <Link className="text-lg font-medium text-custom-orange hover:text-custom-orange" href="#">
              Saber Más →
            </Link>
            </div>
          </article>
        </section>
      </>
    )
  );
}
