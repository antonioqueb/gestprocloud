"use client";

import MyLightImage from '@/public/fb.svg';
import MyDarkImage from '@/public/fn.svg';
import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavigationMenu, NavigationMenuLink, NavigationMenuItem, NavigationMenuList, NavigationMenuContent, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import ThemeMode from "../components/ThemeMode";
import { AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "next-themes";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:text-zinc-100",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-6 justify-center">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="dark:text-zinc-100 font-medium text-lg">Portafolio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/">
                    <div className="mb-2 mt-4 text-lg font-medium">
                      <Image src="/fb.svg" width={210} height={210} alt="logo" />
                    </div>
                    <p className="text-lg leading-tight text-muted-foreground">
                      Soluciones innovadoras diseñadas para sistematizar y mejorar la eficiencia operativa.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/projects/gestpro" title="Gestpro Cloud">
                Gestión integral de proyectos empresariales en la nube, optimizando cada proceso.
              </ListItem>
              <ListItem href="/projects/campeche" title="Gestiones Empresariales de Campeche">
                Automatización de procesos administrativos para empresas de servicios.
              </ListItem>
              <ListItem href="/projects/inventario-plus" title="Inventario Plus">
                Control avanzado de inventario en tiempo real para empresas de logística.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="dark:text-zinc-100 font-medium text-lg">Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/services/software-development" title="Desarrollo de Software">
                Soluciones a medida que optimizan procesos críticos y mejoran la productividad.
              </ListItem>
              <ListItem href="/services/system-integration" title="Integraciones de Sistemas">
                Conectamos plataformas clave para asegurar un flujo de trabajo eficiente.
              </ListItem>
              <ListItem href="/services/software-architecture" title="Arquitectura de Software">
                Infraestructuras escalables que aseguran rendimiento, seguridad y adaptabilidad.
              </ListItem>
              <ListItem href="/services/business-optimization" title="Optimización Empresarial">
                Mejoramos la eficiencia y reducimos costos mediante la automatización de procesos.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/about" className="dark:text-zinc-100 font-medium text-lg">
            Nosotros
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact" className="dark:text-zinc-100 font-medium text-lg">
            Contacto
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const classList = document.documentElement.classList;
    setIsDarkMode(classList.contains('dark'));
  }, []);

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      setIsDarkMode(storedTheme === "dark");
    } else {
      setTheme(resolvedTheme);
      setIsDarkMode(resolvedTheme === "dark");
    }
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <nav className="flex py-4 w-full justify-between items-center">
      <div className="flex items-center gap-4">
        <Link href="/">
          {isDarkMode ? (
            <div className="cursor-pointer">
              <Image
                src={MyDarkImage}
                alt="Logo de Alphaqueb"
                width={75}
                height={75}
              />
            </div>
          ) : (
            <div className="cursor-pointer">
              <Image
                src={MyLightImage}
                alt="Logo de Alphaqueb"
                width={75}
                height={75}
              />
            </div>
          )}
        </Link>
      </div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavigationMenuDemo />
      </div>
      <div className="flex items-center gap-4">
        <Link href="#contacto" className="hidden md:block dark:text-zinc-100 border rounded-lg text-sm p-2 hover:bg-zinc-100 bg-primary text-zinc-50 dark:hover:bg-stone-600 hover:text-black">
          Impulsa tu Negocio
        </Link>
        <div className="hidden md:block">
          <ThemeMode toggleTheme={toggleTheme} />
        </div>
        {/* Mobile Menu Button */}
        <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DrawerTrigger asChild>
            <button onClick={toggleMenu} className="md:hidden">
              <AiOutlineMenu size={28} className="dark:text-zinc-100" />
            </button>
          </DrawerTrigger>
          <DrawerContent
            className={`fixed top-0 left-0 h-full w-3/4 bg-white dark:bg-black transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out`}
          >
            <DrawerHeader className="flex items-center justify-between p-4">
              <DrawerTitle className="text-xl font-semibold">Menú</DrawerTitle>
              <button onClick={toggleMenu} className="text-xl">
                ✕
              </button>
            </DrawerHeader>
            <DrawerDescription className="flex flex-col gap-4 p-4">
              <Link
                href="/"
                className="text-lg dark:text-zinc-100"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              <Link
                href="/web-dev"
                className="text-lg dark:text-zinc-100"
                onClick={toggleMenu}
              >
                Desarrollo Web
              </Link>
              <Link
                href="/app-dev"
                className="text-lg dark:text-zinc-100"
                onClick={toggleMenu}
              >
                Desarrollo de Apps
              </Link>
              <Link
                href="/custom-soft"
                className="text-lg dark:text-zinc-100"
                onClick={toggleMenu}
              >
                Software a Medida
              </Link>
              <Link
                href="/about"
                className="text-lg dark:text-zinc-100"
                onClick={toggleMenu}
              >
                Nosotros
              </Link>
              <Link
                href="/contact"
                className="text-lg dark:text-zinc-100"
                onClick={toggleMenu}
              >
                Contacto
              </Link>
              <div className="mt-4">
                <ThemeMode toggleTheme={toggleTheme} />
              </div>
            </DrawerDescription>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
