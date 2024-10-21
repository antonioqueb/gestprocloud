import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

// Diccionario de textos (copy)
const copy = {
  title: "Consultora de software para sistematizar procesos y acelerar el crecimiento",
  description:
    "En Alphaqueb Consulting SAS transformamos desafíos operativos en oportunidades de mejora mediante soluciones tecnológicas personalizadas. Nuestro enfoque está en incrementar la eficiencia, reducir costos y mejorar los procesos clave para que alcances tus objetivos empresariales.",
  bannerAlt: "Consultora de software - Impulsa la eficiencia y el crecimiento con Alphaqueb Consulting",
};

// Opciones de países
const countries = [
  // Norteamérica
  { code: "+52", label: "🇲🇽 +52 (México)" },
  { code: "+1", label: "🇺🇸 +1 (EE.UU.)" },
  { code: "+1", label: "🇨🇦 +1 (Canadá)" },

  // Centroamérica
  { code: "+502", label: "🇬🇹 +502 (Guatemala)" },
  { code: "+503", label: "🇸🇻 +503 (El Salvador)" },
  { code: "+504", label: "🇭🇳 +504 (Honduras)" },
  { code: "+505", label: "🇳🇮 +505 (Nicaragua)" },
  { code: "+506", label: "🇨🇷 +506 (Costa Rica)" },
  { code: "+507", label: "🇵🇦 +507 (Panamá)" },

  // Caribe
  { code: "+53", label: "🇨🇺 +53 (Cuba)" },
  { code: "+1", label: "🇯🇲 +1 (Jamaica)" },

  // Sudamérica
  { code: "+54", label: "🇦🇷 +54 (Argentina)" },
  { code: "+55", label: "🇧🇷 +55 (Brasil)" },
  { code: "+56", label: "🇨🇱 +56 (Chile)" },
  { code: "+57", label: "🇨🇴 +57 (Colombia)" },
  { code: "+58", label: "🇻🇪 +58 (Venezuela)" },
  { code: "+51", label: "🇵🇪 +51 (Perú)" },
  { code: "+598", label: "🇺🇾 +598 (Uruguay)" },
  { code: "+591", label: "🇧🇴 +591 (Bolivia)" },
  { code: "+593", label: "🇪🇨 +593 (Ecuador)" },
  { code: "+595", label: "🇵🇾 +595 (Paraguay)" },

  // Europa
  { code: "+34", label: "🇪🇸 +34 (España)" },
  { code: "+44", label: "🇬🇧 +44 (Reino Unido)" },
  { code: "+49", label: "🇩🇪 +49 (Alemania)" },
  { code: "+33", label: "🇫🇷 +33 (Francia)" },
  { code: "+39", label: "🇮🇹 +39 (Italia)" },

  // Asia
  { code: "+81", label: "🇯🇵 +81 (Japón)" },
  { code: "+86", label: "🇨🇳 +86 (China)" },
  { code: "+91", label: "🇮🇳 +91 (India)" },
  { code: "+82", label: "🇰🇷 +82 (Corea del Sur)" },

  // Oceanía
  { code: "+61", label: "🇦🇺 +61 (Australia)" },
  { code: "+64", label: "🇳🇿 +64 (Nueva Zelanda)" },

  // Medio Oriente
  { code: "+971", label: "🇦🇪 +971 (Emiratos Árabes)" },
  { code: "+90", label: "🇹🇷 +90 (Turquía)" },
  { code: "+972", label: "🇮🇱 +972 (Israel)" },

  // África
  { code: "+27", label: "🇿🇦 +27 (Sudáfrica)" },
  { code: "+234", label: "🇳🇬 +234 (Nigeria)" },
  { code: "+20", label: "🇪🇬 +20 (Egipto)" },
];

export default function Banner() {
  const [countryCode, setCountryCode] = useState({ code: "+52", label: "🇲🇽 +52 (México)" });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSend = async () => {
    // Validar que el número de teléfono no esté vacío
    if (!phoneNumber) {
      setStatus('empty');
      return;
    }

    const data = {
      country_code: countryCode.code.replace("+", ""), // Remover el '+' del código de país
      phone_number: phoneNumber,
      user_id: 2,     // ID del usuario
      company_id: 1,  // ID de la empresa
    };

    try {
      const response = await fetch('https://contact.alphaqueb.com/create_contact_phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Agrega cualquier encabezado adicional si es necesario
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el número de teléfono');
      }

      const result = await response.json();
      console.log('Respuesta de la API:', result);

      setStatus('success');
      // Limpiar el número de teléfono después de enviar
      setPhoneNumber("");
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  const handleSelectCountry = (country) => {
    setCountryCode(country);
    setIsDropdownOpen(false);
    setSearchTerm(""); // Limpiar búsqueda al seleccionar
  };

  const filteredCountries = countries.filter((country) =>
    country.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full flex flex-col lg:flex-row xl:pb-2">
      <div className="w-full lg:w-7/12 py-2 flex flex-col justify-center">
        <CardHeader className="text-start animate-fade-in-up px-0">
          <CardTitle className="text-3xl text-balance md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-zinc-800 mb-3 dark:text-zinc-100">
            {copy.title}
          </CardTitle>
          <CardDescription className="text-lg md:text-xl text-zinc-800 mb-3 text-balance dark:text-zinc-100 lg:pr-16">
            {copy.description}
          </CardDescription>
          <div className="flex flex-col md:flex-row items-center pt-12 space-y-4 md:space-y-0 md:space-x-4 w-10/12 lg:w-10/12">
            {/* Selector */}
            <div className="relative w-56">
              <div
                className="w-full px-4 py-2 h-12 rounded-lg shadow-md bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-600 cursor-pointer flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {countryCode.label}
              </div>
              {isDropdownOpen && (
                <div className="absolute z-10 top-14 w-full bg-white dark:bg-zinc-800 shadow-lg rounded-lg border border-zinc-300 dark:border-zinc-600">
                  <input
                    type="text"
                    placeholder="Buscar país"
                    className="w-full px-4 py-2 rounded-t-lg focus:outline-none dark:text-zinc-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <ul>
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((country) => (
                        <li
                          key={country.code + country.label}
                          className="px-8 py-2 cursor-pointer hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-700"
                          onClick={() => handleSelectCountry(country)}
                        >
                          {country.label}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-center text-zinc-500">No encontrado</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Input de Teléfono */}
            <input
              type="text"
              className="w-56 px-4 py-2 h-12 rounded-lg shadow-md border border-zinc-300 dark:border-zinc-600 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-300 dark:bg-zinc-800 dark:text-white"
              placeholder="Teléfono"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            {/* Botón */}
            <button
              className="bg-primary text-white font-semibold px-4 py-2 h-12 rounded-lg text-xl shadow-md hover:bg-primary-dark transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={handleSend}
            >
              Enviar
            </button>
          </div>

          {/* Mensajes de Éxito y Error */}
          {status === 'success' && (
            <p className="mt-4 text-green-500">Número enviado con éxito.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-500">Error al enviar el número de teléfono.</p>
          )}
          {status === 'empty' && (
            <p className="mt-4 text-yellow-500">Por favor, ingresa un número de teléfono.</p>
          )}
        </CardHeader>
      </div>
      <div className="w-full lg:w-5/12 py-4 flex items-center justify-center">
        <Image
          src="/banner.svg"
          width={500}
          height={200}
          alt={copy.bannerAlt}
          className="lg:w-[640px] lg:h-[440px] 2xl:w-[640px] 2xl:h-[525px]"
        />
      </div>
    </section>
  );
}
