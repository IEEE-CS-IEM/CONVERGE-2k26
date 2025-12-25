import React from "react";
import { Shield, FastForward, Globe, Zap } from "lucide-react";

const sponsors = {
  title: {
    name: "Oracle Cloud",
    role: "Title Partner",
    logo: "https://logo.clearbit.com/oracle.com",
    desc: "Driving data analytics and strategy for every race lap.",
  },
  technical: [
    { name: "Mobil 1", logo: "https://logo.clearbit.com/mobil.com" },
    { name: "Honda", logo: "https://logo.clearbit.com/honda.com" },
    { name: "Pirelli", logo: "https://logo.clearbit.com/pirelli.com" },
    { name: "Hewlett Packard", logo: "https://logo.clearbit.com/hp.com" },
  ],
  official: [
    { name: "Tag Heuer", logo: "https://logo.clearbit.com/tagheuer.com" },
    { name: "Siemens", logo: "https://logo.clearbit.com/siemens.com" },
    { name: "Zoom", logo: "https://logo.clearbit.com/zoom.us" },
    { name: "Ansys", logo: "https://logo.clearbit.com/ansys.com" },
    { name: "Walmart", logo: "https://logo.clearbit.com/walmart.com" },
    { name: "CashApp", logo: "https://logo.clearbit.com/cash.app" },
  ],
};

export default function SponsorsPage() {
  return (
    <div className="min-h-screen overflow-y-auto bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden border-b-8 border-red-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070')] bg-cover bg-center opacity-30 grayscale" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter">
            Our <span className="text-red-600">Partners</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto font-medium uppercase tracking-widest text-sm">
            The engineering and innovation excellence behind our pursuit of
            speed.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* Title Sponsor - Featured Card */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-transparent opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-zinc-900 border border-zinc-800 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 bg-white flex items-center justify-center p-6 rounded-sm">
              <img
                src={sponsors.title.logo}
                alt={sponsors.title.name}
                className="w-full object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block bg-red-600 text-xs font-black px-3 py-1 mb-4 italic uppercase">
                Principal Partner
              </span>
              <h2 className="text-4xl font-black uppercase mb-4 tracking-tight">
                {sponsors.title.name}
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {sponsors.title.desc}
              </p>
            </div>
          </div>
        </section>

        {/* Technical Partners */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-bold uppercase tracking-widest text-red-600">
              Technical Partners
            </h3>
            <div className="h-[1px] flex-1 bg-zinc-800"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sponsors.technical.map((s) => (
              <div
                key={s.name}
                className="bg-zinc-900 aspect-video flex items-center justify-center p-8 border border-zinc-800 hover:border-red-600 transition-colors"
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  className="max-h-full max-w-full object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Official Partners Grid */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-bold uppercase tracking-widest text-zinc-500">
              Official Partners
            </h3>
            <div className="h-[1px] flex-1 bg-zinc-800"></div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {sponsors.official.map((s) => (
              <div
                key={s.name}
                className="bg-zinc-900/50 aspect-square flex items-center justify-center p-6 border border-zinc-900 hover:bg-zinc-800 transition-all group"
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  className="max-h-full max-w-full object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <footer className="bg-red-600 py-12 text-center">
        <h4 className="text-2xl font-black uppercase italic mb-6">
          Drive innovation with us
        </h4>
        <button className="bg-black text-white px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors">
          Become a Partner
        </button>
      </footer>
    </div>
  );
}
