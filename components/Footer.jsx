"use client";

import MyLightImage from '@/public/dark.png';
import MyDarkImage from '@/public/white.png';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Footer() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const { theme, setTheme, resolvedTheme } = useTheme();

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

    return (
        <footer className="footer py-4 border-t bg-base-200 text-base-content border-base-300 flex flex-col md:flex-row justify-between items-center mt-24">
            <aside className="flex items-center mb-4 md:mb-0">
                <Link href="/">
                    {isDarkMode ? (
                        <div className="cursor-pointer">
                            <Image
                                src={MyDarkImage}
                                alt="Logo de Alphaqueb"
                                width={90}
                                height={90}
                            />
                        </div>
                    ) : (
                        <div className="cursor-pointer">
                            <Image
                                src={MyLightImage}
                                alt="Logo de Alphaqueb"
                                width={90}
                                height={90}
                            />
                        </div>
                    )}
                </Link>
                <p className="text-base pl-4 dark:text-slate-100">
                    ALPHAQUEB CONSULTING SAS <br /> Acercando la sistematización a empresas y emprendimientos.
                </p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
                <div className="flex gap-4">
                    <a href="https://twitter.com/tu_cuenta" className="text-[#E11D48] hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775..."></path>
                        </svg>
                    </a>
                    <a href="https://youtube.com/tu_cuenta" className="text-[#E11D48] hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245..."></path>
                        </svg>
                    </a>
                    <a href="https://facebook.com/tu_cuenta" className="text-[#E11D48] hover:text-red-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642..."></path>
                        </svg>
                    </a>
                </div>
            </nav>
        </footer>
    );
}
