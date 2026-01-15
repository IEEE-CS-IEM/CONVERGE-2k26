import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";

import mercedesCar from "@/assets/cars/AMG.svg";
import redbullCar from "@/assets/cars/redbull.svg";
import ferrariCar from "@/assets/cars/ferrari.svg";
import McLarenCar from "@/assets/cars/mclaren.svg";

import mercedes from "@/assets/logos/AMG.svg";
import redbull from "@/assets/logos/redbull.png";
import ferrari from "@/assets/logos/ferrari.svg";
import mclaren from "@/assets/logos/mclaren.svg";

const crests = [mercedes, redbull, ferrari, mclaren];
const crestDetails = [
  {
    id: "mercedes",
    bgClass: "bg-black",
    crest: mercedes,
    car: mercedesCar,
    delayScale: 1,
    delayCar: 1.2,
    carAlt: "mercedes car",
  },
  {
    id: "redbull",
    bgClass: "bg-[#001031]",
    crest: redbull,
    car: redbullCar,
    delayScale: 1.5,
    delayCar: 1.7,
    carAlt: "redbull car",
  },
  {
    id: "ferrari",
    bgClass: "bg-[#950100]",
    crest: ferrari,
    car: ferrariCar,
    delayScale: 2.0,
    delayCar: 2.2,
    carAlt: "ferrari car",
  },
  {
    id: "mclaren",
    bgClass: "bg-[#b23600]",
    crest: mclaren,
    car: McLarenCar,
    delayScale: 2.5,
    delayCar: 2.7,
    carAlt: "McLaren car",
  },
];
const CrestSelectionDesktop = () => {
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();

  const [selectedCrest, setSelectedCrest] = useState<string | null>(null);

  const manageCrest = (crest: string) => {
    setSelectedCrest(crest);
    localStorage.setItem("converge_crest", crest);
    navigate("/");
  };


  useEffect(() => {
    setReady(true);
  }, []);



  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#6b0100] to-[#000000] flex items-center justify-center">
      <div className="flex flex-col w-[70%] h-[80%] rounded-[2rem]">

        <div className="w-full flex items-center justify-center p-4 mb-4">
          <motion.h1
            className="text-[1.5rem] font-formula1 font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5
            }}
          >

            Select your crest
          </motion.h1>
        </div>

        <div className="w-full flex flex-grow items-center justify-center
        rounded-[2rem] p-6">
          <div className="w-full h-full grid grid-cols-2 gap-6">

            {crestDetails.map((team) => (
              <motion.div
                key={team.id}
                className={`relative flex items-center justify-center 
                            w-full h-full rounded-[2rem] 
                            ${team.bgClass} cursor-pointer`}
                whileHover={{
                  scale: 1.05,
                  zIndex: 50,
                  transition: {
                    duration: 0.2,
                    delay: 0,
                    zIndex: { duration: 0 }
                  }
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  scaleX: { delay: team.delayScale, duration: 0.4 }
                }}
                style={{ transformOrigin: "right center" }}
                onClick={() => manageCrest(team.id)}
              >
                <div className="flex items-center justify-center 
                  w-[90%] h-[90%] overflow-hidden"
                  style={{
                    backgroundImage: `url(${team.crest})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}>
                </div>

                <motion.div
                  className="absolute w-full bottom-[-7rem] z-50"
                  initial={{ x: "50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: team.delayCar,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  }}
                >
                  <img
                    src={team.car}
                    className="object-contain"
                    alt={team.carAlt}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );

};

export default CrestSelectionDesktop;
