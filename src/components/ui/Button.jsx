import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-600 focus:ring-primary-400',
  secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary focus:ring-white',
  accent: 'bg-accent text-white hover:bg-accent-600 focus:ring-accent-400',
  outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary-400',
  ghost: 'bg-transparent text-primary hover:bg-primary/10 focus:ring-primary-400',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-colors duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
