import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '../components/shared/Lightbox';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'cottages', name: 'Cottages' },
  { id: 'interior', name: 'Interior' },
  { id: 'exterior', name: 'Exterior' },
];

const galleryImages = [
  // Real cottage images from the website
  { src: '/images/gallery/dream-cottage-image1.jpg', category: 'cottages', title: 'Container Cottage' },
  { src: '/images/gallery/dream-cottage-image2.jpg', category: 'cottages', title: 'Premium Cottage' },
  { src: '/images/gallery/dream-cottage-image3.jpg', category: 'cottages', title: 'Mountain View Cottage' },
  { src: '/images/gallery/dream-cottage-image4.jpg', category: 'interior', title: 'Interior Design' },
  { src: '/images/gallery/dream-cottage-image5.jpg', category: 'interior', title: 'Bedroom Setup' },
  { src: '/images/gallery/dream-cottage-image6.jpg', category: 'cottages', title: 'Modern Cottage' },
  { src: '/images/gallery/dream-cottage-image10.jpg', category: 'exterior', title: 'Exterior View' },
  { src: '/images/gallery/dream-cottage-image11.jpg', category: 'cottages', title: 'Luxury Cottage' },
  { src: '/images/gallery/dream-cottage-image12.jpg', category: 'interior', title: 'Living Space' },
  { src: '/images/gallery/dream-cottage-image13.jpg', category: 'cottages', title: 'Container Home' },
  { src: '/images/gallery/dream-cottage-image14.jpg', category: 'exterior', title: 'Cottage Exterior' },
  { src: '/images/gallery/dream-cottage-image15.jpg', category: 'cottages', title: 'Premium Design' },
  { src: '/images/gallery/dream-cottage-image16.jpg', category: 'interior', title: 'Room Interior' },
  { src: '/images/gallery/dream-cottage-image18.jpg', category: 'cottages', title: 'Cozy Cottage' },
  { src: '/images/gallery/dream-cottage-image20.jpg', category: 'exterior', title: 'Front View' },
  { src: '/images/gallery/dream-cottage-image21.jpg', category: 'cottages', title: 'Family Cottage' },
  { src: '/images/gallery/dream-cottage-image22.jpg', category: 'interior', title: 'Bedroom Interior' },
  { src: '/images/gallery/dream-cottage-image24.jpg', category: 'cottages', title: 'Compact Cottage' },
  { src: '/images/gallery/dream-cottage-image25.jpg', category: 'exterior', title: 'Side View' },
  { src: '/images/gallery/dream-cottage-image27.jpg', category: 'cottages', title: 'Studio Cottage' },
  { src: '/images/gallery/dream-cottage-image28.jpg', category: 'interior', title: 'Interior Details' },
  { src: '/images/gallery/dream-cottage-image29.jpg', category: 'cottages', title: 'Guest Cottage' },
  { src: '/images/gallery/dream-cottage-image30.jpg', category: 'exterior', title: 'Garden View' },
  { src: '/images/gallery/gallery-dream.jpeg', category: 'cottages', title: 'Dream Cottage' },
  { src: '/images/gallery/gallery-dream2.jpeg', category: 'cottages', title: 'Hillside Cottage' },
  { src: '/images/gallery/gallery-dream3.jpeg', category: 'exterior', title: 'Entrance View' },
  { src: '/images/gallery/gallery-dream4.jpeg', category: 'cottages', title: 'Nature Cottage' },
  { src: '/images/gallery/gallery-img-01.jpg', category: 'cottages', title: 'One Bedroom Unit' },
  { src: '/images/gallery/gallery-img-02.jpg', category: 'interior', title: 'Furnished Interior' },
  { src: '/images/gallery/gallery-img-03.jpg', category: 'cottages', title: 'Two Bedroom Unit' },
  { src: '/images/gallery/gallery-img-04.jpg', category: 'exterior', title: 'Outdoor Setup' },
  { src: '/images/gallery/gallery-img-05.jpg', category: 'cottages', title: 'Premium Unit' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Hero Section - Minimal text, image focused */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Our Work
            </h1>
            <p className="text-gray-200 max-w-xl mx-auto">
              Real projects. Real craftsmanship. See our completed container cottages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
                {activeCategory === category.id && (
                  <span className="ml-2 text-accent">
                    ({filteredImages.length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Masonry Style */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="mb-4 break-inside-avoid"
              >
                <div
                  className="relative rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-medium text-sm">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages.map((img) => img.src)}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
