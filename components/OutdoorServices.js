import Image from "next/image";

const outdoorServices = [
  {
    title: "3D Acrylic & Metal Letter Signage",
    description:
      "Nothing says premium like three-dimensional lettering. Our 3D signage adds depth and sophistication to your building facade or reception area. We specialize in crafting letters from high-grade acrylic, brushed stainless steel, aluminum, and brass.",
    image: "/16.png",
  },
  {
    title: "Illuminated LED Sign Boards",
    description:
      "Maximize your night-time visibility with our stunning LED sign boards. We design and fabricate front-lit, backlit/halo-lit, and lightbox signs for a sophisticated look.",
    image: "/tab-9.jpg",
  },
  {
    title: "Shop Front & Fascia Signage",
    description:
      "Your storefront is prime real estate. We create custom shop signage that reflects your brand’s character—from bold acrylic boards to elegant metal signs.",
    image: "/tab-5.jpg",
  },
  {
    title: "Freestanding & Pylon Signs",
    description:
      "Essential for businesses in plazas or needing direction from main roads. We design durable pylon signs, monoliths, and pavement signs that provide high visibility.",
    image: "/13.png",
  },
];

const indoorServices = [
  {
    title: "Reception & Logo Wall Signage",
    description:
      "Make a lasting first impression with a stunning reception sign. We create custom logo walls using acrylic, PVC, 3D letters, and wooden slats to bring your brand to life.",
    image: "/sign-5.jpg",
  },
  {
    title: "Wayfinding & Directional Signage",
    description:
      "Clear, aesthetically pleasing wayfinding signs help visitors navigate with ease. From room name plates to floor directories, we design functional and stylish signage.",
    image: "/e-1.jpg",
  },
  {
    title: "Acrylic Sign Boards",
    description:
      "Versatile, sleek, and modern—acrylic is a favorite for indoor signage. Perfect for office door nameplates, motivational quotes, menu boards, and more.",
    image: "/sign-2.jpg",
  },
  {
    title: "Glass & Wall Graphics",
    description:
      "Transform blank walls and glass partitions into engaging brand assets. Our glass frosting and vinyl wall graphics add privacy and creativity to your workspace.",
    image: "/19.png",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Comprehensive Signage & Sign Board Services in Dubai
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full spectrum of signage solutions, meticulously crafted
            to meet the unique demands of indoor and outdoor environments.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Outdoor Signage: Capturing Attention Beyond Your Walls
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outdoorServices.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Indoor Signage: Enhancing the Customer & Employee Experience
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indoorServices.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
