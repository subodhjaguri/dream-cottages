import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = true,
  ...props
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`
        bg-white rounded-2xl shadow-lg overflow-hidden
        ${hover ? 'transition-shadow duration-300 hover:shadow-xl' : ''}
        ${padding ? 'p-6' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
