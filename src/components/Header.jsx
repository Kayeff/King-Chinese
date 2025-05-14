import AnchorLink from "./AnchorLink";
import Button from "./Button";
import Heading from "./Heading";
import { RiArrowRightLongLine } from "@remixicon/react";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-start flex-col border-b border-chilli-red/20 cursor-default px-2">
      <Heading className="text-chilli-red" />
      <div className="w-full grid grid-cols-2 gap-2">
        <AnchorLink
          href="https://maps.app.goo.gl/E8i5s51EjEvyVuUY9"
          text={
            <>
              <span>located in khergam, gujarat</span>
              <span>
                <RiArrowRightLongLine size={25} />
              </span>
            </>
          }
        />
        <ul className="w-full grid grid-cols-3 gap-2">
          <Button text="Home" to="" />
          <Button text="Menu" to="menu" />
          <Button text="Contact" to="contact" />
        </ul>
      </div>
    </div>
  );
}
