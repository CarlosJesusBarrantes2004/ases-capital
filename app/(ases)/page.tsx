import CardStackCarousel from "@/components/ui/CardStackCarousel";
import Carousel from "@/components/ui/Carousel";
import InfoCard from "@/components/ui/InfoCard";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import VideoCard from "@/components/ui/VideoCard";

const HERO_IMAGES = [
  "/images/landing-1.jpg",
  "/images/landing-2.jpg",
  "/images/landing-3.jpg",
  "/images/landing-4.jpg",
];

const ABOUT_CARDS = [
  {
    title: "Nuestra Misión",
    description:
      "Invertir principalmente en actividades económicas del rubro, inmobiliario, tecnológico y servicios profesionales y así lograr generar estabilidad y crecimiento constante para nuestros socios.",
    imageSrc: "/images/cliente.jpg",
    imageAlt: "Imagen representativa de nuestra misión",
  },
  {
    title: "Nuestra Visión",
    description:
      "Ser el grupo empresarial referente, principalmente en actividades profesionales científicas y técnicas",
    imageSrc: "/images/cliente.jpg",
    imageAlt: "Imagen representativa de nuestra visión",
  },
  {
    title: "¿Quiénes somos?",
    description:
      "Somos una sociedad tenedora de acciones, que pretende invertir principalmente en actividades del rubro inmobiliario, tecnológico y servicios profesionales",
    imageSrc: "/images/cliente.jpg",
    imageAlt: "Imagen representativa de quiénes somos",
  },
];

const SERVICES_CARDS = [
  {
    title: "INMOBILIARIA",
    image: "/images/inmobiliaria.jpg",
    icon: "🏠",
    description: "Servicios inmobiliarios y de propiedad",
  },
  {
    title: "SALUD",
    image: "/images/salud.jpg",
    icon: "🏥",
    description: "Servicios de salud y bienestar",
  },
  {
    title: "TECNOLOGÍA",
    image: "/images/tecnologia.jpg",
    icon: "💻",
    description: "Soluciones tecnológicas y de software",
  },
];

const VIDEOS = [
  {
    title: "Video 1",
    url: "/videos/ases final spot.mp4",
  },
  {
    title: "Video 2",
    url: "/videos/brunella tiktok 1 (1).mp4",
  },
  {
    title: "Video 3",
    url: "/videos/diversificación.mp4",
  },
  {
    title: "Video 4",
    url: "/videos/Secuencia 01_1.mp4",
  },
];

function AsesPage() {
  return (
    <>
      <section id="inicio" className="h-96 lg:h-screen" aria-label="Inicio">
        <Carousel images={HERO_IMAGES}></Carousel>
      </section>
      <SectionContainer id="servicios" ariaLabel="Servicios">
        <SectionTitle
          title="Nuestros"
          highlight="Servicios"
          subtitle="Algunos de Nuestros Servicios"
          description={`
              "Contamos con una amplia gama de servicios de investigación
                académica y profesional con la más alta calidad, proporcionados
                por acesores altamente competentes de todas las especialidades"
            `}
          color="red"
        ></SectionTitle>
        <CardStackCarousel
          cards={SERVICES_CARDS}
          color="red"
        ></CardStackCarousel>
      </SectionContainer>
      <SectionContainer id="sobrenosotros" ariaLabel="Sobre Nosotros">
        <SectionTitle
          title="Sobre"
          highlight="Nosotros"
          color="red"
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {ABOUT_CARDS.map((card, index) => (
            <InfoCard key={index} {...card}></InfoCard>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer id="prensa" ariaLabel="Prensa">
        <SectionTitle
          title="Nota de"
          highlight="Prensa"
          color="red"
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {VIDEOS.map((video, index) => (
            <VideoCard key={index} {...video}></VideoCard>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer id="contáctanos" ariaLabel="Contáctanos">
        <SectionTitle title="Contáctanos"></SectionTitle>
      </SectionContainer>
    </>
  );
}

export default AsesPage;
