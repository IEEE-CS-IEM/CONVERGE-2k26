import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import driverImage from "@/assets/driver-portrait.jpg";

import convergeImg1 from "@/assets/CONVERGE.png";
import convergeImg2 from "@/assets/CONVERGE (2).png";
import convergeImg3 from "@/assets/CONVERGE (3).png";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SlideContent {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  driverImage: string;
  accentColor: string;
  gradientFrom: string;
  gradientVia: string;
}

const slideData: SlideContent[] = [
  {
    image: convergeImg1,
    title: "CONVERGE",
    subtitle: "Ferrari Red Edition",
    description:
      "Experience the crimson passion of CONVERGE. IEEE CS, IEM brings the legendary Ferrari Red theme with unmatched technical excellence and racing spirit.",
    driverImage: driverImage,
    accentColor: "from-red-600",
    gradientFrom: "from-background/95",
    gradientVia: "via-red-900/30",
  },
  {
    image: convergeImg2,
    title: "CONVERGE",
    subtitle: "McLaren Orange Edition",
    description:
      "Feel the energy of McLaren Orange CONVERGE. A vibrant technical extravaganza where innovation meets the legacy of Formula 1 excellence.",
    driverImage: driverImage,
    accentColor: "from-orange-500",
    gradientFrom: "from-background/95",
    gradientVia: "via-orange-900/30",
  },
  {
    image: convergeImg3,
    title: "CONVERGE",
    subtitle: "Mercedes Teal Edition",
    description:
      "Dive into the precision of Mercedes Teal CONVERGE. Technical innovation and elegance combined in a championship-winning experience.",
    driverImage: driverImage,
    accentColor: "from-cyan-500",
    gradientFrom: "from-background/95",
    gradientVia: "via-cyan-900/30",
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-full bg-racing-gray 
    rounded-[3rem] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="relative min-h-screen">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Gradient overlay with theme colors */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradientFrom} ${slide.gradientVia} to-transparent`} />

            {/* Main content area */}
            <div className="flex min-h-screen relative z-10">
              {/* Left side content */}
              <motion.div
                key={`content-${index}`}
                className="relative flex-1 m-4 rounded-3xl overflow-hidden"
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
                variants={containerVariants}
              >
                <div className="h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
                  <motion.p
                    variants={itemVariants}
                    className="font-formula1 text-foreground/80 text-sm md:text-base mb-4"
                  >
                    Get ready for
                  </motion.p>

                  <motion.h1
                    variants={itemVariants}
                    className="font-formula1 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground mb-4"
                  >
                    {slide.title.split("E")[0]}
                    <span className="text-primary">E</span>
                    {slide.title.split("E")[1]}
                    <span className="text-primary">E</span>
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="font-formula1 text-lg md:text-xl italic text-primary mb-6"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.p
                    variants={itemVariants}
                    className="font-formula1 text-foreground/70 max-w-md text-sm md:text-base leading-relaxed mb-8"
                  >
                    <span className="text-primary font-semibold">IEEE CS, IEM</span> {slide.description.substring(18)}
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-4"
                  >
                    <button className="cta-button group font-formula1">
                      Be a part
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="cta-button-outline group font-formula1">
                      Brochure
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right side - Driver image */}
              <motion.div
                key={`driver-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={activeIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="hidden lg:flex items-end justify-center w-80 xl:w-96 relative"
              >
                <div className="absolute bottom-8 right-8 w-64 xl:w-72 h-80 xl:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/30 z-20" />
                  <img
                    src={slide.driverImage}
                    alt="F1 Driver"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Checkout events banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-0 left-0 bg-primary/90 
        backdrop-blur-sm rounded-[3rem] px-12 py-4 cursor-pointer 
        hover:bg-primary transition-colors z-20"
      >
        <p className="font-formula1 font-bold text-background text-sm mb-1">
          Checkout the events
        </p>
        <p className="font-formula1 text-background/90 text-xs">
          Take a look at what to expect from<br />
          CONVERGE, 2025
        </p>
      </motion.div>
    </section>
  );
};

export default HeroCarousel;
