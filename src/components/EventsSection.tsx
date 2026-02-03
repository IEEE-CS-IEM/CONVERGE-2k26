import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar, Menu } from "lucide-react";
import eventsBg from "@/assets/events-bg.jpg";
import Navbar from "./Navbar";

const events = {
  technical: [
    {
      id: 1,
      name: "Ideasprint",
      date: "05. 03 .26",
      time: "12.00 PM",
      category: "technical",
      description: "Bring in your Innovative Projects and Business ideas",
      schedule: [
        "12:00PM (5th March) - Submission Starts ( Online )",
        "08:30 PM (6th March) - Submission Closes ",
        "04:30 PM (7th March) - Finals ( Offline )",
      ],
    },
    {
      id: 2,
      name: "Codesprint",
      date: "07. 03 .26",
      time: "08.00 PM",
      category: "technical",
      description: "Bring in your coding and problem-solving skills",
      schedule: ["08:00PM- Opening ( Online )", "10:00 PM - Closing"],
    },
    {
      id: 3,
      name: "Tech talk",
      date: "08. 03 .26",
      time: "10.00 AM",
      category: "technical",
      description: "Insightful Technical Discussions with Industry Expert",
      schedule: ["10:00 AM - Session Starts", "11:30 AM - Closing"],
    },
  ],
  fun: [
    {
      id: 1,
      name: "The Games Carnival",
      date: "07. 03 .26",
      time: "11.00 AM - 02.00 PM",
      category: "fun",
      description: "Exciting Technical and Non-Technical games to earn points.",
      schedule: ["11:00 AM - Games Begin"],
    },
    {
      id: 2,
      name: "Mindscape Mayhem",
      date: "08. 03 .26",
      time: "11.30 AM - 02.00 PM",
      category: "fun",
      description: "Team challenges and competitive activities.",
      schedule: [
        "11:30 AM - Team Formation ( 3 or 4 Members )",
        "12:00 PM - Challenges",
        "02:00 PM - Champion Declaration",
      ],
    },
    {
      id: 3,
      name: "Converge Got Talent",
      date: "08. 03 .26",
      time: "15:00 PM",
      category: "fun",
      description: "Showcase your unique Talent.",
      schedule: ["Online Prelims", "15:00 PM (08th March) - Finals"],
    },
    {
      id: 4,
      name: "Converge Creator",
      date: "07. 03 .26",
      time: "09.00 PM",
      category: "fun",
      description: "Make reels that re-live the experience",
      schedule: [
        "09:00 PM (7th March) - Submission Opens",
        "12:00 AM (8th March) - Submission Closes",
        "16:30 PM (8th March) - Winner Announcement",
      ],
    },
  ],
  workshops: [
    {
      id: 1,
      name: "Hands on Agentic AI : Reason, plan, act",
      date: "07. 03 .26",
      time: "03.00 PM - 04:30 PM",
      category: "workshops",
      description: "Hands-on learning experience with expert instructors.",
      schedule: [
        "03:00 PM - Workshop commences",
        "04:30 PM - Workshop concludes",
      ],
    },
    {
      id: 2,
      name: "Core and cortex : Backend and AI integration workshop",
      date: "07. 03 .26",
      time: "03.00 PM - 04:30 PM",
      category: "workshops",
      description: "Hands-on learning experience with expert instructors.",
      schedule: [
        "03:00 PM - Workshop commences",
        "04:30 PM - Workshop concludes",
      ],
    },
  ],
};

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  category: string;
  description: string;
  schedule: string[];
}

interface EventsSectionProps {
  onTransition: (section: string) => void;
}

const EventsSection = ({ onTransition }: EventsSectionProps) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const EventCard = ({ event, index }: { event: Event; index: number }) => (
    <motion.button
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => setSelectedEvent(event)}
      className="w-full group"
    >
      <div
        className="grid grid-cols-3 md:grid-cols-4 gap-4
      items-center py-2 border-b border-border/20 
      hover:border-primary/50 transition-colors cursor-pointer"
      >
        <span className="text-foreground/60 font-display">{event.id}</span>
        <span
          className="text-foreground font-medium col-span-1 
        group-hover:text-primary transition-colors"
        >
          {event.name}
        </span>
        <span
          className="text-foreground/80 font-display
        col-span-1 md:col-span-1 md:text-right"
        >
          {event.date}
        </span>
        <span
          className="hidden md:block text-foreground/80 font-display
        md:col-span-1 md:text-right "
        >
          {event.time}
        </span>
      </div>
    </motion.button>
  );

  return (
    <section id="events" className="relative min-h-screen py-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${eventsBg})` }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Technical Events */}
          <div className="mb-12">
            <h3 className="text-accent font-display text-lg mb-6">
              Technical Events
            </h3>
            <div className="space-y-4">
              {events.technical.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>

          {/* Fun Events */}
          <div className="mb-12">
            <h3 className="text-accent font-display text-lg mb-6">
              Fun Events
            </h3>
            <div className="space-y-4">
              {events.fun.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div>
            <h3 className="text-accent font-display text-lg mb-6">Workshops</h3>
            <div className="space-y-4">
              {events.workshops.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-background/95 rounded-3xl border border-primary/20 max-w-2xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with parallax */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 10 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30"
                />
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-display text-3xl font-bold text-foreground mb-2"
                  >
                    {selectedEvent.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-foreground/70 text-sm capitalize"
                  >
                    {selectedEvent.category}
                  </motion.p>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-6 right-6 z-20 bg-background/80 hover:bg-primary p-2 rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-foreground/80 leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </motion.div>

                {/* Event Details */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold">Date</span>
                    </div>
                    <p className="text-foreground font-display">
                      {selectedEvent.date}
                    </p>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-semibold">Time</span>
                    </div>
                    <p className="text-foreground font-display">
                      {selectedEvent.time}
                    </p>
                  </div>
                </motion.div>

                {/* Schedule */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-lg font-display text-foreground mb-4">
                    Event Schedule
                  </h3>
                  <div className="space-y-2">
                    {selectedEvent.schedule.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/30"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-foreground/80">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsSection;
