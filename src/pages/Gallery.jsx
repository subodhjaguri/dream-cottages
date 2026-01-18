import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '../components/shared/Lightbox';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'exterior', name: 'Exterior' },
  { id: 'interior', name: 'Interior' },
  { id: 'landscape', name: 'Landscape' },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80',
    category: 'exterior',
    title: 'Modern Container Home',
  },
  {
    src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    category: 'exterior',
    title: 'Two Bedroom Cottage',
  },
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    category: 'interior',
    title: 'Living Room Design',
  },
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    category: 'interior',
    title: 'Modern Bedroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    category: 'landscape',
    title: 'Himalayan Mountains',
  },
  {
    src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=800&q=80',
    category: 'exterior',
    title: 'Glamping Pod',
  },
  {
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    category: 'exterior',
    title: 'Luxury Container Home',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    category: 'exterior',
    title: 'Three Bedroom Exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    category: 'interior',
    title: 'Kitchen Design',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b25ba?w=800&q=80',
    category: 'interior',
    title: 'Cozy Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'exterior',
    title: 'Mod Room Design',
  },
  {
    src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
    category: 'landscape',
    title: 'Camping Setup',
  },
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase">
              Our Work
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Project Gallery
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Explore our portfolio of completed container cottages and see the quality
              of our craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Masonry Style */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <div
                  className="relative rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-medium">{image.title}</h3>
                      <span className="text-gray-300 text-sm capitalize">{image.category}</span>
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
