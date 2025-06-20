import { useEffect } from 'react';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <section className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
      <p className="mb-4">This Cookie Policy explains how Innovare Academy uses cookies and similar technologies on our website.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">What Are Cookies?</h2>
      <p className="mb-4">Cookies are small text files stored on your device to help websites remember information about your visit.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Cookies</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To remember your preferences and settings</li>
        <li>To analyze site traffic and usage</li>
        <li>To improve your experience on our site</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Managing Cookies</h2>
      <p className="mb-4">You can control and delete cookies through your browser settings. Disabling cookies may affect your experience on our site.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
      <p>If you have any questions about our Cookie Policy, please contact us at academy@innovareeliteaccounting.com.</p>
    </section>
  );
};

export default CookiePolicy;
