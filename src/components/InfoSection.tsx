import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Ruler, Users } from "lucide-react";

interface InfoCard {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail: string;
}

const infoCards: InfoCard[] = [
  {
    icon: <MapPin className="h-6 w-6" />,
    label: "Location",
    value: "Rome, Italy",
    detail: "Heart of the ancient Roman Forum",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    label: "Era",
    value: "70–80 AD",
    detail: "Flavian Dynasty, Imperial Rome",
  },
  {
    icon: <Ruler className="h-6 w-6" />,
    label: "Dimensions",
    value: "189 × 156 m",
    detail: "Covering 6 acres of ground",
  },
  {
    icon: <Users className="h-6 w-6" />,
    label: "Capacity",
    value: "50,000–80,000",
    detail: "Spectators at peak events",
  },
];

const InfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="heritage-section bg-secondary/50">
      <div className="heritage-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Quick Facts
          </span>
          <h2 className="heritage-heading">At a Glance</h2>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-lg border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {card.icon}
              </div>
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {card.label}
              </p>
              <p className="mb-2 font-serif text-2xl font-semibold text-card-foreground">
                {card.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {card.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;