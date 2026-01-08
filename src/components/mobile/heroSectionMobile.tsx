import { ArrowRight, ArrowDownRight, ArrowRightCircleIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Navbar from "../Navbar";
import redbullPic from "../../assets/bgs/redbull-bg.jpg";
import ferrariPic from "../../assets/bgs/ferarri-bg.jpeg";
import mercedesPic from "../../assets/bgs/mercedes-bg.jpg";
import mclarenPic from "../../assets/bgs/mclaren-bg.jpeg";
import SocialBar from "../SocialBar";
import redBullDriver from "../../assets/drivers/redbull-driver.webp";
import ferrariDriver from "../../assets/drivers/ferrari-driver.jpeg";
import mercedesDriver from "../../assets/drivers/mercedes-driver.jpeg";
import mclarenDriver from "../../assets/drivers/mclaren-driver.jpg";
import { Instagram, Facebook, Twitter } from "lucide-react";

const HeroSectionMobile = ({
  onTransition,
}: {
  onTransition: (section: string) => void;
}) => {
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

  const driver =
    crest == "redbull"
      ? redBullDriver
      : crest == "ferrari"
      ? ferrariDriver
      : crest == "mercedes"
      ? mercedesDriver
      : crest == "mclaren"
      ? mclarenDriver
      : redBullDriver;

  return (
    <div
      className="flex flex-col w-[100vw] h-[100vh] 
        p-6 bg-white"
    >
      <div
        className="relative flex flex-col 
            items-start h-[90%] w-full mb-4 
            bg-white rounded-[2rem]"
      >
        {/* Navbar */}
        <div
          className="h-[10%]
                w-full rounded-[2rem] mb-6"
        >
          <Navbar onNavigate={(section) => onTransition(section)} />
        </div>

        {/* Hero image */}
        <motion.div
          className="h-[75%] bg-white w-full rounded-[2rem] mb-4"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* content div */}
          <motion.div
            className="absolute flex flex-col 
            left-[10%] top-[20%] w-[80%] rounded-[2rem]
            font-bold font-formula1 h-[45%]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="flex flex-col flex-[4] 
              justify-center mb-2"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              {/* Get ready for */}
              <motion.div
                className="text-[clamp(0.6rem,2.5vw,0.8rem)] px-1"
                variants={{
                  hidden: { x: -40, opacity: 0 },
                  show: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Get ready for
              </motion.div>

              {/* Converge 2026 */}
              <motion.div
                className="text-[clamp(1.8rem,10vw,2.8rem)] px-1"
                variants={{
                  hidden: { x: -80, opacity: 0 },
                  show: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                CONVERGE
              </motion.div>

              {/* Flagship event */}
              <motion.div
                className="text-[clamp(0.6rem,2.5vw,0.8rem)] px-1"
                variants={{
                  hidden: { x: -40, opacity: 0 },
                  show: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Flagship event of IEEE CS, IEM
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex-[3] 
              text-[clamp(0.6rem,2.5vw,0.85rem)] p-2 mb-2
              font-extralight rounded-[2rem]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              IEEE CS, IEM has returned with yet another version of CONVERGE, a
              true technical extravaganza in all senses. This time, inspired by
              the legacy of FORMULA 1 Racing. Be a part of it and acquire an
              experience to cherish for your lifetime.
            </motion.div>

            {/* CTA section */}
            <motion.div
              className="rounded-b-[2rem] flex-[3] py-2 
              flex items-center justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
            >
              <div
                className="w-full
                max-h-[70%] grid grid-cols-2 gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-400 text-white 
                  font-formula1
                  text-[clamp(0.6rem,2.5vw,0.8rem)]
                  px-2 py-3 rounded-[2rem]"
                >
                  Register Now
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-[2px] border-white 
                            text-white font-formula1 
                            text-[clamp(0.6rem,2.5vw,0.8rem)] 
                            px-2 py-2 rounded-[2rem]"
                >
                  Brochure
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Driver image */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 right-0 
                bg-white rounded-[2rem] 
                aspect-square w-[60%] p-3"
        >
          <img
            src={driver}
            className="w-full h-full object-cover rounded-[2rem]"
          />
        </motion.div>

        {/* Social bar */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="flex flex-grow bg-gray-200 
                rounded-[2rem] items-center justify-between 
                w-[40%] px-8"
        >
          <Instagram
            className="w-6 h-6 text-pink-600"
            onClick={() =>
              window.open(
                "https://www.instagram.com/ieeecsiem_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                "noopener noreferrer"
              )
            }
          />
          <Facebook
            className="w-6 h-6 text-blue-500"
            onClick={() =>
              window.open(
                "https://www.facebook.com/share/1FZXy35wMx/",
                "noopener noreferrer"
              )
            }
          />
        </motion.div>
      </div>
      <div
        className="flex flex-col p-5 w-full bg-yellow-500
            rounded-[2rem]"
        onClick={() => onTransition("events")}
      >
        <h1 className="text-[1rem] font-formula1 font-bold text-black">
          Checkout the events
        </h1>

        <h3 className="text-[0.65rem] font-formula1 text-black">
          Take a look at what to expect from CONVERGE 2026
        </h3>
      </div>
    </div>
  );
};
export default HeroSectionMobile;
