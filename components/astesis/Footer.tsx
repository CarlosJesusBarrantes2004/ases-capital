import {
  Book,
  BriefcaseBusiness,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-600 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:px-7 lg:p-10 lg:gap-10">
        <section className="flex flex-col items-center">
          <Image
            src="/images/as-tesis/logo-as-tesis.png"
            alt="Logo As-Tesis"
            width={300}
            height={150}
          />
          <div className="mt-4 text-center">
            <p>+6 años de experiencia</p>
            <p>+ 1800 proyectos asesorados</p>
          </div>
        </section>

        <section>
          <address className="bg-white rounded-lg p-3 text-center text-black mb-4">
            <h3 className="text-lg font-light mb-2">Horarios</h3>
            <p>
              Lunes a viernes:{" "}
              <time className="font-semibold">9:00 a.m. - 6:00 p.m.</time>
            </p>
            <p>
              Sábados:{" "}
              <time className="font-semibold">9:00 a.m. - 1:00 p.m.</time>
            </p>
          </address>

          <nav>
            <h3 className="sr-only">Información de Contacto</h3>
            <ul className="space-y-2 pl-2">
              <li className="flex items-center space-x-2">
                <Phone className="text-gray-500" />
                <a href="tel:+51984297207">+51 984 297 207</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="text-gray-500" />
                <address className="not-italic">
                  Lora y Cordero #610 - Chiclayo
                </address>
              </li>
              <li className="flex items-center space-x-2">
                <BriefcaseBusiness className="text-gray-500" />
                <a href="#">Trabaja con nosotros</a>
              </li>
              <li className="flex items-center space-x-2">
                <Youtube className="text-gray-500" />
                <a href="#">Suscríbete</a>
              </li>
              <li className="flex items-center space-x-2">
                <Book className="text-gray-500" />
                <a href="#">Libro de reclamaciones</a>
              </li>
            </ul>
          </nav>
        </section>

        <section>
          <h3 className="text-xl text-center font-bold pb-1 mb-4 border-b-4 border-white">
            Redes Sociales
          </h3>
          <nav>
            <h4 className="sr-only">Síguenos en Redes Sociales</h4>
            <ul className="flex space-x-4 justify-center">
              <li>
                <a
                  href="https://www.facebook.com/bolsadeempleo.ases/?locale=es_LA"
                  target="_blank"
                  className="flex items-center justify-center p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@grupoasescapital"
                  target="_blank"
                  className="flex items-center justify-center p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/grupo-ases-peru/?originalSubdomain=pe"
                  target="_blank"
                  className="flex items-center justify-center p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>

      <div className="bg-gray-400 py-10 text-center">
        <p>
          © Copyright{" "}
          <strong className="font-semibold">
            {new Date().getFullYear()} As-Tesis.
          </strong>{" "}
          Todos los Derechos Reservados de Grupo Ases Capital
        </p>
      </div>
    </footer>
  );
}

export default Footer;
