import { motion } from "framer-motion";
import heroImage from "@/assets/hero-colosseum.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="The Colosseum at golden hour"
          className="h-full w-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="heritage-container relative z-10 flex h-full flex-col justify-end pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Rome, Italy · 70-80 AD
          </span>
          <h1 className="mb-6 font-serif text-5xl font-semibold leading-tight text-primary-foreground md:text-6xl lg:text-7xl xl:text-8xl">
            The Colosseum
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            A monument to the grandeur of Ancient Rome, standing as the largest 
            amphitheater ever built and an enduring symbol of imperial power.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-primary-foreground/60">
              Scroll
            </span>
            <div className="h-8 w-[1px] bg-primary-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;