import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Lightbox from '../shared/Lightbox';

const previewImages = [
  '/images/gallery/dream-cottage-image1.jpg',
  '/images/gallery/dream-cottage-image2.jpg',
  '/images/gallery/dream-cottage-image11.jpg',
  '/images/gallery/gallery-dream.jpeg',
  '/images/gallery/dream-cottage-image3.jpg',
  '/images/gallery/dream-cottage-image6.jpg',
  '/images/gallery/gallery-img-01.jpg',
  '/images/gallery/dream-cottage-image10.jpg',
];

export default function GalleryPreview() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-16 bg-light">
      <div className="container-custom">
        {/* Minimal Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Our Work
            </h2>
            <p className="text-gray-600 mt-2">Recent projects completed</p>
          </div>
          <Link
            to="/gallery"
            className="hidden md:flex items-center text-primary font-medium hover:text-accent transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {previewImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 || index === 3 ? 'row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 || index === 3 ? 'h-full' : 'h-48 md:h-56'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/gallery"
            className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>

      <Lightbox
        images={previewImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </section>
  );
}
