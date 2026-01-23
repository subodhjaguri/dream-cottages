import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import GalleryPreview from '../components/home/GalleryPreview';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <ServicesOverview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <ContactSection />
      <CTASection />
    </>
  );
}
