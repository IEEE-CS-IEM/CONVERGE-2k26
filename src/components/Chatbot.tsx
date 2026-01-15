
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import maxPixel from "@/assets/maxi.png";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="w-[350px] h-[500px] bg-zinc-900 border border-racing-red/30 rounded-2xl shadow-2xl overflow-hidden relative"
                    >
                        {/* Header */}
                        <div className="bg-racing-red p-3 flex justify-between items-center text-white">
                            <div className="flex items-center gap-2">
                                <img src={maxPixel} alt="Max Bot" className="w-8 h-8 rounded border border-white/20 bg-black/50 object-cover bg-top" />
                                <div>
                                    <h3 className="font-formula1 text-sm">Race Engineer</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[10px] uppercase font-mono text-white/80">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Frame */}
                        <iframe
                            src="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/16/09/20250416091720-8BH9S6OQ.json"
                            className="w-full h-full bg-zinc-950"
                            title="Converge Assistant"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-28 h-28 flex items-end justify-center group"
            >
                {isOpen ? (
                    <div className="w-14 h-14 bg-zinc-900 border-2 border-racing-red rounded-full flex items-center justify-center shadow-xl">
                        <X className="w-6 h-6 text-racing-red" />
                    </div>
                ) : (
                    <div className="relative w-full h-full">
                        {/* Max Character Image - No Circle Crop */}
                        <img
                            src={maxPixel}
                            alt="Chat"
                            className="w-full h-full object-contain filter drop-shadow-2xl"
                        />

                        {/* Status Indicator (Absolute positioned near head/shoulder) */}
                        <div className="absolute top-4 right-6 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-950 z-20">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        </div>
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
