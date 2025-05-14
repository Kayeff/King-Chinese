import Button from "./Button";
import SectionHeading from "./SectionHeading";
import SectionPara from "./SectionPara";

function Content({ heading, description, buttonText, handleClick }) {
  return (
    <div className="text-chilli-red flex items-center justify-between gap-10 flex-col p-8 font-switzer h-[50vh] laptop:h-[60vh] rounded-lg border border-chilli-red">
      <SectionHeading title={heading} />
      <SectionPara text={description} />
      <div className="flex items-center justify-center">
        <Button onClick={handleClick} text={buttonText} />
      </div>
    </div>
  );
}

export default function Section({
  images,
  twist,
  heading,
  buttonText,
  handleClick,
  description,
}) {
  return (
    <section className="w-full grid grid-cols-1 laptop:grid-cols-2 gap-2">
      {twist ? (
        <>
          {images}
          <Content
            heading={heading}
            buttonText={buttonText}
            handleClick={handleClick}
            description={description}
          />
        </>
      ) : (
        <>
          <Content
            heading={heading}
            buttonText={buttonText}
            handleClick={handleClick}
            description={description}
          />
          {images}
        </>
      )}
    </section>
  );
}
