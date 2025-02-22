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
      <div className="w-full grid grid-cols-2 p-4">
        <div className="w-full grid grid-cols-2">
          <FooterLinks title="Links">
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
          <div className="w-full grid grid-cols-3 gap-1">
            <input
              type="email"
              className="border border-black col-span-2 outline-none px-3 font-switzer"
              placeholder="someone@example.com"
            />
            <button className="px-4 font-medium py-3 cursor-pointer border border-black text-chilli-red hover:bg-transparent hover:text-black bg-black duration-300 font-gang-of-three">
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
