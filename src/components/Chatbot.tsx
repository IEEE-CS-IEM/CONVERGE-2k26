import { useState } from "react";
import { X, MessageSquare, Radio, Mic2, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import maxPixel from "@/assets/maxi.png"; // Ensure this asset exists, if not need to fallback or use a placeholder
import botLogo from "/favicon.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] flex 
        flex-col items-end gap-4 font-sans"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[380px] h-[600px] flex flex-col overflow-hidden relative shadow-2xl origin-bottom-right"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))", // Angled corner bottom-left
              background: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
              boxShadow: "0 25px 50px -12px rgba(255, 51, 51, 0.25)",
            }}
          >
            {/* Border Glow */}
            <div className="absolute inset-0 border border-racing-red/20 rounded-none pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-racing-red/10 blur-xl pointer-events-none" />

            {/* Header - Pit Wall Style */}
            <div className="bg-[#111] border-b-2 border-racing-red p-4 flex justify-between items-center relative overflow-hidden">
              {/* Carbon texture overlay on header */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />

              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 rounded bg-[#f33] p-0.5">
                    <img
                      src={botLogo}
                      alt="Max"
                      className="w-full h-full object-cover rounded filter brightness-110"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-black"></span>
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-display font-bold uppercase tracking-wider text-sm">
                      Race Engineer
                    </span>
                    <span className="px-1.5 py-0.5 bg-[#f33] text-[8px] font-bold text-black rounded uppercase">
                      Live
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
                    <Radio className="w-3 h-3" />
                    <span>freq: 98.4 FM</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="relative z-10 p-2 hover:bg-white/10 rounded text-white/70 hover:text-[#f33] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Telemetry Bar */}
            <div className="bg-black/50 py-1 px-4 flex justify-between items-center border-b border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <Activity className="w-3 h-3 text-[#f33]" />
                <div className="h-1 w-16 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#f33] animate-[pulse_2s_infinite]"
                    style={{ width: "60%" }}
                  />
                </div>
              </div>
              <span className="text-[10px] uppercase font-mono text-white/40">
                Secure Connection
              </span>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 bg-black relative">
              <iframe
                src="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/16/09/20250416091720-8BH9S6OQ.json"
                className="w-full h-full border-none"
                title="Converge Assistant"
              />
              {/* Overlay to darken the scrollbar if possible or add CRT scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Footer decorative */}
            <div className="h-6 bg-[#111] border-t border-white/10 flex items-center justify-center gap-1">
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="w-1 h-1 bg-white/20 rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* F1 Themed Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group outline-none"
      >
        {/* Tooltip Label */}
        <AnimatePresence>
          {isHovered && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute right-[110%] top-1/2 -translate-y-1/2 bg-black/90 border border-[#f33]/30 text-white text-xs font-mono py-1 px-3 rounded whitespace-nowrap backdrop-blur"
            >
              OPEN_TEAM_RADIO
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button Body */}
        {isOpen ? (
          // Close Button State
          <div className="w-16 h-16 bg-[#f33] rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(255,51,51,0.5)] border-2 border-white/20">
            <div className="-rotate-45">
              <X className="w-8 h-8 text-white" />
            </div>
          </div>
        ) : (
          // Max Head State
          <div className="relative w-24 h-24 flex items-end justify-center">
            {/* Circle Background pulse */}
            <div
              className="absolute bottom-2 w-16 h-16 bg-[#f33]/20 
            rounded-full animate-ping"
            />
            <div
              className="absolute bottom-2 w-16 h-16 bg-gradient-to-tr
            from-black to-[#222] rounded-full border border-[#f33] 
            shadow-lg flex items-center justify-center overflow-hidden"
            >
              <img
                src={botLogo}
                alt="Chat"
                className="absolute bottom-0 w-fit h-full 
              object-contain filter drop-shadow-2xl hover:-translate-y-1 
              transition-transform duration-300"
              />
            </div>

            {/* Notification Badge */}
            <div className="absolute top-4 right-4 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f33] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f33] border border-white"></span>
            </div>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;
