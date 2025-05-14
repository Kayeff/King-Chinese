import Section from "./Section";
import about from "../assets/lantern.webp";

export default function Location() {
  return (
    <Section
      isLink={true}
      to="https://maps.app.goo.gl/E8i5s51EjEvyVuUY9"
      heading="where is it"
      buttonText="Visit khergam"
      description={
        <>
          <span className="font-gang-of-three text-carrot-orange">Khergam</span>{" "}
          is the small village nestled a few kilometers from The Chikhli Highway{" "}
          <span className="font-gang-of-three text-carrot-orange">NH-48.</span>{" "}
          The calm and serene environment is best for spending your weekend
          leaving you relaxed for your life ahead.
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
