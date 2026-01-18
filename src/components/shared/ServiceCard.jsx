import { motion } from 'framer-motion';
import { Ruler, Palette, Image, FileCheck, Truck, HelpCircle, Hammer, Shield, Clock, Wrench, Home, Award } from 'lucide-react';

const iconMap = {
  Ruler,
  Palette,
  Image,
  FileCheck,
  Truck,
  HelpCircle,
  Hammer,
  Shield,
  Clock,
  Wrench,
  Home,
  Award,
};

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = iconMap[service.icon] || Ruler;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <IconComponent className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-dark mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600">
        {service.description}
      </p>
    </motion.div>
  );
}
