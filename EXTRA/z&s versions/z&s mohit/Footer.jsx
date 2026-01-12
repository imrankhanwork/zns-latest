import React from "react";
import footerLogo from "../../assets/zslogo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const ImportantLinks = [
  {
    title: "Track Your Order ",
    link: "/track your order",
  },
  {
    title: "Frequently Asked Questions",
    link: "/#frequently asked question",
  },
   {
    title: "Bulk & Custom Orders",
    link: "/#bulk & custom orders",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms & conditions",
  },
   {
    title: "Shipping Policy",
    link: "/#shipping policy",
  },
  {
    title: "Refund Policy",
    link: "/#refund policy",
  },
  {
    title: "Privacy Policy",
    link: "/#privacy policy",
  },
  {
    title: "Contact Us",
    link: "/#contact Us",
  },
];

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Mini Stickers Sheets",
    link: "/#mini stickers sheets",
  },
  {
    title: "Credit Card Skins",
    link: "/#credit card skins",
  },
  {
    title: "laptop skins",
    link: "/#laptop skins",
  },
  {
    title: "Mobile skins",
    link: "/#mobile skins",
  },
  {
    title: "Stickers",
    link: "/#stickers",
  },
  {
    title: "About Us",
    link: "/#about",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Designs
            </h1>
            <p>
              <span className="text-yellow-400 font-hold italic">
                 Made With 💛 in India 
              <br></br>
              </span>
              <br></br>
              There's a sticker for that!? Yes, there's a sticker for everyone. <br></br>
              Design Beyond Limits: Stick, Skin & Wear! Color Your World with Custom Designs. <br></br>        
              
              <br></br>
              Address = "12th Pal Road Opposite Barkatullah Khan Stadium Near By Hotel Shyam Excellency Jodhpur, Rajasthan 342001"
            </p>
          </div>

          {/* Important Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {ImportantLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
               <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Jodhpur, Rajasthan (342001)</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 7340624146</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;