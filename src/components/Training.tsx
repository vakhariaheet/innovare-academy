import React from 'react';
import { Monitor, MapPin, Users, CheckCircle } from 'lucide-react';

const Training = () => {
  const approaches = [
    {
      title: 'Hands-On Learning',
      description: 'Practical exercises, real-world case studies, and interactive sessions that simulate actual workplace scenarios.',
      icon: CheckCircle,
      features: [
        'Real-world case studies',
        'Interactive practical sessions',
        'Industry-specific scenarios',
        'Immediate feedback and guidance'
      ]
    },
    {
      title: 'Virtual Platform',
      description: 'Flexible, accessible online learning led by industry experts with cutting-edge learning management systems.',
      icon: Monitor,
      features: [
        'Expert-led live sessions',
        'Flexible scheduling options',
        'Recorded session access',
        'Interactive learning tools'
      ]
    },
    {
      title: 'On-Site Training',
      description: 'In-person sessions for organizations or groups seeking tailored instruction and team development.',
      icon: MapPin,
      features: [
        'Customized curriculum',
        'Team-focused training',
        'Direct instructor interaction',
        'Collaborative learning environment'
      ]
    }
  ];

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Our Training Approach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Learn the Way That Works for You
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Innovare Academy's unique training methodology combines practical application, 
            flexible delivery, and expert instruction to ensure maximum learning outcomes.
          </p>
        </div>

        {/* Training Methods Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-teal-600 to-slate-800 mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {approach.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {approach.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {approach.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Why Choose Innovare Academy?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Industry Expert Instructors</h4>
                    <p className="text-slate-600">Learn from professionals with decades of real-world experience in global accounting practices.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Flexible Learning Options</h4>
                    <p className="text-slate-600">Choose from virtual, on-site, or hybrid training models that fit your schedule and learning preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Career Advancement Focus</h4>
                    <p className="text-slate-600">Our programs are designed specifically to help you advance in your accounting and finance career.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-slate-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">95%</div>
                <div className="text-slate-600 mb-4">Student Success Rate</div>
                <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-slate-800 mx-auto mb-6"></div>
                <p className="text-slate-600 leading-relaxed">
                  Our comprehensive training approach has helped 95% of our students achieve their career advancement goals within 6 months of completing their chosen program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;