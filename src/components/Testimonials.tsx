import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Senior Financial Analyst',
      company: 'Tech Innovations Ltd.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'The QuickBooks Mastery course transformed my approach to financial management. The hands-on training and real-world scenarios prepared me perfectly for complex business situations.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Accounting Manager',
      company: 'Global Finance Corp',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'Innovare Academy\'s International Taxation course gave me the expertise I needed to handle multinational clients. The virtual platform made learning flexible and engaging.',
      rating: 5
    },
    {
      name: 'Anjali Patel',
      role: 'KPO Team Lead',
      company: 'Data Solutions Inc.',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'The KPO Sector Preparation program was exactly what I needed to advance my career. The instructors\' industry experience made all the difference in my professional growth.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Financial Controller',
      company: 'Manufacturing Excellence',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'The Corporate Financial Reporting course enhanced my skills tremendously. The practical approach and expert guidance helped me implement better reporting processes at work.',
      rating: 5
    },
    {
      name: 'Meera Reddy',
      role: 'Payroll Specialist',
      company: 'HR Solutions Global',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'International Payroll Processing training opened new career opportunities for me. The comprehensive curriculum covered everything I needed to know about global payroll systems.',
      rating: 5
    },
    {
      name: 'Arjun Nair',
      role: 'Business Analyst',
      company: 'Consulting Partners',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'Excel for Financial Analysis was a game-changer for my analytical capabilities. The advanced techniques I learned have made me much more efficient and valuable to my team.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            <span>Student Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Innovare Academy has transformed careers and opened new opportunities 
            for accounting professionals across various industries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-teal-600 mb-3 opacity-50" />
                <p className="text-slate-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-100"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                  <p className="text-xs text-teal-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Trusted by Leading Organizations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-teal-50 to-slate-50 p-8 rounded-2xl border border-gray-100">
              <Quote className="w-10 h-10 text-teal-600 mb-4 opacity-50" />
              <p className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                "Innovare Academy provided exceptional on-site training for our finance team. 
                The customized curriculum perfectly matched our organizational needs, and the 
                improvement in our team's capabilities has been remarkable."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Michael Singh</h4>
                  <p className="text-sm text-slate-600">CFO, Enterprise Solutions Ltd.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-gray-100">
              <Quote className="w-10 h-10 text-amber-600 mb-4 opacity-50" />
              <p className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                "We've partnered with Innovare Academy for multiple training programs. 
                Their expertise in international accounting standards and practical approach 
                has significantly enhanced our team's professional capabilities."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Aditi Desai</h4>
                  <p className="text-sm text-slate-600">HR Director, Global Tech Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;