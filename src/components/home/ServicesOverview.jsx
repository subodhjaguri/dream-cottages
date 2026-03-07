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

        {/* ISO Certifications */}
        <div className="mt-16 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center"
          >
            <Link to="/about#certification" className="flex flex-col sm:flex-row gap-6">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <img
                  src="/iso-certificate.png"
                  alt="ISO 9001:2015 Certificate of Registration - Make My Dream Cottage"
                  className="relative rounded-xl shadow-2xl max-w-[200px] w-full border-2 border-white/50"
                />
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <img
                  src="/iso-14001-certificate.png"
                  alt="ISO 14001:2015 Environmental Management Certificate - Make My Dream Cottage"
                  className="relative rounded-xl shadow-2xl max-w-[200px] w-full border-2 border-white/50"
                />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="font-heading text-2xl font-bold text-dark mb-4">
              Quality & Sustainability You Can Trust
            </h3>
            <p className="text-gray-600 mb-6">
              Make My Dream Cottage is dual ISO certified — ISO 9001:2015 for quality management and ISO 14001:2015 for environmental management, validating our commitment to excellence and sustainability.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm mr-3 mt-0.5 shrink-0">✓</span>
                <span className="text-gray-600">Modular, Prefabricated & LGSF Cottages</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm mr-3 mt-0.5 shrink-0">✓</span>
                <span className="text-gray-600">Steel Structures & Pre-Engineered Buildings</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm mr-3 mt-0.5 shrink-0">✓</span>
                <span className="text-gray-600">Prefabricated & Mobile Toilets, Bio Toilets</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm mr-3 mt-0.5 shrink-0">✓</span>
                <span className="text-gray-600">Modular Container Shops, Offices & Godowns</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-dark">ISO 9001:2015</span> &nbsp;|&nbsp;
                <span className="font-semibold text-dark">ISO 14001:2015</span> &nbsp;|&nbsp;
                Certified by PQC, London
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
