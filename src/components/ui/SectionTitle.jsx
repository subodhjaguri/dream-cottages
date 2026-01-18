import { motion } from 'framer-motion';

export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      {subtitle && (
        <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-2 ${light ? 'text-accent-300' : 'text-accent'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
