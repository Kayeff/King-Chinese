import contact from "../assets/contact.webp";

function ContactLink({ title, link, href }) {
  return (
    <div className="w-full border-t border-chocolate-cosmos grid grid-cols-3 p-2">
      <h1 className="col-span-2">{title}</h1>
      <a className="hover:underline" href={href}>
        {link}
      </a>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="w-full p-2 grid grid-cols-2 gap-2 ">
      <div className="w-full h-[50vh] laptop:h-[70vh] border border-chilli-red rounded-lg flex items-center justify-start flex-col gap-4 text-chilli-red p-5">
        <h1 className="tracking-tighter text-2xl">
          Contact us for more information
        </h1>
        <ContactLink title="Mail" link="kingchinese@gmail.com" href={"#"} />
        <ContactLink title="Phone" link="kingchinese@gmail.com" href={"#"} />
        <ContactLink title="Mail" link="kingchinese@gmail.com" href={"#"} />
        <ContactLink title="Mail" link="kingchinese@gmail.com" href={"#"} />
      </div>
      <div className="w-full flex items-center justify-center h-[50vh] laptop:h-[70vh] border border-chilli-red rounded-lg">
        <img
          className="w-full object-cover object-top h-full rounded-lg"
          src={contact}
          alt="about-image"
        />
      </div>
    </section>
  );
}
