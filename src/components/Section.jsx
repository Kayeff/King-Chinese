import SectionContent from "../components/SectionContent";

export default function Section({
  images,
  twist,
  heading,
  buttonText,
  description,
  to,
  isLink,
}) {
  return (
    <section className="w-full grid grid-cols-1 laptop:grid-cols-2 gap-2">
      {twist ? (
        <>
          {images}
          <SectionContent
            to={to}
            isLink={isLink}
            heading={heading}
            buttonText={buttonText}
            description={description}
          />
        </>
      ) : (
        <>
          <SectionContent
            to={to}
            isLink={isLink}
            heading={heading}
            buttonText={buttonText}
            description={description}
          />
          {images}
        </>
      )}
    </section>
  );
}
