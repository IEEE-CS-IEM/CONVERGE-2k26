import React, { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

type Event = {
  time: string;
  title: string;
  category: "F1" | "F2" | "Support";
};

const scheduleData: Record<string, Event[]> = {
  Friday: [
    { time: "10:30", title: "Paddock Club Track Tour", category: "Support" },
    { time: "11:45", title: "F3 Practice Session", category: "Support" },
    { time: "13:30", title: "Formula 1 - Free Practice 1", category: "F1" },
    { time: "15:00", title: "F2 Practice Session", category: "Support" },
    { time: "17:00", title: "Formula 1 - Free Practice 2", category: "F1" },
    { time: "18:30", title: "Paddock Club Pit Lane Walk", category: "Support" },
  ],
  Saturday: [
    { time: "09:00", title: "F3 Qualifying Session", category: "Support" },
    { time: "10:30", title: "F2 Qualifying Session", category: "Support" },
    { time: "12:30", title: "Formula 1 - Free Practice 3", category: "F1" },
    { time: "14:15", title: "F3 Sprint Race", category: "Support" },
    { time: "16:00", title: "Formula 1 - Qualifying", category: "F1" },
    { time: "17:30", title: "F2 Sprint Race", category: "Support" },
  ],
  Sunday: [
    { time: "09:45", title: "F3 Feature Race", category: "Support" },
    { time: "11:15", title: "F2 Feature Race", category: "Support" },
    { time: "13:00", title: "Driver Parade", category: "F1" },
    { time: "14:20", title: "National Anthem", category: "F1" },
    { time: "15:00", title: "Grand Prix (58 Laps)", category: "F1" },
    { time: "17:00", title: "Podium Ceremony", category: "F1" },
  ],
};

export default function F1Schedule() {
  const [activeDay, setActiveDay] = useState("Friday");

  return (
    <div
      className="h-[100vh] bg-black text-white 
    font-sans p-4 md:py-8 md:px-24"
    >
      {/* Header */}
      <div className="md:max-w-full max-w-4xl mx-auto mb-12 border-l-4 border-red-600 pl-6">
        <h1 className="text-4xl md:text-6xl font-formula1 font-black uppercase tracking-tighter">
          Event <span className="text-red-600">Schedule</span>
        </h1>
        <p className="text-gray-400 mt-2 flex items-center gap-2">
          <MapPin size={16} /> IEM Gurukul Building, Kolkata
        </p>
      </div>

      {/* Day Selector */}
      <div
        className="md:max-w-full max-w-4xl mx-auto mb-8 flex gap-1 
      bg-zinc-900 p-1 rounded-sm"
      >
        {Object.keys(scheduleData).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`flex-1 py-3 px-4 text-sm font-bold uppercase transition-all ${
              activeDay === day
                ? "bg-red-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-zinc-800"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule List */}
      <div
        className="max-h-[60vh] overflow-y-auto md:max-w-full max-w-4xl 
      mx-auto space-y-2 scrollbar-hide"
      >
        {scheduleData[activeDay].map((event, idx) => (
          <div
            key={idx}
            className="group flex items-center 
            bg-zinc-900/50 border-l-2 
            border-transparent 
            hover:border-red-600 hover:bg-zinc-800 
            transition-all p-4 rounded-r-md"
          >
            <div className="w-24 md:w-32 flex flex-col">
              <span className="text-sm text-gray-400 uppercase font-formula1 font-bold">
                Time
              </span>
              <span className="text-xl font-formula1 text-white group-hover:text-red-500">
                {event.time}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight">
                  {event.title}
                </h3>
                {event.category === "F1" && (
                  <span className="bg-red-600 text-[10px] px-2 py-0.5 rounded italic font-black">
                    LIVE
                  </span>
                )}
              </div>
            </div>

            <div className="hidden md:block">
              <span
                className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
                  event.category === "F1"
                    ? "border-red-600 text-red-600"
                    : "border-zinc-700 text-zinc-500"
                }`}
              >
                {event.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="md:max-w-full max-w-4xl mx-auto mt-12 text-center text-zinc-600 text-xs uppercase tracking-widest">
        <p>* All times are subject to change based on track conditions</p>
      </div>
    </div>
  );
}
