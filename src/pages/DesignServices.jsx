import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Ruler, Palette, Image, FileCheck, Truck, HelpCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/shared/ServiceCard';
import CTASection from '../components/home/CTASection';
import { designServices } from '../data/services';

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We discuss your needs, preferences, and budget to understand your vision.',
  },
  {
    number: '02',
    title: 'Design Development',
    description: 'Our team creates floor plans and 3D renderings for your review.',
  },
  {
    number: '03',
    title: 'Refinement',
    description: 'We refine the design based on your feedback until it\'s perfect.',
  },
  {
    number: '04',
    title: 'Final Approval',
    description: 'You approve the final design and we prepare for construction.',
  },
];

export default function DesignServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src={designServices.image}
            alt="Design Services"
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
              {designServices.subtitle}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              {designServices.title}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {designServices.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="What We Offer"
            title="Our Design Services"
            description="Comprehensive design support from initial concept to final delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.features.map((feature, index) => (
              <ServiceCard key={feature.title} service={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <SectionTitle
            subtitle="How It Works"
            title="Our Design Process"
            description="A streamlined process to bring your dream cottage to life."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-primary/20" />
                )}
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
