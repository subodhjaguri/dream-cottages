import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Ruler, Hammer } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const services = [
  {
    icon: Ruler,
    title: 'Design Services',
    description: 'From pre-designed stock plans to fully custom layouts, our design team brings your vision to life with photo-realistic renderings and complete project guidance.',
    features: ['Custom floor plans', '3D renderings', 'Permit assistance', 'Delivery coordination'],
    href: '/services/design',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    icon: Hammer,
    title: 'Build Services',
    description: 'Our construction team uses premium Corten steel and advanced techniques to create durable, hurricane and earthquake-resistant structures built to last.',
    features: ['Corten steel construction', 'Weather resistant', 'Fast turnaround', 'Turnkey delivery'],
    href: '/services/build',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionTitle
          subtitle="What We Offer"
          title="Our Services"
          description="Comprehensive design and build services to create your perfect container home from concept to completion."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-10 min-h-[400px] flex flex-col justify-end">
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.href}
                  className="inline-flex items-center space-x-2 text-accent font-semibold hover:text-accent-300 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
