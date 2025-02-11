"use client";

import CardStackCarousel from "@/components/ui/CardStackCarousel";
import Carousel from "@/components/ui/Carousel";
import ExpandableCard from "@/components/ui/ExpandableCard";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionContent from "@/components/ui/SectionContent";
import SectionTitle from "@/components/ui/SectionTitle";
import Tabs from "@/components/ui/Tabs";
import { useState } from "react";

const HERO_IMAGES = [
  "/images/as-tesis/landing-1.jpg",
  "/images/as-tesis/landing-2.jpg",
  "/images/as-tesis/landing-3.jpg",
];

const SERVICES_CARDS = [
  {
    title: "SERVICIO ESTADÍSTICO",
    image: "/images/as-tesis/servicio-estadístico.png",
    icon: "📊",
    description: "Análisis y procesamiento de datos",
  },
  {
    title: "PARAFRASEO",
    image: "/images/as-tesis/servicio-parafraseo.png",
    icon: "🔠",
    description: "Redacción de textos y contenido",
  },
  {
    title: "POSGRADO",
    image: "/images/as-tesis/servicio-posgrado.png",
    icon: "🎓",
    description: "Asesoría en tesis y artículos",
  },
  {
    title: "PROYECTO",
    image: "/images/as-tesis/servicio-proyecto.png",
    icon: "📚",
    description: "Redacción de proyectos de investigación",
  },
];

const categoriesList = [
  {
    title: "Ingeniería",
    content:
      "Tesis acorde a la ingeniería industrial, sistemas, computación, entre otros, en formato IEEE.",
  },
  {
    title: "Administración",
    content:
      "Tesis acorde a la administración de empresas, marketing, economía, entre otros, en formato APA.",
  },
  {
    title: "Psicología",
    content:
      "Tesis acorde a la psicología, neurociencia, entre otros, en formato APA.",
  },
  {
    title: "Humanidades",
    content:
      "Tesis acorde a las humanidades, filosofía, literatura, entre otros, en formato APA.",
  },
];

function AsTesisPage() {
  const [activeTab, setActiveTab] = useState<
    "Pregrado" | "Posgrado" | "Turnitin" | "Investigación"
  >("Pregrado");

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
          description="Contamos con diversos Servicios de Investigacion Academica
con la mejor calidad de la mano de Asesores
altamente capacitados de todas las carreras"
          color="yellow"
        ></SectionTitle>
        <CardStackCarousel
          cards={SERVICES_CARDS}
          color="yellow"
        ></CardStackCarousel>
        <Tabs onSelect={setActiveTab}></Tabs>
        <div className="mt-4 flex flex-col lg:flex-row lg:items-center">
          <SectionContent activeTab={activeTab}></SectionContent>
          <div className="flex flex-col items-center gap-4 lg:gap-8">
            {activeTab === "Pregrado" || activeTab === "Posgrado"
              ? categoriesList.map((category, index) => (
                  <ExpandableCard
                    key={index}
                    title={category.title}
                    content={category.content}
                  ></ExpandableCard>
                ))
              : null}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default AsTesisPage;
