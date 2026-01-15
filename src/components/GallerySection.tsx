import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Flag, Gauge } from "lucide-react";

// Checkered flag pattern SVG
const CheckeredPattern = () => (
    <div className="absolute top-0 w-full h-8 z-20 flex opacity-30">
        {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className={`h-full w-8 ${i % 2 === 0 ? 'bg-white' : 'bg-black'}`} />
        ))}
    </div>
);

const galleryImages = [
    { id: 1, src: "/gallery/f1/img1.jpg", alt: "Archives 1" },
    { id: 2, src: "/gallery/f1/img2.jpg", alt: "Archives 2" },

    { id: 4, src: "/gallery/f1/img4.jpg", alt: "Archives 4" },
    { id: 5, src: "/gallery/f1/img5.jpg", alt: "Archives 5" },
    { id: 6, src: "/gallery/f1/img6.jpg", alt: "Archives 6" },
    { id: 7, src: "/gallery/f1/img7.jpg", alt: "Archives 7" },
    { id: 8, src: "/gallery/f1/img8.jpg", alt: "Archives 8" },
    { id: 9, src: "/gallery/f1/img9.jpg", alt: "Archives 9" },
    { id: 10, src: "/gallery/f1/img10.jpg", alt: "Archives 10" },
    { id: 11, src: "/gallery/f1/img11.jpg", alt: "Archives 11" },
    { id: 12, src: "/gallery/f1/img12.jpg", alt: "Archives 12" },
    { id: 13, src: "/gallery/f1/img13.jpg", alt: "Archives 13" },
    { id: 14, src: "/gallery/f1/img14.jpg", alt: "Archives 14" },
    { id: 15, src: "/gallery/f1/img15.jpg", alt: "Archives 15" },
    { id: 16, src: "/gallery/f1/img16.jpg", alt: "Archives 16" },
    { id: 17, src: "/gallery/f1/img17.jpg", alt: "Archives 17" },
    { id: 18, src: "/gallery/f1/img18.jpg", alt: "Archives 18" },
    { id: 19, src: "/gallery/f1/img19.jpg", alt: "Archives 19" },
    { id: 20, src: "/gallery/f1/img20.jpg", alt: "Archives 20" },
];

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Triple the list for smoother infinite loop on wider screens
    const loopImages = [...galleryImages, ...galleryImages, ...galleryImages];

    return (
        <section
            id="gallery"
            className="py-24 relative bg-[#0a0a0a] overflow-hidden flex flex-col justify-center border-t-4 border-[#f33]"
        >
            {/* F1 Styling Elements */}
            <CheckeredPattern />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />

            {/* Decorative Track Lines */}
            <div className="absolute top-1/2 left-0 w-full h-[60%] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#f33]/5 to-transparent skew-x-12 pointer-events-none" />

            <div className="container mx-auto px-6 mb-12 relative z-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="text-left">
                        <div className="flex items-center gap-3 mb-2">
                            <Flag className="text-[#f33] w-6 h-6 animate-pulse" />
                            <span className="text-[#f33] font-mono text-sm tracking-[0.2em] font-bold uppercase">Race Control</span>
                        </div>
                        <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter italic">
                            FLASHBACK
                        </h2>
                        <p className="font-mono text-white/60 text-sm md:text-base mt-2 max-w-xl">
                  // PIT_LANE_ARCHIVES // PREVIOUS_SEASONS
                        </p>
                    </div>

                    <div className="hidden md:flex items-center gap-4 bg-white/5 px-6 py-3 rounded-tr-2xl border-b-2 border-[#f33]">
                        <Gauge className="text-white w-5 h-5" />
                        <div className="flex flex-col">
                            <span className="text-xs text-white/50 font-mono uppercase">Total Memories</span>
                            <span className="text-xl font-display font-bold text-white text-right">247</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative w-full overflow-hidden py-8 bg-black/40 border-y border-white/5 backdrop-blur-sm">
                {/* Side Vignettes */}
                <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

                <motion.div
                    className="flex gap-6 w-max items-center"
                    animate={{ x: ["0%", "-33.33%"] }} // Move 1/3 of the tripled list
                    transition={{
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    // Pause on hover
                    whileHover={{ animationPlayState: "paused" }}
                >
                    {loopImages.map((image, index) => (
                        <div
                            key={`${image.id}-${index}`} // Composite key
                            className="relative flex-shrink-0 cursor-pointer group"
                            onClick={() => setSelectedImage(image.id)}
                        >
                            {/* Image Container with skew effect for speed look */}
                            <div className="relative overflow-hidden w-[280px] h-[180px] md:w-[400px] md:h-[260px] rounded-lg border-2 border-transparent group-hover:border-[#f33] transition-all duration-300 transform -skew-x-6 origin-bottom hover:skew-x-0 group-hover:scale-105 bg-neutral-900 shadow-2xl">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transform scale-125 skew-x-6 group-hover:skew-x-0 group-hover:scale-100 transition-all duration-500"
                                    loading="lazy"
                                />
                                {/* Overlay Tech Grid */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                                {/* Hud Corner Elements */}
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#f33] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#f33] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Meta Info */}
                            <div className="absolute -bottom-6 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs font-mono text-[#f33] bg-black/80 px-2 py-0.5 rounded">IMG_ID_{image.id.toString().padStart(3, '0')}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute bottom-2 right-6 flex items-center gap-2 opacity-30">
                <div className="w-2 h-2 rounded-full bg-[#f33] animate-ping" />
                <span className="text-[10px] font-mono text-white uppercase tracking-widest">Live Archive Feed</span>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Tech Background in Modal */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,51,51,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,51,51,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                        <div className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                }}
                                className="absolute -top-12 right-0 text-white/70 hover:text-[#f33] transition-colors flex items-center gap-2 group"
                            >
                                <span className="text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close Telemetry</span>
                                <X className="w-8 h-8" />
                            </button>

                            {(() => {
                                const img = galleryImages.find(i => i.id === selectedImage);
                                return img ? (
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0, rotateX: 20 }}
                                        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                                        exit={{ scale: 0.9, opacity: 0 }}
                                        className="relative border-4 border-white/10 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(255,51,51,0.2)] bg-black"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="max-h-[80vh] w-auto max-w-full"
                                        />
                                        {/* F1 Overlay Details */}
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex justify-between items-end">
                                            <div>
                                                <h3 className="text-[#f33] font-display font-bold text-2xl uppercase italic">Data Point {img.id}</h3>
                                                <p className="text-white/60 font-mono text-xs mt-1">Archive _2024_2025 // Captured on Site</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : null;
                            })()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GallerySection;
