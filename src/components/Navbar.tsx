import {
  Home,
  MapPin,
  User,
  Phone,
  Calendar,
  TicketIcon,
  icons,
} from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

const Navbar = ({ activeSection = "home", onNavigate }: NavbarProps) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "events", icon: Calendar, label: "Events" },
    { id: "timeline", icon: TicketIcon, label: "Schedule" },
    { id: "team", icon: User, label: "Team" },
    { id: "contact", icon: Phone, label: "Contact" },
  ];

  const sectionBgColors = {
    home: "bg-black",
    events: "bg-white",
    timeline: "bg-white",
    team: "bg-black",
    sponsors: "bg-white",
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-full"
    >
      <div
        className={`grid grid-cols-5 ${sectionBgColors[activeSection]} nav-pill 
      w-full h-full`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate?.(item.id)}
            className={`flex items-center justify-center 
              md:p-3 p-2 col-span-1 rounded-full 
              transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-foreground text-background"
                  : "text-foreground hover:bg-foreground/20"
              }`}
            aria-label={item.label}
          >
            <item.icon className="md:w-5 md:h-5 w-6 h-6" />
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
