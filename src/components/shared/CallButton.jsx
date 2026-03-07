import { Phone } from 'lucide-react';

export default function CallButton() {
  return (
    <a
      href="tel:+919520578466"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300"
      aria-label="Call 95205 78466"
    >
      <Phone className="w-7 h-7 text-white" />
    </a>
  );
}
