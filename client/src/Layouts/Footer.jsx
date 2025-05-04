import { assets } from "../assets/assets";

const Footer = () => {
  const linkSections = [
    {
      title: "Company",
      links: ["About", "Features", "Works", "Career"],
    },
    {
      title: "Help",
      links: [
        "Custommer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "FAQ",
      links: ["Account", "Manage Deliveries", "Orders", "Payments"],
    },
    {
      title: "FAQ",
      links: ["Account", "Manage Deliveries", "Orders", "Payments"],
    },
  ];

  return (
    <>
      <div className="relative px-6 pt-[140px] pb-[80px] md:px-16 lg:px-24 xl:px-32 bg-[#F0F0F0]">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-[1080px] flex flex-col md:flex-row justify-between items-center text-white bg-black rounded-[20px] px-[32px] md:px-[64px] py-[32px] md:py-[43px] shadow-lg">
          <h3 className="text-[40px] font-bold max-w-[550px]">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h3>
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-[12px] px-[16px] py-[12px] bg-white rounded-full text-black">
              <img src={assets.letter} alt="letter" />
              <input
                type="email"
                placeholder="Enter your email adress"
                className="outline-none placeholder-gray-500"
              />
            </div>
            <button className="px-[88px] py-[12px] cursor-pointer bg-white text-black rounded-full">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
          <div>
            <img className="w-34 md:w-32" src={assets.logo} alt="logo" />
            <p className="max-w-[248px] mt-6 text-[14px]">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-[12px] mt-[35px]">
              <img
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                src={assets.twitter}
                alt="twitter"
              />
              <img
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                src={assets.facebook}
                alt="facebook"
              />
              <img
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                src={assets.instagram}
                alt="instagram"
              />
              <img
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                src={assets.github}
                alt="github"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex gap-8 sm:gap-12">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                  {section.title}
                </h3>
                <ul className="text-sm space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:underline transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
          <p className="py-4 text-sm md:text-base text-gray-500/80">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex">
            <img
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              src={assets.visa}
              alt="visa"
            />
            <img
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              src={assets.master_card}
              alt="master_card"
            />
            <img
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              src={assets.paypal}
              alt="paypal"
            />
            <img
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              src={assets.apple_pay}
              alt="apple_pay"
            />
            <img
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              src={assets.google_pay}
              alt="google_pay"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
