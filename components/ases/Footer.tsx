import Image from "next/image";
import { ChevronRight, Phone, MapPin, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-col text-white">
      <div className="bg-gray-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:px-7 lg:p-10 lg:gap-10">
        <section className="flex items-start">
          <Image
            src="/images/logo-ases-2.png"
            alt="Logo Ases"
            width={300}
            height={150}
          />
        </section>

        <nav>
          <h3 className="text-xl font-bold pb-1 mb-4 border-b-4 border-red-500">
            MENU
          </h3>
          <ul className="flex flex-col space-y-2">
            {[
              { href: "#inicio", label: "Inicio" },
              { href: "#servicios", label: "Servicios" },
              { href: "#sobrenosotros", label: "Sobre Nosotros" },
              { href: "#prensa", label: "Prensa" },
              { href: "#contáctanos", label: "Contáctanos" },
            ].map(({ href, label }) => (
              <li key={href} className="flex items-center space-x-2">
                <ChevronRight className="text-red-500" />
                <a
                  href={href}
                  className="hover:text-red-500 transition-all duration-300 ease-in-out"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <h3 className="text-xl text-red-500 font-bold pb-1 mb-4 border-b-4 border-white">
            CONTÁCTANOS
          </h3>
          <address className="not-italic">
            <ul className="flex flex-col space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="text-gray-300" />
                <a href="tel:+51944744678">+51 944 744 678</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="text-gray-300" />
                <span>Lora y Cordero #610 - Chiclayo</span>
              </li>
            </ul>
          </address>
        </section>

        <section>
          <h3 className="text-xl font-bold pb-1 mb-4 border-b-4 border-red-500">
            ÚNETE AHORA
          </h3>
          <nav>
            <ul>
              <li className="flex items-center space-x-2">
                <Youtube className="text-red-500" />
                <a
                  href="https://www.youtube.com/@grupoasescapital"
                  target="_blank"
                  className="hover:text-red-500 transition-all duration-300 ease-in-out"
                >
                  Suscribirse
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>

      <div className="bg-black flex items-center justify-center py-10">
        <p className="text-center">
          © Copyright{" "}
          <strong className="font-semibold">
            {new Date().getFullYear()} Ases.
          </strong>{" "}
          Todos los Derechos Reservados de Grupo Ases Capital
        </p>
      </div>
    </footer>
  );
}

export default Footer;
