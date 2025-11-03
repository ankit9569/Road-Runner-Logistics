import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Reliability',
      description: 'Committed to on-time delivery and consistent service excellence.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication and real-time tracking for complete visibility.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Premium service standards with safety and care at every step.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction drives our every decision and action.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                About Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Logistics Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Road Runner Logistic has been at the forefront of India's transportation and logistics industry,
              delivering exceptional service to businesses across the nation. With a modern fleet and
              experienced team, we ensure your cargo reaches its destination safely and on time.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our commitment to innovation, customer satisfaction, and operational excellence has made
              us a preferred logistics partner for companies of all sizes. From small businesses to large
              enterprises, we provide customized solutions that drive success.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">99.8%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  To revolutionize logistics in India by providing reliable, efficient, and innovative
                  transportation solutions that empower businesses to grow and succeed.
                </p>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-blue-100 leading-relaxed">
                  To become India's most trusted logistics partner, known for excellence, innovation,
                  and unwavering commitment to customer success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
