import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1920&q=80"
            alt="Container home in mountains"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-accent font-medium mb-4 tracking-wider uppercase"
          >
            Welcome to Make My Dream Cottages
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 text-shadow-lg leading-tight"
          >
            Your Dream Cottage Awaits in the{' '}
            <span className="text-accent">Himalayas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
          >
            Premium prefabricated container homes designed and built in Uttarkashi.
            Experience modern living amidst nature with our durable, beautiful, and
            sustainable cottage solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/products"
              className="btn-primary inline-flex items-center justify-center space-x-2 text-lg"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center justify-center text-lg"
            >
              Free Consultation
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">5+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
