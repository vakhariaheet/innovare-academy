import React, { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <section className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">By using our website and services, you agree to the following terms and conditions. Please read them carefully.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Use of Services</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Our courses and materials are for personal, non-commercial use only.</li>
        <li>You agree not to misuse our services or attempt to access them in unauthorized ways.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Intellectual Property</h2>
      <p className="mb-4">All content, trademarks, and materials on this site are the property of Innovare Academy and may not be used without permission.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p className="mb-4">We are not liable for any damages resulting from the use or inability to use our services.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to Terms</h2>
      <p className="mb-4">We may update these terms at any time. Continued use of our services means you accept the updated terms.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
      <p>If you have any questions about these Terms of Service, please contact us at academy@innovareeliteaccounting.com.</p>
    </section>
  );
};

export default TermsOfService;
