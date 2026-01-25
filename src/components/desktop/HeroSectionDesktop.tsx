import { ArrowRight, ArrowDownRight, ArrowRightCircleIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Navbar from "../Navbar";
import redbullPic from "../../assets/bgs/redbull-bg.jpg";
import ferrariPic from "../../assets/bgs/ferarri-bg.jpg";
import mercedesPic from "../../assets/bgs/mercedes-bg.jpg";
import mclarenPic from "../../assets/bgs/mclaren-bg.jpeg";
import SocialBar from "../SocialBar";
import redBullDriver from "../../assets/drivers/redbull-driver.webp";
import ferrariDriver from "../../assets/drivers/ferrari-driver.jpeg";
import mercedesDriver from "../../assets/drivers/mercedes-driver.jpeg";
import mclarenDriver from "../../assets/drivers/mclaren-driver.jpg";

import iem from "../../assets/logo/iem.png";
import converge from "../../assets/logo/CONVERGE.png";
import ieeecs from "../../assets/logo/ieeecs.png";

const HeroSectionDesktop = ({
  onTransition,
}: {
  onTransition: (section: string) => void;
}) => {
  const fastSlide = (x = 0, y = 0): Variants => ({
    hidden: {
      opacity: 0,
      x,
      y,
      filter: "blur(12px)",
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 220,
        damping: 22,
        mass: 0.6,
      },
    },
  });

  const crest = localStorage.getItem("converge_crest");
  const bgUrl =
    crest == "redbull"
      ? redbullPic
      : crest == "ferrari"
        ? ferrariPic
        : crest == "mercedes"
          ? mercedesPic
          : crest == "mclaren"
            ? mclarenPic
            : redbullPic;

  return (
    <div
      className="flex py-10 px-20 items-center justify-center 
    h-[100vh] w-[100vw] bg-white overflow-hidden"
    >
      <div
        className="bg-gray-300 rounded-[2rem] relative 
      h-full w-full overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="absolute flex flex-col
    left-[10%] top-[15%]
    w-[50%] h-[70%] rounded-[2rem] p-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Get ready for */}
          <motion.div
            className="w-full p-1"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h4 className="text-lg font-formula1 font-bold text-white">
              Get ready for
            </h4>
          </motion.div>

          {/* Converge - main heading */}
          <motion.div
            className="w-full mb-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-[6.5rem] leading-none font-formula1 font-bold text-white">
              CONVERGE
            </h2>
          </motion.div>

          {/* Flagship event line */}
          <motion.div
            className="w-full mb-6"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-[1.2rem] leading-none font-formula1 font-bold text-white">
              Flagship event of IEEE Computer Society IEM
            </h2>
          </motion.div>

          <motion.div
            className="ml-[15%] w-[80%] p-2"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {/* short description */}
            <motion.div
              className="w-full mb-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2
                className="text-[1rem] leading-relaxed 
              font-formula1 text-white"
              >
                IEEE CS, IEM has returned with yet another version of CONVERGE,
                A true technical extravaganza in all senses. This time, inspired
                by the legacy of the FORMULA 1 Racing. Be a part of it and
                acquire an experience to cherish for your lifetime
              </h2>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="w-full flex justify-start gap-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <button
                className="flex justify-between items-center 
        bg-gray-400 text-white 
        px-6 py-4 rounded-full font-formula1
        hover:bg-red-600 transition-colors duration-300"
                onClick={() =>
                  window.open(
                    "https://forms.gle/8kE4TaDXj2fy2dKy6",
                    "noopener noreferrer",
                  )
                }
              >
                Register
                <span className="ml-4">
                  <ArrowRightCircleIcon className="w-5 h-5" />
                </span>
              </button>

              <button
                className="flex justify-between items-center 
        bg-transparent text-white 
        px-6 py-2 rounded-full border-2 border-white font-formula1
        hover:bg-blue-600 transition-colors duration-300"
                title="Coming soon..."
              >
                Download Brochure
                <span className="ml-4">
                  <ArrowRightCircleIcon className="w-5 h-5" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Event logos */}
        <motion.div
          className="absolute top-0 left-0 z-50 w-[50%]"
          variants={fastSlide(0, -80)}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
        >
          <div
            className="flex items-center bg-white backdrop-blur-md
             border-x border-b border-white/40
             rounded-br-[2.5rem] shadow-lg pr-4 pb-4
             hover:bg-white/80 transition-all duration-500"
          >
            <div
              className="flex w-full items-center justify-between
               bg-black px-4 py-2 gap-6
               rounded-br-[2.5rem]"
            >
              {/* Logo 1 */}
              <div className="flex items-center justify-center flex-1">
                <img
                  src={iem}
                  alt="IEM Logo"
                  className="h-10 md:h-12 object-contain"
                />
              </div>

              <div className="w-px h-10 bg-white/30" />

              {/* Logo 2 */}
              <div className="flex items-center justify-center flex-1">
                <img
                  src={converge}
                  alt="Converge Logo"
                  className="h-10 md:h-12 object-contain"
                />
              </div>

              <div className="w-px h-10 bg-white/30" />

              {/* Logo 3 */}
              <div className="flex items-center justify-center flex-1">
                <img
                  src={ieeecs}
                  alt="IEEE CS Logo"
                  className="h-10 md:h-12 object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute flex top-0 right-0 
          bg-white pl-4 pb-4 rounded-bl-[2rem]"
          variants={fastSlide(80, -80)}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
        >
          <div
            className="h-full w-full 
          rounded-bl-[2rem] bg-black z-50 overflow-hidden"
          >
            <Navbar onNavigate={(section) => onTransition(section)} />
          </div>
        </motion.div>

        <motion.div
          className="absolute w-[20%] aspect-square 
          flex bottom-0 right-0 bg-white pl-4 pt-4
          rounded-tl-[2rem]"
          variants={fastSlide(100, 100)}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <div
            className="w-full rounded-br-[2rem] rounded-tl-[2rem] 
  bg-black z-50 overflow-hidden"
          >
            {crest === "redbull" ? (
              <img src={redBullDriver} className="w-full h-full object-cover" />
            ) : crest === "ferrari" ? (
              <img src={ferrariDriver} className="w-full h-full object-cover" />
            ) : crest === "mercedes" ? (
              <img
                src={mercedesDriver}
                className="w-full h-full object-cover"
              />
            ) : crest === "mclaren" ? (
              <img src={mclarenDriver} className="w-full h-full object-cover" />
            ) : (
              <img src={redBullDriver} className="w-full h-full object-cover" />
            )}
          </div>
        </motion.div>

        <motion.div
          className="absolute w-[5%] h-[35%] flex bottom-32 left-0 
          bg-white pr-4 py-4 rounded-tr-[2rem] rounded-br-[2rem]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
              y: 0,
              filter: "blur(10px)",
              scale: 0.9,
            },
            visible: {
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
                duration: 0.5,
              },
            },
          }}
        >
          <div
            className="h-full w-full rounded-r-[1rem] 
            bg-black z-50 overflow-hidden"
          >
            <SocialBar />
          </div>
        </motion.div>

        <motion.div
          className="absolute left-0 bottom-0 w-[30%] h-[14%] 
          bg-white pr-4 pt-4 rounded-tr-[2rem] z-50 overflow-hidden"
          initial={{
            opacity: 0,
            x: -120,
            y: 80,
            filter: "blur(14px)",
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 20,
            mass: 0.6,
            duration: 0.5,
          }}
        >
          <motion.div
            className="flex-col w-full h-full bg-yellow-500 p-4 px-8 
            rounded-[2rem] z-50 
            cursor-pointer overflow-hidden"
            whileHover={{
              scale: 1.01,
              y: -4,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            onClick={() => onTransition("events")}
          >
            <h1 className="text-[1rem] font-formula1 font-bold text-black">
              Checkout the events
            </h1>

            <h3 className="text-[0.65rem] font-formula1 text-black">
              Take a look at what to expect from CONVERGE 2026
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionDesktop;
