import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../shared/ProductCard';
import { products } from '../../data/products';

export default function FeaturedProducts() {
  // Show first 4 products as featured
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Collection"
          title="Featured Products"
          description="Explore our range of premium container cottages, each designed for comfort, durability, and style."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
