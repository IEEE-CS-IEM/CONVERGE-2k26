import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const days = ["Day 1", "Day 2", "Day 3"];

const timelineData = {
  "Day 1": [
    { id: 1, title: "Inauguration", description: "Lets get going!", type: "amber", x: 10, y: 70 },
    { id: 2, title: "Lunch", description: "Lunch is on us!", type: "red", x: 30, y: 45 },
    { id: 3, title: "Technical Session", description: "Deep dive into tech", type: "white", x: 20, y: 85 },
    { id: 4, title: "Workshop", description: "Hands-on learning", type: "amber", x: 50, y: 60 },
  ],
  "Day 2": [
    { id: 1, title: "Hackathon Begins", description: "Code your way!", type: "amber", x: 15, y: 40 },
    { id: 2, title: "Mentorship", description: "Expert guidance", type: "red", x: 55, y: 35 },
    { id: 3, title: "Fun Events", description: "Take a break!", type: "white", x: 75, y: 55 },
  ],
  "Day 3": [
    { id: 1, title: "Finals", description: "Show what you got!", type: "red", x: 25, y: 50 },
    { id: 2, title: "Prize Distribution", description: "Winners announced!", type: "amber", x: 60, y: 40 },
    { id: 3, title: "Closing Ceremony", description: "Until next time!", type: "white", x: 80, y: 65 },
  ],
};

const TimelineSection = () => {
  const [activeDay, setActiveDay] = useState("Day 1");
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getDotColor = (type: string) => {
    switch (type) {
      case "amber":
        return "#ffc107";
      case "red":
        return "#ff4444";
      default:
        return "#ffffff";
    }
  };

  return (
    <section className="bg-racing-gray py-20 relative overflow-hidden">
      <div
        ref={containerRef}
        className="relative mx-4 md:mx-8 rounded-3xl overflow-hidden border border-slate-700"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        }}
      >
        <div className="relative z-10 px-6 md:px-12 py-16">
          {/* Header with title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Event Timeline
            </h2>
            <p className="text-gray-400 text-sm">Select a day to explore the journey</p>
          </motion.div>

          {/* Day tabs */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-20 flex justify-center gap-3 mb-20"
          >
            <div className="flex gap-3 bg-slate-800/50 rounded-full p-2">
              {days.map((day) => (
                <motion.button
                  key={day}
                  onClick={() => {
                    setActiveDay(day);
                    setSelectedEvent(null);
                  }}
                  layout
                  className={`relative px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeDay === day
                      ? "text-white bg-white/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {day}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Timeline visualization */}
          <div className="relative h-[520px]">
            {/* SVG Path - clean white line */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Main path */}
              <motion.path
                d="M 0 90 Q 15 75 25 80 T 45 55 T 65 70 T 85 45 T 100 30"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </svg>

            {/* Event cards */}
            <motion.div layout>
              {timelineData[activeDay as keyof typeof timelineData]?.map((event, index) => {
                const dotColor = getDotColor(event.type);
                const isSelected = selectedEvent === event.id;
                return (
                  <motion.div
                    key={`${activeDay}-${event.id}`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="absolute group"
                    style={{ left: `${event.x}%`, top: `${event.y}%` }}
                  >
                    {/* Dot */}
                    <motion.div
                      className="relative w-5 h-5 rounded-full mb-4"
                      style={{
                        backgroundColor: dotColor,
                      }}
                    />

                    {/* Card */}
                    <motion.button
                      onClick={() => setSelectedEvent(isSelected ? null : event.id)}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full min-w-[160px] rounded-xl px-4 py-3 bg-white text-gray-900 transition-all duration-300 cursor-pointer overflow-hidden group/card"
                    >
                      <div className="relative z-10">
                        {/* Title */}
                        <motion.div
                          className="flex items-start gap-2 mb-1"
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex-1 text-left">
                            <p className="font-bold text-sm leading-tight">{event.title}</p>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/card:opacity-100 transition-opacity flex-shrink-0" />
                        </motion.div>

                        {/* Description */}
                        <p className="text-gray-600 text-xs leading-relaxed text-left">{event.description}</p>
                      </div>
                    </motion.button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
