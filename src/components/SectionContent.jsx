import AnchorLink from "./AnchorLink";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import SectionPara from "./SectionPara";

export default function SectionContent({
  heading,
  description,
  buttonText,
  to,
  isLink,
}) {
  return (
    <div className="text-chilli-red flex items-center justify-between flex-col gap-4 p-8  laptop:h-[60vh] rounded-lg border border-chilli-red">
      <SectionHeading title={heading} />
      <SectionPara text={description} />
      {to && buttonText && (
        <div className="flex items-center justify-center">
          {isLink ? (
            <AnchorLink text={buttonText} href={to} />
          ) : (
            <Button to={to} text={buttonText} />
          )}
        </div>
      )}
    </div>
  );
}
