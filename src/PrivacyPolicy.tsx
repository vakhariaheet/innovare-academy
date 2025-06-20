import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <section className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal information you provide (name, email, phone, etc.)</li>
        <li>Information collected automatically (cookies, usage data, etc.)</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide and improve our services</li>
        <li>To communicate with you about your inquiries</li>
        <li>To comply with legal obligations</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Cookies</h2>
      <p className="mb-4">We use cookies to enhance your experience. You can control cookies through your browser settings.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
      <p className="mb-4">You have the right to access, update, or delete your personal information. Contact us for any privacy-related requests.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at academy@innovareeliteaccounting.com.</p>
    </section>
  );
};

export default PrivacyPolicy;
