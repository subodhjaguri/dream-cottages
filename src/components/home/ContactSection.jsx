import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, isEmailJSConfigured } from '../../config/emailjs';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const whatsappUrl = 'https://wa.me/919520578466?text=' + encodeURIComponent('Hello! I am interested in your container cottages.');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (isEmailJSConfigured()) {
      try {
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
          EMAILJS_CONFIG.PUBLIC_KEY
        );
        setSubmitted(true);
      } catch (err) {
        console.error('EmailJS Error:', err);
        setError('Failed to send message. Please try again or contact us via WhatsApp.');
      }
    } else {
      // Fallback: just show success (for demo/development)
      console.log('Form submitted (EmailJS not configured):', formData);
      setSubmitted(true);
    }

    setLoading(false);

    if (!error) {
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', email: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: ['Barethi, By Pass Uttarkashi, 249193'],
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['+91-9520578466', '+91-8126373066'],
      links: ['tel:+919520578466', 'tel:+918126373066'],
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['makemydreamcottages66@gmail.com'],
      links: ['mailto:makemydreamcottages66@gmail.com'],
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              Contact Us
            </p>

            {/* Heading */}
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              <span className="italic text-dark">Let's Build Your</span>
              <br />
              <span className="italic text-accent">Dream Together</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-10 max-w-md">
              Ready to start your journey towards owning a beautiful prefab cottage? Get in touch with us today and let's discuss your requirements.
            </p>

            {/* Contact Info Items */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">{item.title}</h4>
                    {item.content.map((text, i) => (
                      item.links ? (
                        <a
                          key={i}
                          href={item.links[i]}
                          className="block text-gray-600 hover:text-accent transition-colors"
                        >
                          {text}
                        </a>
                      ) : (
                        <p key={i} className="text-gray-600">{text}</p>
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
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20BD5A] transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-dark mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  We've received your message and will get back to you soon.
                </p>
              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="font-heading text-2xl font-bold text-dark mb-6">
                  Send us a Message
                </h3>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-gray-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-gray-50"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-gray-50"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none bg-gray-50"
                      placeholder="Tell us about your dream cottage..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-accent to-accent-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-accent-600 hover:to-accent-700 transition-all disabled:opacity-70"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
