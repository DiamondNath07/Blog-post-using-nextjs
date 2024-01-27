import React from "react";

const Footer: React.FC = () => {
  const socialIcons = [
    { src: "../../assets/linkdin.png", alt: "LinkedIn" },
    { src: "../../assets/face.png", alt: "Facebook" },
    { src: "../../assets/x.png", alt: "Unknown" },
    { src: "../../assets/igicon.png", alt: "Instagram" },
  ];

  const footerLinks = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/" },
    { text: "About Us", href: "/" },
    { text: "Contact Us", href: "/" },
    { text: "Work", href: "/" },
  ];

  return (
    <div className="mt-10 flex flex-col justify-center items-center p-8 bg-[#294F74] ">
      <div className="bg-white rounded-2xl w-full h-full mt-10 flex flex-col justify-between items-center p-4 pb-0 sm:flex-row sm:p-10 sm:h-96">
        <div className="flex flex-col justify-center items-center">
          <h1
            className=""
            style={{
              color: "#1D2939",
            }}
          >
            Say Hello
          </h1>
          <p
            className="text-xs font-extralight mt-2"
            style={{
              color: "#1D2939",
            }}
          >
            Atlaspremier@gmail.com
          </p>
          <div className="max-w-2xl mx-auto ">
            <ul className="flex flex-row justify-between items-center gap-10 mt-10">
              {socialIcons.map((icon, index) => (
                <li key={index}>
                  <img src={icon.src} alt={icon.alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div>
            <ul
              className="grid grid-cols-2 gap-6 mt-10 "
              style={{
                color: "#475467",
              }}
            >
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex flex-col mt-10 justify-between items-center"
            style={{
              color: "#667085",
            }}
          >
            <h3>NewYork, US</h3>
            <h6>AtlasPremier. All Rights Reserved</h6>
          </div>
        </div>
      </div>
      <p className="text-2xl mt-20 font-bold pb-0 text-white">Atlas Premier</p>
    </div>
  );
};

export default Footer;



