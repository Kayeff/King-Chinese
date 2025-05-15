import contact from "../assets/contact.webp";

function ContactLink({ title, link, href }) {
  return (
    <div className="w-full border-t border-chocolate-cosmos grid grid-cols-1 laptop:grid-cols-3 p-2">
      <h1 className="laptop:col-span-2 text-base laptop:text-xl">{title}</h1>
      <a
        className="hover:underline laptop:text-xl"
        href={href}
        rel="noopener noreferrer"
      >
        {link}
      </a>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="w-full p-2 grid grid-cols-1 laptop:grid-cols-2 gap-2 ">
      <div className="w-full laptop:h-[70vh] border border-chocolate-cosmos rounded-lg flex items-center justify-start flex-col gap-10 text-chilli-red p-5">
        <div className="w-full flex items-center justify-start laptop:justify-center font-gang-of-three rounded-lg bg-chilli-red">
          <h1 className="w-full text-center p-4 laptop:text-4xl text-xl text-black uppercase">
            Contact
          </h1>
        </div>
        <div className="flex flex-col w-full gap-10">
          <ContactLink
            title="Phone"
            link="+91 9913757862"
            href={"tel:9913757862"}
          />
          <ContactLink
            title="Facebook"
            link="Intekhabalam Saiyed - Facebook"
            href={"https://www.facebook.com/profile.php?id=100088080944489"}
          />
          <ContactLink
            title="Instagram"
            link="Intekhab Saiyed - Instagram"
            href={
              "https://www.instagram.com/saiyadintekhabalam?igsh=MTJ3bDhkN3gwcHI5ZQ=="
            }
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center h-[50vh] laptop:h-[70vh] border border-chocolate-cosmos rounded-lg">
        <img
          className="w-full object-cover object-top h-full rounded-lg"
          src={contact}
          alt="about-image"
        />
      </div>
    </section>
  );
}
