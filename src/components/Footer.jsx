function FooterLinks({ title, children }) {
  return (
    <div className="w-full flex items-start justify-start flex-col space-y-1">
      <h1 className="font-semibold font-switzer uppercase">{title}</h1>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full text-black bg-chilli-red space-y-10">
      <div className="w-full grid grid-cols-1 laptop:grid-cols-2 gap-10 p-4">
        <div className="w-full grid grid-cols-2">
          <FooterLinks title="Our Links">
            <a
              href="#"
              className="font-switzer text-sm text-black font-medium hover:underline"
            >
              Home
            </a>
            <a
              href="#"
              className="font-switzer text-sm text-black font-medium hover:underline"
            >
              About
            </a>
            <a
              href="#"
              className="font-switzer text-sm text-black font-medium hover:underline"
            >
              Menu
            </a>
            <a
              href="#"
              className="font-switzer text-sm text-black font-medium hover:underline"
            >
              Offers
            </a>
            <a
              href="#"
              className="font-switzer text-sm text-black font-medium hover:underline"
            >
              Location
            </a>
          </FooterLinks>
          <FooterLinks title="Contact">
            <a
              href="#"
              className="font-switzer text-sm text-black font-medium     hover:underline"
            >
              Phone
            </a>
            <a
              href="#"
              className="font-switzer text-sm text-black font-medium     hover:underline"
            >
              Whatsapp
            </a>
            <a
              href="#"
              className="font-switzer text-sm text-black font-medium     hover:underline"
            >
              Instagram
            </a>
          </FooterLinks>
        </div>
        <div className="w-full flex items-start justify-start flex-col space-y-2">
          <h1 className="font-semibold font-switzer uppercase">Mail us</h1>
          <div className="w-full grid max-mobile-l:grid-cols-2 gap-1 max-mobile-l:gap-2 mobile-l:grid-cols-3">
            <input
              type="email"
              className="border border-black col-span-2 outline-none p-3 font-switzer text-sm laptop:text-base"
              placeholder="someone@example.com"
            />
            <button className="p-3 font-medium cursor-pointer border border-black text-chilli-red hover:bg-transparent hover:text-black bg-black duration-300 font-gang-of-three text-sm max-mobile-l:col-start-2 laptop:text-base">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-start flex-col cursor-default">
        <h1 className="uppercase font-gang-of-three text-[15vw] leading-[16vw] antialiased">
          King Chinese
        </h1>
      </div>
    </footer>
  );
}
