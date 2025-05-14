import Section from "./Section";
import about from "../assets/owner.webp";

export default function About() {
  return (
    <Section
      twist
      to="contact"
      heading="About us"
      buttonText="Contact us"
      description={
        <>
          Founded by{" "}
          <span className="font-gang-of-three text-carrot-orange">
            Saiyed Intekhab Alam
          </span>{" "}
          in the year{" "}
          <span className="font-gang-of-three text-carrot-orange">2016</span>{" "}
          and till date giving the locals the taste of good chinese. The aim of
          the restaurant is to provide meals at price affordable to villagers of
          Khergam.
        </>
      }
      images={
        <div className="w-full flex items-center justify-center h-[50vh] laptop:h-[60vh] border border-chilli-red rounded-lg">
          <img
            className="w-full object-cover h-full rounded-lg"
            src={about}
            alt="about-image"
          />
        </div>
      }
    />
  );
}
