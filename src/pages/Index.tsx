import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MonitorOff } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";
import EventsSection from "@/components/EventsSection";
import TimelineSection from "@/components/TimelineSection";
import TeamSelection from "@/components/TeamSelection";
import SponsorshipSection from "@/components/SponsorshipSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import VideoLoader from "@/components/VideoLoader";
import HeroSectionDesktop from "@/components/desktop/HeroSectionDesktop";
import HeroSectionMobile from "@/components/mobile/heroSectionMobile";
import GallerySection from "@/components/GallerySection";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import useDeviceHeight from "@/hooks/useHeight";

gsap.registerPlugin(ScrollTrigger);
const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showLoader, setShowLoader] = useState(false);
  const [hasCrest, setHasCrest] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const isHeightIncompatible = useDeviceHeight(700);
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".scroll-panel");

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    const crest = localStorage.getItem("converge_crest");
    if (crest) {
      setHasCrest(true);
      setShowLoader(false);
    } else {
      setShowLoader(true);
    }
  }, []);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "events", "team", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        } else if (section === "home" && scrollPosition < 400) {
          setActiveSection("home");
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (showLoader) {
    return (
      <VideoLoader
        onDone={() => navigate("/select-crest", { replace: true })}
      />
    );
  }

  if (isHeightIncompatible) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center 
      justify-center bg-black p-6 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center max-w-md 
          text-center space-y-8"
        >
          <div
            className="relative flex items-center 
          justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10"
          >
            <MonitorOff className="w-10 h-10 text-white/80" strokeWidth={1.5} />
            <div
              className="absolute inset-0 rounded-full 
            animate-pulse bg-white/5"
            />
          </div>

          <div className="space-y-4">
            <h2
              className="text-3xl font-bold tracking-tight 
            bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
            >
              Display Incompatible
            </h2>
            <p
              className="text-lg text-white/60 leading-relaxed 
            max-w-sm mx-auto"
            >
              This experience is optimized for larger screens.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 pt-4 w-full">
            <div className="flex flex-col items-center gap-2 w-full">
              <p className="text-xs font-medium text-white/40 uppercase tracking-widest">
                Mobile Users
              </p>
              <div className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80 backdrop-blur-sm text-center w-full max-w-xs">
                Please switch to another device or visit on desktop
              </div>
            </div>

            <div className="relative w-full max-w-xs flex items-center justify-center">
              <div className="absolute inset-x-0 h-px bg-white/5"></div>
              <span className="relative bg-black px-2 text-xs text-white/30 font-medium uppercase tracking-widest">
                or
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 w-full">
              <p className="text-xs font-medium text-white/40 uppercase tracking-widest">
                Desktop Users
              </p>
              <div className="text-sm text-white/50">
                Press{" "}
                <kbd className="px-2 py-1 mx-1 font-mono text-xs rounded bg-white/10 text-white border border-white/10">
                  Ctrl
                </kbd>{" "}
                +{" "}
                <kbd className="px-2 py-1 mx-1 font-mono text-xs rounded bg-white/10 text-white border border-white/10">
                  -
                </kbd>{" "}
                to zoom out
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <main
      // ref={containerRef}
      className="bg-background min-h-screen overflow-hidden"
    >
      <section id="home" className="h-screen">
        {isMobile ? (
          <HeroSectionMobile
            onTransition={(sectionID) => handleNavigate(sectionID)}
          />
        ) : (
          <HeroSectionDesktop
            onTransition={(sectionID) => handleNavigate(sectionID)}
          />
        )}
      </section>

      <section id="events" className="h-auto">
        <EventsSection
          onTransition={(sectionID) => handleNavigate(sectionID)}
        />
      </section>

      <section id="timeline" className="h-auto">
        <TimelineSection />
      </section>

      {/* <section id="sponsors" className="h-auto">
        <SponsorshipSection />
      </section> */}

      <section id="team" className="h-auto">
        <TeamSelection />
      </section>

      <GallerySection />

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
};

export default Index;
