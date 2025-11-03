import { Truck, TruckIcon } from 'lucide-react';

export default function Fleet() {
  const vehicles = [
    {
      name: 'Light Commercial Vehicles',
      capacity: 'Up to 2 Tons',
      type: 'Tata Ace, Mahindra Pickup',
      usage: 'Local deliveries, small shipments',
      features: ['City Navigation', 'Quick Loading', 'Fuel Efficient']
    },
    {
      name: 'Medium Trucks',
      capacity: '3-9 Tons',
      type: 'Tata 407, Eicher',
      usage: 'Regional transport, medium cargo',
      features: ['GPS Tracking', 'Covered Body', 'Reliable']
    },
    {
      name: 'Heavy Trucks',
      capacity: '10-16 Tons',
      type: 'Tata LPT, Ashok Leyland',
      usage: 'Interstate freight, bulk goods',
      features: ['Long Distance', 'High Capacity', 'Secure']
    },
    {
      name: 'Multi-Axle Trailers',
      capacity: '20-40 Tons',
      type: 'Container Trucks, Trailers',
      usage: 'Heavy machinery, large shipments',
      features: ['Maximum Load', 'Specialized', 'Professional']
    },
    {
      name: 'Refrigerated Trucks',
      capacity: '5-15 Tons',
      type: 'Reefer Vehicles',
      usage: 'Perishable goods, pharmaceuticals',
      features: ['Temperature Control', 'Insulated', 'Monitored']
    },
    {
      name: 'Open Body Trucks',
      capacity: '8-20 Tons',
      type: 'Flatbed, Open Trucks',
      usage: 'Construction materials, large items',
      features: ['Easy Loading', 'Versatile', 'Oversized Cargo']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Our Fleet
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Modern Fleet for Every Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Well-maintained vehicles equipped with GPS tracking and safety features to handle any cargo requirement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {index === 4 ? (
                  <TruckIcon className="w-8 h-8 text-white" />
                ) : (
                  <Truck className="w-8 h-8 text-white" />
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Capacity</span>
                  <span className="text-sm font-semibold text-gray-900">{vehicle.capacity}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Type</span>
                  <span className="text-sm font-semibold text-gray-900">{vehicle.type}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">Best For:</div>
                <p className="text-sm text-gray-600">{vehicle.usage}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {vehicle.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">All Vehicles GPS Tracked & Fully Insured</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Our entire fleet is equipped with real-time GPS tracking and comprehensive insurance coverage
            for your peace of mind.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
              <div className="text-sm text-gray-300">GPS Enabled</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
              <div className="text-sm text-gray-300">Total Vehicles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-sm text-gray-300">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
