import HeroSection from "@/components/HeroSection";
import DescriptionSection from "@/components/DescriptionSection";
import ImageGallery from "@/components/ImageGallery";
import VideoSection from "@/components/VideoSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DescriptionSection />
      <ImageGallery />
      <VideoSection />
      <InfoSection />
      <Footer />
    </main>
  );
};

export default Index;