import ButtonLink from "./ButtonLink";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import SectionPara from "./SectionPara";

export default function Offers({ showMenu }) {
  return (
    <Section>
      <div className="w-full border border-chilli-red text-chilli-red flex items-center justify-between flex-col p-8 h-[60vh]">
        <SectionHeading title="our offers" />
        <SectionPara></SectionPara>
        <div>
          <ButtonLink onClick={showMenu} text="Explore Offers" />
        </div>
      </div>
      <div className="w-full h-[50vh] laptop:h-[60vh] border border-chilli-red">
        <div className="w-full h-full hero-image"></div>
      </div>
    </Section>
  );
}
