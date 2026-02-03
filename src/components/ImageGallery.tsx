import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X } from "lucide-react";

import galleryArches from "@/assets/gallery-arches.jpg";
import galleryArena from "@/assets/gallery-arena.jpg";
import galleryDetail from "@/assets/gallery-detail.jpg";
import galleryNight from "@/assets/gallery-night.jpg";
import galleryUnderground from "@/assets/gallery-underground.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  span?: string;
}

const images: GalleryImage[] = [
  {
    src: galleryArches,
    alt: "Interior arches and corridors of the Colosseum",
    caption: "The vaulted corridors that once echoed with the footsteps of 50,000 spectators",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: galleryArena,
    alt: "Arena floor view of the Colosseum",
    caption: "The arena floor, now revealing the ancient hypogeum beneath",
    span: "md:col-span-2",
  },
  {
    src: galleryDetail,
    alt: "Architectural details and columns",
    caption: "Corinthian capitals showcase Roman mastery of decorative stonework",
    span: "md:col-span-1",
  },
  {
    src: galleryNight,
    alt: "The Colosseum illuminated at night",
    caption: "Golden light reveals the monument's majesty after dusk",
    span: "md:col-span-2",
  },
  {
    src: galleryUnderground,
    alt: "Underground tunnels beneath the arena",
    caption: "The hypogeum: a labyrinth of chambers where gladiators awaited their fate",
    span: "md:col-span-1",
  },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="heritage-section bg-muted/50">
      <div className="heritage-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Visual Journey
          </span>
          <h2 className="heritage-heading">Gallery</h2>
          <p className="heritage-subheading mx-auto">
            Explore the architectural grandeur through curated imagery
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`heritage-card group cursor-pointer overflow-hidden ${image.span || ""}`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-full md:min-h-[250px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image h-full w-full"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-foreground/80 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm text-primary-foreground/90">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute right-4 top-4 z-10 rounded-full bg-background/20 p-3 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/30"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="h-full w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                <p className="text-center font-serif text-lg text-primary-foreground">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageGallery;