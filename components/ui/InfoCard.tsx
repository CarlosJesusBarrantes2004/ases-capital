import Image from "next/image";

interface InfoCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

function InfoCard({ title, description, imageSrc, imageAlt }: InfoCardProps) {
  return (
    <article className="flex flex-col rounded-lg overflow-hidden shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
      <figure className="mb-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={130}
          height={60}
          className="w-full h-full object-cover"
        ></Image>
      </figure>
      <div className="text-center p-4">
        <h3 className="text-xl font-normal mb-2">{title}</h3>
        <p className="font-light text-sm sm:text-base">{description}</p>
      </div>
    </article>
  );
}

export default InfoCard;
