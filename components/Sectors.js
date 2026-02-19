const sectors = [
  {
    name: "Retail & Restaurants",
    description:
      "We create vibrant, attention-grabbing signage that drives foot traffic and enhances the customer experience, from enticing menu boards to promotional A-boards.",
    icon: "🛍️",
  },
  {
    name: "Corporate & Commercial Offices",
    description:
      "We provide sophisticated branding solutions that project professionalism and stability, including reception walls, floor directories, and etched glass doors.",
    icon: "🏢",
  },
  {
    name: "Healthcare & Clinics",
    description:
      "We design clear, calming, and compliant signage that helps patients navigate your facility with confidence, ensuring a stress-free experience.",
    icon: "🏥",
  },
  {
    name: "Hotels & Hospitality",
    description:
      "From grand entrance signage to subtle room number plates, we help create a luxurious and welcoming atmosphere for guests.",
    icon: "🏨",
  },
  {
    name: "Education & Institutions",
    description:
      "We develop clear wayfinding and inspirational branding for campuses, creating an environment conducive to learning and safety.",
    icon: "📚",
  },
];

export default function Sectors() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Signage for Every Sector in the UAE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experience spans across the diverse commercial landscape of the
            UAE. We understand that different industries have different signage
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{sector.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {sector.name}
              </h3>
              <p className="text-gray-600">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
