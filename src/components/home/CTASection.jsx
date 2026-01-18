import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Himalayan mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-medium mb-4 tracking-wider uppercase"
          >
            Ready to Start?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Build Your Dream Cottage?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-200 mb-8"
          >
            Get started today with a free consultation. Our team will help you explore options,
            understand the process, and create a plan that fits your needs and budget.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="btn-accent inline-flex items-center justify-center space-x-2 text-lg"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919520578466"
              className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
