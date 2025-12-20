import { motion } from "framer-motion";

const partners = [
  {
    id: "lenovo",
    name: "Lenovo",
    logo: "Lenovo",
    description:
      "Lenovo (HKSE: 992) (ADR: LNVGY) is a US$60 billion revenue Fortune Global 500 company serving customers in 180 markets around the world. Focused on a bold vision to deliver smarter technology for all, we are developing world-changing technologies that power (through devices and infrastructure) and empower (through solutions, services and software) millions of customers every day.",
    link: "https://www.lenovo.com",
  },
];

const PartnersSection = () => {
  return (
    <section id="contact" className="bg-background py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-2">
            CONVERGE SPONSORS
          </h2>
          <h3 className="font-display text-2xl md:text-4xl font-bold text-accent">
            PARTNERS
          </h3>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Partner card */}
              <div className="bg-secondary rounded-3xl p-8 md:p-12 mb-8">
                <div className="bg-background rounded-2xl p-8 flex items-center justify-center mb-6">
                  <span className="font-display text-2xl md:text-3xl font-bold text-accent">
                    {partner.logo}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/70 text-center text-sm md:text-base leading-relaxed">
                {partner.description}{" "}
                <a
                  href={partner.link}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website
                </a>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="font-display text-2xl font-bold text-foreground">
                CONV<span className="text-primary">E</span>RGE
              </span>
              <span className="text-muted-foreground">2025</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 IEEE CS IEM. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
