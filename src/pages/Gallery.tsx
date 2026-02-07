import { useState } from "react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import eventWedding from "@/assets/event-wedding.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventFestival from "@/assets/event-festival.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryItems = [
  { id: 1, src: heroBg, alt: "Wedding reception with sound setup", category: "Wedding" },
  { id: 2, src: gallery2, alt: "Wedding reception with sound setup", category: "Wedding" },
  { id: 3, src: gallery1, alt: "DJ performance with crowd", category: "Party" },
  { id: 4, src: eventCorporate, alt: "Corporate conference setup", category: "Corporate" },
  { id: 5, src: gallery3, alt: "Line array speaker system", category: "Equipment" },
  { id: 6, src: eventFestival, alt: "Sangeet Night", category: "Wedding" },
  { id: 7, src: gallery4, alt: "Outdoor corporate event", category: "Corporate" },
  { id: 8, src: eventWedding, alt: "Wedding DJ setup", category: "Wedding" },
];

const categories = ["All", "Wedding", "Corporate", "Party", "Concert", "Festival", "Equipment"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      <SEOHead
        title="Gallery"
        description="Explore our portfolio of event setups featuring professional sound systems, lighting rigs, and stage productions for weddings, concerts, and corporate events."
        keywords="sound system gallery, event setup photos, wedding audio images, concert sound pictures, DJ equipment photos"
      />

      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
        <div className="container relative">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4">Our Work</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Event <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse through our portfolio of events to see our equipment and setups in action.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-[100px] md:top-[140px] bg-background/90 backdrop-blur-lg z-40">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative group overflow-hidden rounded-xl cursor-pointer ${
                  index % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
                onClick={() => setLightboxImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index % 5 === 0 ? "h-[500px]" : "h-64"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs bg-primary/80 text-primary-foreground px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <p className="text-foreground text-sm mt-2">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
