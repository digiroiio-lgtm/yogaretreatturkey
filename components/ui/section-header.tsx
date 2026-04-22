type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`space-y-3 max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs tracking-[0.25em] uppercase text-stone-500">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">{title}</h2>
      {description ? <p className="text-stone-600 text-lg leading-relaxed">{description}</p> : null}
    </div>
  );
}
