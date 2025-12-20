import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import loaderVideo from "@/assets/CONVERGE (1).mp4";

const VideoLoader = ({ onDone }: { onDone?: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loader is active
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => {
      setIsLoading(false);
      onDone?.();
    }, 300); // Small delay for smooth transition
  };

  const handleSkip = () => {
    setVideoEnded(true);
    setTimeout(() => {
      setIsLoading(false);
      onDone?.();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-full object-contain"
            >
              <source src={loaderVideo} type="video/mp4" />
            </video>

            {/* Skip button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={handleSkip}
              className="absolute bottom-8 right-8 bg-primary/80 hover:bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Skip Intro
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoLoader;
