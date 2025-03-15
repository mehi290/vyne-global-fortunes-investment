import React from 'react';
import { Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "", iconSize = 20 }) => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/vyneglobal/",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/vyneglobal/",
      label: "Instagram"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/VyneGlobal",
      label: "Twitter"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61571546181617",
      label: "Facebook"
    }
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-secondary transition-colors"
          aria-label={social.label}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;