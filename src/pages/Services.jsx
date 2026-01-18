import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Ruler, Hammer } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const services = [
  {
    icon: Ruler,
    title: 'Design Services',
    description: 'From pre-designed stock plans to fully custom layouts, our design team brings your vision to life with photo-realistic renderings and complete project guidance.',
    href: '/services/design',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    icon: Hammer,
    title: 'Build Services',
    description: 'Our construction team uses premium Corten steel and advanced techniques to create durable, hurricane and earthquake-resistant structures built to last.',
    href: '/services/build',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
];

export default function Services() {
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
              What We Do
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Comprehensive design and build services to create your perfect container home
              from concept to completion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Link to={service.href} className="block group">
                  <div className="relative overflow-hidden rounded-2xl h-[400px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center text-accent font-medium group-hover:text-accent-300 transition-colors">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
