import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

gsap.registerPlugin(ScrollTrigger);
const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showLoader, setShowLoader] = useState(false);
  const [hasCrest, setHasCrest] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

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

      <section id="sponsors" className="h-auto">
        <SponsorshipSection />
      </section>

      <section id="team" className="h-auto">
        <TeamSelection />
      </section>

      <Footer />
    </main>
  );
};

export default Index;
