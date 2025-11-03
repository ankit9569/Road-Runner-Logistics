import { MapPin, CheckCircle } from 'lucide-react';

export default function Coverage() {
  const regions = [
    {
      name: 'North India',
      cities: ['Delhi', 'Chandigarh', 'Jaipur', 'Lucknow', 'Amritsar', 'Dehradun']
    },
    {
      name: 'South India',
      cities: ['Bangalore', 'Chennai', 'Hyderabad', 'Kochi', 'Coimbatore', 'Visakhapatnam']
    },
    {
      name: 'West India',
      cities: ['Mumbai', 'Pune', 'Ahmedabad', 'Surat', 'Nagpur', 'Indore']
    },
    {
      name: 'East India',
      cities: ['Kolkata', 'Bhubaneswar', 'Patna', 'Ranchi', 'Guwahati', 'Siliguri']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Coverage Area
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nationwide Service Network
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering excellence across all major cities and states in India with extensive coverage and reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{region.name}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {region.cities.map((city, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Expanding Every Day
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our service network is constantly growing to serve you better. We're adding new routes
                and destinations regularly to ensure we can meet all your logistics needs across India.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Express Routes</div>
                    <div className="text-sm text-gray-600">Direct connections between major metros</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Regional Hubs</div>
                    <div className="text-sm text-gray-600">Strategic warehouses in key locations</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Last Mile Delivery</div>
                    <div className="text-sm text-gray-600">Reaching remote areas efficiently</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Don't see your city?</h4>
              <p className="text-blue-100 mb-6">
                We're always expanding our network. Contact us to discuss your logistics needs,
                and we'll find the best solution for you.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </button>

              <div className="mt-8 pt-8 border-t border-blue-500">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm text-blue-200 mt-1">Major Cities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm text-blue-200 mt-1">States</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-sm text-blue-200 mt-1">Routes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
