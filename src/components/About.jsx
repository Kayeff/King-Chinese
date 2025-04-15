import ButtonLink from "./ButtonLink";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import SectionPara from "./SectionPara";

export default function About() {
  return (
    <Section>
      <div className="w-full h-[50vh] laptop:h-[60vh] border border-chilli-red about-lantern"></div>
      <div className="w-full h-[50vh] laptop:h-[60vh] border border-chilli-red text-chilli-red flex items-center justify-between flex-col p-4 laptop:p-8 font-switzer">
        <SectionHeading title="About us" />
        <SectionPara>
          Founded by{" "}
          <span className="font-gang-of-three text-carrot-orange">
            Saiyed Intekhab Alam
          </span>{" "}
          in the year{" "}
          <span className="font-gang-of-three text-carrot-orange">2016</span>{" "}
          and till date giving the locals the taste of good chinese. The aim of
          the restaurant is to provide meals at price affordable to villagers of
          Khergam.
        </SectionPara>
        <div className="flex items-center justify-center space-x-4">
          <ButtonLink href="#" text="Contact" />
        </div>
      </div>
    </Section>
  );
}
