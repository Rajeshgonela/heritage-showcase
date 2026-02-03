import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const DescriptionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="heritage-section bg-background">
      <div className="heritage-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Label */}
          <span className="mb-6 inline-block text-sm font-medium uppercase tracking-[0.15em] text-primary">
            The History
          </span>

          {/* Main Heading */}
          <h2 className="heritage-heading mb-8">
            An Architectural Marvel of the Ancient World
          </h2>

          {/* Opening Quote */}
          <blockquote className="mb-12 border-l-2 border-primary/30 pl-6 italic">
            <p className="text-2xl font-serif text-foreground/80 leading-relaxed md:text-3xl">
              "While the Colosseum stands, Rome shall stand; when the Colosseum falls, Rome shall fall; 
              when Rome falls, the world shall fall."
            </p>
            <footer className="mt-4 text-sm font-sans not-italic text-muted-foreground">
              — Venerable Bede, 8th Century
            </footer>
          </blockquote>

          {/* Body Text */}
          <div className="space-y-6 heritage-prose">
            <p>
              The Colosseum, originally known as the Flavian Amphitheatre, stands as one of the 
              greatest works of Roman architecture and engineering. Commissioned by Emperor Vespasian 
              in 72 AD and completed by his son Titus in 80 AD, this elliptical amphitheater was 
              designed to host spectacular public spectacles including gladiatorial contests, animal 
              hunts, and dramatic performances.
            </p>
            <p>
              At its peak, the Colosseum could accommodate between 50,000 and 80,000 spectators, 
              who entered through 80 arched entrances. The arena floor was covered with sand—the 
              Latin word for sand, "harena," gives us our modern word "arena." Beneath this floor 
              lay a complex network of tunnels and chambers known as the hypogeum, where gladiators 
              and wild animals were kept before contests.
            </p>
            <p>
              The structure exemplifies Roman engineering genius: its concrete and travertine 
              construction, sophisticated drainage systems, and the velarium (a retractable awning 
              that shaded spectators) were innovations ahead of their time. Despite centuries of 
              earthquakes, stone-robbing, and neglect, roughly two-thirds of the original structure 
              remains standing—a testament to the skill of its builders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DescriptionSection;