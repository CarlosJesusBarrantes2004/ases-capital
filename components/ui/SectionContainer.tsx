interface SectionContainerProps {
  id: string;
  ariaLabel: string;
  children: React.ReactNode;
}

function SectionContainer({ id, ariaLabel, children }: SectionContainerProps) {
  return (
    <section id={id} className="min-h-screen py-16" aria-label={ariaLabel}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

export default SectionContainer;
