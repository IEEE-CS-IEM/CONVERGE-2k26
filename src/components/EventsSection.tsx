import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar } from "lucide-react";
import eventsBg from "@/assets/events-bg.jpg";

const events = {
  technical: [
    { id: 1, name: "Technical Event 1", date: "16.03.26", time: "10.00", category: "technical", description: "Deep dive into advanced technical concepts and hands-on coding challenges.", schedule: ["10:00 - Introduction", "10:30 - Main Event", "11:30 - Q&A"] },
    { id: 2, name: "Technical Event 2", date: "16.03.26", time: "12.00", category: "technical", description: "Explore cutting-edge technologies and industry best practices.", schedule: ["12:00 - Opening", "12:45 - Session", "13:30 - Closing"] },
    { id: 3, name: "Technical Event 3", date: "16.03.26", time: "14.00", category: "technical", description: "Interactive workshop on modern development frameworks.", schedule: ["14:00 - Setup", "14:30 - Workshop", "15:30 - Demo"] },
  ],
  fun: [
    { id: 1, name: "Fun Event 1", date: "17.03.26", time: "16.00", category: "fun", description: "Exciting games and entertainment for all participants.", schedule: ["16:00 - Registration", "16:30 - Games Begin", "17:30 - Awards"] },
    { id: 2, name: "Fun Event 2", date: "17.03.26", time: "16.30", category: "fun", description: "Team challenges and competitive activities.", schedule: ["16:30 - Team Formation", "17:00 - Challenges", "18:00 - Results"] },
  ],
  workshops: [
    { id: 1, name: "Workshop 1", date: "17.03.26", time: "14.00", category: "workshops", description: "Hands-on learning experience with expert instructors.", schedule: ["14:00 - Introduction", "14:30 - Hands-on", "15:30 - Wrap-up"] },
    { id: 2, name: "Workshop 2", date: "17.03.26", time: "14.00", category: "workshops", description: "Advanced techniques and practical applications.", schedule: ["14:00 - Opening", "14:45 - Session", "15:45 - Review"] },
    { id: 3, name: "Workshop 3", date: "17.03.26", time: "14.00", category: "workshops", description: "Interactive session covering industry insights.", schedule: ["14:00 - Start", "14:30 - Workshop", "15:30 - Feedback"] },
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

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const EventCard = ({ event, index }: { event: Event; index: number }) => (
    <motion.button
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => setSelectedEvent(event)}
      className="w-full group"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 
      items-center py-4 border-b border-border/30 
      hover:border-primary/50 transition-colors cursor-pointer">
        <span className="text-foreground/60 font-display">{event.id}</span>
        <span className="text-foreground font-medium col-span-1 
        group-hover:text-primary transition-colors">{event.name}</span>
        <span className="text-foreground/80 
        display-none md:display-block font-display text-right">{event.date}</span>
        <span className="text-foreground/80 
        display-none md:display-block font-display text-right 
        group-hover:text-primary transition-colors">{event.time}</span>
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
            <h3 className="text-accent font-display text-lg mb-6">Technical Events</h3>
            <div className="space-y-4">
              {events.technical.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>

          {/* Fun Events */}
          <div className="mb-12">
            <h3 className="text-foreground/80 font-display text-lg mb-6">Fun Events</h3>
            <div className="space-y-4">
              {events.fun.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div>
            <h3 className="text-foreground/80 font-display text-lg mb-6">Workshops</h3>
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
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
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
                  <p className="text-foreground/80 leading-relaxed">{selectedEvent.description}</p>
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
                    <p className="text-foreground font-display">{selectedEvent.date}</p>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-semibold">Time</span>
                    </div>
                    <p className="text-foreground font-display">{selectedEvent.time}</p>
                  </div>
                </motion.div>

                {/* Schedule */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-lg font-display text-foreground mb-4">Event Schedule</h3>
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

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-2 gap-4 pt-6"
                >
                  <button className="cta-button-outline w-full">Register</button>
                  <button className="cta-button w-full">Learn More</button>
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
