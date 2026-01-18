import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/home/CTASection';

const values = [
  {
    icon: Award,
    title: 'Quality First',
    description: 'We never compromise on materials or craftsmanship. Every cottage we build meets the highest standards.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. We work closely with you to ensure your vision becomes reality.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We stay at the forefront of container home technology and design to offer you the best solutions.',
  },
  {
    icon: Heart,
    title: 'Sustainability',
    description: 'By repurposing shipping containers, we create eco-friendly homes that reduce environmental impact.',
  },
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '5+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Himalayan Mountains"
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
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Building Dreams in the Himalayas
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Make My Dream Cottages is your trusted partner for premium prefabricated
              container homes in Uttarkashi, Uttarakhand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Make My Dream Cottages was born from a passion for combining modern design
                  with the natural beauty of Uttarkashi. We recognized the growing need for
                  sustainable, affordable, and beautiful housing solutions in the Himalayan region.
                </p>
                <p>
                  Our team of experienced designers and craftsmen work together to transform
                  shipping containers into stunning homes that blend seamlessly with their
                  mountain surroundings. Each project is a testament to our commitment to
                  quality and innovation.
                </p>
                <p>
                  Today, we're proud to be at the forefront of the container home movement in
                  Uttarkashi, helping families, businesses, and hospitality ventures create
                  spaces that are both functional and inspiring.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80"
                alt="Container Home"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-6 text-white">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <SectionTitle
            subtitle="What Drives Us"
            title="Our Core Values"
            description="The principles that guide everything we do at Make My Dream Cottages."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Container Homes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Container Construction"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase">
                Why Container Homes?
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                The Smart Choice for Modern Living
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-dark">Sustainable & Eco-Friendly</h4>
                    <p className="text-gray-600">Repurposing containers reduces waste and environmental impact.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-dark">Incredibly Durable</h4>
                    <p className="text-gray-600">Steel construction withstands extreme weather and seismic activity.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-dark">Fast Construction</h4>
                    <p className="text-gray-600">Prefabricated units can be ready in a fraction of traditional build time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-dark">Cost-Effective</h4>
                    <p className="text-gray-600">Get more value without compromising on quality or aesthetics.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
