import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/shared/ContactForm';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    details: ['Barethi, By Pass, Uttarkashi,', 'Uttarakhand 249193'],
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: ['+91-9520578466', '+91-8126373066'],
    links: ['tel:+919520578466', 'tel:+918126373066'],
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['makemydreamcottages66@gmail.com'],
    links: ['mailto:makemydreamcottages66@gmail.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
  },
];

export default function Contact() {
  const whatsappUrl = 'https://wa.me/919520578466?text=' + encodeURIComponent('Hello! I am interested in your container cottages.');

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase">
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Have questions about our container cottages? Want to discuss your project?
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-light rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-dark mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          info.links ? (
                            <a
                              key={idx}
                              href={info.links[idx]}
                              className="block text-gray-600 hover:text-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={idx} className="text-gray-600">{detail}</p>
                          )
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 flex items-center justify-center space-x-3 bg-green-500 text-white py-4 px-6 rounded-xl hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="font-medium">Chat on WhatsApp</span>
                </motion.a>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-dark mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                      </svg>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.5,3.5,12,3.5,12,3.5s-7.5,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.6,31.6,0,0,0,0,12a31.6,31.6,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.88.55,9.38.55,9.38.55s7.5,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.6,31.6,0,0,0,24,12,31.6,31.6,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5!2d78.4!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </section>
    </>
  );
}
