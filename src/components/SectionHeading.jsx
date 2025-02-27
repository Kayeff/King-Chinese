export default function SectionHeading({ title }) {
  return (
    <h1 className="hero-text text-lg laptop:text-3xl uppercase font-medium font-gang-of-three">
      {title}
    </h1>
  );
}
