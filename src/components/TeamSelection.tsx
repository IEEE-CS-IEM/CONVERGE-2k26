import { motion } from "framer-motion";
import { useState } from "react";

import crest1 from "@/assets/CONVERGE.png";
import crest2 from "@/assets/CONVERGE (2).png";
import crest3 from "@/assets/CONVERGE (3).png";
import crest4 from "@/assets/CONVERGE (6).png";

const teamCards = [
  {
    id: "mercedes",
    name: "AMG PETRONAS",
    role: "FORMULA ONE TEAM",
    image: crest3,
  },
  {
    id: "redbull",
    name: "ORACLE Red Bull Racing",
    role: "FORMULA ONE TEAM",
    image: crest2,
  },
  {
    id: "mclaren",
    name: "McLaren",
    role: "FORMULA ONE TEAM",
    image: crest4,
  },
  {
    id: "ferrari",
    name: "Scuderia Ferrari",
    role: "FORMULA ONE TEAM",
    image: crest1,
  },
  {
    id: "placeholder-1",
    name: "Coming Soon",
    role: "FORMULA ONE TEAM",
    image: crest1,
    placeholder: true,
  },
  {
    id: "placeholder-2",
    name: "Coming Soon",
    role: "FORMULA ONE TEAM",
    image: crest2,
    placeholder: true,
  },
  {
    id: "placeholder-3",
    name: "Coming Soon",
    role: "FORMULA ONE TEAM",
    image: crest3,
    placeholder: true,
  },
  {
    id: "placeholder-4",
    name: "Coming Soon",
    role: "FORMULA ONE TEAM",
    image: crest4,
    placeholder: true,
  },
  {
    id: "placeholder-5",
    name: "Coming Soon",
    role: "FORMULA ONE TEAM",
    image: crest1,
    placeholder: true,
  },
  {
    id: "placeholder-6",
    name: "Coming Soon",
    role: "FORMULA ONE TEAM",
    image: crest2,
    placeholder: true,
  },
  {
    id: "placeholder-7",
    name: "Coming Soon",
    role: "FORMULA ONE TEAM",
    image: crest3,
    placeholder: true,
  },
];

const CARD_CLASSES =
  "group relative rounded-[28px] overflow-hidden cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl aspect-[3/4] w-full";

const TeamSelection = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  return (
    <motion.section
      id="team"
      initial={{ backgroundColor: "#000000" }}
      whileInView={{ backgroundColor: "#ffffff" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center text-black mb-12 tracking-wide"
        >
          TEAM
        </motion.h2>

        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          {/* TOP ROW – 5 CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamCards.slice(0, 5).map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setSelectedTeam(team.id)}
                className={`${CARD_CLASSES} ${
                  selectedTeam === team.id ? "ring-4 ring-[#f33]/80" : "ring-0"
                }`}
              >
                {team.image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center filter grayscale brightness-95"
                    style={{ backgroundImage: `url(${team.image})` }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-neutral-200" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#f33]/70 via-[#f33]/30 to-transparent" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div />
                  <div className="text-center">
                    <p className="font-display text-lg md:text-xl font-bold text-white drop-shadow-sm">
                      {team.name}
                    </p>
                    <p className="font-display text-xs md:text-sm text-white/80 mt-2 tracking-wide">
                      {team.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM ROW – 6 CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamCards.slice(5, 11).map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setSelectedTeam(team.id)}
                className={`${CARD_CLASSES} ${
                  selectedTeam === team.id ? "ring-4 ring-[#f33]/80" : "ring-0"
                }`}
              >
                {team.image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center filter grayscale brightness-95"
                    style={{ backgroundImage: `url(${team.image})` }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-neutral-200" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#f33]/70 via-[#f33]/30 to-transparent" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div />
                  <div className="text-center">
                    <p className="font-display text-lg md:text-xl font-bold text-white drop-shadow-sm">
                      {team.name}
                    </p>
                    <p className="font-display text-xs md:text-sm text-white/80 mt-2 tracking-wide">
                      {team.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TeamSelection;
