import { Rubik as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
// import Navbar from "../components/Nabvar"
import SessionWrapper from "@/components/SessionWrapper";



const fontSans  = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "GestPro - Soluciones Cloud",
  description: "GestPro ofrece soluciones empresariales en la nube a medida para optimizar y transformar los procesos de negocio. Nuestros servicios se adaptan a las necesidades específicas de cada empresa, proporcionando herramientas avanzadas de gestión, colaboración y análisis de datos, todo respaldado por la seguridad y escalabilidad de la infraestructura en la nube. Permitimos a las organizaciones acelerar su crecimiento y mejorar su eficiencia operativa, todo accesible de manera remota y segura."
};


export default function RootLayout({ children }) {

  return (
    <SessionWrapper>
    <html lang="es">
       <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased mx-6 xl:mx-8 2xl:mx-16",
          fontSans.variable
        )}
      >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* <Navbar /> */}
            {children}
          </ThemeProvider>
        </body>
    </html>
    </SessionWrapper>
  );
}
