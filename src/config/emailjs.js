// EmailJS Configuration
// Sign up at https://www.emailjs.com/ (free tier: 200 emails/month)
//
// Steps to set up:
// 1. Create an account at emailjs.com
// 2. Add Email Service (Gmail) - connect your email
// 3. Create an Email Template with these variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{phone}} - Phone number
//    - {{message}} - Message content
//    - {{subject}} - Subject (optional)
// 4. Copy your Service ID, Template ID, and Public Key below

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_7zuvtx8',      // e.g., 'service_abc123'
  TEMPLATE_ID: 'template_g7f794v',    // e.g., 'template_xyz789'
  PUBLIC_KEY: '13kN3VVERrwBDKpNv',      // e.g., 'abcdefghijklmnop'
};

// Check if EmailJS is configured
export const isEmailJSConfigured = () => {
  return (
    EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
  );
};
