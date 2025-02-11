import { AsTesisTabType } from "@/types";
import { JSX } from "react";

const sections: Record<AsTesisTabType, JSX.Element> = {
  Pregrado: (
    <div>
      <h2 className="text-2xl font-bold pb-2 border-b-2 border-yellow-500">
        Tesis Pregrado
      </h2>
      <p className="text-gray-500 mt-2">
        Contamos con diversos servicios de investigación académica con la mejor
        calidad y experiencia en el mercado.
      </p>
    </div>
  ),
  Posgrado: (
    <div>
      <h2 className="text-2xl font-bold pb-2 border-b-2 border-yellow-500">
        Tesis Posgrado
      </h2>
      <p className="text-gray-500 mt-2">
        Contamos con expertos en el área de posgrado para realizar tus tesis de
        la mejor calidad.
      </p>
    </div>
  ),
  Turnitin: (
    <div>
      <h2 className="text-2xl font-bold pb-2 border-b-2 border-yellow-500">
        Turnitin
      </h2>
      <p className="text-gray-500 mt-2">
        Contamos con la mejor plataforma de revisión de plagio en el mercado.
      </p>
    </div>
  ),
  Investigación: (
    <div>
      <h2 className="text-2xl font-bold pb-2 border-b-2 border-yellow-500">
        Proyectos de Investigación
      </h2>
      <p className="text-gray-500 mt-2">
        Brindamos servicios de investigación de la mejor calidad y experiencia
        en el mercado.
      </p>
    </div>
  ),
};

interface SectionContentProps {
  activeTab: AsTesisTabType;
}

function SectionContent({ activeTab }: SectionContentProps) {
  return <div className="py-4 px-8 lg:w-2/3">{sections[activeTab]}</div>;
}

export default SectionContent;
