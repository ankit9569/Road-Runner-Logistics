import { Truck, Package, Warehouse, Package2, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Road Transport',
      description: 'Reliable nationwide road transport with modern fleet ensuring safe and timely delivery of your goods.',
      features: ['Full Truckload', 'Part Load', 'Express Delivery']
    },
    {
      icon: Package,
      title: 'Cargo & Freight',
      description: 'Comprehensive freight solutions for heavy and bulk cargo with specialized handling and tracking.',
      features: ['Heavy Cargo', 'Bulk Transport', 'Specialized Handling']
    },
    {
      icon: Warehouse,
      title: 'Warehousing',
      description: 'Secure warehousing facilities with inventory management and distribution services across key locations.',
      features: ['Storage Solutions', 'Inventory Management', 'Distribution']
    },
    {
      icon: Package2,
      title: 'Courier & Last-Mile',
      description: 'Fast and efficient last-mile delivery services ensuring your packages reach customers on time.',
      features: ['Express Courier', 'Same-Day Delivery', 'Door-to-Door']
    },
    {
      icon: Settings,
      title: 'Custom Logistics',
      description: 'Tailored logistics solutions designed to meet your unique business requirements and challenges.',
      features: ['Supply Chain Design', 'Route Optimization', 'Cost Analysis']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From transportation to warehousing, we offer end-to-end logistics services tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Every business is unique. Let us design a logistics solution that perfectly fits your requirements.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
