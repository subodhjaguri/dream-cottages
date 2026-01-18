import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Ruler } from 'lucide-react';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/products/${product.slug}`}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-3 py-1 bg-accent text-white text-sm rounded-full mb-2">
                {product.shortName}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-heading text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {product.shortDescription}
            </p>

            {/* Specs */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Ruler className="w-4 h-4 mr-2" />
              <span>{product.dimensions}</span>
            </div>

            {/* CTA */}
            <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
