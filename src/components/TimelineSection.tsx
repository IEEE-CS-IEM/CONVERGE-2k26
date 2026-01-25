import React, { useState, useEffect, useRef } from "react";
import { Flag, ChevronRight } from "lucide-react";

import scheduleBg from "@/assets/bgs/speedometer_bg.jpg";

type Event = {
  time: string;
  title: string;
  category: "Online" | "Offline";
};

const scheduleData: Record<string, Event[]> = {
  Friday: [
    {
      time: "18:30",
      title: "Inaugration and Panel discussion",
      category: "Online",
    },
    {
      time: "20:30",
      title: "Ideasprint Submission Closes",
      category: "Online",
    },
    {
      time: "20:30",
      title: "Converge Creator Submission Opens",
      category: "Online",
    },
  ],
  Saturday: [
    { time: "09:00", title: "Registration starts", category: "Offline" },
    {
      time: "10:00",
      title: "Explanation of the days flow and Rules of Games Carnival",
      category: "Offline",
    },
    { time: "11.00", title: "Games Carnival", category: "Offline" },
    { time: "14:00", title: "LUNCH", category: "Offline" },
    {
      time: "15:00",
      title: "Agentic AI Workshop, AI in Development Workshop",
      category: "Offline",
    },
    { time: "16:30", title: "Ideasprint", category: "Offline" },
    { time: "20:00", title: "CodeSprint", category: "Online" },
  ],
  Sunday: [
    {
      time: "10:00",
      title: "Tech Talk/ Career Counselling",
      category: "Offline",
    },
    {
      time: "11:30",
      title: "Converge Creator Submission Closes",
      category: "Online",
    },
    { time: "11.30", title: "Mindscape Mayhem", category: "Offline" },
    { time: "14:00", title: "LUNCH", category: "Offline" },
    { time: "15:00", title: "Converge Got Talent Finals", category: "Offline" },
    { time: "16:30", title: "Valedictory Session", category: "Offline" },
    { time: "17:00", title: "Grand Auction", category: "Offline" },
  ],
};

const days = Object.keys(scheduleData);

export default function TimelineSection() {
  const [activeDay, setActiveDay] = useState("Friday");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // This Effect handles the "Replay Animation on Scroll" logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when scrolled out of view so it can animate again next time
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    // Added 'isolate' to control stacking context
    <div
      ref={sectionRef}
      className="min-h-screen  overflow-hidden text-foreground overflow-x-hidden relative flex flex-col py-12 md:py-24 isolate"
    >
      {/* --- BACKGROUND SETUP START --- */}
      <div className="absolute inset-0 -z-20  overflow-hidden">
        {/* Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${scheduleBg})` }}
        />
        {/* Dimming Layer (Black + Blur) */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>
      {/* --- BACKGROUND SETUP END --- */}

      {/* Decorative Background Effects (kept your original ones) */}
      <div className="fixed inset-0 racing-stripe opacity-10 pointer-events-none -z-10" />
      <div className="fixed inset-0 speed-lines opacity-10 pointer-events-none -z-10" />

      {/* Content Container */}
      <div className="relative z-10 px-4 md:px-16 lg:px-24 max-w-7xl mx-auto w-full h-full flex-1 flex flex-col">
        {/* Header - Slides in from Left */}
        <header
          className={`flex-shrink-0 mb-8 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1.5 h-12 md:h-20 bg-f1-red rounded-sm shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Flag className="w-4 h-4 text-f1-red animate-pulse" />
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold">
                  Race Weekend
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic">
                Event Timeline
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-f1-red to-orange-600">
                  Schedule
                </span>
              </h1>
            </div>
          </div>
        </header>

        {/* --- NEW DAY SELECTOR (Skewed Tabs) --- */}
        <div
          className={`mb-10 flex justify-center md:justify-start transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex gap-2 md:gap-4 overflow-x-auto pb-4 scrollbar-hide px-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`
                  group relative px-8 md:px-12 py-3 md:py-4 
                  font-black uppercase tracking-widest text-sm md:text-base 
                  transition-all duration-300 racing-skew
                  ${
                    activeDay === day
                      ? "tab-active text-white scale-105"
                      : "tab-inactive text-muted-foreground hover:text-white"
                  }
                `}
              >
                {/* Text needs counter-skew to stand straight */}
                <span className="block racing-skew-text relative z-10">
                  {day}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Schedule List - With Enhanced "Race Mode" Hover Effects */}
        <div className="flex-1  space-y-4 pr-2 ">
          {isVisible &&
            scheduleData[activeDay].map((event, idx) => (
              <div
                key={`${activeDay}-${idx}`}
                className="opacity-0 animate-slide-in-right"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`
                group relative 
                border border-white/10 bg-card/40 backdrop-blur-md
                /* HOVER STATES: Scale up, add red glow, lift slightly */
                hover:bg-card/80 hover:border-f1-red/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] 
                hover:-translate-y-1 hover:scale-[1.01]
                transition-all duration-300 ease-out
                overflow-hidden rounded-r-md
                ${event.category === "Online" ? "border-l-[6px] border-l-f1-red" : "border-l-[6px] border-l-gray-700"}
              `}
                >
                  {/* Background Sweep Effect - Sweeps faster and brighter on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-f1-red/20 via-f1-red/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 skew-x-[-20deg]" />

                  <div className="relative flex items-center p-4 md:p-6 gap-4 md:gap-8 z-10">
                    {/* Time Section - Zooms and colors up */}
                    <div className="w-20 md:w-32 flex-shrink-0 text-right transition-transform duration-300 group-hover:scale-110 origin-right">
                      <span
                        className={`
                      block text-xl md:text-3xl font-black tracking-tighter transition-colors duration-300
                      /* Time turns RED on hover */
                      group-hover:text-f1-red group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]
                      ${event.category === "Online" ? "text-white" : "text-muted-foreground"}
                    `}
                      >
                        {event.time}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-white transition-colors">
                        Local Time
                      </span>
                    </div>

                    {/* Vertical Divider - Ignites on hover */}
                    <div className="w-px self-stretch bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:via-f1-red group-hover:w-[2px] transition-all duration-300" />

                    {/* Event Details */}
                    <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3
                          className={`
                        text-sm md:text-xl font-bold uppercase tracking-wide transition-colors duration-300
                        group-hover:text-white
                        ${event.category === "Online" ? "text-white" : "text-gray-400"}
                      `}
                        >
                          {event.title}
                        </h3>

                        {event.category === "Online" && (
                          <div className="flex items-center gap-2 mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                            <span className="w-2 h-2 rounded-full bg-f1-red animate-pulse shadow-[0_0_10px_red]"></span>
                            <span className="text-[10px] font-bold text-f1-red uppercase tracking-wider">
                              Online
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Arrow Icon - Moves right */}
                      {/* <ChevronRight className={`
                      w-6 h-6 transition-all duration-300 
                      group-hover:translate-x-2 group-hover:text-f1-red
                      ${event.category === "F1" ? "text-f1-red" : "text-gray-600"}
                    `} /> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
