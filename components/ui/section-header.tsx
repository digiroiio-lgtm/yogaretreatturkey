type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2"
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`space-y-3 max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs tracking-[0.25em] uppercase text-stone-500">{eyebrow}</p>
      ) : null}
      <Heading className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">{title}</Heading>
      {description ? <p className="text-stone-600 text-lg leading-relaxed">{description}</p> : null}
    </div>
  );
}
