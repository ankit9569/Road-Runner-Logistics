import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Kumar Electronics',
      role: 'Managing Director',
      content: 'MTCC Logistic has been our trusted partner for over 3 years. Their reliability and professionalism are unmatched. Every shipment reaches on time, and their team is always responsive.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'Fashion Hub India',
      role: 'Operations Head',
      content: 'Outstanding service! The real-time tracking and professional handling of our delicate fashion products have made them our go-to logistics partner. Highly recommended!',
      rating: 5
    },
    {
      name: 'Anil Patel',
      company: 'Patel Industries',
      role: 'CEO',
      content: 'From small parcels to bulk cargo, MTCC Logistic handles everything with care. Their warehouse facilities and inventory management are excellent. Great value for money!',
      rating: 5
    },
    {
      name: 'Sunita Verma',
      company: 'Fresh Foods Co.',
      role: 'Supply Chain Manager',
      content: 'Their refrigerated trucks and temperature monitoring systems are perfect for our perishable goods. Never had any issues with freshness or delivery times. Exceptional service!',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      company: 'BuildRight Construction',
      role: 'Project Manager',
      content: 'Heavy machinery and construction materials require special handling. MTCC Logistic team does it perfectly every time. Their fleet is well-maintained and drivers are skilled.',
      rating: 5
    },
    {
      name: 'Meera Reddy',
      company: 'MedCare Pharmaceuticals',
      role: 'Distribution Head',
      content: 'Timely delivery is critical for us, and MTCC Logistic never disappoints. Their 24/7 customer support and professional approach make all the difference. Five stars!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="absolute top-6 right-6 text-blue-600 opacity-20">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Happy Clients</h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the difference of working with a logistics partner that truly cares about your success.
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-blue-100">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">99.8%</div>
              <div className="text-sm text-blue-100">On-Time Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-sm text-blue-100">Average Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-sm text-blue-100">Repeat Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
