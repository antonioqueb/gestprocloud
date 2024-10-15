"use client";
// components/Nabvar.jsx
import MyLightImage from '@/public/logo.svg';
import MyDarkImage from '@/public/logo.svg';
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

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:text-zinc-100 dark:hover:bg-accent dark:hover:text-accent-foreground dark:focus:bg-accent dark:focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-none dark:text-zinc-100 dark:hover:bg-accent dark:hover:text-accent-foreground dark:focus:bg-accent dark:focus:text-accent-foreground">{title}</div>
          <p className="line-clamp-2 text-lg leading-snug text-muted-foreground dark:text-zinc-100 dark:hover:bg-accent dark:hover:text-accent-foreground dark:focus:bg-accent dark:focus:text-accent-foreground">
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
      <NavigationMenuList className="gap-15 2xl:gap-x-8 justify-center">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="dark:text-zinc-100 font-medium text-lg dark:hover:bg-accent dark:hover:text-accent-foreground dark:focus:bg-accent dark:focus:text-accent-foreground">Portafolio</NavigationMenuTrigger>
          <NavigationMenuContent className="dark:text-zinc-100 dark:hover:bg-accent dark:hover:text-accent-foreground dark:focus:bg-accent dark:focus:text-accent-foreground">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/">
                    <div className="mb-2 mt-4 text-lg font-medium">
                      <Image src="/logo.svg" width={150} height={150} alt="logo" />
                    </div>
                    <p className="text-lg leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="dark:text-zinc-100 font-medium text-lg dark:hover:bg-accent dark:hover:text-accent-foreground dark:focus:bg-accent dark:focus:text-accent-foreground">Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/docs/primitives/alert-dialog" title="Alert Dialog">
                A modal dialog that interrupts the user with important content and expects a response.
              </ListItem>
              <ListItem href="/docs/primitives/hover-card" title="Hover Card">
                For sighted users to preview content available behind a link.
              </ListItem>
              <ListItem href="/docs/primitives/progress" title="Progress">
                Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
              </ListItem>
              <ListItem href="/docs/primitives/scroll-area" title="Scroll-area">
                Visually or semantically separates content.
              </ListItem>
              <ListItem href="/docs/primitives/tabs" title="Tabs">
                A set of layered sections of content—known as tab panels—that are displayed one at a time.
              </ListItem>
              <ListItem href="/docs/primitives/tooltip" title="Tooltip">
                A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/about" className="dark:text-zinc-100 font-medium text-lg dark:hover:bg-accent dark:hover:text-accent-foreground dark:focus:bg-accent dark:focus:text-accent-foreground">
            Nosotros
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact" className="dark:text-zinc-100 font-medium text-lg dark:hover:bg-accent dark:hover:text-accent-foreground dark:focus:bg-accent dark:focus:text-accent-foreground">
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
  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <nav className="flex py-4 w-full justify-between items-center">
      <div className="flex w-1/4 items-center gap-4 ">
        <Link href="/">
          {isDarkMode ? (
            <div className="cursor-pointer">
              <Image
                src={MyDarkImage}
                alt="My image"
                width={50}
                height={50}
              />
            </div>
          ) : (
            <div className="cursor-pointer">
              <Image
                src={MyLightImage}
                alt="My image"
                width={50}
                height={50}
              />
            </div>
          )}
        </Link>
      </div>
      <NavigationMenu className="flex w-1/2 justify-center px-4">
        <NavigationMenuDemo />
      </NavigationMenu>
      <section className="flex w-1/4 items-center justify-end  gap-4">
        <Link href="#contacto" className="dark:text-zinc-100 border rounded-lg text-sm dark:hover:bg-accent dark:hover:text-accent-foreground dark:focus:bg-accent dark:focus:text-accent-foreground p-2 hover:bg-zinc-100 bg-primary text-zinc-50 dark:hover:bg-stone-600 hover:text-black">Contactar</Link>
       
        <div className="hidden md:block">
          <ThemeMode toggleTheme={toggleTheme} />
        </div>
        <Drawer>
          <DrawerTrigger asChild>
            <button onClick={toggleMenu} className="md:hidden">
              <AiOutlineMenu size={28} className="dark:text-zinc-100" />
            </button>
          </DrawerTrigger>
          <DrawerContent
            className={`flex flex-col items-start p-4 bg-white dark:bg-black ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out`}
          >
            <DrawerHeader className="w-full">
              <DrawerTitle className="text-xl w-full flex font-semibold mb-4 items-center justify-between gap-8">
                Menu
                <ThemeMode toggleTheme={toggleTheme} />
              </DrawerTitle>
            </DrawerHeader>
            <DrawerDescription className="flex flex-col gap-2 pl-4 w-full">
              <NavigationMenuLink
                href="/"
                className="rounded-sm px-2 py-2 text-lg hover:bg-zinc-100 w-full text-left"
              >
                Inicio
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/web-dev"
                className="rounded-sm px-2 py-2 text-lg hover:bg-zinc-100 w-full text-left"
              >
                Web Development
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/app-dev"
                className="rounded-sm px-2 py-2 text-lg hover:bg-zinc-100 w-full text-left"
              >
                App Development
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/custom-soft"
                className="rounded-sm px-2 py-2 text-lg hover:bg-zinc-100 w-full text-left"
              >
                Custom Software
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/about"
                className="rounded-sm px-2 py-2 text-lg hover:bg-zinc-100 w-full text-left"
              >
                About
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/contact"
                className="rounded-sm px-2 py-2 text-lg hover:bg-zinc-100 w-full text-left"
              >
                Contact
              </NavigationMenuLink>
            </DrawerDescription>
          </DrawerContent>
        </Drawer>
      </section>
    </nav>
  );
}
