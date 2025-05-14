import Section from "./Section";

export default function Location() {
  return (
    <Section
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
    />
  );
}
