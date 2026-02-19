import Image from "next/image";

export default function CaseStudy() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Case Study: Transforming a Brand's Physical Presence
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                <strong>Client:</strong> A leading multi-brand restaurant group
                in Dubai.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Challenge:</strong> They needed to rebrand 15 existing
                locations across the city with new 3D signage and illuminated
                logo walls, with a tight deadline of 4 weeks before a major
                promotional launch.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Solution:</strong> Our team mobilized quickly,
                conducting simultaneous site surveys across all locations. We
                managed the complex logistics of fabricating 15 unique sets of
                signage, coordinating installations during off-peak hours to
                avoid business disruption.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Result:</strong> All 15 locations were successfully
                rebranded and installed 3 days ahead of schedule. The client
                reported a <strong>30% increase in footfall</strong> across the
                renovated locations in the following month, directly attributing
                it to the enhanced brand visibility.
              </p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/tab-9.jpg"
                alt="Restaurant signage transformation case study"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
