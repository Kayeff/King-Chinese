import ButtonLink from "./ButtonLink";
import SectionHeading from "./SectionHeading";
import SectionPara from "./SectionPara";
import Section from "./Section";

export default function Hero({ showMenu }) {
  function handleClick(e) {
    e.preventDefault();
    showMenu();
  }

  return (
    <Section>
      <div className="h-[50vh] laptop:h-[60vh] hero-image border border-chilli-red"></div>
      <div className="h-[50vh] laptop:h-[60vh] border border-chilli-red text-chilli-red flex items-center justify-between flex-col p-8 font-switzer">
        <SectionHeading title="What we offer" />
        <SectionPara>
          Our menu has classic dishes like{" "}
          <span className="font-gang-of-three text-carrot-orange">
            Fried Rice
          </span>
          ,{" "}
          <span className="font-gang-of-three text-carrot-orange">Noodles</span>{" "}
          and{" "}
          <span className="font-gang-of-three text-carrot-orange">
            Manchurian Dry
          </span>
          , all made with fresh ingredients, traditional recipes at budget
          friendly price.
        </SectionPara>
        <div className="">
          <ButtonLink onClick={handleClick} href={"#"} text="Our Menu" />
        </div>
      </div>
    </Section>
  );
}
