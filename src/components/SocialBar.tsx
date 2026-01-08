import { Instagram, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const SocialBar = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/ieeecsiem_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",
    },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1FZXy35wMx/",
      label: "Facebook",
    },
  ];

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="h-full w-full"
    >
      <div
        className="py-8 social-bar bg-black
      flex-col items-center justify-between w-full h-full"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="text-muted-foreground 
            hover:text-foreground transition-colors duration-300"
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5 text-white" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialBar;
