import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  duration: string;
  description: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: "video1",
    title: "Walking Through History",
    duration: "4:32",
    description: "A guided tour through the ancient corridors and arena floor",
    thumbnail: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop",
  },
  {
    id: "video2",
    title: "Engineering Marvels",
    duration: "6:15",
    description: "How Roman engineers built a structure that would last millennia",
    thumbnail: "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=800&auto=format&fit=crop",
  },
  {
    id: "video3",
    title: "Gladiators of Rome",
    duration: "8:47",
    description: "The warriors who fought for glory in the ancient arena",
    thumbnail: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&auto=format&fit=crop",
  },
];

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="heritage-section bg-background">
      <div className="heritage-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Documentary
          </span>
          <h2 className="heritage-heading">Featured Films</h2>
          <p className="heritage-subheading mx-auto">
            Immerse yourself in the stories of ancient Rome
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((video, index) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="heritage-card group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="gallery-image"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 transition-colors group-hover:bg-foreground/30">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 shadow-lg transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-6 w-6 text-primary" fill="currentColor" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 rounded bg-foreground/80 px-2 py-1 text-xs font-medium text-primary-foreground">
                  {video.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-2 font-serif text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
                  {video.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;