import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Palette, Users, Shield, Clock, Truck } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const reasons = [
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Every cottage is designed and built locally in Uttarkashi with premium materials and expert craftsmanship.',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Choose from our stock plans or work with our designers to create a custom layout that matches your vision.',
  },
  {
    icon: Users,
    title: 'Free Consultation',
    description: 'Get expert advice at no cost. We help you understand your options and plan your project effectively.',
  },
  {
    icon: Shield,
    title: 'Durability',
    description: 'Built with Corten steel, our structures are hurricane and earthquake resistant for lasting peace of mind.',
  },
  {
    icon: Clock,
    title: 'Fast Construction',
    description: 'Prefabricated construction means faster completion times compared to traditional building methods.',
  },
  {
    icon: Truck,
    title: 'Transportable',
    description: 'Need to relocate? Our container homes can be transported across Uttarkashi and beyond.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionTitle
          subtitle="Why Us"
          title="Why Choose Make My Dream Cottages"
          description="We combine quality, creativity, and service to deliver container homes that exceed expectations."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors duration-300">
                <reason.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ISO Certification Badge */}
        <Link to="/about#certification">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-8 py-5 max-w-xl mx-auto border border-white/10 hover:bg-white/15 transition-colors cursor-pointer"
          >
            <Shield className="w-10 h-10 text-accent flex-shrink-0" />
            <div className="text-left">
              <p className="text-white font-heading font-semibold text-lg">ISO 9001:2015 Certified</p>
              <p className="text-gray-300 text-sm">Quality Management System certified by PQC, London</p>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
