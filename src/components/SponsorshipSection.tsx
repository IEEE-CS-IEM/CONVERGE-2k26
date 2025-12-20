import { motion } from "framer-motion";

const sponsorshipTiers = [
  {
    id: "silver",
    name: "SILVER",
    color: "bg-silver",
    benefits: ["Logo on website", "Social media mention", "Event passes"],
    range: "₹10,000 - ₹25,000",
  },
  {
    id: "gold",
    name: "GOLD",
    color: "bg-gold",
    benefits: ["All Silver benefits", "Main stage branding", "Speaking slot", "VIP access"],
    range: "₹50,000 - ₹1,00,000",
    featured: true,
  },
  {
    id: "copper",
    name: "COPPER",
    color: "bg-copper",
    benefits: ["Logo on banners", "Social media tag"],
    range: "₹5,000 - ₹10,000",
  },
];

const SponsorshipSection = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-accent mb-2">
            SPONSORSHIP
          </h2>
          <h3 className="font-display text-2xl md:text-4xl font-bold text-accent">
            OPPORTUNITIES
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-end">
          {sponsorshipTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative ${tier.featured ? "md:-mt-8" : ""}`}
            >
              {/* Tier badge */}
              <div className="flex justify-center -mb-8 relative z-10">
                <div
                  className={`${tier.color} w-20 h-20 rounded-full flex items-center justify-center shadow-lg`}
                >
                  <span className="font-display font-bold text-background text-sm">
                    {tier.name}
                  </span>
                </div>
              </div>

              {/* Card */}
              <div
                className={`bg-background rounded-3xl p-6 pt-12 ${
                  tier.featured ? "min-h-[320px]" : "min-h-[280px]"
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-display text-foreground/60 text-sm italic mb-2">
                      DESCRIPTION OF BENEFITS
                    </h4>
                    <ul className="space-y-1">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="text-foreground/80 text-sm">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="font-display text-foreground/60 text-sm italic">
                      RANGE OF MONEY
                    </p>
                    <p className="font-display text-foreground font-bold">{tier.range}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
