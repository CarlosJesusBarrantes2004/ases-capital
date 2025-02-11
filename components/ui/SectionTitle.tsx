interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
  color?: "yellow" | "blue" | "red" | "green";
}

const colorClasses = {
  yellow: "text-yellow-500",
  blue: "text-blue-500",
  red: "text-red-500",
  green: "text-green-500",
} as const;

function SectionTitle({
  title,
  highlight,
  subtitle,
  description,
  color,
}: SectionTitleProps) {
  return (
    <header className="mb-8 text-center">
      <h2 className="font-semibold text-3xl mb-6">
        {title}{" "}
        {highlight && (
          <span className={color ? colorClasses[color] : ""}>{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-normal mb-4">{subtitle}</h3>
          {description && <p className="font-light">{description}</p>}
        </div>
      )}
    </header>
  );
}

export default SectionTitle;
