import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/30 py-12">
      <div className="heritage-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo/Brand */}
          <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
            Heritage Digital
          </h3>
          
          {/* Tagline */}
          <p className="mb-6 max-w-md text-sm text-muted-foreground">
            Built to preserve history — telling the stories of the places that shaped our world.
          </p>

          {/* Separator */}
          <div className="mb-6 h-px w-16 bg-border" />

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Heritage Digital. All rights reserved.
          </p>
          
          {/* Additional Info */}
          <p className="mt-2 text-xs text-muted-foreground/70">
            The Colosseum is a UNESCO World Heritage Site since 1980.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;