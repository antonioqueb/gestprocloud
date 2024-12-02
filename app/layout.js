import { Rubik as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import Navbar from "../components/Nabvar";
import SessionWrapper from "@/components/SessionWrapper";
import Script from "next/script"; // Importar el componente Script

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "ALPHAQUEB CONSULTING SAS",
  description:
    "Convertimos desafíos operativos en ventajas competitivas. Ofrecemos servicios personalizados de automatización, digitalización y optimización que reducen costos hasta un 30%, aumentan la productividad en un 40% y mejoran la calidad del producto para empresas manufactureras.",
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
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-WR7YX9PG6P"
            strategy="afterInteractive" // Cargar después de la interacción del usuario
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WR7YX9PG6P');
            `}
          </Script>

          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* <Navbar /> */}
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
