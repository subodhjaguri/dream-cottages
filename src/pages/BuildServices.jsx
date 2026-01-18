import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/shared/ServiceCard';
import CTASection from '../components/home/CTASection';
import { buildServices, useCases } from '../data/services';

const buildProcess = [
  {
    number: '01',
    title: 'Site Preparation',
    description: 'We assess the site and prepare foundations as needed for your location.',
  },
  {
    number: '02',
    title: 'Container Selection',
    description: 'Premium shipping containers are selected and prepared for modification.',
  },
  {
    number: '03',
    title: 'Construction',
    description: 'Our skilled team completes all structural work, insulation, and finishes.',
  },
  {
    number: '04',
    title: 'Delivery & Setup',
    description: 'Your finished cottage is delivered and installed at your location.',
  },
];

export default function BuildServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src={buildServices.image}
            alt="Build Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase">
              {buildServices.subtitle}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              {buildServices.title}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {buildServices.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="What We Offer"
            title="Our Build Services"
            description="Quality construction using premium materials and expert craftsmanship."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildServices.features.map((feature, index) => (
              <ServiceCard key={feature.title} service={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <SectionTitle
            subtitle="How It Works"
            title="Our Build Process"
            description="From site preparation to final delivery, we handle everything."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buildProcess.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-heading font-bold text-primary/10 mb-4">
                  {step.number}
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                {index < buildProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-primary/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="Versatile Solutions"
            title="Perfect For Many Uses"
            description="Our container structures can serve a wide variety of purposes."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-primary/5 rounded-lg p-4 text-center"
              >
                <Check className="w-5 h-5 text-primary mx-auto mb-2" />
                <span className="text-sm text-gray-700">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
