
import { Facebook, Instagram, Linkedin, MapPin, ArrowRight, Activity, Gauge, Trophy, Timer, Wind, Thermometer, Mail, ExternalLink, Cpu, Zap, Radio, Flag, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
    const currentYear = 2026;
    const [lights, setLights] = useState<number>(0);
    const [telemetry, setTelemetry] = useState({ rpm: 0, speed: 0, gear: 1 });
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Racing Lights, Telemetry & Countdown
    useEffect(() => {
        const lightInterval = setInterval(() => {
            setLights((prev) => (prev < 5 ? prev + 1 : 0));
        }, 1000);

        const telemetryInterval = setInterval(() => {
            setTelemetry({
                rpm: 10000 + Math.floor(Math.random() * 3000),
                speed: 280 + Math.floor(Math.random() * 40),
                gear: 7 + (Math.random() > 0.5 ? 1 : 0),
            });
        }, 150);

        const targetDate = new Date("March 6, 2026 00:00:00").getTime();
        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => {
            clearInterval(lightInterval);
            clearInterval(telemetryInterval);
            clearInterval(countdownInterval);
        };
    }, []);

    return (
        <footer className="relative bg-[#050505] text-white overflow-hidden font-sans border-t-8 border-racing-red selection:bg-racing-red selection:text-white">

            {/* -----------------------------
          BACKGROUND LAYERS (VFX) 
      ------------------------------ */}

            {/* 1. Carbon Fiber Mesh Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(circle at center, transparent 0%, #050505 100%), 
                               linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a), 
                               linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a)`,
                    backgroundPosition: '0 0, 0 0, 10px 10px',
                    backgroundSize: '100% 100%, 20px 20px, 20px 20px'
                }}
            />

            {/* 2. Animated Circuit Line (Glowing SVG) */}
            <svg className="absolute top-0 right-0 h-full w-full opacity-10 pointer-events-none z-0" viewBox="0 0 1000 400" preserveAspectRatio="none">
                <path d="M0,350 Q200,350 400,200 T800,200 T1200,50" fill="none" stroke="#ef4444" strokeWidth="2" className="animate-pulse">
                    <animate attributeName="stroke-dasharray" from="0, 2000" to="2000, 0" duration="10s" repeatCount="indefinite" />
                </path>
                <path d="M0,360 Q200,360 400,210 T800,210 T1200,60" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
            </svg>

            {/* 3. Red Glow Pulse Effect */}
            <div className="absolute -left-20 top-20 w-96 h-96 bg-racing-red rounded-full filter blur-[150px] opacity-[0.08] animate-pulse" />

            {/* 4. Top Curb Strip */}
            <div className="absolute top-0 left-0 w-full h-3 flex z-20">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className={`flex-1 h-full ${i % 2 === 0 ? 'bg-white' : 'bg-racing-red'} skew-x-[-45deg] border-r border-black/20`} />
                ))}
            </div>


            {/* -----------------------------
          MAIN CONSOLE CONTENT
      ------------------------------ */}
            <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">

                {/* --- HEADER: BRAND & TELEMETRY --- */}
                <div className="flex flex-col xl:flex-row justify-between items-end mb-16 border-b border-zinc-900 pb-8 gap-8">

                    {/* Brand */}
                    <div className="relative group">
                        <h2 className="font-formula1 text-6xl md:text-7xl italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 drop-shadow-2xl">
                            CONVERGE<span className="text-racing-red">.</span>
                        </h2>
                        <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-racing-red to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        <p className="font-mono text-zinc-500 text-sm mt-2 tracking-[0.4em] uppercase">
                            Official Technical Partner 2K26
                        </p>
                    </div>

                    {/* Live Telemetry Module */}
                    <div className="flex gap-4 md:gap-8 bg-zinc-900/40 backdrop-blur-md p-6 rounded-xl border border-white/5 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-2">
                            <div className="flex gap-1">
                                <span className="w-1 h-1 bg-red-500 rounded-full animate-ping" />
                                <span className="w-1 h-1 bg-red-500 rounded-full" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center border-r border-white/10 pr-6">
                            <span className="text-zinc-500 text-[10px] font-mono uppercase mb-1">Race Start</span>
                            <div className="flex gap-1.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className={`w-3 h-3 md:w-4 md:h-4 rounded-full border border-black transition-all duration-75 ${lights >= i ? "bg-red-600 shadow-[0_0_15px_#ef4444] scale-110" : "bg-zinc-800"}`} />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-start min-w-[100px]">
                            <span className="text-zinc-500 text-[10px] font-mono uppercase mb-1 flex items-center gap-1">
                                <Gauge className="w-3 h-3" /> RPM
                            </span>
                            <span className="font-formula1 text-2xl text-white tracking-widest tabular-nums">
                                {telemetry.rpm}
                            </span>
                            <div className="w-full h-1 bg-zinc-800 rounded-full mt-1 overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-green-500 to-red-600" style={{ width: `${(telemetry.rpm / 15000) * 100}%` }} />
                            </div>
                        </div>

                        <div className="hidden md:flex flex-col items-start border-l border-white/10 pl-6">
                            <span className="text-zinc-500 text-[10px] font-mono uppercase mb-1">Speed Trap</span>
                            <div className="flex items-baseline gap-1">
                                <span className="font-formula1 text-2xl text-racing-red tabular-nums">{telemetry.speed}</span>
                                <span className="text-xs font-mono text-zinc-500">KM/H</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

                    {/* --- LEFT: TRACK MAP (EMBEDDED) (Span 4) --- */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Google Map Card */}
                        <div className="w-full h-80 bg-zinc-900/30 border border-white/10 rounded-lg relative overflow-hidden group hover:border-racing-red/40 transition-colors shadow-2xl">
                            {/* Header Strip */}
                            <div className="absolute top-0 left-0 w-full bg-black/80 backdrop-blur z-10 px-4 py-2 flex justify-between items-center border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-racing-red" />
                                    <span className="text-[10px] font-mono uppercase text-white tracking-wider">Circuit de IEM Gurukul</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[9px] font-bold text-zinc-500 uppercase">Live Cam</span>
                                </div>
                            </div>

                            {/* The Map Iframe */}
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=IEM%20Gurukul%20Campus%2C%20Y-12%2C%20Block%20EP%2C%20Sector%20V%2C%20Salt%20Lake%20Electronics%20Complex%2C%20Kolkata&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.2)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            {/* Decorative overlay lines */}
                            <div className="absolute inset-0 border-[0.5px] border-white/5 pointer-events-none" />
                            <div className="absolute bottom-4 left-4 z-10">
                                <a
                                    href="https://maps.app.goo.gl/q6Mh6BjKgjQ3jt6q8"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-racing-red/90 hover:bg-racing-red text-white text-[10px] font-bold px-3 py-1.5 rounded flex items-center gap-2 backdrop-blur-sm transition-colors"
                                >
                                    NAVIGATE <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>

                        {/* Social Grid */}
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="flex-1 aspect-[4/3] bg-zinc-900/50 border border-white/5 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-racing-red hover:border-racing-red hover:-translate-y-1 transition-all duration-300 shadow-lg group">
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>


                    {/* --- MIDDLE: DYNAMIC LISTS (Span 5) --- */}
                    <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Session Schedule */}
                        <div>
                            <h4 className="font-formula1 text-sm text-racing-red mb-6 uppercase tracking-wider flex items-center gap-2">
                                <Timer className="w-4 h-4" /> Session Times
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { label: "Q1 Check-in", time: "09:00", status: "Done", color: "text-zinc-500" },
                                    { label: "Opening Ceremony", time: "10:30", status: "Live", color: "text-racing-red" },
                                    { label: "Race Start (Hack)", time: "12:00", status: "Next", color: "text-white" },
                                    { label: "Tech Pit Stop", time: "14:00", status: "P4", color: "text-zinc-400" },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex justify-between items-center py-2 px-3 bg-zinc-900/20 border-l-2 border-zinc-800 hover:border-racing-red hover:bg-zinc-900/40 transition-all cursor-default group">
                                        <span className="text-xs font-mono uppercase text-zinc-300 group-hover:text-white transition-colors">{item.label}</span>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-bold font-mono text-white">{item.time}</span>
                                            <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${item.status === 'Live' ? 'bg-red-500/20 text-red-500 border border-red-500/30 animate-pulse' : 'bg-zinc-800 text-zinc-500'}`}>
                                                {item.status}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-formula1 text-sm text-racing-red mb-6 uppercase tracking-wider flex items-center gap-2">
                                <Activity className="w-4 h-4" /> Quick Pit
                            </h4>
                            <ul className="space-y-1">
                                {["About", "Registration", "Timeline", "Tracks", "Sponsors", "FAQs"].map((link) => (
                                    <li key={link}>
                                        <a href={`#${link.toLowerCase()}`} className="flex items-center justify-between p-2 rounded group hover:bg-white/5 transition-colors">
                                            <span className="text-xs font-mono uppercase text-zinc-400 group-hover:text-white group-hover:pl-2 transition-all duration-300">{link}</span>
                                            <ArrowRight className="w-3 h-3 text-racing-red opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    {/* --- RIGHT: NEWSLETTER & BADGES (Span 3) --- */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Contact Info (Pit Wall Comms) */}
                        <div className="relative p-6 bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-white/10 overflow-hidden hover:border-racing-red/30 transition-colors duration-500">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-racing-red opacity-[0.05] rounded-bl-full pointer-events-none" />

                            <h4 className="font-formula1 text-lg text-white italic mb-4 flex items-center gap-2">
                                <Radio className="w-5 h-5 text-racing-red animate-pulse" /> Pit Wall Comms
                            </h4>

                            <div className="space-y-4">
                                <div className="group">
                                    <p className="text-[10px] font-mono text-zinc-500 uppercase mb-1">General Inquiries</p>
                                    <a href="mailto:converge@iem.edu" className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-white/5 rounded-lg hover:bg-zinc-800 hover:border-racing-red/50 transition-all group-hover:translate-x-1">
                                        <Mail className="w-4 h-4 text-racing-red" />
                                        <span className="text-sm font-mono text-white">converge@iem.edu</span>
                                    </a>
                                </div>

                                <div className="group">
                                    <p className="text-[10px] font-mono text-zinc-500 uppercase mb-1">Emergency Line</p>
                                    <a href="tel:+911234567890" className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-white/5 rounded-lg hover:bg-zinc-800 hover:border-racing-red/50 transition-all group-hover:translate-x-1">
                                        <Phone className="w-4 h-4 text-racing-red" />
                                        <span className="text-sm font-mono text-white">+91 1234567890</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* NEW: COUNTDOWN & SYSTEM CHECK (Replacing 'Powered By') */}
                        <div className="bg-zinc-900/30 border border-white/5 rounded-lg p-4 space-y-4">

                            {/* Race Countdown */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Lights Out In</span>
                                    <Flag className="w-3 h-3 text-racing-red" />
                                </div>
                                <div className="grid grid-cols-4 gap-1 text-center">
                                    {[
                                        { val: timeLeft.days, label: "D" },
                                        { val: timeLeft.hours, label: "H" },
                                        { val: timeLeft.minutes, label: "M" },
                                        { val: timeLeft.seconds, label: "S" }
                                    ].map((t, i) => (
                                        <div key={i} className="bg-black/40 rounded py-1.5 border border-white/5">
                                            <span className="block font-formula1 text-sm text-white">{String(t.val).padStart(2, '0')}</span>
                                            <span className="block text-[8px] font-mono text-zinc-600">{t.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* System Status Grid */}
                            <div>
                                <div className="flex justify-between items-center mb-2 pt-2 border-t border-white/5">
                                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Tech Telemetry</span>
                                </div>
                                <div className="flex gap-2 text-[8px] font-mono text-zinc-400">
                                    {["REACT", "VITE", "TS", "GSAP"].map((tech) => (
                                        <span key={tech} className="px-2 py-1 bg-zinc-800/50 rounded flex items-center gap-1">
                                            <Zap className="w-2 h-2 text-yellow-500" /> {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                {/* --- BOTTOM: STATUS BAR --- */}
                <div className="mt-8 border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center bg-black/40 backdrop-blur rounded-full px-6 py-3 border border-white/5">

                    {/* Environment Data */}
                    <div className="flex flex-wrap justify-center items-center gap-6 text-[10px] font-mono uppercase text-zinc-500">
                        <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-help">
                            <Wind className="w-3 h-3 text-blue-500" /> 12 KM/H NE
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-help">
                            <Thermometer className="w-3 h-3 text-orange-500" /> 26°C TRACK
                        </span>
                        <span className="hidden sm:flex items-center gap-1.5 text-green-500 animate-pulse">
                            <Radio className="w-3 h-3" /> COMMS ONLINE
                        </span>
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center gap-6 text-[10px] font-mono uppercase text-zinc-500 mt-4 md:mt-0">
                        <span>© {currentYear} CONVERGE</span>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-racing-red transition-colors">Privacy</a>
                            <a href="#" className="hover:text-racing-red transition-colors">Terms</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
