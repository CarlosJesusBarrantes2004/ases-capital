import Carousel from "@/components/ui/Carousel";

const HERO_IMAGES = [
  "/images/as-tesis/landing-1.jpg",
  "/images/as-tesis/landing-2.jpg",
  "/images/as-tesis/landing-3.jpg",
];

function AsTesisPage() {
  return (
    <>
      <section id="inicio" className="h-96 lg:h-screen" aria-label="Inicio">
        <Carousel images={HERO_IMAGES}></Carousel>
      </section>
    </>
  );
}

export default AsTesisPage;
