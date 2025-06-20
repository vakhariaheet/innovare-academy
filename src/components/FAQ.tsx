import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the fee structure for the courses?',
      answer: 'All courses are offered at a flat fee of ₹25,000. This includes all training materials, resources, access to virtual platforms, and certification upon completion. There are no hidden costs or additional fees.'
    },
    {
      question: 'What training modes are available?',
      answer: 'We offer three flexible training modes: Virtual Platform (live online sessions with recorded access), On-Site Training (in-person sessions for organizations), and Hybrid options combining both approaches. You can choose the mode that best fits your schedule and learning preferences.'
    },
    {
      question: 'How long does each course take to complete?',
      answer: 'Course duration varies depending on the program and training mode selected. Typically, courses range from 4-8 weeks for intensive programs to 12-16 weeks for comprehensive certification tracks. Flexible scheduling options are available for working professionals.'
    },
    {
      question: 'Are the certifications industry-recognized?',
      answer: 'Yes, our certifications are recognized by leading industry bodies and employers globally. We maintain partnerships with international accounting organizations and our curriculum meets global standards for professional accounting education.'
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'While we don\'t guarantee job placement, we provide comprehensive career support including resume guidance, interview preparation, and access to our network of partner organizations. Our high success rate speaks to the quality of our career advancement support.'
    },
    {
      question: 'Can I take multiple courses simultaneously?',
      answer: 'Yes, you can enroll in multiple courses, though we recommend discussing your schedule with our academic advisors to ensure optimal learning outcomes. We can help you create a personalized learning path that balances multiple courses effectively.'
    },
    {
      question: 'What are the prerequisites for enrollment?',
      answer: 'Prerequisites vary by course. Generally, basic accounting knowledge is helpful but not always required. Some advanced courses may require specific experience levels. We provide detailed prerequisites for each course and offer foundational courses for beginners.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we offer a satisfaction guarantee. If you\'re not completely satisfied within the first two weeks of starting your course, we provide a full refund. After this period, refunds are considered on a case-by-case basis based on specific circumstances.'
    },
    {
      question: 'How do I enroll in a course?',
      answer: 'Simply fill out our enrollment inquiry form on this website or contact us directly. Our team will guide you through the enrollment process, help you choose the right courses, and arrange payment and scheduling according to your preferences.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get Your Questions Answered
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Find answers to common questions about our courses, training methods, and enrollment process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ${openIndex === index ? 'faq-open' : ''}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-teal-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>
              <div
                className={`faq-answer transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} px-6`}
                style={{ overflow: 'hidden' }}
              >
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-slate-600 mb-6 text-lg">
            Our team is here to help you find the right training program for your career goals.
          </p>
          <a href='#contact' className="bg-gradient-to-r from-teal-600 to-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;