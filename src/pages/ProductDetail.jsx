import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Lightbox from '../components/shared/Lightbox';
import EnquiryForm from '../components/shared/EnquiryForm';
import ProductCard from '../components/shared/ProductCard';
import { products } from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark mb-4">Product not found</h1>
          <Link to="/products" className="text-primary hover:text-accent">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.gallery.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === product.gallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-light">
        <div className="container-custom">
          <Link
            to="/products"
            className="inline-flex items-center text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-8 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 cursor-pointer group">
                <img
                  src={product.gallery[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onClick={() => setLightboxOpen(true)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    Click to enlarge
                  </span>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex space-x-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      idx === currentImageIndex
                        ? 'border-primary'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="inline-block px-4 py-1 bg-accent text-white text-sm rounded-full mb-4">
                  {product.shortName}
                </span>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  {product.description}
                </p>

                {/* Specifications */}
                <div className="bg-white rounded-xl p-6 mb-6">
                  <h3 className="font-heading font-semibold text-lg mb-4">
                    Specifications
                  </h3>
                  <div className="space-y-3">
                    {product.specifications.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-medium text-dark">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-lg mb-4">
                    Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enquiry Form */}
                <EnquiryForm productName={product.name} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-heading text-2xl font-bold text-dark mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p, index) => (
              <ProductCard key={p.id} product={p} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={product.gallery}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </>
  );
}
