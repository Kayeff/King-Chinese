import AnchorLink from "./AnchorLink";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import SectionPara from "./SectionPara";

function Content({ heading, description, buttonText, to, isLink }) {
  return (
    <div className="text-chilli-red flex items-center justify-between flex-col gap-4 p-8 font-switzer laptop:h-[60vh] rounded-lg border border-chilli-red">
      <SectionHeading title={heading} />
      <SectionPara text={description} />
      <div className="flex items-center justify-center">
        {isLink ? (
          <AnchorLink text={buttonText} href={to} />
        ) : (
          <Button to={to} text={buttonText} />
        )}
      </div>
    </div>
  );
}

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
          <Content
            to={to}
            isLink={isLink}
            heading={heading}
            buttonText={buttonText}
            description={description}
          />
        </>
      ) : (
        <>
          <Content
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
