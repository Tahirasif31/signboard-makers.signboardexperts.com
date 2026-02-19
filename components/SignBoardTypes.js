import Image from "next/image";

const types = [
  {
    name: "Aluminum Composite Panel (ACP) Signage",
    description:
      "The workhorse of outdoor signage. ACP boards are incredibly flat, weather-resistant, and rigid. They provide a perfect surface for direct printing or vinyl application and are ideal for large-scale building signage.",
    image: "/tab-3.jpg",
  },
  {
    name: "Stainless Steel (SS) Signage",
    description:
      "The epitome of elegance and durability. SS signs offer a premium, corrosion-resistant finish. Whether mirror-polished, brushed, or powder-coated, they are a popular choice for high-end corporate offices and luxury residential buildings.",
    image: "/sign-6.jpg",
  },
  {
    name: "PVC Board Signage",
    description:
      "A cost-effective and versatile option for temporary promotions, indoor displays, and real estate signage. PVC is lightweight and easy to shape, making it perfect for point-of-purchase displays and exhibition stands.",
    image: "/tab-18.jpg",
  },
  {
    name: "Wooden Signage",
    description:
      "For businesses looking for a rustic, natural, or artisanal feel, wooden signs offer unique warmth and character. We use high-quality treated wood that can withstand indoor use and create bespoke designs with engraved or printed graphics.",
    image: "/tab-11.jpg",
  },
];

export default function SignBoardTypes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Types of Sign Boards We Specialize In
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We cater to every business need with a diverse range of materials
            and styles. When you search for a signboard maker near me, you want
            a company with a proven portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <div className="relative h-48">
                <Image
                  src={type.image}
                  alt={type.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {type.name}
                </h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
