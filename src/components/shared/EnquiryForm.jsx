import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function EnquiryForm({ productName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry submitted:', { ...formData, product: productName });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary/5 rounded-xl p-6 text-center"
      >
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckCircle className="w-6 h-6 text-green-500" />
        </div>
        <h4 className="font-heading text-lg font-bold text-dark mb-1">
          Enquiry Sent!
        </h4>
        <p className="text-gray-600 text-sm">
          We'll contact you about the {productName} soon.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-primary/5 rounded-xl p-6">
      <h4 className="font-heading text-lg font-bold text-dark mb-4">
        Enquire About This Product
      </h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
          />
        </div>
        <div>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message or questions..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full btn-primary flex items-center justify-center space-x-2 text-sm py-3"
        >
          <span>Send Enquiry</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
