import React from "react";

const socialIcons = [
  { src: "../../assets/Facebook.png", alt: "Facebook" },
  { src: "../../assets/LinkedIn.png", alt: "LinkedIn" },
  { src: "../../assets/Instagram.png", alt: "Instagram" },
  { src: "../../assets/Behance.png", alt: "Behance" },
  { src: "../../assets/Dribble.png", alt: "Dribble" },
];

const SocialIconsList: React.FC = () => {
  return (
    <div>
      <ul className="flex flex-row">
        {socialIcons.map((icon, index) => (
          <li key={index}>
            <img src={icon.src} alt={icon.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIconsList;
